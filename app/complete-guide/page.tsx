"use client";

import { useDeferredValue, useMemo, useState } from "react";

export type Topic = {
  title: string;
  summary: string;
  steps: string[];
  tip?: string;
};

export type Module = {
  id: string;
  number: string;
  title: string;
  purpose: string;
  audience: string;
  topics: Topic[];
};

export const modules: Module[] = [
  {
    id: "design-costing",
    number: "01",
    title: "Design & Costing",
    purpose: "Turn an idea into an approved, costed design before any metal moves.",
    audience: "Designers, merchandisers, managers",
    topics: [
      {
        title: "Design catalogue",
        summary: "Keep every design, image, CAD file and revision in one searchable master.",
        steps: [
          "Create a design code, choose its category and add collection or season tags.",
          "Upload the CAD file and clear images from multiple angles.",
          "Record gross weight, net metal weight, stone count and weight, and the making style.",
          "Move the design through Draft, Approved, Active and Discontinued while retaining revision history.",
        ],
        tip: "Only Active designs should be available for routine order booking.",
      },
      {
        title: "Bill of materials (BOM)",
        summary: "Define the material recipe used for costing and production.",
        steps: [
          "Select the metal, purity and estimated metal weight.",
          "Add stones by type, shape, size, quantity and estimated carat.",
          "Add findings such as clasps, hooks and pins.",
          "Review the computed metal, stone, making and wastage estimate, then send the BOM for approval.",
        ],
        tip: "An approved BOM is required before an order-linked job card can be generated.",
      },
      {
        title: "Costing sheet",
        summary: "Calculate an auditable selling-price suggestion from the approved BOM.",
        steps: [
          "Review metal cost at the current rate, stone cost, making charges and wastage.",
          "Confirm GST and the target margin.",
          "Use the what-if simulator to see the effect of a different gold rate.",
          "If you override a calculated amount, enter a reason for the audit log.",
        ],
      },
      {
        title: "New design request",
        summary: "Capture made-to-order requirements before creating a catalogue design.",
        steps: [
          "Attach the customer's reference image and note specifications.",
          "Record the budget range and target delivery date.",
          "Finalize the request and convert it into a Design Catalogue entry.",
        ],
      },
    ],
  },
  {
    id: "orders",
    number: "02",
    title: "Order Management",
    purpose: "Convert customer intent into a tracked production or stock commitment.",
    audience: "Sales, customer service, production planners",
    topics: [
      {
        title: "Book a new order",
        summary: "Create retail, wholesale, export, repair or exchange-linked orders.",
        steps: [
          "Select an existing customer or use quick-add for a new customer.",
          "Choose a catalogue design or attach a custom design, then enter quantity, size and specifications.",
          "Set the expected delivery date and choose today's, floating or future fixed rate.",
          "Tag the order type and record any advance or token amount to issue a receipt.",
        ],
        tip: "Check the delivery date and rate-lock choice with the customer before saving.",
      },
      {
        title: "Track orders",
        summary: "Follow every order from booking to delivery on a status board.",
        steps: [
          "Use the Booked, Sent to Production, In Production, Hallmarking, Ready, Delivered and Cancelled columns.",
          "Filter by customer, karigar, due date or branch.",
          "Prioritize orders carrying an SLA or overdue flag.",
        ],
      },
      {
        title: "Order details and timeline",
        summary: "See every status change, linked document, payment and customer update.",
        steps: [
          "Open an order to review the timestamped audit trail.",
          "Follow links to its job cards, invoice and payments.",
          "Review SMS and WhatsApp updates already sent to the customer.",
        ],
      },
      {
        title: "Repair and alteration",
        summary: "Receive an existing item safely and track it through production without consuming a new BOM.",
        steps: [
          "Photograph the item at intake and capture its received weight.",
          "Describe the issue, estimated cost and expected completion date.",
          "Link it to production as a repair or alteration job.",
        ],
        tip: "The intake photo and weight are the primary evidence for customer handover disputes.",
      },
      {
        title: "Old gold exchange",
        summary: "Test, value and apply an old-gold item as part-payment.",
        steps: [
          "Record the testing method, purity result and received weight.",
          "Apply the configured deduction percentage and review the credit value.",
          "Link the credit to the customer's order as part-payment.",
        ],
      },
    ],
  },
  {
    id: "procurement",
    number: "03",
    title: "Procurement",
    purpose: "Purchase, receive and pay for metal, stones, findings and external services.",
    audience: "Purchase team, stores, accounts",
    topics: [
      {
        title: "Supplier master",
        summary: "Maintain commercial, tax and ledger details for every supplier.",
        steps: [
          "Choose bullion supplier, diamond dealer, findings supplier, karigar-as-vendor or hallmarking centre.",
          "Enter GST, rate-contract and credit-term details.",
          "Use the profile to review purchase history and outstanding balances.",
        ],
      },
      {
        title: "Purchase order",
        summary: "Order materials using jewellery-specific weight, purity and quality fields.",
        steps: [
          "Choose metal, diamond or gemstone, findings, packaging or consumables.",
          "For metal, enter purity and fixed or day-rate basis; for stones, enter grading parameters.",
          "Submit the PO through the configured value-based approval workflow.",
          "Track Draft, Sent, Partially Received, Received and Closed status.",
        ],
      },
      {
        title: "Goods receipt (GRN)",
        summary: "Receive material against a PO and update raw stock only after quality checks.",
        steps: [
          "Match the supplier delivery to the purchase order.",
          "Enter actual weight or quantity and compare it with the ordered amount.",
          "Record quality-check pass, failure or rejection.",
          "Post the accepted receipt to update raw-material stock.",
        ],
      },
      {
        title: "Metal loan and bullion lease",
        summary: "Track borrowed metal in grams, including usage, interest and repayment.",
        steps: [
          "Create the bank or NBFC loan account with purity, borrowed weight and interest terms.",
          "Record whether interest is payable in metal or currency.",
          "Link production consumption to the loan and follow the repayment schedule.",
          "Reconcile every metal-in and metal-out movement in the loan ledger.",
        ],
      },
      {
        title: "Purchase invoice and payment",
        summary: "Complete a three-way match before paying a supplier.",
        steps: [
          "Match the PO, accepted GRN and supplier invoice.",
          "Resolve weight, quantity, rate or tax differences.",
          "Record full or partial payment and applicable TDS.",
        ],
      },
    ],
  },
  {
    id: "raw-inventory",
    number: "04",
    title: "Raw Material Inventory",
    purpose: "Know exactly what material is available, where it is and how it is valued.",
    audience: "Storekeepers, production planners, auditors",
    topics: [
      {
        title: "Metal stock register",
        summary: "View opening, receipt, issue and closing stock by purity and location.",
        steps: [
          "Filter 22K, 18K, 14K gold, 925 or 999 silver, platinum or configured purities.",
          "Review both weight and day-rate value.",
          "Use stock ageing to identify long-held metal balances.",
        ],
      },
      {
        title: "Stone and gemstone stock",
        summary: "Track loose stones by classification, certification and parcel.",
        steps: [
          "Filter by type, shape, size and quality grade, including diamond colour and clarity.",
          "Record certified status and certificate number where applicable.",
          "Use parcel tracking for stones purchased in lots.",
        ],
      },
      {
        title: "Findings and consumables",
        summary: "Control clasps, hooks, chain by metre and production consumables.",
        steps: [
          "Record receipts and issues in the relevant unit.",
          "Set a reorder level for frequently used items.",
          "Act on reorder alerts before production is affected.",
        ],
      },
      {
        title: "Stock transfer",
        summary: "Move material between factory, branch and karigar locations with custody tracking.",
        steps: [
          "Create a transfer voucher with source, destination and material details.",
          "Send high-value transfers for approval.",
          "Track the voucher in transit and confirm receipt at destination.",
        ],
      },
      {
        title: "Physical stock verification",
        summary: "Count stock with barcode or RFID support and approve variances.",
        steps: [
          "Create a scheduled stock-take for the selected location.",
          "Scan or enter physical quantities and weights.",
          "Review the variance report and investigate differences.",
          "Post adjustments only after approval.",
        ],
      },
    ],
  },
  {
    id: "production",
    number: "05",
    title: "Production & Manufacturing",
    purpose: "Control job cards, material custody, stages, quality, wastage and karigar balances.",
    audience: "Production managers, karigars, QC, stores",
    topics: [
      {
        title: "Create a job card",
        summary: "Start order-linked or stock production with expected material and completion controls.",
        steps: [
          "Generate from an approved order and BOM, or create a manual stock-production job.",
          "Confirm design, metal and stone issue plan, assigned karigar or unit and expected stages.",
          "Review the completion date and wastage tolerance pulled from configuration.",
        ],
      },
      {
        title: "Issue metal and stones",
        summary: "Document every item handed to a karigar, including partial issues.",
        steps: [
          "Create an issue voucher with material, weight, recipient and date.",
          "Capture digital signature, OTP acknowledgement or manual sign-off.",
          "Use separate partial issues when stones are released after casting.",
        ],
      },
      {
        title: "Track production stages",
        summary: "Move work through configurable stages with ownership and weight evidence.",
        steps: [
          "Use Casting, Filing/Cleaning, Stone Setting, Polishing and Final QC, or your configured stages.",
          "Assign each stage and capture start and finish timestamps.",
          "Record stage-wise weight and attach a photo where evidence is needed.",
          "Use the Kanban board to find blocked and overdue job cards.",
        ],
      },
      {
        title: "Return and wastage",
        summary: "Compare returned weight with the expected return and route exceptions for approval.",
        steps: [
          "Create the return voucher with actual returned weight.",
          "Review expected weight calculated from the issue and allowed wastage.",
          "Investigate the variance and submit tolerance breaches for approval.",
          "Use karigar-wise history to identify recurring excess wastage.",
        ],
      },
      {
        title: "Quality check",
        summary: "Pass finished work forward or send defects back with a clear record.",
        steps: [
          "Complete the category or design-specific checklist.",
          "Verify weight, stone count, finish and any logged defects.",
          "Pass the item to Hallmarking or Finished Stock, or fail it back to the karigar with a defect note.",
        ],
      },
      {
        title: "Karigar master and ledger",
        summary: "Track skills, rates, custody, wages, turnaround and wastage per karigar.",
        steps: [
          "Set in-house or outsourced type, specialization and per-gram, per-piece or monthly rate.",
          "Review metal issued, metal returned, wastage, wages payable and wages paid.",
          "Compare completed jobs, average turnaround and wastage with peers.",
        ],
      },
      {
        title: "Outsourced job work",
        summary: "Control material sent to external units and statutory return timelines.",
        steps: [
          "Create the job-work challan when goods leave your premises.",
          "Use the standard issue, return and wastage flow for the external unit.",
          "Monitor the applicable one-year or three-year GST job-work return timeline.",
        ],
      },
    ],
  },
  {
    id: "hallmarking",
    number: "06",
    title: "Hallmarking & Compliance",
    purpose: "Send eligible items for hallmarking, map HUIDs and monitor compliance exceptions.",
    audience: "Compliance, QC, dispatch",
    topics: [
      {
        title: "Create a hallmarking batch",
        summary: "Group QC-passed pieces and send them to a BIS-recognized AHC.",
        steps: [
          "Select only QC-passed items.",
          "Create the batch and generate its outward challan.",
          "Record dispatch to the Assaying and Hallmarking Centre.",
        ],
      },
      {
        title: "Receive and map HUID",
        summary: "Attach every returned HUID to its exact piece or barcode.",
        steps: [
          "Receive the hallmarking batch from the AHC.",
          "Map each HUID to the corresponding piece.",
          "Route purity failures to rework or write-off approval.",
        ],
      },
      {
        title: "Compliance dashboard",
        summary: "Monitor turnaround and goods that have not returned on time.",
        steps: [
          "Review pending-at-AHC items and hallmarking turnaround.",
          "Check GST job-work challans approaching their return deadline.",
          "Investigate overdue goods-out records.",
        ],
      },
    ],
  },
  {
    id: "finished-inventory",
    number: "07",
    title: "Finished Goods Inventory",
    purpose: "Tag, value and monitor every ready-to-sell piece.",
    audience: "Stores, merchandising, branch teams",
    topics: [
      {
        title: "Finished stock register",
        summary: "Search saleable stock by design, category and location at a live value.",
        steps: [
          "Receive passed items into finished stock.",
          "Generate the piece barcode, QR code or RFID identity.",
          "Filter stock and review valuation at the current rate.",
        ],
      },
      {
        title: "Tag and label printing",
        summary: "Print labels using the format approved for your business.",
        steps: [
          "Choose a configured tag template.",
          "Confirm weight, purity, making charge, HUID and price fields.",
          "Print and attach the tag to the matching piece.",
        ],
      },
      {
        title: "Ageing and movement",
        summary: "Find slow-moving designs and measure sell-through.",
        steps: [
          "Review stock by ageing bucket and location.",
          "Compare design-wise sell-through rates.",
          "Use the results for transfers, promotions or production planning.",
        ],
      },
    ],
  },
  {
    id: "sales",
    number: "08",
    title: "Sales & Billing",
    purpose: "Convert finished stock into correctly taxed, traceable revenue.",
    audience: "Counter staff, wholesale, export, accounts",
    topics: [
      {
        title: "POS and counter billing",
        summary: "Scan a piece, calculate its live-rate price and collect split payments.",
        steps: [
          "Scan the barcode to load weight, purity and making charge.",
          "Confirm the live rate and GST calculation.",
          "Apply old-gold credit or advance adjustment where relevant.",
          "Split payment across cash, card, UPI, old-gold value or advance, then issue the invoice.",
        ],
      },
      {
        title: "Wholesale invoicing",
        summary: "Create bulk B2B invoices with buyer-specific margin and credit terms.",
        steps: [
          "Select the wholesale buyer and items.",
          "Apply the configured B2B rate and margin logic.",
          "Set credit terms and track the resulting outstanding amount.",
        ],
      },
      {
        title: "Export invoicing",
        summary: "Capture export references and zero-rated GST treatment.",
        steps: [
          "Enter the shipping bill reference and LUT or bond details.",
          "Apply the configured zero-rated GST handling.",
          "Verify export documentation before final issue.",
        ],
      },
      {
        title: "GST e-Invoice and IRN",
        summary: "Generate the IRN and print the required QR and HUID references.",
        steps: [
          "Submit invoice data through the configured GSP or IRP integration.",
          "Confirm successful IRN generation.",
          "Verify the QR code and hallmarked-item HUID references on the invoice.",
        ],
      },
      {
        title: "Sales return or exchange",
        summary: "Reverse or exchange a sale against its original invoice.",
        steps: [
          "Locate the original invoice and select the returned item.",
          "Record the re-testing result.",
          "Complete the approved refund or exchange workflow.",
        ],
      },
    ],
  },
  {
    id: "crm",
    number: "09",
    title: "CRM & Customer Management",
    purpose: "Keep customer history, KYC, savings schemes and communications together.",
    audience: "Sales, customer service, marketing",
    topics: [
      {
        title: "Customer master",
        summary: "Maintain identity, preferences and relationship details.",
        steps: [
          "Create the profile and collect required KYC for applicable high-value transactions.",
          "Record metal and style preferences.",
          "Add anniversary and birthday details only with the customer's consent.",
        ],
      },
      {
        title: "History and loyalty",
        summary: "Review orders, purchases, lifetime value and loyalty points.",
        steps: [
          "Open the customer timeline before responding to an enquiry.",
          "Review completed and open transactions.",
          "Check available loyalty points when a scheme is configured.",
        ],
      },
      {
        title: "Gold savings plans",
        summary: "Track monthly instalments through maturity and redemption.",
        steps: [
          "Enrol the customer in the configured scheme.",
          "Post each monthly instalment and issue acknowledgement.",
          "Review maturity value and redeem it against an eligible purchase.",
        ],
      },
      {
        title: "Communication log",
        summary: "Keep order updates and campaign activity visible to the service team.",
        steps: [
          "Review previous WhatsApp and SMS messages before contacting the customer.",
          "Send operational updates through the approved template.",
          "Track promotional campaign delivery where configured.",
        ],
      },
    ],
  },
  {
    id: "accounts",
    number: "10",
    title: "Accounts & Finance",
    purpose: "Reconcile money and metal while maintaining standard financial books.",
    audience: "Accountants, finance managers, owners",
    topics: [
      {
        title: "Dual currency and metal ledger",
        summary: "See financial value and purity-wise gram movements side by side.",
        steps: [
          "Review the currency posting created by each transaction.",
          "For metal-related activity, verify the matching purity-wise weight posting.",
          "Compare trial balance and stock or weight reconciliation before period close.",
        ],
        tip: "A value ledger can balance while a metal ledger does not; always review both.",
      },
      {
        title: "General ledger",
        summary: "Manage cash, bank, receivables, payables and expenses in a standard chart of accounts.",
        steps: [
          "Review automated postings and enter approved journals when required.",
          "Reconcile bank and cash accounts.",
          "Use the configured two-way connector when statutory books are maintained in Tally or Zoho Books.",
        ],
      },
      {
        title: "Gold and bullion loan accounting",
        summary: "Accrue interest and reconcile repayments with the procurement loan account.",
        steps: [
          "Review metal or currency interest according to the loan terms.",
          "Post repayments against the correct loan.",
          "Reconcile balances with the metal-loan ledger in Procurement.",
        ],
      },
      {
        title: "Receivables and payables",
        summary: "Manage customer and supplier outstanding balances by age.",
        steps: [
          "Review ageing buckets and overdue balances.",
          "Record receipts or payments against the correct documents.",
          "Send approved reminders for overdue accounts.",
        ],
      },
      {
        title: "Expense management",
        summary: "Record factory overheads and non-karigar operating expenses.",
        steps: [
          "Choose the correct expense account and cost context.",
          "Attach supporting evidence and submit for approval where configured.",
          "Post utilities, rent and non-karigar salaries to the appropriate period.",
        ],
      },
    ],
  },
  {
    id: "hr",
    number: "11",
    title: "HR & Payroll",
    purpose: "Maintain staff records, attendance and production-linked karigar wages.",
    audience: "HR, payroll, production accounts",
    topics: [
      {
        title: "Employee master and attendance",
        summary: "Manage office, counter and factory-floor employee records.",
        steps: [
          "Create and maintain the employee profile.",
          "Capture factory attendance through biometric or manual entry.",
          "Review exceptions before payroll processing.",
        ],
      },
      {
        title: "Karigar wage calculation",
        summary: "Calculate net pay from completed production work and advances.",
        steps: [
          "Pull piece-rate or weight-rate earnings from the karigar ledger.",
          "Review advances already paid.",
          "Approve the net payable and post the payment.",
        ],
      },
    ],
  },
  {
    id: "admin",
    number: "12",
    title: "Admin & Configuration",
    purpose: "Adapt materials, pricing, stages, approvals, access and branches without custom code.",
    audience: "System administrators, owners",
    topics: [
      {
        title: "Purity and material master",
        summary: "Define standard and custom purity slabs with conversion factors.",
        steps: [
          "Create 22K, 18K, 14K, 925 silver or other required purities.",
          "Verify the conversion factor before allowing transactions.",
        ],
      },
      {
        title: "Making charge formulas",
        summary: "Configure per-gram, per-piece, percentage or slab-based charges.",
        steps: [
          "Choose a formula type and its applicable design category.",
          "For slabs, define the weight thresholds and rates.",
          "Test the formula with representative designs before activation.",
        ],
      },
      {
        title: "Wastage tolerance",
        summary: "Set tolerance and approval rules by karigar, category or metal.",
        steps: [
          "Define the permitted percentage.",
          "Set auto-approval and manual-approval thresholds.",
          "Verify the rule against a test return calculation.",
        ],
      },
      {
        title: "Production stages",
        summary: "Add, remove and reorder stages with default service levels.",
        steps: [
          "Arrange stages in the sequence used on the floor.",
          "Set the default SLA for each stage.",
          "Activate the flow after checking open-job impact.",
        ],
      },
      {
        title: "Approval workflows",
        summary: "Control discounts, wastage, purchase orders and escalations.",
        steps: [
          "Choose the transaction and threshold, such as discount above X%, wastage above Y% or PO above a value.",
          "Assign approvers and escalation order.",
          "Test with a non-production transaction.",
        ],
      },
      {
        title: "Roles and permissions",
        summary: "Restrict modules and fields for owners, managers, karigars, counter staff and accountants.",
        steps: [
          "Start from the user's job responsibilities.",
          "Grant only required module and field access.",
          "Sign in with a test user to verify the role before assignment.",
        ],
      },
      {
        title: "Multi-branch and multi-company",
        summary: "Separate GST entities and branch stock while retaining group reporting.",
        steps: [
          "Create each company and branch with the correct GST identity.",
          "Define stock and reporting isolation.",
          "Grant group roll-up access only to authorized roles.",
        ],
      },
      {
        title: "Rate master",
        summary: "Maintain daily gold, silver and platinum rates with a history log.",
        steps: [
          "Enter rates manually or verify the configured rate feed.",
          "Review purity application and effective time.",
          "Publish the rate and retain the change history.",
        ],
      },
    ],
  },
  {
    id: "reports",
    number: "13",
    title: "Reports & Dashboards",
    purpose: "Turn operational, stock and financial data into daily decisions.",
    audience: "Owners, managers, analysts",
    topics: [
      {
        title: "Owner dashboard",
        summary: "See today's sales, stock value, cash, pending orders and karigar output on mobile.",
        steps: [
          "Confirm the selected company, branch and date.",
          "Open any exception card to investigate its source transactions.",
        ],
      },
      {
        title: "Stock reports",
        summary: "Analyse purity-wise value, ageing, locations and stone balances.",
        steps: [
          "Choose the stock date and location scope.",
          "Filter by purity, category, ageing bucket or stone attributes.",
          "Export only after reviewing totals against the register.",
        ],
      },
      {
        title: "Production reports",
        summary: "Compare karigar wastage, productivity, stage turnaround and job-work compliance.",
        steps: [
          "Set the production period and unit.",
          "Review outliers by karigar and stage.",
          "Open the underlying job cards before taking action.",
        ],
      },
      {
        title: "Financial reports",
        summary: "Prepare GST data, profit and loss, and metal reconciliation.",
        steps: [
          "Review GSTR-1 and GSTR-3B-ready data for missing tax fields.",
          "Compare profit and loss with the selected period.",
          "Resolve metal reconciliation differences before closing.",
        ],
      },
      {
        title: "Custom report builder",
        summary: "Create a cross-module report without exporting raw data to Excel.",
        steps: [
          "Choose the source modules and required fields.",
          "Add filters, grouping and measures.",
          "Preview totals, save the report and share it only with permitted roles.",
        ],
      },
    ],
  },
];

const quickStarts = [
  ["Before the first transaction", "Set companies, branches, purities, daily rates, roles and approval rules.", "admin"],
  ["Before production", "Approve the design and BOM, book the order, then create its job card.", "production"],
  ["Before a sale", "Complete QC and hallmarking, map HUID, receive finished stock and print the tag.", "sales"],
];

const faqs = [
  ["Why can’t I see a module or field?", "Your role may not include access, or the feature may be disabled for your company. Ask an administrator to verify role and field permissions."],
  ["Why can’t I create a job card?", "Check that the order is approved, its BOM is approved, the design is active and required material or configuration is available."],
  ["Why is a return waiting for approval?", "The calculated wastage or weight variance may exceed the configured tolerance for the metal, design or karigar."],
  ["Why is an item unavailable for billing?", "It may still be in production, QC or hallmarking; it may lack an HUID or tag; or it may be assigned to another location."],
  ["Why does the amount look different after reopening?", "A floating-rate transaction may have recalculated using the applicable rate. Check the order’s rate-lock choice and the Rate Master history."],
  ["Why do accounts balance but metal does not?", "Currency and metal are separate ledgers. Review purity-wise issues, returns, purchases, exchanges and loan movements in the metal reconciliation report."],
];

const searchIndex = modules.map((module) => ({
  module,
  text: `${module.title} ${module.purpose} ${module.audience} ${module.topics
    .map((topic) => `${topic.title} ${topic.summary} ${topic.steps.join(" ")} ${topic.tip ?? ""}`)
    .join(" ")}`.toLocaleLowerCase(),
}));

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLocaleLowerCase());
  const filtered = useMemo(() => {
    if (!deferredQuery) return modules;
    return searchIndex
      .filter(({ text }) => text.includes(deferredQuery))
      .map(({ module }) => ({
        ...module,
        topics: module.topics.filter((topic) =>
          `${topic.title} ${topic.summary} ${topic.steps.join(" ")} ${topic.tip ?? ""}`
            .toLocaleLowerCase()
            .includes(deferredQuery),
        ),
      }))
      .map((module) => ({
        ...module,
        topics: module.topics.length ? module.topics : searchIndex.find((entry) => entry.module.id === module.id)!.module.topics,
      }));
  }, [deferredQuery]);
  const resultCount = filtered.reduce((sum, module) => sum + module.topics.length, 0);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AurumDesk help centre home">
          <span className="brand-mark">A</span>
          <span>
            <b>AurumDesk</b>
            <small>Help Centre</small>
          </span>
        </a>
        <nav aria-label="Utility navigation">
          <a href="#quick-start">Quick start</a>
          <a href="#modules">Modules</a>
          <a href="#troubleshooting">Get unstuck</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Jewellery manufacturing ERP</p>
          <h1>From first sketch to final sale, every step explained.</h1>
          <p className="hero-lede">
            Practical guidance for design, orders, metal, production, hallmarking, billing and accounts.
          </p>
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Search the help centre</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search “old gold”, “job card”, “HUID”…"
              type="search"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                Clear
              </button>
            )}
          </label>
          <p className="search-hint">
            {deferredQuery ? `${resultCount} matching guides across ${filtered.length} modules` : "Search all 61 task guides"}
          </p>
        </div>
        <div className="flow-card" aria-label="Core jewellery workflow">
          <p>One connected workflow</p>
          {["Design", "Order", "Procure", "Produce", "Hallmark", "Sell", "Account"].map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b>{step}</b>
            </div>
          ))}
        </div>
      </section>

      {!deferredQuery && (
        <>
          <section className="quick-start section" id="quick-start">
            <div className="section-heading">
              <p className="eyebrow">Start in the right order</p>
              <h2>Three checkpoints prevent most problems</h2>
            </div>
            <div className="quick-grid">
              {quickStarts.map(([title, text, href], index) => (
                <a href={`#${href}`} key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <b>Open the guide <Arrow /></b>
                </a>
              ))}
            </div>
          </section>

          <section className="role-strip" aria-label="Help by role">
            <p>Find your everyday work</p>
            <div>
              <a href="#orders">Counter staff</a>
              <a href="#production">Production</a>
              <a href="#raw-inventory">Storekeepers</a>
              <a href="#accounts">Accountants</a>
              <a href="#reports">Owners</a>
              <a href="#admin">Administrators</a>
            </div>
          </section>
        </>
      )}

      <div className="docs-layout section" id="modules">
        <aside>
          <p>Browse modules</p>
          <nav aria-label="Documentation modules">
            {(deferredQuery ? filtered : modules).map((module) => (
              <a href={`#${module.id}`} key={module.id}>
                <span>{module.number}</span>
                {module.title}
              </a>
            ))}
          </nav>
        </aside>
        <div className="docs-content">
          <div className="section-heading docs-heading">
            <p className="eyebrow">{deferredQuery ? "Search results" : "Complete product guide"}</p>
            <h2>{deferredQuery ? `Guides matching “${query.trim()}”` : "Follow the work, module by module"}</h2>
            <p>Screen names can vary by role and company configuration. The underlying workflow stays the same.</p>
          </div>

          {filtered.length ? (
            filtered.map((module) => (
              <article className="module" id={module.id} key={module.id}>
                <div className="module-intro">
                  <span>{module.number}</span>
                  <div>
                    <p>{module.audience}</p>
                    <h2>{module.title}</h2>
                    <p>{module.purpose}</p>
                  </div>
                </div>
                <div className="topic-list">
                  {module.topics.map((topic, index) => (
                    <details key={topic.title} open={deferredQuery.length > 0}>
                      <summary>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <div>
                          <h3>{topic.title}</h3>
                          <p>{topic.summary}</p>
                        </div>
                        <i aria-hidden="true">+</i>
                      </summary>
                      <div className="topic-body">
                        <p className="steps-label">How to use it</p>
                        <ol>
                          {topic.steps.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ol>
                        {topic.tip && (
                          <p className="tip">
                            <b>Good to know</b>
                            {topic.tip}
                          </p>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </article>
            ))
          ) : (
            <section className="empty-state">
              <span>⌕</span>
              <h2>No guide found for “{query.trim()}”</h2>
              <p>Try a module, document name or task such as “purchase order”, “wastage” or “invoice”.</p>
              <button type="button" onClick={() => setQuery("")}>View all guides</button>
            </section>
          )}
        </div>
      </div>

      {!deferredQuery && (
        <section className="troubleshooting section" id="troubleshooting">
          <div className="section-heading">
            <p className="eyebrow">Get unstuck</p>
            <h2>Common questions, answered clearly</h2>
          </div>
          <div className="faq-grid">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <footer>
        <div>
          <span className="brand-mark">A</span>
          <p><b>AurumDesk</b><br />Jewellery ERP help centre</p>
        </div>
        <p>Built around the full flow: Design → Order → Procurement → Production → Hallmarking → Sales → Accounts</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
