export const moduleMeta = [
  { id: "design-costing", number: "01", title: "Design & Costing", purpose: "Turn an idea into an approved, costed design before any metal moves.", audience: "Designers, merchandisers, managers" },
  { id: "orders", number: "02", title: "Order Management", purpose: "Convert customer intent into a tracked production or stock commitment.", audience: "Sales, service, production planners" },
  { id: "procurement", number: "03", title: "Procurement", purpose: "Purchase, receive and pay for metal, stones, findings and external services.", audience: "Purchase team, stores, accounts" },
  { id: "raw-inventory", number: "04", title: "Raw Material Inventory", purpose: "Know exactly what material is available, where it is and how it is valued.", audience: "Storekeepers, planners, auditors" },
  { id: "production", number: "05", title: "Production & Manufacturing", purpose: "Control job cards, material custody, stages, quality, wastage and karigar balances.", audience: "Production, karigars, QC, stores" },
  { id: "hallmarking", number: "06", title: "Hallmarking & Compliance", purpose: "Send eligible items for hallmarking, map HUIDs and monitor compliance exceptions.", audience: "Compliance, QC, dispatch" },
  { id: "finished-inventory", number: "07", title: "Finished Goods Inventory", purpose: "Tag, value and monitor every ready-to-sell piece.", audience: "Stores, merchandising, branches" },
  { id: "sales", number: "08", title: "Sales & Billing", purpose: "Convert finished stock into correctly taxed, traceable revenue.", audience: "Counter, wholesale, export, accounts" },
  { id: "crm", number: "09", title: "CRM & Customer Management", purpose: "Keep customer history, KYC, savings schemes and communications together.", audience: "Sales, service, marketing" },
  { id: "accounts", number: "10", title: "Accounts & Finance", purpose: "Reconcile money and metal while maintaining standard financial books.", audience: "Accountants, finance, owners" },
  { id: "hr", number: "11", title: "HR & Payroll", purpose: "Maintain staff records, attendance and production-linked karigar wages.", audience: "HR, payroll, production accounts" },
  { id: "admin", number: "12", title: "Admin & Configuration", purpose: "Adapt materials, pricing, stages, approvals, access and branches without custom code.", audience: "Administrators, owners" },
  { id: "reports", number: "13", title: "Reports & Dashboards", purpose: "Turn operational, stock and financial data into daily decisions.", audience: "Owners, managers, analysts" },
] as const;

export type ModuleMeta = (typeof moduleMeta)[number];
