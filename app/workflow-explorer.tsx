"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "./language-provider";

const hrefs = ["/modules/design-costing", "/modules/orders", "/modules/procurement", "/modules/production", "/modules/hallmarking", "/modules/sales", "/modules/accounts"];

export function WorkflowExplorer() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const step = t.workflowExplorer.steps[active];

  return (
    <div className="workflow-explorer">
      <div className="workflow-tabs" role="tablist" aria-label="Jewellery workflow stages">
        {t.workflowExplorer.steps.map((item, index) => (
          <button
            aria-selected={active === index}
            className={active === index ? "active" : ""}
            key={index}
            onClick={() => setActive(index)}
            role="tab"
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.title}
          </button>
        ))}
      </div>
      <div className="workflow-panel" role="tabpanel" key={active}>
        <div>
          <p className="eyebrow">{t.workflowExplorer.stage} {String(active + 1).padStart(2, "0")}</p>
          <h2>{step.title}</h2>
          <p>{step.text}</p>
          <Link className="primary-link" href={hrefs[active]}>{step.readLabel} <span>↗</span></Link>
        </div>
        <div className="workflow-output">
          <span>{t.workflowExplorer.output}</span>
          <strong>{step.output}</strong>
        </div>
      </div>
    </div>
  );
}
