"use client";

import Link from "next/link";
import { useState } from "react";

const steps = [
  { title: "Design", text: "Create the catalogue design, approve its BOM and confirm the costing.", href: "/modules/design-costing", output: "Approved design + BOM" },
  { title: "Order", text: "Book specifications, delivery promise, rate lock and customer advance.", href: "/modules/orders", output: "Production commitment" },
  { title: "Procure", text: "Raise purchase orders, receive materials and reconcile supplier invoices.", href: "/modules/procurement", output: "Accepted raw material" },
  { title: "Produce", text: "Issue metal and stones, track stages, calculate wastage and complete QC.", href: "/modules/production", output: "QC-passed piece" },
  { title: "Hallmark", text: "Create the AHC batch, receive the item and map its HUID.", href: "/modules/hallmarking", output: "Compliant hallmarked piece" },
  { title: "Sell", text: "Tag finished stock, apply live rates and GST, then collect payment.", href: "/modules/sales", output: "Traceable invoice" },
  { title: "Account", text: "Reconcile the currency ledger and purity-wise metal ledger together.", href: "/modules/accounts", output: "Balanced money + metal" },
];

export function WorkflowExplorer() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="workflow-explorer">
      <div className="workflow-tabs" role="tablist" aria-label="Jewellery workflow stages">
        {steps.map((item, index) => (
          <button
            aria-selected={active === index}
            className={active === index ? "active" : ""}
            key={item.title}
            onClick={() => setActive(index)}
            role="tab"
            type="button"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.title}
          </button>
        ))}
      </div>
      <div className="workflow-panel" role="tabpanel" key={step.title}>
        <div>
          <p className="eyebrow">Stage {String(active + 1).padStart(2, "0")}</p>
          <h2>{step.title}</h2>
          <p>{step.text}</p>
          <Link className="primary-link" href={step.href}>Read the {step.title.toLocaleLowerCase()} guide <span>↗</span></Link>
        </div>
        <div className="workflow-output">
          <span>Output</span>
          <strong>{step.output}</strong>
        </div>
      </div>
    </div>
  );
}
