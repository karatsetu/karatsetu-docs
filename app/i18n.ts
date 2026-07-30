export type Lang = "en" | "hi";

export type ModuleCard = { title: string; purpose: string; audience: string };

export type Dict = {
  nav: { home: string; docs: string; flow: string; help: string; docsHome: string; openDocs: string };
  docsNav: { label: string; overview: string; start: string; modules: string; guide: string; mobileHint: string };
  footer: { tagline: string; flow: string; back: string };
  toggles: { toDark: string; toLight: string; lang: string };
  palette: { placeholder: string; noResults: string; hint: string; pages: string; modules: string; open: string };
  home: {
    eyebrow: string;
    h1: string;
    lede: string;
    ctaDocs: string;
    ctaFlow: string;
    proof: string;
    preview: {
      title: string;
      sub: string;
      tag: string;
      metricLabel: string;
      metricValue: string;
      metricSub: string;
      rail: string[];
      moving: string;
      attention: string;
    };
    pillars: { title: string; text: string }[];
    calculator: {
      title: string;
      sub: string;
      weightLabel: string;
      purityLabel: string;
      rateLabel: string;
      resultLabel: string;
      hint: string;
    };
    docsEntry: {
      eyebrow: string;
      h2: string;
      p: string;
      links: { title: string; sub: string; href: string }[];
    };
  };
  docsHome: {
    eyebrow: string;
    h1: string;
    lede: string;
    startHere: string;
    browseModules: string;
    route: { label: string; items: { n: string; title: string; sub: string; href: string }[] };
    confidence: { modules: string; guides: string; stages: string; writtenFor: string };
    workflowSection: { eyebrow: string; h2: string; p: string };
    finderSection: { eyebrow: string; h2: string; p: string };
    support: { eyebrow: string; h2: string; p: string; cta: string };
  };
  gettingStarted: {
    eyebrow: string;
    h1: string;
    lede: string;
    checkpoints: { title: string; text: string; link: string }[];
    readiness: { eyebrow: string; h2: string; chips: string[]; p: string };
  };
  troubleshooting: {
    eyebrow: string;
    h1: string;
    lede: string;
    issues: { title: string; answer: string }[];
    openRelated: string;
    diagnostic: { eyebrow: string; h2: string; items: { label: string; text: string }[] };
  };
  workflowPage: {
    eyebrow: string;
    h1: string;
    lede: string;
    handoff: { eyebrow: string; h2: string; items: { tag: string; title: string; text: string }[] };
  };
  modulesPage: { eyebrow: string; h1: string; lede: string };
  finder: { placeholder: string; clear: string; openModule: string; noMatch: string; showAll: string; browseAll: string };
  workflowExplorer: {
    stage: string;
    output: string;
    steps: { title: string; text: string; output: string; readLabel: string }[];
  };
  moduleDetail: {
    onThisPage: string;
    guideLabel: string;
    howToUse: string;
    goodToKnow: string;
    nextModule: string;
    nextModuleCta: string;
    breadcrumbDocs: string;
    breadcrumbModules: string;
    englishOnlyNote: string;
  };
  moduleCards: ModuleCard[];
};

const en: Dict = {
  nav: { home: "Home", docs: "Documentation", flow: "Product flow", help: "Help", docsHome: "Docs home", openDocs: "Open docs" },
  docsNav: { label: "Documentation", overview: "Overview", start: "Getting started", modules: "All modules", guide: "Complete guide", mobileHint: "Use the menu to browse sections" },
  footer: { tagline: "Jewellery ERP for India", flow: "Design → Order → Procurement → Production → Hallmarking → Sales → Accounts", back: "Documentation home ↑" },
  toggles: { toDark: "Switch to dark mode", toLight: "Switch to light mode", lang: "हिंदी" },
  palette: { placeholder: "Search pages, modules, guides…", noResults: "No matches. Try a module name or task.", hint: "Navigate ↑↓ · Open ↵ · Close esc", pages: "Pages", modules: "Modules", open: "⌘K" },
  home: {
    eyebrow: "Jewellery manufacturing ERP for India",
    h1: "Every gram. Every job. Every rupee.",
    lede: "KaratSetu connects design, metal, karigars, hallmarking, billing and accounts in one jewellery operating system.",
    ctaDocs: "Open documentation",
    ctaFlow: "Explore product flow",
    proof: "Built around Indian jewellery workflows · BIS hallmarking · GST · HUID · karigar accounting",
    preview: {
      title: "Today's control room",
      sub: "Design to accounts, live",
      tag: "All systems connected",
      metricLabel: "Metal in production",
      metricValue: "12,486.340 g",
      metricSub: "22K · 18K · 14K reconciled",
      rail: ["Design", "Order", "Production", "Hallmark", "Sale", "Accounts"],
      moving: "jobs moving today",
      attention: "need attention",
    },
    pillars: [
      { title: "Every gram accountable", text: "Purity-wise metal ledgers, job issues, returns, wastage and stock reconciliation stay connected." },
      { title: "Every job visible", text: "Orders, karigars, production stages, QC, hallmarking and finished stock share one traceable timeline." },
      { title: "Every rupee reconciled", text: "Live-rate billing, GST, advances, old-gold exchange and finance post into the same operating system." },
    ],
    calculator: {
      title: "Try the purity calculator",
      sub: "See how a fine-gold value is derived instantly — the same math KaratSetu runs on every job card.",
      weightLabel: "Gross weight (grams)",
      purityLabel: "Purity",
      rateLabel: "Rate per gram (₹, 24K)",
      resultLabel: "Fine gold value",
      hint: "Illustrative only — live orders use your configured purity slabs and daily Rate Master.",
    },
    docsEntry: {
      eyebrow: "KaratSetu documentation",
      h2: "Already using the product?",
      p: "Go straight to setup, a business module, the end-to-end workflow or troubleshooting.",
      links: [
        { title: "Documentation home", sub: "Search and browse all guides ↗", href: "/docs" },
        { title: "Getting started", sub: "Configure the system correctly ↗", href: "/getting-started" },
        { title: "All modules", sub: "Open your area of work ↗", href: "/modules" },
        { title: "Get unstuck", sub: "Diagnose common blockers ↗", href: "/troubleshooting" },
      ],
    },
  },
  docsHome: {
    eyebrow: "KaratSetu documentation",
    h1: "Find the right guide without losing your place.",
    lede: "Start with your task, your module or the stage where work is blocked. Every guide follows the way jewellery moves through your business.",
    startHere: "Start here",
    browseModules: "Browse modules",
    route: {
      label: "Choose your route",
      items: [
        { n: "01", title: "New to KaratSetu", sub: "Set up in the right order →", href: "/getting-started" },
        { n: "02", title: "Follow a jewellery piece", sub: "Understand the full flow →", href: "/workflow" },
        { n: "03", title: "Something is blocked", sub: "Diagnose common problems →", href: "/troubleshooting" },
      ],
    },
    confidence: { modules: "modules", guides: "task guides", stages: "workflow stages", writtenFor: "Written for counter staff, production teams, storekeepers, accountants, managers and owners." },
    workflowSection: { eyebrow: "The connected workflow", h2: "See what each stage receives and hands forward", p: "Select a stage to understand its purpose, output and detailed guide." },
    finderSection: { eyebrow: "Browse by responsibility", h2: "Go directly to the module you use", p: "Search by task, team or business area. Each module now has its own dedicated page." },
    support: { eyebrow: "When something does not work", h2: "Start with permissions, status and configuration.", p: "Most blockers come from a missing approval, an unfinished previous stage, role access or a company rule. The troubleshooting guide helps you isolate the cause without guessing.", cta: "Open troubleshooting" },
  },
  gettingStarted: {
    eyebrow: "Implementation checklist",
    h1: "Set the foundation before the first live order.",
    lede: "Complete these checkpoints in sequence. Each one prevents downstream stock, billing or reconciliation problems.",
    checkpoints: [
      { title: "Create the business structure", text: "Set companies, GST entities, branches and reporting isolation before creating stock or transactions.", link: "Open Admin & Configuration" },
      { title: "Define materials and rates", text: "Add purity slabs, conversion factors, making-charge formulas, wastage tolerance and the daily rate process.", link: "Configure materials and rates" },
      { title: "Protect access and approvals", text: "Create roles for counter, production, stores, accounts and management; then test approval thresholds.", link: "Review roles and approvals" },
      { title: "Load master records", text: "Create suppliers, customers, karigars and the first approved catalogue designs with BOMs.", link: "Start the design catalogue" },
      { title: "Verify opening balances", text: "Confirm purity-wise metal, stones, findings, finished pieces, currency ledgers and metal ledgers before going live.", link: "Review inventory controls" },
      { title: "Run one complete test order", text: "Book, produce, QC, hallmark, tag, bill and reconcile one sample piece before training the full team.", link: "Follow the end-to-end workflow" },
    ],
    readiness: { eyebrow: "Ready for go-live", h2: "One transaction should balance in three places.", chips: ["Operational status", "Currency ledger", "Metal-weight ledger"], p: "If the sample order is complete operationally and both ledgers reconcile, the team is ready to process live work." },
  },
  troubleshooting: {
    eyebrow: "Get unstuck",
    h1: "Find the missing permission, status or handoff.",
    lede: "Start with the symptom. Each answer points to the module where the underlying record can be checked.",
    issues: [
      { title: "I cannot see a module or field", answer: "The user role may not include the module, branch or field. Ask an administrator to test the assigned role and company access." },
      { title: "I cannot create a job card", answer: "Check that the order is approved, the design is Active, the BOM is approved and the required production configuration exists." },
      { title: "A karigar return is waiting", answer: "The actual return may exceed the configured wastage or weight-variance threshold and require approval." },
      { title: "An item is unavailable for billing", answer: "Confirm that it passed QC, completed hallmarking, has its HUID mapped, is tagged and belongs to the billing location." },
      { title: "The amount changed after reopening", answer: "A floating-rate order may recalculate at the applicable rate. Review the order's rate-lock option and Rate Master history." },
      { title: "Money balances but metal does not", answer: "Review purity-wise purchases, issues, returns, old-gold exchanges and loan movements in the metal reconciliation." },
    ],
    openRelated: "Open the related guide ↗",
    diagnostic: {
      eyebrow: "Fast diagnostic order",
      h2: "Check these four things before changing data",
      items: [
        { label: "Permission", text: "Can the user access the company, branch, module and field?" },
        { label: "Status", text: "Did the previous workflow stage finish successfully?" },
        { label: "Approval", text: "Is an exception or threshold waiting for authorization?" },
        { label: "Configuration", text: "Is the rate, material, formula, stage or rule active?" },
      ],
    },
  },
  workflowPage: {
    eyebrow: "End-to-end process",
    h1: "Follow one piece through the entire business.",
    lede: "Each stage produces the evidence and status required by the next. Select a stage to understand the handoff.",
    handoff: {
      eyebrow: "Control points",
      h2: "Do not skip these handoffs",
      items: [
        { tag: "Design → Order", title: "Approved, active and costed", text: "The design and BOM must be approved before production commitment." },
        { tag: "Production → Hallmark", title: "QC passed", text: "Weight, stone count, finish and defect checks must be complete." },
        { tag: "Hallmark → Sale", title: "HUID mapped and tagged", text: "The hallmark identity must belong to the exact finished piece." },
        { tag: "Sale → Accounts", title: "Invoice and payment posted", text: "Currency and purity-wise metal movements must reconcile together." },
      ],
    },
  },
  modulesPage: { eyebrow: "All product areas", h1: "13 modules. One connected business.", lede: "Open a module for its purpose, users, individual tasks and step-by-step instructions." },
  finder: { placeholder: "Find billing, HUID, job cards, reports…", clear: "Clear", openModule: "Open module", noMatch: "No matching module. Try “production”, “stock” or “accounts”.", showAll: "Show every module", browseAll: "Browse all 13 modules →" },
  workflowExplorer: {
    stage: "Stage",
    output: "Output",
    steps: [
      { title: "Design", text: "Create the catalogue design, approve its BOM and confirm the costing.", output: "Approved design + BOM", readLabel: "Read the design guide" },
      { title: "Order", text: "Book specifications, delivery promise, rate lock and customer advance.", output: "Production commitment", readLabel: "Read the order guide" },
      { title: "Procure", text: "Raise purchase orders, receive materials and reconcile supplier invoices.", output: "Accepted raw material", readLabel: "Read the procure guide" },
      { title: "Produce", text: "Issue metal and stones, track stages, calculate wastage and complete QC.", output: "QC-passed piece", readLabel: "Read the produce guide" },
      { title: "Hallmark", text: "Create the AHC batch, receive the item and map its HUID.", output: "Compliant hallmarked piece", readLabel: "Read the hallmark guide" },
      { title: "Sell", text: "Tag finished stock, apply live rates and GST, then collect payment.", output: "Traceable invoice", readLabel: "Read the sell guide" },
      { title: "Account", text: "Reconcile the currency ledger and purity-wise metal ledger together.", output: "Balanced money + metal", readLabel: "Read the account guide" },
    ],
  },
  moduleDetail: {
    onThisPage: "On this page",
    guideLabel: "Guide",
    howToUse: "How to use it",
    goodToKnow: "Good to know",
    nextModule: "Need the bigger picture?",
    nextModuleCta: "See where this module fits in the full workflow →",
    breadcrumbDocs: "Documentation",
    breadcrumbModules: "Modules",
    englishOnlyNote: "",
  },
  moduleCards: [
    { title: "Design & Costing", purpose: "Turn an idea into an approved, costed design before any metal moves.", audience: "Designers, merchandisers, managers" },
    { title: "Order Management", purpose: "Convert customer intent into a tracked production or stock commitment.", audience: "Sales, service, production planners" },
    { title: "Procurement", purpose: "Purchase, receive and pay for metal, stones, findings and external services.", audience: "Purchase team, stores, accounts" },
    { title: "Raw Material Inventory", purpose: "Know exactly what material is available, where it is and how it is valued.", audience: "Storekeepers, planners, auditors" },
    { title: "Production & Manufacturing", purpose: "Control job cards, material custody, stages, quality, wastage and karigar balances.", audience: "Production, karigars, QC, stores" },
    { title: "Hallmarking & Compliance", purpose: "Send eligible items for hallmarking, map HUIDs and monitor compliance exceptions.", audience: "Compliance, QC, dispatch" },
    { title: "Finished Goods Inventory", purpose: "Tag, value and monitor every ready-to-sell piece.", audience: "Stores, merchandising, branches" },
    { title: "Sales & Billing", purpose: "Convert finished stock into correctly taxed, traceable revenue.", audience: "Counter, wholesale, export, accounts" },
    { title: "CRM & Customer Management", purpose: "Keep customer history, KYC, savings schemes and communications together.", audience: "Sales, service, marketing" },
    { title: "Accounts & Finance", purpose: "Reconcile money and metal while maintaining standard financial books.", audience: "Accountants, finance, owners" },
    { title: "HR & Payroll", purpose: "Maintain staff records, attendance and production-linked karigar wages.", audience: "HR, payroll, production accounts" },
    { title: "Admin & Configuration", purpose: "Adapt materials, pricing, stages, approvals, access and branches without custom code.", audience: "Administrators, owners" },
    { title: "Reports & Dashboards", purpose: "Turn operational, stock and financial data into daily decisions.", audience: "Owners, managers, analysts" },
  ],
};

const hi: Dict = {
  nav: { home: "होम", docs: "दस्तावेज़", flow: "प्रोडक्ट फ़्लो", help: "सहायता", docsHome: "दस्तावेज़ होम", openDocs: "दस्तावेज़ खोलें" },
  docsNav: { label: "दस्तावेज़ीकरण", overview: "अवलोकन", start: "शुरुआत करें", modules: "सभी मॉड्यूल", guide: "संपूर्ण गाइड", mobileHint: "ब्राउज़ करने के लिए मेनू का उपयोग करें" },
  footer: { tagline: "भारत के लिए ज्वेलरी ERP", flow: "डिज़ाइन → ऑर्डर → खरीद → उत्पादन → हॉलमार्किंग → बिक्री → खाते", back: "दस्तावेज़ होम ↑" },
  toggles: { toDark: "डार्क मोड में जाएं", toLight: "लाइट मोड में जाएं", lang: "English" },
  palette: { placeholder: "पेज, मॉड्यूल, गाइड खोजें…", noResults: "कोई मेल नहीं मिला। कोई मॉड्यूल नाम या काम आज़माएं।", hint: "नेविगेट ↑↓ · खोलें ↵ · बंद करें esc", pages: "पेज", modules: "मॉड्यूल", open: "⌘K" },
  home: {
    eyebrow: "भारत के लिए ज्वेलरी मैन्युफैक्चरिंग ERP",
    h1: "हर ग्राम। हर काम। हर रुपया।",
    lede: "KaratSetu डिज़ाइन, धातु, कारीगर, हॉलमार्किंग, बिलिंग और खातों को एक ही ज्वेलरी ऑपरेटिंग सिस्टम में जोड़ता है।",
    ctaDocs: "दस्तावेज़ खोलें",
    ctaFlow: "प्रोडक्ट फ़्लो देखें",
    proof: "भारतीय ज्वेलरी वर्कफ़्लो के लिए बनाया गया · BIS हॉलमार्किंग · GST · HUID · कारीगर अकाउंटिंग",
    preview: {
      title: "आज का कंट्रोल रूम",
      sub: "डिज़ाइन से खाते तक, लाइव",
      tag: "सभी सिस्टम जुड़े हुए",
      metricLabel: "उत्पादन में धातु",
      metricValue: "12,486.340 g",
      metricSub: "22K · 18K · 14K रिकंसाइल्ड",
      rail: ["डिज़ाइन", "ऑर्डर", "उत्पादन", "हॉलमार्क", "बिक्री", "खाते"],
      moving: "जॉब आज गतिशील",
      attention: "ध्यान चाहिए",
    },
    pillars: [
      { title: "हर ग्राम का हिसाब", text: "प्योरिटी-वाइज़ मेटल लेजर, जॉब इशू, रिटर्न, वेस्टेज और स्टॉक रिकंसीलिएशन एक साथ जुड़े रहते हैं।" },
      { title: "हर काम दिखाई देता है", text: "ऑर्डर, कारीगर, उत्पादन के चरण, QC, हॉलमार्किंग और तैयार स्टॉक एक ही ट्रेस करने योग्य टाइमलाइन साझा करते हैं।" },
      { title: "हर रुपया रिकंसाइल्ड", text: "लाइव-रेट बिलिंग, GST, एडवांस, पुराना सोना एक्सचेंज और फाइनेंस एक ही ऑपरेटिंग सिस्टम में पोस्ट होते हैं।" },
    ],
    calculator: {
      title: "प्योरिटी कैलकुलेटर आज़माएं",
      sub: "देखें फाइन-गोल्ड वैल्यू तुरंत कैसे निकलती है — वही गणना जो KaratSetu हर जॉब कार्ड पर करता है।",
      weightLabel: "सकल वज़न (ग्राम)",
      purityLabel: "प्योरिटी",
      rateLabel: "प्रति ग्राम दर (₹, 24K)",
      resultLabel: "फाइन गोल्ड वैल्यू",
      hint: "केवल उदाहरण के लिए — लाइव ऑर्डर आपके कॉन्फ़िगर किए गए प्योरिटी स्लैब और दैनिक रेट मास्टर का उपयोग करते हैं।",
    },
    docsEntry: {
      eyebrow: "KaratSetu दस्तावेज़ीकरण",
      h2: "पहले से उत्पाद उपयोग कर रहे हैं?",
      p: "सेटअप, किसी बिज़नेस मॉड्यूल, एंड-टू-एंड वर्कफ़्लो या समस्या-निवारण पर सीधे जाएं।",
      links: [
        { title: "दस्तावेज़ होम", sub: "सभी गाइड खोजें और ब्राउज़ करें ↗", href: "/docs" },
        { title: "शुरुआत करें", sub: "सिस्टम को सही तरीके से कॉन्फ़िगर करें ↗", href: "/getting-started" },
        { title: "सभी मॉड्यूल", sub: "अपना कार्य क्षेत्र खोलें ↗", href: "/modules" },
        { title: "समस्या हल करें", sub: "सामान्य रुकावटों की पहचान करें ↗", href: "/troubleshooting" },
      ],
    },
  },
  docsHome: {
    eyebrow: "KaratSetu दस्तावेज़ीकरण",
    h1: "सही गाइड खोजें, अपनी जगह खोए बिना।",
    lede: "अपने काम, अपने मॉड्यूल या जिस चरण पर काम रुका है, वहां से शुरू करें। हर गाइड उसी तरह चलती है जैसे आपके व्यवसाय में ज्वेलरी चलती है।",
    startHere: "यहां से शुरू करें",
    browseModules: "मॉड्यूल ब्राउज़ करें",
    route: {
      label: "अपना रास्ता चुनें",
      items: [
        { n: "01", title: "KaratSetu में नए हैं", sub: "सही क्रम में सेटअप करें →", href: "/getting-started" },
        { n: "02", title: "एक ज्वेलरी पीस को फॉलो करें", sub: "पूरा फ़्लो समझें →", href: "/workflow" },
        { n: "03", title: "कुछ अटका हुआ है", sub: "सामान्य समस्याओं का निदान करें →", href: "/troubleshooting" },
      ],
    },
    confidence: { modules: "मॉड्यूल", guides: "टास्क गाइड", stages: "वर्कफ़्लो चरण", writtenFor: "काउंटर स्टाफ़, उत्पादन टीम, स्टोरकीपर, अकाउंटेंट, मैनेजर और मालिकों के लिए लिखा गया।" },
    workflowSection: { eyebrow: "जुड़ा हुआ वर्कफ़्लो", h2: "देखें हर चरण क्या प्राप्त करता है और आगे भेजता है", p: "किसी चरण का उद्देश्य, आउटपुट और विस्तृत गाइड समझने के लिए उसे चुनें।" },
    finderSection: { eyebrow: "ज़िम्मेदारी अनुसार ब्राउज़ करें", h2: "सीधे उस मॉड्यूल पर जाएं जो आप उपयोग करते हैं", p: "काम, टीम या बिज़नेस क्षेत्र से खोजें। हर मॉड्यूल का अब अपना अलग पेज है।" },
    support: { eyebrow: "जब कुछ काम न करे", h2: "अनुमतियों, स्थिति और कॉन्फ़िगरेशन से शुरू करें।", p: "अधिकतर रुकावटें किसी अनुमति की कमी, पिछले अधूरे चरण, भूमिका पहुंच या कंपनी नियम से आती हैं। समस्या-निवारण गाइड बिना अंदाज़ा लगाए कारण अलग करने में मदद करता है।", cta: "समस्या-निवारण खोलें" },
  },
  gettingStarted: {
    eyebrow: "इम्प्लीमेंटेशन चेकलिस्ट",
    h1: "पहले लाइव ऑर्डर से पहले नींव तैयार करें।",
    lede: "इन चेकपॉइंट्स को क्रम में पूरा करें। हर एक आगे चलकर स्टॉक, बिलिंग या रिकंसीलिएशन की समस्याओं को रोकता है।",
    checkpoints: [
      { title: "बिज़नेस संरचना बनाएं", text: "स्टॉक या लेनदेन बनाने से पहले कंपनियां, GST एंटिटी, ब्रांच और रिपोर्टिंग आइसोलेशन सेट करें।", link: "एडमिन और कॉन्फ़िगरेशन खोलें" },
      { title: "सामग्री और दरें परिभाषित करें", text: "प्योरिटी स्लैब, कन्वर्ज़न फैक्टर, मेकिंग-चार्ज फॉर्मूला, वेस्टेज टॉलरेंस और दैनिक दर प्रक्रिया जोड़ें।", link: "सामग्री और दरें कॉन्फ़िगर करें" },
      { title: "एक्सेस और अप्रूवल सुरक्षित करें", text: "काउंटर, उत्पादन, स्टोर, खाते और प्रबंधन के लिए भूमिकाएं बनाएं; फिर अप्रूवल थ्रेशोल्ड टेस्ट करें।", link: "भूमिकाएं और अप्रूवल देखें" },
      { title: "मास्टर रिकॉर्ड लोड करें", text: "सप्लायर, ग्राहक, कारीगर और BOM के साथ पहला अप्रूव्ड कैटलॉग डिज़ाइन बनाएं।", link: "डिज़ाइन कैटलॉग शुरू करें" },
      { title: "ओपनिंग बैलेंस वेरीफाई करें", text: "लाइव होने से पहले प्योरिटी-वाइज़ धातु, स्टोन, फाइंडिंग्स, तैयार पीस, करेंसी लेजर और मेटल लेजर की पुष्टि करें।", link: "इन्वेंटरी नियंत्रण देखें" },
      { title: "एक पूरा टेस्ट ऑर्डर चलाएं", text: "पूरी टीम को ट्रेनिंग देने से पहले एक सैंपल पीस को बुक, प्रोड्यूस, QC, हॉलमार्क, टैग, बिल और रिकंसाइल करें।", link: "एंड-टू-एंड वर्कफ़्लो फॉलो करें" },
    ],
    readiness: { eyebrow: "गो-लाइव के लिए तैयार", h2: "एक लेनदेन तीन जगहों पर संतुलित होना चाहिए।", chips: ["ऑपरेशनल स्टेटस", "करेंसी लेजर", "मेटल-वेट लेजर"], p: "यदि सैंपल ऑर्डर ऑपरेशनल रूप से पूर्ण है और दोनों लेजर रिकंसाइल होते हैं, तो टीम लाइव काम प्रोसेस करने के लिए तैयार है।" },
  },
  troubleshooting: {
    eyebrow: "समस्या हल करें",
    h1: "गायब अनुमति, स्थिति या हैंडऑफ़ खोजें।",
    lede: "लक्षण से शुरू करें। हर उत्तर उस मॉड्यूल की ओर इशारा करता है जहां अंतर्निहित रिकॉर्ड जांचा जा सकता है।",
    issues: [
      { title: "मुझे कोई मॉड्यूल या फ़ील्ड दिखाई नहीं देता", answer: "उपयोगकर्ता की भूमिका में मॉड्यूल, ब्रांच या फ़ील्ड शामिल नहीं हो सकता। एडमिनिस्ट्रेटर से सौंपी गई भूमिका और कंपनी एक्सेस जांचने को कहें।" },
      { title: "मैं जॉब कार्ड नहीं बना पा रहा", answer: "जांचें कि ऑर्डर अप्रूव्ड है, डिज़ाइन Active है, BOM अप्रूव्ड है और आवश्यक प्रोडक्शन कॉन्फ़िगरेशन मौजूद है।" },
      { title: "कारीगर रिटर्न अटका हुआ है", answer: "वास्तविक रिटर्न कॉन्फ़िगर की गई वेस्टेज या वेट-वेरिएंस थ्रेशोल्ड से अधिक हो सकता है और अप्रूवल चाहिए।" },
      { title: "कोई आइटम बिलिंग के लिए उपलब्ध नहीं है", answer: "पुष्टि करें कि उसने QC पास किया, हॉलमार्किंग पूरी की, उसका HUID मैप है, टैग है और वह बिलिंग लोकेशन का है।" },
      { title: "रीओपन करने के बाद राशि बदल गई", answer: "फ्लोटिंग-रेट ऑर्डर लागू दर पर फिर से गणना कर सकता है। ऑर्डर के रेट-लॉक विकल्प और रेट मास्टर हिस्ट्री की समीक्षा करें।" },
      { title: "पैसा संतुलित है लेकिन धातु नहीं", answer: "मेटल रिकंसीलिएशन में प्योरिटी-वाइज़ खरीद, इशू, रिटर्न, पुराना सोना एक्सचेंज और लोन मूवमेंट की समीक्षा करें।" },
    ],
    openRelated: "संबंधित गाइड खोलें ↗",
    diagnostic: {
      eyebrow: "तेज़ डायग्नोस्टिक क्रम",
      h2: "डेटा बदलने से पहले ये चार चीज़ें जांचें",
      items: [
        { label: "अनुमति", text: "क्या उपयोगकर्ता कंपनी, ब्रांच, मॉड्यूल और फ़ील्ड तक पहुंच सकता है?" },
        { label: "स्थिति", text: "क्या पिछला वर्कफ़्लो चरण सफलतापूर्वक पूरा हुआ?" },
        { label: "अप्रूवल", text: "क्या कोई अपवाद या थ्रेशोल्ड अधिकार की प्रतीक्षा कर रहा है?" },
        { label: "कॉन्फ़िगरेशन", text: "क्या दर, सामग्री, फॉर्मूला, चरण या नियम सक्रिय है?" },
      ],
    },
  },
  workflowPage: {
    eyebrow: "एंड-टू-एंड प्रक्रिया",
    h1: "पूरे व्यवसाय में एक पीस को फॉलो करें।",
    lede: "हर चरण अगले चरण के लिए आवश्यक प्रमाण और स्थिति तैयार करता है। हैंडऑफ़ समझने के लिए एक चरण चुनें।",
    handoff: {
      eyebrow: "नियंत्रण बिंदु",
      h2: "इन हैंडऑफ़ को न छोड़ें",
      items: [
        { tag: "डिज़ाइन → ऑर्डर", title: "अप्रूव्ड, एक्टिव और कॉस्टेड", text: "उत्पादन प्रतिबद्धता से पहले डिज़ाइन और BOM अप्रूव्ड होना चाहिए।" },
        { tag: "उत्पादन → हॉलमार्क", title: "QC पास", text: "वज़न, स्टोन काउंट, फिनिश और डिफेक्ट जांच पूरी होनी चाहिए।" },
        { tag: "हॉलमार्क → बिक्री", title: "HUID मैप्ड और टैग्ड", text: "हॉलमार्क पहचान बिल्कुल उसी तैयार पीस की होनी चाहिए।" },
        { tag: "बिक्री → खाते", title: "इनवॉइस और भुगतान पोस्ट", text: "करेंसी और प्योरिटी-वाइज़ मेटल मूवमेंट एक साथ रिकंसाइल होने चाहिए।" },
      ],
    },
  },
  modulesPage: { eyebrow: "सभी उत्पाद क्षेत्र", h1: "13 मॉड्यूल। एक जुड़ा व्यवसाय।", lede: "उद्देश्य, उपयोगकर्ता, अलग-अलग कार्य और चरण-दर-चरण निर्देशों के लिए कोई मॉड्यूल खोलें।" },
  finder: { placeholder: "बिलिंग, HUID, जॉब कार्ड, रिपोर्ट खोजें…", clear: "साफ़ करें", openModule: "मॉड्यूल खोलें", noMatch: "कोई मेल खाता मॉड्यूल नहीं। “production”, “stock” या “accounts” आज़माएं।", showAll: "सभी मॉड्यूल दिखाएं", browseAll: "सभी 13 मॉड्यूल ब्राउज़ करें →" },
  workflowExplorer: {
    stage: "चरण",
    output: "आउटपुट",
    steps: [
      { title: "डिज़ाइन", text: "कैटलॉग डिज़ाइन बनाएं, उसका BOM अप्रूव करें और कॉस्टिंग की पुष्टि करें।", output: "अप्रूव्ड डिज़ाइन + BOM", readLabel: "डिज़ाइन गाइड पढ़ें" },
      { title: "ऑर्डर", text: "विवरण, डिलीवरी वादा, रेट लॉक और ग्राहक एडवांस बुक करें।", output: "उत्पादन प्रतिबद्धता", readLabel: "ऑर्डर गाइड पढ़ें" },
      { title: "खरीद", text: "खरीद ऑर्डर जारी करें, सामग्री प्राप्त करें और सप्लायर इनवॉइस रिकंसाइल करें।", output: "स्वीकृत कच्चा माल", readLabel: "खरीद गाइड पढ़ें" },
      { title: "उत्पादन", text: "धातु और स्टोन जारी करें, चरण ट्रैक करें, वेस्टेज गणना करें और QC पूरा करें।", output: "QC-पास पीस", readLabel: "उत्पादन गाइड पढ़ें" },
      { title: "हॉलमार्क", text: "AHC बैच बनाएं, आइटम प्राप्त करें और उसका HUID मैप करें।", output: "अनुरूप हॉलमार्क पीस", readLabel: "हॉलमार्क गाइड पढ़ें" },
      { title: "बिक्री", text: "तैयार स्टॉक टैग करें, लाइव दरें और GST लागू करें, फिर भुगतान लें।", output: "ट्रेस करने योग्य इनवॉइस", readLabel: "बिक्री गाइड पढ़ें" },
      { title: "खाते", text: "करेंसी लेजर और प्योरिटी-वाइज़ मेटल लेजर को एक साथ रिकंसाइल करें।", output: "संतुलित पैसा + धातु", readLabel: "खाते गाइड पढ़ें" },
    ],
  },
  moduleDetail: {
    onThisPage: "इस पेज पर",
    guideLabel: "गाइड",
    howToUse: "इसका उपयोग कैसे करें",
    goodToKnow: "जानना ज़रूरी है",
    nextModule: "बड़ी तस्वीर चाहिए?",
    nextModuleCta: "देखें यह मॉड्यूल पूरे वर्कफ़्लो में कहां फिट होता है →",
    breadcrumbDocs: "दस्तावेज़ीकरण",
    breadcrumbModules: "मॉड्यूल",
    englishOnlyNote: "यह विस्तृत गाइड फ़िलहाल केवल अंग्रेज़ी में उपलब्ध है।",
  },
  moduleCards: [
    { title: "डिज़ाइन और कॉस्टिंग", purpose: "किसी विचार को धातु हिलने से पहले एक अप्रूव्ड, कॉस्टेड डिज़ाइन में बदलें।", audience: "डिज़ाइनर, मर्चेंडाइज़र, मैनेजर" },
    { title: "ऑर्डर प्रबंधन", purpose: "ग्राहक की मंशा को ट्रैक किए गए उत्पादन या स्टॉक प्रतिबद्धता में बदलें।", audience: "सेल्स, सर्विस, प्रोडक्शन प्लानर" },
    { title: "खरीद", purpose: "धातु, स्टोन, फाइंडिंग्स और बाहरी सेवाओं की खरीद, प्राप्ति और भुगतान करें।", audience: "खरीद टीम, स्टोर, खाते" },
    { title: "कच्चा माल इन्वेंटरी", purpose: "जानें बिल्कुल कौन सी सामग्री उपलब्ध है, कहां है और उसका मूल्यांकन कैसे किया गया है।", audience: "स्टोरकीपर, प्लानर, ऑडिटर" },
    { title: "उत्पादन और विनिर्माण", purpose: "जॉब कार्ड, सामग्री कस्टडी, चरण, गुणवत्ता, वेस्टेज और कारीगर बैलेंस को नियंत्रित करें।", audience: "उत्पादन, कारीगर, QC, स्टोर" },
    { title: "हॉलमार्किंग और अनुपालन", purpose: "पात्र आइटम हॉलमार्किंग के लिए भेजें, HUID मैप करें और अनुपालन अपवादों पर निगरानी रखें।", audience: "अनुपालन, QC, डिस्पैच" },
    { title: "तैयार माल इन्वेंटरी", purpose: "हर बिक्री-योग्य पीस को टैग करें, मूल्यांकित करें और मॉनिटर करें।", audience: "स्टोर, मर्चेंडाइज़िंग, ब्रांच" },
    { title: "बिक्री और बिलिंग", purpose: "तैयार स्टॉक को सही ढंग से टैक्स किए गए, ट्रेस करने योग्य राजस्व में बदलें।", audience: "काउंटर, थोक, निर्यात, खाते" },
    { title: "CRM और ग्राहक प्रबंधन", purpose: "ग्राहक इतिहास, KYC, बचत योजनाएं और संचार को एक साथ रखें।", audience: "सेल्स, सर्विस, मार्केटिंग" },
    { title: "खाते और वित्त", purpose: "मानक वित्तीय बहीखातों को बनाए रखते हुए पैसे और धातु को रिकंसाइल करें।", audience: "अकाउंटेंट, फाइनेंस, मालिक" },
    { title: "HR और पेरोल", purpose: "स्टाफ रिकॉर्ड, उपस्थिति और उत्पादन से जुड़े कारीगर वेतन बनाए रखें।", audience: "HR, पेरोल, प्रोडक्शन अकाउंट्स" },
    { title: "एडमिन और कॉन्फ़िगरेशन", purpose: "बिना कस्टम कोड के सामग्री, प्राइसिंग, चरण, अप्रूवल, एक्सेस और ब्रांच को अनुकूलित करें।", audience: "एडमिनिस्ट्रेटर, मालिक" },
    { title: "रिपोर्ट और डैशबोर्ड", purpose: "ऑपरेशनल, स्टॉक और वित्तीय डेटा को दैनिक निर्णयों में बदलें।", audience: "मालिक, मैनेजर, विश्लेषक" },
  ],
};

export const translations: Record<Lang, Dict> = { en, hi };
