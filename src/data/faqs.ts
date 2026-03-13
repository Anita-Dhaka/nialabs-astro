export const headerData = [
  { path: "#general", headerName: "General Questions", textColor: "gray.700" },
  { path: "#product", headerName: "Products & Technology", textColor: "gray.700" },
  { path: "#integration", headerName: "Software, APIs & Integration", textColor: "gray.700" },
  { path: "#security", headerName: "Security, Privacy & Reliability", textColor: "gray.700" },
  { path: "#support", headerName: "Deployment, Installation & Support", textColor: "gray.700" },
  { path: "#pricing", headerName: "Cost, Licensing & Purchasing", textColor: "gray.700" },
  { path: "#trends", headerName: "Scalability, Future & Trends", textColor: "gray.700" },
];

export const faqsData = {
  general: [
    { question: "What is Nialabs and what does it offer?", solution: "Nialabs provides AI-powered biometric devices and cloud APIs for secure attendance and access management in schools and businesses." },
    { question: "What makes Nialabs biometric devices different from others in the market?", solution: "Nialabs combines AI accuracy, cloud connectivity, and real-time integration, making devices smarter and more reliable than traditional solutions." },
    { question: "Which customers and industries does Nialabs typically serve?", solution: "Nialabs serves schools, colleges, offices, factories, and organizations needing advanced attendance and security solutions." },
    { question: "Where is Nialabs based and which regions does it serve across India?", solution: "Nialabs is based in Jaipur and serves clients across India with remote support and delivery." },
    { question: "Does Nialabs work with partners, distributors, or resellers?", solution: "Yes, Nialabs collaborates with resellers and partners to deliver solutions nationwide." }
  ],
  product: [
    { question: "What types of biometric devices does Nialabs provide?", solution: "We provide specialized biometric devices for time attendance, access control, and specialized use cases." },
    { question: "Does Nialabs offer fingerprint, face-recognition, or hybrid biometric machines?", solution: "Yes, we offer all three. We have dedicated fingerprint devices, advanced face-recognition terminals, and hybrid machines supporting multiple modalities." },
    { question: "Are Nialabs biometric devices AI-powered, and what does that mean?", solution: "Yes, our face recognition devices use AI for advanced liveness detection to prevent spoofing using photos or masks, and ensure lightning-fast processing." },
    { question: "Are Nialabs devices connected to the cloud?", solution: "Absolutely. All our modern devices sync attendance data instantly to the cloud without manual data extraction." },
    { question: "Do Nialabs devices support contactless operations such as face recognition, QR, or RFID?", solution: "Yes, our devices support 100% contactless operation via face recognition and RFID cards for hygiene and speed." },
    { question: "What is the maximum number of users or templates Nialabs devices can store?", solution: "Depending on the model, our devices scale from 1,000 users up to 50,000+ templates for enterprise applications." },
    { question: "Do Nialabs devices support multiple biometric modalities (face + fingerprint)?", solution: "Yes, hybrid models allow verification using face, fingerprint, RFID, or PIN." },
    { question: "How accurate are Nialabs biometric devices in terms of false accept/reject rates?", solution: "Our AI-powered algorithms maintain exceptional accuracy, typically offering a 99.9% acceptance rate." },
    { question: "Are Nialabs biometric devices suitable for outdoor or harsh environments?", solution: "Yes, we offer ruggedized IP65-rated models that are water and dust resistant for factory or outdoor use." },
    { question: "What type of biometric sensors does Nialabs use in its devices?", solution: "We use high-grade optical and capacitive fingerprint sensors alongside dual HD cameras." }
  ],
  integration: [
    { question: "What is the Nialabs biometric attendance API, and how does it work?", solution: "Our API allows developers to pull real-time attendance logs directly into their own systems." },
    { question: "Can Nialabs systems integrate with existing HR, payroll, or ERP software?", solution: "Yes, we seamlessly integrate with popular HRMS, ERP, and localized payroll software platforms." },
    { question: "Does Nialabs provide SDKs for mobile and desktop applications?", solution: "Yes, we provide comprehensive SDKs and REST APIs with extensive documentation for custom development." },
    { question: "How does Nialabs update and synchronize real-time data?", solution: "Devices push data immediately over Wi-Fi, LAN, or 4G directly to our redundant cloud servers." },
    { question: "Can the Nialabs API work with existing biometric machines?", solution: "It depends on the machine's protocol, but we specialize in integrating our own secure hardware." },
    { question: "Which programming languages and platforms does the Nialabs API support?", solution: "Our REST APIs are platform-agnostic and work globally with Node.js, Python, PHP, Java, and C#." },
    { question: "How does Nialabs deliver firmware updates for its devices?", solution: "We provide Over-The-Air (OTA) firmware updates seamlessly without disrupting device operation." },
    { question: "Does Nialabs provide a dashboard or portal to monitor attendance and devices?", solution: "Yes, we provide an intuitive centralized web dashboard to monitor device health and real-time logs." },
    { question: "Can Nialabs enable alerts and notifications for device performance or unusual activity?", solution: "Yes, customized SMS/email alerts can be configured for offline devices or restricted access attempts." },
    { question: "How does Nialabs manage user templates, data deletion, or profile changes through its API?", solution: "The API allows administrators to remotely enroll, transfer, or delete user templates from central servers." }
  ],
  security: [
    { question: "How does Nialabs ensure the security of data stored and transmitted by its devices?", solution: "Data is transmitted via TLS encryption and stored on secure cloud clusters with restricted access." },
    { question: "Does Nialabs use encryption for data in transit and at rest?", solution: "Yes, we implement enterprise-grade AES encryption for data at rest and TLS for transit." },
    { question: "How does Nialabs comply with privacy regulations and data protection standards?", solution: "We adhere strictly to data localization laws and ensure data privacy protocols are followed." },
    { question: "How does Nialabs prevent spoofing or fake biometric attempts?", solution: "Dual-lens AI cameras distinguish between flat images/videos and live 3D faces." },
    { question: "What happens if a Nialabs device loses internet connectivity?", solution: "The device stores logs natively (up to 100,000 logs) and syncs instantly when the internet returns." },
    { question: "Does Nialabs provide redundancy and backup for attendance data?", solution: "Yes, automated multi-region automated backups prevent data loss in extreme scenarios." },
    { question: "How reliable are Nialabs devices in terms of durability and performance?", solution: "Our devices undergo intense stress testing to run effortlessly 24/7 without thermal throttling." },
    { question: "Do Nialabs biometric devices have tamper-proof or anti-tampering features?", solution: "Yes, they include hardware tamper switches that trigger local alarms and push notifications." }
  ],
  support: [
    { question: "How does Nialabs handle the installation and setup of biometric devices?", solution: "We provide completely configured plug-and-play devices and offer remote step-by-step guidance." },
    { question: "Does Nialabs provide on-site installation and training?", solution: "Through our nationwide network of integration partners, on-site installation and hardware training is available." },
    { question: "What kind of support and maintenance services does Nialabs offer?", solution: "We offer telephonic, email, and live-chat technical support along with remote troubleshooting." },
    { question: "What is the Nialabs warranty policy for biometric devices?", solution: "Our devices come with a standard 1-year hardware warranty against manufacturing defects." },
    { question: "How can customers contact Nialabs for support or raise a ticket?", solution: "Customers can quickly raise a ticket via support@nialabs.in or call our dedicated helpline." },
    { question: "Does Nialabs customize solutions or offer integrations based on client requirements?", solution: "Yes, our engineering team undertakes custom API development and specific hardware integration requests." },
    { question: "What is the typical deployment timeline for Nialabs in schools or businesses?", solution: "Cloud implementations generally take 24-48 hours from delivery, simplifying immediate onboarding." },
    { question: "Does Nialabs charge for software upgrades or API enhancements?", solution: "General stability firmware updates are free, while major structural custom API changes may be billable." }
  ],
  pricing: [
    { question: "What is the cost structure for Nialabs biometric systems (hardware + software)?", solution: "Costs are broken down into a one-time hardware purchase and a modest annual cloud platform licensing fee." },
    { question: "Does Nialabs have recurring costs such as subscriptions, API usage, or support fees?", solution: "Yes, access to our proprietary cloud reporting and API infrastructure carries an annual subscription." },
    { question: "What licensing models does Nialabs offer (per device, per user, or enterprise)?", solution: "Standard licensing is per-device. For massive deployments, we can arrange enterprise block licensing." },
    { question: "Does Nialabs offer discounts for schools, bulk purchases, or multi-branch setups?", solution: "Yes, we proudly offer tailored educational discounts and volume-based pricing structures." },
    { question: "What payment methods and terms does Nialabs support?", solution: "We support NEFT, RTGS, UPI, and major credit/debit cards with transparent invoicing." },
    { question: "Can Nialabs biometric devices be purchased without API integration?", solution: "Absolutely. Devices can be used in standalone mode using USB exports or our free localized desktop software." }
  ],
  trends: [
    { question: "How does Nialabs ensure biometric systems scale as organizations grow?", solution: "Our elastic cloud architecture scales naturally from 1 device to 1,000+ devices seamlessly." },
    { question: "What new features or advancements is Nialabs working on for the future?", solution: "We are actively integrating predictive AI analytics, edge-computing face algorithms, and advanced mobile biometrics." },
    { question: "How does Nialabs stay ahead of trends in biometric and cloud-based technology?", solution: "By maintaining our own core R&D division and collaborating with global hardware innovators constantly." }
  ]
};