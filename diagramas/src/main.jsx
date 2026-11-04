import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import createEngine, { DefaultNodeModel, DiagramModel } from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DIAGRAMS, LAYERS } from './data.js';
import './styles.css';

// Builds a fresh model for one diagram: one node per entry, an "entra"/"sale" port pair per node, labelled links.
// Ports and links are locked so dragging a node moves it but never draws a new link by mistake.
function buildModel(diagram, onSelect) {
  const model = new DiagramModel();
  const nodes = {};
  diagram.nodes.forEach((spec) => {
    const node = new DefaultNodeModel({ name: spec.name, color: LAYERS[spec.layer].color });
    node.setPosition(spec.x, spec.y);
    // One column: an unlabelled entry port, the items as rows and an unlabelled exit port for the links.
    const inPort = node.addInPort('\u2009');
    spec.items.forEach((item) => node.addOutPort(item));
    const exitPort = node.addOutPort('\u2009\u2009');
    node.getPorts && Object.values(node.getPorts()).forEach((port) => port.setLocked(true));
    node.registerListener({
      selectionChanged: (event) => {
        if (event.isSelected) {
          onSelect(spec);
        }
      }
    });
    nodes[spec.id] = { node, inPort, exitPort };
    model.addNode(node);
  });
  diagram.links.forEach(([from, to, label]) => {
    const link = nodes[from].exitPort.link(nodes[to].inPort);
    link.addLabel(label);
    link.setLocked(true);
    model.addLink(link);
  });
  return model;
}

function Legend({ diagram }) {
  const used = [...new Set(diagram.nodes.map((node) => node.layer))];
  return (
    <ul className="dg-legend">
      {used.map((layer) => (
        <li key={layer}>
          <span className="dg-swatch" style={{ background: LAYERS[layer].color }} />
          {LAYERS[layer].label}
        </li>
      ))}
    </ul>
  );
}

function Details({ spec }) {
  if (!spec) {
    return (
      <div className="dg-details dg-empty">
        👆 Haz clic en un recuadro para ver qué hace, en qué archivo está y qué copias en tu módulo. Arrastra los
        recuadros para reordenarlos; usa la rueda del mouse para acercar o alejar.
      </div>
    );
  }
  return (
    <div className="dg-details" style={{ borderLeftColor: LAYERS[spec.layer].color }}>
      <h4>{spec.name}</h4>
      <p className="dg-layer">{LAYERS[spec.layer].label}</p>
      <p><b>Qué es:</b> {spec.what}</p>
      <p><b>En tu módulo:</b> {spec.copy}</p>
      <p className="dg-file"><code>{spec.file}</code></p>
      <p className="dg-items">{spec.items.map((item) => <code key={item}>{item}</code>)}</p>
    </div>
  );
}

function Diagrams() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [version, setVersion] = useState(0);
  const diagram = DIAGRAMS[index];
  const engine = useMemo(() => {
    const created = createEngine();
    created.setMaxNumberPointsPerLink(0);
    return created;
  }, []);
  const model = useMemo(() => buildModel(diagram, setSelected), [diagram, version]);
  engine.setModel(model);

  const fit = () => {
    try {
      engine.zoomToFitNodes({ margin: 40 });
    } catch (error) {
      engine.repaintCanvas();
    }
  };

  useEffect(() => {
    setSelected(null);
  }, [index]);

  // Fit the whole diagram once the canvas has measured itself.
  useEffect(() => {
    const timer = setTimeout(fit, 80);
    return () => clearTimeout(timer);
  }, [model]);


  return (
    <div className="dg">
      <div className="dg-tabs" role="tablist">
        {DIAGRAMS.map((item, i) => (
          <button key={item.id} type="button" role="tab" aria-selected={i === index}
                  className={i === index ? 'dg-tab dg-active' : 'dg-tab'} onClick={() => setIndex(i)}>
            {item.title}
          </button>
        ))}
      </div>
      <p className="dg-intro">{diagram.intro}</p>
      <div className="dg-toolbar">
        <button type="button" onClick={fit}>🔍 Ajustar a la vista</button>
        <button type="button" onClick={() => setVersion((v) => v + 1)}>↺ Reordenar</button>
      </div>
      <div className="dg-canvas-wrap">
        <CanvasWidget className="dg-canvas" engine={engine} />
      </div>
      <Legend diagram={diagram} />
      <Details spec={selected} />
    </div>
  );
}

const root = document.getElementById('diagrama-arquitectura');
if (root) {
  createRoot(root).render(<Diagrams />);
}
