export interface CityPoint { icon: string; text: string; }
export interface IndustryPoint { icon: string; title: string; desc: string; }
export interface DevicePoint { icon: string; title: string; machine?: string; desc: string; }
export interface Testimonial { desc: string; position: string; place: string; district?: string; }
export interface FAQ { question: string; solution: string; }

export interface CityData {
  route: string;
  metaTitle: string;
  metaDesc: string;
  heading: string;
  subHeading: string;
  image: string;
  desc: string[];
  whyNia: { title: string; points: CityPoint[] };
  features: { title: string; desc: string; points: CityPoint[] };
  industries: { title: string; points: IndustryPoint[] };
  deviceOffer: { title: string; points: DevicePoint[] };
  whyBetter: { title: string; desc: string; points: CityPoint[] };
  testimonials: { title: string; points: Testimonial[] };
  faqs: FAQ[];
  cta: { title: string; desc: string[] };
}

export const cityData: CityData[] = [
  {
    route: "biometric-attendance-system-in-bangalore",
    metaTitle: "Biometric Attendance System Bangalore | Face & Fingerprint",
    metaDesc: "Make attendance tracking in Bangalore effortless with Nialabs biometric solutions. Face & Fingerprint attendance system powered by AI, cloud access, HRMS & Payroll integration, GPS-based attendance & dependable local support.",
    heading: "Bangalore",
    subHeading: "Biometric Attendance Machine in Bangalore – Face Recognition, Fingerprint & Payroll Integration",
    image: "/cityImages/Banglore.webp",
    desc: [
      "Bangalore is the capital of India's technology & innovation industry and hosts IT companies, startups, manufacturing units, educational and healthcare institutions. With a wide range of work schedules, including flexible hours, multiple shifts, and a large number of employees, companies here need a smart, automated attendance management system.",
      "Our robust biometric attendance system in Bangalore helps manage offices, factories, schools, hospitals, and retail chains by providing an efficient attendance solution that captures attendance accurately and integrates with payroll, HRMS, School ERP, etc.",
    ],
    whyNia: {
      title: "Why Organisations in Bangalore Choose Nialabs",
      points: [
        { icon: "ai", text: "High-precision Face and Fingerprint Recognition System" },
        { icon: "cloud", text: "Multi-Centre Cloud-Based Attendance System" },
        { icon: "speed", text: "Rapid implementation in Bangalore and around industrial clusters" },
        { icon: "time", text: "Leave, Shifts management, work time & OT calculation, all are automated." },
        { icon: "spoofing", text: "Removes Proxy attendance & manual errors" },
        { icon: "kiosk", text: "Seamless high-traffic / low-light friendly user operation" },
        { icon: "reporting", text: "Parents' alert system for schools & colleges" },
        { icon: "integration", text: "Seamless integration with HRMS, Payroll & ERP solutions" },
      ]
    },
    features: {
      title: "Features of Nialabs Biometric Attendance System",
      desc: "Nialabs provides end-to-end attendance solutions for today's work environment, including:",
      points: [
        { icon: "ai", text: "AI-powered face recognition with speed response" },
        { icon: "kiosk", text: "Various attendance methods: face, fingerprint & RFID" },
        { icon: "mobile", text: "Mobile attendance app for field & hybrid workforce" },
        { icon: "time", text: "Shift rostering, overtime calculation, & absentee tracking" },
        { icon: "gps", text: "GPS attendance with geofencing features" },
        { icon: "integration", text: "Automatic synchronization with HRMS/ERP and payroll solution" },
        { icon: "team", text: "Optional modules: access control and visitor management systems" },
        { icon: "security", text: "Liveness protection with a secure biometric device" },
        { icon: "setup", text: "Easy setup and plug-and-play" },
        { icon: "analytics", text: "Detailed reports and live analytics" },
      ]
    },
    industries: {
      title: "Industries We Serve in Bangalore",
      points: [
        { icon: "/headerImages/industries/resident.webp", title: "IT & Technology Firms ( Whitefield, Electronic city, outer ring road)", desc: "Centralised attendance management for tech parks and corporates" },
        { icon: "/headerImages/industries/school.webp", title: "Schools & Colleges ( Bangalore & Suburbs)", desc: "Students and staff attendance with instant alerts to parents" },
        { icon: "/headerImages/industries/Healthcare.webp", title: "Hospitals & Clinics", desc: "Attendance for the medical administrative & support team" },
        { icon: "/headerImages/industries/enterprise.webp", title: "Production Units (Peenya, Bommasandra, Hosur Road)", desc: "Rugged biometric devices for multi-shift factory floor operations." },
        { icon: "/headerImages/industries/parking.webp", title: "Automobile & Engineering", desc: "Secure attendance tracking in a regulated workplace" },
        { icon: "/headerImages/industries/retail.webp", title: "Retail Chains & Supermarkets", desc: "Attendance monitoring across multiple outlets" },
        { icon: "/headerImages/industries/warehouse.webp", title: "Logistics & Warehousing", desc: "Shift-wise attendance with GPS-based location details" },
        { icon: "/headerImages/industries/cowork.webp", title: "Start-ups & Co-working spaces", desc: "Adaptable, expandable solutions for meeting the requirements of a developing enterprise" },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer",
      points: [
        { icon: "/product/ai04/242.webp", title: "AI Face Recognition Device", machine: "N-AI06", desc: "High-speed AI face recognition device for the user identification of a large database. Mask detection and anti-proxy attendance functions make it applicable to offices, campuses, factories, and transit areas." },
        { icon: "product/ai10/235.webp", title: "Fingerprint & Dual Authentication Device", machine: "N-AI07F", desc: "Both fingerprint and face recognition are supported for higher security. For reliable performance in industrial and outdoor environments." },
        { icon: "product/ai09/239.webp", title: "Multimodal attendance and access control device", desc: "Face, fingerprint, or RFID-based attendance and access control for office, school & industry." },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Bangalore",
      desc: "At Nialabs, hardware delivery is only the beginning –we give organizations the power to develop automated workflows.",
      points: [
        { icon: "team", text: "Dedicated team for Bangalore & Karnataka region" },
        { icon: "globe", text: "Single cloud system to track attendance in multiple centres" },
        { icon: "cost", text: "Clear AMC & Warranty Pricing" },
        { icon: "ai", text: "Superior AI-based algorithms for the best accuracy" },
        { icon: "check", text: "Basic solution for education, business & enterprise" },
        { icon: "integration", text: "Seamless integration with HRMS, ERP, and Payroll solutions." },
        { icon: "speed", text: "Rapid deployment usually within 1-2 business days." },
        { icon: "security", text: "Focus on data privacy and system security." },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        { desc: "\u201cIt\u2019s now easy for us to manage the attendance of our Bangalore offices.\u201d", position: "HR Manager,", place: "IT Company,", district: "Whitefield" },
        { desc: "\u201cAttendance in our school is hassle-free, and parents get regular updates.\u201d", position: "Principal,", place: "International School,", district: "Bangalore" },
        { desc: "\u201cFrom a single dashboard, we can check the attendance of all the outlets.\u201d", position: "Regional Manager,", place: "Retail Chain" },
        { desc: "\u201cNow tracking of shifts and overtime is precise and system-based.\u201d", position: "Operations Head,", place: "Manufacturing Unit,", district: "Peenya" },
      ]
    },
    faqs: [
      { question: "Can biometrics be used to track flexible working hours?", solution: "Yes, you can have flex shifts, grace periods, and other custom shift rules." },
      { question: "Is biometric attendance a good fit for the hybrid work culture in Bangalore?", solution: "Yes, it allows attendance on the mobile device with GPS for hybrid and remote teams." },
      { question: "Is it applicable to work from different offices in Bangalore?", solution: "Yes, you can control all the branches from a single cloud location." },
      { question: "Is the biometric information saved securely?", solution: "Yes, the data is encrypted and stored in a secure cloud system." },
      { question: "Can we use the attendance reports as such for payroll?", solution: "Yes, the reports are exportable into other formats that may be compatible with your payroll system." },
      { question: "Can the face recognition system function in a dark environment?", solution: "Yes, it is built to run accurately on classroom, outdoor gate, and factory door." },
      { question: "What is the average timeline for installation?", solution: "Most of the installations are completed in one day, including setup and minimal user training." },
      { question: "Is there local technical support in Bangalore?", solution: "Yes, Nialabs offers quick on-site and remote assistance in the Bangalore area." },
    ],
    cta: {
      title: "Want to automate attendance in Bangalore?",
      desc: ["Have a precise, speedy, and safe attendance at work/school in Bangalore.", "Book your free demo with Nialabs now!"],
    }
  }, {
    route: "biometric-attendance-system-in-maharashtra",
    metaTitle: "Biometric Attendance System Maharashtra | Face & Fingerprint",
    metaDesc: "Automate workforce tracking with Nialabs’ biometric attendance system in Maharashtra. Face & fingerprint devices, cloud reports, payroll sync, GPS tracking & local support.",
    heading: "Maharashtra",
    image: "/cityImages/Maharashtra.webp",
    subHeading: "Accurate monitoring is a necessity. Nialabs offers superior-quality, AI-enabled biometric solutions for schools, colleges, IT parks, and factories across Mumbai, Pune, Nagpur, and Nashik.",
    desc: [
      "Accurate monitoring of attendance is a necessity in a growing state like Maharashtra to run its machinery smoothly. Nialabs offers a superior-quality biometric attendance system for schools, colleges, IT parks, factories, hospitals, retail chains, and many other industries. This system is 100% accurate, provides real-time data, eliminates proxy attendance, offers complete integration with HR and payroll, and even includes a school ERP solution.",
      "Whether you run a corporate office in Mumbai, a manufacturing unit in Pune, or a school in Nashik or Nagpur, Nialabs delivers the finest biometric solutions tailored to your needs.",
    ],
    whyNia: {
      title: "Why Organisations in Maharashtra Choose Nialabs",
      points: [
        {
          icon: "/homePage/identification.png",
          text: "High-accuracy AI-enabled face & fingerprint recognition devices",
        },
        {
          icon: "/homePage/server.png",
          text: "Cloud-based attendance from anywhere at your fingertips",
        },
        {
          icon: "/homePage/metrics.png",
          text: "Rapid deployment throughout the major cities of Maharashtra",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Automated shift, OT, and leave management",
        },
        {
          icon: "/homePage/encrypted.png",
          text: "No proxy or paperwork errors",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Operates in dim lighting, at outdoor sites, and in busy school entrances",
        },
        {
          icon: "/homePage/notification.webp",
          text: "Parental notification support for schools",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Simple integration with payroll & School ERP system",
        },
      ]
    },
    features: {
      title: "Features of Nialabs Biometric Attendance System",
      desc: "Our biometric solution is designed with next-generation automation & security:",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "AI Face Recognition (<0.3 sec)",
        },
        {
          icon: "/homePage/identification.png",
          text: "Access via Fingerprint or RFID",
        },
        {
          icon: "/homePage/location.png",
          text: "GPS + Mobile Attendance App",
        },
        {
          icon: "/homePage/seo-report.png",
          text: "Shift, Overtime & Leave Management",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Geofencing for field staff",
        },
        {
          icon: "/homePage/api.png",
          text: "Auto-sync with HRMS & ERP",
        },
        {
          icon: "/homePage/visitors.png",
          text: "Visitor & Access Control Module",
        },
        {
          icon: "/homePage/encrypted.png",
          text: "Anti-spoofing and tamper-proof hardware",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Plug and play installation ",
        },
        {
          icon: "/homePage/code-review.png",
          text: "One-click analytics & reports",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Maharashtra",
      points: [
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "IT & Software Companies (Mumbai, Pune, Navi Mumbai)",
          desc: "Unified Attendance, Access Control, and Analytics for big teams",
        },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges ( Mumbai, Pune, Nagpur, Nashik)",
          desc: "Attendance of students & staff in real-time, with an alert to parents",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics",
          desc: "Accurate monitoring of 24/7 shift attendance",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Manufacturing Units (Chakan, Pimpri-Chinchwad, Aurangabad)",
          desc: "Factory-suitable rugged devices",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering",
          desc: "Precise logs for skilled and contract workers",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail & Supermarkets",
          desc: "Branch-level attendance with central monitoring",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Logistics & Warehousing",
          desc: "GPS attendance+ shift reporting for large teams",
        },
        {
          icon: "/headerImages/industries/event.webp",
          title: "Hotels & Hospitality",
          desc: "Smooth attendance for operations and housekeeping",
        },
        // {
        //   icon: "",
        //   title: "Startups & Co-working Spaces",
        //   desc: "Affordable and scalable for growing teams",
        // },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "Advanced Facial Recognition",
          machine: "N-AI06",
          desc: "High-speed AI hardware with high accuracy to scan large databases, implement Mask detection and anti-proximal, best suited for office, campus, and smart bus systems.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Fingerprint + Two-Factor Security",
          machine: "N-AI07F",
          desc: "Integrates fingerprint and face recognition to ensure security and accuracy, and works well with wet hands, dust, and outdoor lighting conditions.",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multi-Modal Authentication and Access Control",
          desc: "Products such as the N-AI07 support face, fingerprint, RFID, and QR code, allowing efficient attendance and access control for business, school, and industrial establishments.",
        },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Maharashtra",
      desc: "At Nialabs, we do not just provide a device; instead, we simplify your whole attendance process.",
      points: [
        {
          icon: "/homePage/customer-service.png",
          text: "Dedicated support team in Mumbai, Pune & Nagpur",
        },
        {
          icon: "/homePage/server.png",
          text: "Comprehensive cloud-based attendance solution"
        },
        {
          icon: "/homePage/encrypted.png",
          text: "Cost-effective AMC and warranty facilities",
        },
        {
          icon: "/homePage/artificial-intelligence.webp",
          text: "High-precision AI Models",
        },
        {
          icon: "/homePage/education.png",
          text: "Tailored solutions for schools & Enterprises",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Integration with HRMS, ERP & Payroll",
        },
        {
          icon: "/homePage/metrics.png",
          text: "Raipd installation (1-2 days)",
        },
        {
          icon: "/homePage/access-control.png",
          text: "Robust data security and privacy commitments",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“Nialabs automated our attendance tracking across our Mumbai & Pune offices with great accuracy.”",
          position: "HR Manager",
          place: "IT Company in BKC,",
          district: "Mumbai",
        },
        {
          desc: "Our school in Nagpur is busy with 2k plus students on a day-to-day basis. “Nialabs handles the rush with ease.”",
          position: "Principal",
          place: "Nagpur CBSE School",
        },
        {
          desc: "“Our unit at Chakan experienced greater error reduction and enhanced shift monitoring.”",
          position: "Plant Head,",
          place: "Pune Automotive Unit",
        },
        {
          desc: "Good quality hardware. “Reports are immediately accessible in all Maharashtra outlets.”",
          position: "Regional Manager,",
          place: "Retail Chain,",
          district: "Mumbai",
        },
        // {
        //   desc: "“Supported by dependable 24/7 assistance. Ideal system for Hospitals and Multishift working.”",
        //   position: "Admin Manager,",
        //   place: "Nashik Hospital",
        // },
      ]
    },
    faqs: [
      {
        question: "Can we use Nialabs for student as well as staff attendance in schools?",
        solution: "Yes, it includes student attendance, teacher attendance, parent notifications, and monthly summaries.",
      },
      {
        question: "Will it apply to my various branches in Maharashtra?",
        solution: "Absolutely, you can take attendance from Mumbai, Pune, Nagpur, Nashik, etc.",
      },
      {
        question: "Is the system of face recognition secure and compliant with norms?",
        solution: "Yes, Nialabs employs secure, encrypted algorithms that are compliant with the indian data regulations.",
      },
      {
        question: "How does the system perform in low-light or outdoor entrances?",
        solution: "The AI is designed for low-light classrooms, high-glare outdoor entrances, and factory gates.",
      },
      {
        question: "Can parents be notified when students enter/leave school?",
        solution: "Yes, schools are able to turn on text or notifications.",
      },
      {
        question: "What happens if the internet goes down?",
        solution: "Attendance is taken offline and then automatically synchronized when the device comes back online.",
      },
      {
        question: "Are these applicable to school timetables and industry work rosters as well?",
        solution: "Yes, periods and schedules, and working shifts are fully supported.",
      },
      {
        question: "Is it possible to integrate it with a payroll or an ERP system?",
        solution: "Yes, it is possible to integrate with HRMS, payroll, and school ERP.",
      },
    ],
    cta: {
      title: "Ready to automate attendance in Maharashtra?",
      desc: [
        "Now get precision, speed, and security in attendance at work or school in Maharashtra.",
        "Book your free demo with Nialabs today!",
      ],
    }
  },
  {
    route: "biometric-attendance-system-in-chandigarh",
    metaTitle: "Biometric Attendance System Chandigarh | Face & Fingerprint",
    metaDesc: "Simplify monitoring of attendance in Chandigarh with the assistance of Nialabs attendance solutions. AI face and fingerprint recognition, cloud access, payroll module, GPS attendance, and trusted local support.",
    heading: "Chandigarh",
    image: "/cityImages/chandigarh.webp",
    subHeading: "Reliable biometric attendance across Chandigarh, Mohali, and Panchkula for accurate, proxy-free workforce management.",
    desc: [
      "As Chandigarh becomes the Centre of administration and business, even minor establishments require strict attendance monitoring. Nialabs offers a trusted biometric attendance system for educational institutions, such as schools and colleges, offices, hospitals, factories, and retail organizations, with real-time monitoring, proxy prevention, and integration with payroll, HRMS, and school ERP.",
      "From Chandigarh IT Park to schools & industrial units in Mohali and Panchkula, Nialabs has been providing attendance solutions that cater to the specific needs of the local workplaces day in and day out.",
    ],
    whyNia: {
      title: "Why Organisations in Chandigarh Choose Nialabs",
      points: [
        {
          icon: "/homePage/identification.png",
          text: "High-accuracy AI-based face & fingerprint recognition system",
        },
        {
          icon: "/homePage/server.png",
          text: "Safe and cloud-driven attendance monitoring system",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Fast launch in Chandigarh, Mohali & Panchkula",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Automate shifts, OT & Leave rules management ",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "Removes proxy attendance and reduces manual errors",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Works reliably in dim light, outdoor gates, and crowded environments",
        },
        {
          icon: "/homePage/notification.webp",
          text: "Parent alert features for schools",
        },
        {
          icon: "/homePage/api.png",
          text: "Seamless integration with payroll & School ERP systems",
        },
      ]
    },
    features: {
      title: "Features of Nialabs Biometric Attendance System",
      desc: "Our biometric solution is designed with next-generation automation & security:",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "Ultra-quick AI face recognition (0.3 seconds)",
        },
        {
          icon: "/homePage/identification.png",
          text: "Attendance with RFID and Fingerprint",
        },
        {
          icon: "/homePage/location.png",
          text: "Mobile attendance app with GPS",
        },
        {
          icon: "/homePage/accountant.webp",
          text: "Flexible shift planning, overtime, and leave management",
        },
        {
          icon: "/homePage/check.png",
          text: "Geofencing for remote and ground working staff",
        },
        {
          icon: "/homePage/api.png",
          text: "Seamless data sync with HRMS and ERP solutions",
        },
        {
          icon: "/homePage/visitors.png",
          text: "Support for visitor tracking and access control",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "Secure, tamperproof, and anti-spoofing hardware",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Seamless, plug-and-play setup",
        },
        {
          icon: "/homePage/seo-report.png",
          text: "Advanced analytics and downloadable reports",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Chandigarh",
      points: [
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "IT & Technology Firms (Chandigarh IT Park, Mohali)",
          desc: "Unified attendance & access control solutions for an expanding workforce",
        },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges ( Chandigarh, Panchkula, Mohali)",
          desc: "Student and staff attendance monitoring and alerts to parents in real-time",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics",
          desc: "Accurate monitoring of 24/7 shift attendance",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Manufacturing Units (Mohali, Baddi, Derabassi)",
          desc: "Robust biometric hardware for industrial environments",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering",
          desc: "Precise attendance for skilled & contractual workers",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail Stores & Supermarkets",
          desc: "Attendance at the branch level with a centralized report",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Logistics & Warehousing Operations",
          desc: "Shift level reporting with GPS-based attendance",
        },
        {
          icon: "/headerImages/industries/complex.webp",
          title: "Hotels & Hospitality Sector",
          desc: "Seamless attendance monitoring for operational & service team members",
        },
        // {
        //   icon: "",
        //   title: "Startups & Co-working Spaces",
        //   desc: "Flexible and affordable attendance management solutions",
        // },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer - Products",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "Advanced Facial Recognition",
          machine: "N-AI06",
          desc: "A high-precision user identification AI machine for large-scale databases at high speed and high accuracy. It comes with mask detection and anti-proximal attendance, making it suitable for use in offices, campuses, and transportation solutions.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Fingerprint with Dual Authentication",
          machine: "N-AI07F",
          desc: "Employs fingerprint and facial recognition authentication to provide enhanced security. It should run seamlessly in harsh environments such as rain, dust , or direct sunlight.",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multi-Mode Access Control & Attendance Terminals",
          desc: "As with other models, the N-AI07 supports face, fingerprint, RFID, and QR code for attendance and access control solutions in education, corporate, and industrial environments.",
        },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Chandigarh",
      desc: "Unlike most of the other biometric attendance systems in the market, at Nialabs, we don’t just sell you the hardware; we collaborate with you to develop intelligent, automated attendance solutions.",
      points: [
        {
          icon: "/homePage/support.webp",
          text: "Excellent Service & Support in Chandigarh Tricity",
        },
        {
          icon: "/homePage/roll-call.png",
          text: "Full attendance system on the cloud"
        },
        {
          icon: "/homePage/save-money.webp",
          text: "Affordable service and warranty plans",
        },
        {
          icon: "/homePage/face-scan.png",
          text: "Sophisticated AI models with high recognition rates",
        },
        {
          icon: "/homePage/education.png",
          text: "Customised solutions for education and enterprise",
        },
        {
          icon: "/homePage/api.png",
          text: "Fully Integrated with HRMS, Payroll, and ERP",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Quick setup within 1-2 business days",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "User privacy and the security of data are guaranteed",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“Attendance tracking for our Admin staff and IT Department is now fully centralized and accurate.”",
          position: "Operations Manager,",
          place: "Government Service Vendor,",
          district: "Chandigarh",
        },
        {
          desc: "“We were working with manual registers and delays. Nialabs enabled us to smoothly take attendance digitally across our campus.”",
          position: "Director,",
          place: "Private College,",
          district: "Chandigarh",
        },
        {
          desc: "“Our site supervisors work from site to site daily. GPS attendance and geofencing have contributed to full transparency.”",
          position: "Project Manager,",
          place: "Infrastructure Firm,",
          district: "Mohali",
        },
        {
          desc: "“System is smoothly managing the late-night shifts and multiple shift schedules.”",
          position: "HR co-ordinator,",
          place: "Multi-speciality Hospital,",
          district: "Panchkula",
        },
        // {
        //   desc: "“ We were looking for a platform that could grow with our expanding team. Nialabs came under our budget and was in line with our vision for the future.”",
        //   position: "Founder,",
        //   place: "Startup company,",
        //   district: "Chandigarh ",
        // },
      ]
    },
    faqs: [
      {
        question: "Can such a fingerprint system be installed in a government office or an administrative block?",
        solution: "Yes, the system has now become standard in offices, government offices, and compliance environments to provide a true and auditable attendance log.",
      },
      {
        question: "Can it be used for rotating and night shifts?",
        solution: "Definitely, it supports flexible shift patterns, working at night, rotating duties, and overtime calculation.",
      },
      {
        question: "Is it for an outdoor entry point or open campus use?",
        solution: "Yes, these are made for outdoor use and for entry gates, and they can handle high traffic.",
      },
      {
        question: "Can the employees mark attendance from mobile phones?",
        solution: "Yes, you can allow your team members to attend using the secure mobile attendance app with GPS and geofencing to capture attendance.",
      },
      {
        question: "How long does the installation take?",
        solution: "The majority of the installations are done in one day, with the device installation, software installation, and basic training.",
      },
      {
        question: "Can I view historical attendance data at any time?",
        solution: "Previous attendance logs and reports can be accessed through a secure cloud dashboard.",
      },
      {
        question: "Can the attendance policy be modified to meet my needs?",
        solution: "Yes, the policy on late arrivals, grace periods, length of breaks, or leave can be customized according to your needs.",
      },
      {
        question: "Do you train after deployment?",
        solution: "Yes, Nialabs supports the onboarding process and provides basic training to the admin and HR team.",
      },
    ],
    cta: {
      title: "Ready to automate attendance in Chandigarh?",
      desc: [
        "Now get precision, speed, and security in attendance at work or school in Chandigarh.",
        "Book your free demo with Nialabs today!",
      ],
    }
  },
  {
    route: "biometric-attendance-system-in-nagpur",
    metaTitle: "Biometric Attendance System Nagpur | Face & Fingerprint",
    metaDesc: "Track attendance accurately in Nagpur with Nialabs biometric solutions. Cloud dashboard, AI-based face and fingerprint recognition, GPS attendance, payroll integration, and dependable local support.",
    heading: "Nagpur",
    image: "/cityImages/nagpur.webp",
    subHeading: "Smart Biometric Attendance Solutions Powering Nagpur’s Growing Business & Education Ecosystem",
    desc: [
      "With the rapid growth of Nagpur as a strategic city for administration, education, logistics, and manufacturing, organizations, big and small, were forced to rely on the fingerprint for attendance management. Traditional attendance systems can not provide accuracy, accountability, or real-time visibility.",
      "From corporate offices located in Nagpur to education campuses and industrial units in Butibori and Hingna MIDC, Nialabs empowers organizations with attendance solutions that are plug-and-play in local conditions and can be customized to suit various environments.",
    ],
    whyNia: {
      title: "Why Organisations in Nagpur Choose Nialabs",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "AI-enabled face and fingerprint recognition with accuracy",
        },
        {
          icon: "/homePage/server.png",
          text: "Robust cloud-based attendance management",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Quick installation & training in Nagpur and surrounding regions",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Automated processing of shift work, overtime, and leave rules",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "Good prevention against proxies & fake attendance",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Reliable low-light performance for outdoor and high-traffic areas",
        },
        {
          icon: "/homePage/notification.webp",
          text: "Attendance alerts and notifications for parents in schools",
        },
        {
          icon: "/homePage/api.png",
          text: "Seamless integration with the payroll software and School ERP solutions",
        },
      ]
    },
    features: {
      title: "Features of Nialabs Biometric Attendance System",
      desc: "Our intelligent software and powerful hardware at the core of our biometric attendance system come together to offer a comprehensive solution:",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "Facial recognition powered by AI with sub-second identification speed",
        },
        {
          icon: "/homePage/identification.png",
          text: "Facial, fingerprint, RFID, QR, and other multiple attendance modes",
        },
        {
          icon: "/homePage/location.png",
          text: "Mobile attendance with GPS validation",
        },
        {
          icon: "/homePage/progress.png",
          text: "Customizable shift schedules and overtime calculations",
        },
        {
          icon: "/homePage/access-control.png",
          text: "Geofencing for field personnel and remote teams",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Centralized data synchronization with HRMS & ERP solutions",
        },
        {
          icon: "/homePage/access-control.png",
          text: "Access control and visitor logging features",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Antispoofing, tampering-resistant biometric devices",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Installation is fast and minimally disruptive to operations",
        },
        {
          icon: "/homePage/seo-report.png",
          text: "In-depth reports & analysis for audits and reviews",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Nagpur",
      points: [
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "IT & Technology Firms (Nagpur City, MIHAN)",
          desc: "Centralized attendance and access control management for efficiently expanding technology companies",
        },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges (Nagpur & Nearby Areas)",
          desc: "Student and staff attendance is monitored digitally, and parents receive timely notifications.",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics",
          desc: "Dependable 24 /7 attendance with rotating shift schedules in healthcare. ",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Manufacturing Units (Butibori, Hingna MIDC)",
          desc: "Heavy-duty biometric machines for industry and factory environments",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering",
          desc: "Accurate attendance of regular, contract, and technical employees",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail Store & Supermarkets",
          desc: "Branch-level attendance with cumulative reporting at HO",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Warehousing & Logistics Operations",
          desc: "GPS attendance with shift reports for mobile and field workers",
        },
        {
          icon: "/headerImages/industries/event.webp",
          title: "Hotel & Hospitality Industry",
          desc: "Effortless management of attendance and time-in/ time-out for front-office, service, and back-office employees",
        },
        // {
        //   icon: "",
        //   title: "Start-ups & Co-Working Spaces",
        //   desc: "Attendance products that can evolve with your business and are cost-effective",
        // },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer ",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "AI Facial Recognition Terminal",
          machine: "N-AI06",
          desc: "Designed for fast and accurate face recognition with a large-scale user database. Features include mask detection, anti-proxy, office, campus, and transport applications.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Dual Authentication Fingerprint Device",
          machine: "N-AI07F",
          desc: "Enables a higher level of security through the combined fingerprint and face verification. Particularly suitable for severe environmental conditions.",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multi-Mode Attendance and Access Control Device",
          desc: "It supports QR code, RFID card, Fingerprint, and facial recognition, the best for education, enterprise, and Industry Solutions.",
        },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Nagpur",
      desc: "",
      points: [
        {
          icon: "/homePage/seo-report.png",
          text: "Access to services locally or local support",
        },
        {
          icon: "/homePage/server.webp",
          text: "Fully cloud-based attendance system"
        },
        {
          icon: "/homePage/support.webp",
          text: "Transparent pricing & modifiable support options",
        },
        {
          icon: "/homePage/access-control.png",
          text: "Robust accuracy using advanced AI models",
        },
        {
          icon: "/homePage/blogger.png",
          text: "Customised solutions for schools, hospitals, and corporates",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Integration with payroll, HRMS, and ERP is simple",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Fast implementation in 1-2 working days",
        },
        {
          icon: "/homePage/encrypted.png",
          text: "Improved user data security and privacy",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“The attendance information of our teams is now up to date and can be viewed from a single dashboard”",
          position: "Head of Operations,",
          place: "Public Sector Vendor,",
          district: "Nagpur",
        },
        {
          desc: "“Taking attendance online in the entire campus has certainly minimized manual work.”",
          position: "Administrator,",
          place: "Private Educational Institution,",
          district: "Nagpur",
        },
        {
          desc: "“GPS attendance enabled us to keep an eye on site-based teams efficiently.”",
          position: "Project Lead,",
          place: "Infrastructure company,",
          district: "Nagpur",
        },
        {
          desc: "“Coordinating numerous shifts is now a much simpler task with this system.”",
          position: "HR Executive,",
          place: "Multi-Speciality Hospital,",
          district: "Nagpur",
        },
      ]
    },
    faqs: [
      {
        question: "Can biometric attendance be used for government or administrative offices?",
        solution: "Yes, the biometric attendance system is widely used by government offices and offices that deal with compliance to keep their records accurate and easy to audit.",
      },
      {
        question: "Are night shifts and rotating shifts accommodated in the system?",
        solution: "Yes, flexible shift patterns, night shifts, and overtime calculations can be managed.",
      },
      {
        question: "Can the devices be installed at outdoor entry points?",
        solution: "Yes, the equipment is built to endure outdoor and high-traffic areas with consistent performance.",
      },
      {
        question: "Do employees have access to mobile attendance?",
        solution: "Yes, employees can take attendance through a secure mobile app with GPS and geofencing verification.",
      },
      {
        question: "What is the average timeline for installation?",
        solution: "Most of the installations are completed in one day, including setup and minimal user training.",
      },
      {
        question: "When can I view my past attendance records?",
        solution: "Yes, historical attendance data and reports are accessible via the cloud dashboard.",
      },
      {
        question: "Do you offer training post-installation?",
        solution: "Yes, Nialabs provides onboarding support and training for basic administrators and HR teams after deployment.",
      },
    ],
    cta: {
      title: "Want to automate attendance in Nagpur?",
      desc: [
        "Implement the best biometric attendance system and manage your organisation in an easy and effective way.",
        "Book your free demo with Nialabs today!",
      ],
    }
  },
  {
    route: "biometric-attendance-system-in-pune",
    metaTitle: "Biometric Attendance System Pune | Face & Fingerprint",
    metaDesc: "Automate your time & attendance management in Pune with Nialabs Biometrics Systems. AI face & fingerprint devices, cloud reports, payroll & HRMS integration, GPS attendance, and quick local support.",
    heading: "Pune",
    image: "/cityImages/pune.webp",
    subHeading: "Best Biometric Attendance System in Pune for Schools, Offices & Industries",
    desc: [
      "With the growing importance of Pune as an IT, manufacturing, and educational centre, it requires accuracy in attendance. Nialabs provides a Smart Biometric Attendance System for Schools, Colleges, Offices, Industry, Hospitals, and Retail Chains that offers real-time monitoring, proxy elimination, and integration with Payroll, HRMS, and School ERP Solutions.",
      "From residential IT hubs like Hinjewadi and Baner, to industrial estates such as Chakan, and educational centres throughout Pune, Nialabs delivers biometric solutions customized to the ground realities.",
    ],
    whyNia: {
      title: "Why Organisations in Pune Choose Nialabs",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "Accurate AI Face and Fingerprint Recognition",
        },
        {
          icon: "/homePage/server.png",
          text: "Cloud-based attendance—access from anywhere",
        },
        {
          icon: "/homePage/distribution.png",
          text: "Fast delivery in Pune and other Industrial areas",
        },
        {
          icon: "/homePage/artificial-intelligence.webp",
          text: "Automation of shift, overtime, and leave management",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Stops buddy punching and human errors",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Reliable operation in low light conditions, at outdoor gates, and at high traffic access points",
        },
        {
          icon: "/homePage/notification.webp",
          text: "Support for Parent Notification for Schools",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Simple integration with payroll and School ERP",
        },
      ]
    },
    features: {
      title: "Features of Nialabs Biometric Attendance System",
      desc: "Nialabs integrates smart automation with enterprise-class security:",
      points: [
        {
          icon: "/homePage/face-scan.webp",
          text: "High-speed AI face recognition (under 0.3 seconds)",
        },
        {
          icon: "/homePage/identification.png",
          text: "Attendance options with Fingerprint and RFID",
        },
        {
          icon: "/homePage/location1.webp",
          text: "The GPS mobile attendance app is easy to use and an all-in-one tool",
        },
        {
          icon: "/homePage/report.webp",
          text: "Scheduling shifts, overtime tracking, and managing leave",
        },
        {
          icon: "/homePage/check.png",
          text: "Geofencing for remote and field teammates",
        },
        {
          icon: "/homePage/api.png",
          text: "Auto-sync with HRMS/ ERP system",
        },
        {
          icon: "/homePage/access-control.png",
          text: "Modules for access control systems and visitor management systems",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Tamper-resistant, anti-spoofing hardware",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Plug and play installation",
        },
        {
          icon: "/homePage/seo-report.png",
          text: "Detailed reports and one-click analytics",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Pune",
      points: [
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "IT & Technology Firms ( Hinjewadi, Baner, Kharadi)",
          desc: "Consolidated attendance and access management for big teams",
        },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges ( Pune City, Pimpri- Chinchwad)",
          desc: "Students and staff in real-time attendance with parent alerts",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics",
          desc: "Reliable attendance tracking for 24/7 and shift rotation",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Manufacturing Units (Chakan, Talegaon, Pimpri)",
          desc: "Robust factory suitable biometric devices",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering",
          desc: "Precise attendance records for both permanent and temporary workers",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail Store & Supermarkets",
          desc: "Attendance monitoring branches with central reporting",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Warehousing & Logistics Operations",
          desc: "GPS attendance with shift-wise reports",
        },
        {
          icon: "/headerImages/industries/event.webp",
          title: "Hotel & Hospitality Industry",
          desc: "Seamless attendance management for the operations and housekeeping teams",
        },
        // {
        //   icon: "",
        //   title: "Start-ups & Co-Working Spaces",
        //   desc: "Affordable and scalable solution for growing companies",
        // },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "Advanced Facial Recognition Device",
          machine: "N-AI06",
          desc: "A high-speed, high-accuracy AI device that can identify a user from a large database. Support mask detection and anti-proxy attendance suitable for office, campus, and transportation systems.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Fingerprint with Dual Authentication",
          machine: "N-AI07F",
          desc: "Employs Fingerprint and face recognition for enhanced security. Good performance in dust, rain, and outdoor conditions.",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multi-Modal Attendance and Access Control Device",
          desc: "N-AI07 and similar products support face, fingerprint, RFID, and QR code-based authentication, enabling more flexible attendance and access control for schools, offices, and industrial complexes",
        },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Pune",
      desc: "At Nialabs, we do more than provide biometric hardware- we assist in automating and simplifying an organization’s overall attendance process.",
      points: [
        {
          icon: "/homePage/support.webp",
          text: "Dedicated support team in Pune",
        },
        {
          icon: "/homePage/server.webp",
          text: "All-in-one cloud-based attendance system"
        },
        {
          icon: "/homePage/report.webp",
          text: "Economical warranty and AMC packages",
        },
        {
          icon: "/homePage/artificial-intelligence.webp",
          text: "Complex AI models with high recognition rates",
        },
        {
          icon: "/homePage/education.png",
          text: "Tailored solutions for schools and enterprises",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Seamless Integration with HRMS, ERP & Payroll",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Easy setup  with 1-2 working days",
        },
        {
          icon: "/homePage/medal.webp",
          text: "Emphasis on data security and privacy",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“Nialabs made it easy for us to track attendance for multiple offices in Pune without any manual work.”",
          position: "HR Manager,",
          place: "IT Company,",
          district: "Hinjewadi",
        },
        {
          desc: "“Our school entry timing is so hectic, but the system takes care of attendance for the students so flawlessly every single day.”",
          position: "Principal,",
          place: "CBSE School,",
          district: "Pune",
        },
        // {
        //   desc: "“Shift monitoring and overtime calculation are now fully automated in our factory.”",
        //   position: "Plant Operations Head,",
        //   place: "Chakan",
        // },
        {
          desc: "“The reports are readily available and accurate for all our outlets in Pune.”",
          position: "Regional manager,",
          place: "Retail Chain",
        },
        {
          desc: "“Dependable system and immediate support-perfect for hospitals that have more than one shift.”",
          position: "Admin Manager,",
          place: "Multispeciality Hospital,",
          district: "Pune",
        },
      ]
    },
    faqs: [
      {
        question: "Can both students and staff use this system?",
        solution: "Yes, the system distinguishes the different attendance logs of students, teaching, and non-teaching staff.",
      },
      {
        question: "Is it suitable for companies that have many branches in Pune?",
        solution: "Absolutely, attendance can be taken from multiple locations and accessed from a single cloud dashboard.",
      },
      {
        question: "Can the face recognition system function in a dark environment?",
        solution: "Yes, it has been developed to accurately run in classrooms, outdoor gates, and factory entrances.",
      },
      {
        question: "What if I don’t have internet access?",
        solution: "The attendance is taken offline and automatically synchronized when you have internet access again.",
      },
      {
        question: "Can parents get notified for attendance?",
        solution: "Yes, schools can choose to be notified via SMS or app when a student arrives, leaves, or is absent from the school",
      },
      {
        question: "Does it support shift and night duty roster? ",
        solution: "Yes, flexible shift regulations, night shifts, and overtime calculations are supported completely.",
      },
      {
        question: "Does it work with payroll and ERP software?",
        solution: "Yes, it is seamlessly integrated with HRMS, payroll, School ERP, etc.",
      },
      {
        question: "Can this be used for large campuses with multiple gates? ",
        solution: "Yes, you can install multiple biometric devices on gates, multiple buildings, and all of the data syncs to one central dashboard.",
      },
      {
        question: "Does the solution work for contract and temporary employees?",
        solution: "Yes, the attendance policy for permanent, contractual, and temporary staff can be customized accordingly.",
      },
      {
        question: "Can the attendance reports be exported for an audit or compliance review?",
        solution: "Definitely, reports can be generated for audits, inspections, and internal review in PDF or Excel formats.",
      },
    ],
    cta: {
      title: "Want to automate attendance in Pune city?",
      desc: [
        "Upgrade your school/organization to a reliable, fast, secure, and accurate biometric attendance system.",
      ],
    }
  },
  {
    route: "biometric-attendance-system-in-ahmedabad",
    metaTitle: "Biometric Attendance System Ahmedabad | Face & Fingerprint",
    metaDesc: "Streamline attendance in Ahmedabad with Nialabs Biometric Solutions. AI-enabled face & fingerprint devices, cloud dashboard, payroll & HRMS integration, GPS attendance, and responsive local support.",
    heading: "Ahmedabad",
    image: "/cityImages/Ahmedabad.webp",
    subHeading: "Advanced Biometric Attendance Solutions for Accurate Tracking in Ahmedabad",
    desc: [
      "Ahmedabad is an emerging center for manufacturing, IT, education, healthcare, and retail, so attendance management here needs to be very exacting. Nialabs offers an intelligent biometric attendance system for schools, offices, industries, hospitals, and retail chains, featuring real-time tracking and seamless integration with Payroll, HRMS, and School ERP systems.",
      "From the SG highway and Prahlad Nagar to GIFT city and the industrial hubs at Vatva and Sanand, Nialabs offers biometric-based solutions that are highly reliable.",
    ],
    whyNia: {
      title: "Why Organisations in Ahmedabad Choose Nialabs",
      points: [
        {
          icon: "/homePage/identification.png",
          text: "Face & Fingerprint Recognition accuracy over 100%",
        },
        {
          icon: "/homePage/roll-call.png",
          text: "Cloud attendance system available anywhere & anytime",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Rapid deployment in Ahmedabad and the surrounding industrial areas",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Automation of shift scheduling, overtime, and leave management",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Prevents buddy punching and errors from manual attendance",
        },
        {
          icon: "/homePage/workforce.png",
          text: "High-quality performance at outdoor gates, dim light conditions, and busy doors",
        },
        {
          icon: "/homePage/notification.webp",
          text: "Parents' alert functionality in schools & colleges",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Seamless integration with payroll, HRMS, and School ERP solutions.",
        },
      ]
    },
    features: {
      title: "Features of Nialabs Biometric Attendance System",
      desc: "Nialabs is a combination of smart automation and enterprise-grade security:",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "Ultra-quick AI face recognition (less than 0.3 seconds)",
        },
        {
          icon: "/homePage/access-control.png",
          text: "The attendance methods include face, fingerprint, and RFID ",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Mobile attendance application with GPS for on-site and distant workforces",
        },
        {
          icon: "/homePage/report.webp",
          text: "Planning of shifts, calculation of overtime, and monitoring of absentees",
        },
        {
          icon: "/homePage/location1.webp",
          text: "GPS-enabled attendance with geofencing",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Automatically sync with HRMS, ERP & Payroll software",
        },
        {
          icon: "/homePage/check.png",
          text: "Optional modules for access control and visitor management",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Anti-spoofing & tamper-proof biometric hardware",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Plug & play fast installation",
        },
        {
          icon: "/homePage/seo-report.png",
          text: "In-depth reports with one-click analytics",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Ahmedabad",
      points: [
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "IT & Technology Firms (SG Highway, Prahlad Nagar, GIFT City)",
          desc: "Centralised attendance solution for corporate offices & IT parks in Ahmedabad",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics",
          desc: "Centralized attendance and access control for an enterprise solution",
        },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges ( Ahmedabad & Neighbourhoods)",
          desc: "Attendance of students & staff with alerts to parents. Dependable attendance tracking for 24-hour & rotating work schedules",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Production Units (Vatva, Naroda, Sanand, Changodar) ",
          desc: "Robust biometric hardware for the industrial workspace",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering",
          desc: "Accurate attendance monitoring for permanent & contract employees",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail Store & Supermarkets",
          desc: "Multi-branch attendance monitoring with centralized reporting",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Warehousing & Logistics Operations",
          desc: "Attendance reports with GPS location-based & shift details",
        },
        {
          icon: "/headerImages/industries/event.webp",
          title: "Hotel & Hospitality Industry",
          desc: "Departmental attendance management for operations and housekeeping staff",
        },
        // {
        //   icon: "",
        //   title: "Start-ups & Co-Working Spaces",
        //   desc: "Scalable and cost-effective solutions for expanding organizations",
        // },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "Advanced Facial Recognition Device",
          machine: "N-AI06",
          desc: "An AI-based high-speed device can identify users from a large database. With mask detection and anti-proxy attendance features, this is an ideal solution for offices, campuses, factories, and transportation centers.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Fingerprint & Dual Authentication",
          machine: "N-AI07F",
          desc: "Combines fingerprint & face recognition for better security. Reliable operation in dust, rain, and extreme outdoor environments, suitable for industry applications.",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multi-Modal Attendance & Access Control Unit",
          desc: "N-AI07 and other modules support face, fingerprint, RFID, and QR Code-based authentication, offering a multi-mode attendance and access management solution for schools, office & industrial complexes.",
        },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Ahmedabad",
      desc: "At Nialabs, we don’t just sell biometric devices- we enable organisations to automate and streamline their entire attendance process.",
      points: [
        {
          icon: "/homePage/support.webp",
          text: "Support team devoted to Ahmedabad & Gujarat Region",
        },
        {
          icon: "/homePage/server.webp",
          text: "Single Cloud-based attendance management system"
        },
        {
          icon: "/homePage/medal.webp",
          text: "Competitive warranty & AMC pricing",
        },
        {
          icon: "/homePage/check.png",
          text: "High recognition accuracy for advanced AI models",
        },
        {
          icon: "/homePage/education.png",
          text: "Ready-made solutions for Schools, Business & Enterprise Solutions",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Seamless integration with HRMS, ERP, Payroll, etc.",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Rapid Implementation in 1-2 days",
        },
        {
          icon: "/homePage/encrypted.png",
          text: "Emphasis on data privacy and a secure environment",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“Managing attendance at multiple centers in Ahmedabad is now easy and error-free.”",
          position: "HR Manager,",
          place: "IT Company,",
          district: "SG Highway",
        },
        {
          desc: "“We have a smooth school attendance procedure even during the rush hours of entering.”",
          position: "Principal,",
          place: "CBSE School,",
          district: "Ahmedabad",
        },
        // {
        //   desc: "“Shift scheduling and the monitoring of overtime are now completely automated at our plant.”",
        //   position: "Plant Operations Head,",
        //   place: "Vatva",
        // },
        {
          desc: "“We get combined attendance reports of all outlets of Ahmedabad on a real-time basis.”",
          position: "Regional Manager,",
          place: "Retail Chain",
        },
        {
          desc: "“Dependable system with prompt support, ideal for multi-shift hospitals.”",
          position: "Admin Manager,",
          place: "Multispeciality Hospital,",
          district: "Ahmedabad",
        },
      ]
    },
    faqs: [
      {
        question: "Can the system be used both for staff & students?",
        solution: "Yes, separate attendance policies and reports can be set up for students, teaching & non-teaching staff.",
      },
      {
        question: "Does this work for companies with multiple outlets in Ahmedabad?",
        solution: "Yes, you can view attendance information in all branches from one cloud dashboard.",
      },
      {
        question: "Can we use face recognition in low light or an outdoor environment?",
        solution: "Yes, it is accurate for factory gates, classrooms, and outdoor gates.",
      },
      {
        question: "What if I don't have internet access?",
        solution: "Attendance is recorded offline and automatically synced when the device is brought back online.",
      },
      {
        question: "Can attendance notification be sent to parents?",
        solution: "Yes, schools can also enable SMS or app notifications for student attendance.",
      },
      {
        question: "Is it integrated with payroll and ERP systems?",
        solution: "Yes, it supports integration with School ERP, Payroll, and HRMS.",
      },
      {
        question: "Does it scale to multiple locations and entries?",
        solution: "Yes, multiple devices can be installed at various gates and buildings with centralised supervision.",
      },
      {
        question: "Is it valid for contract & temporary employees too?",
        solution: "Yes, attending rules for regular, contract, and temporary employees can be configured separately.",
      },
    ],
    cta: {
      title: "Want to automate attendance management in Ahmedabad?",
      desc: [
        "Upgrade your school or organization with swift, secure, and accurate biometric attendance.",
      ],
    }
  },
  {
    route: "biometric-attendance-system-in-gujarat",
    metaTitle: "Biometric Attendance System Gujarat | Face & Fingerprint",
    metaDesc: "Monitor student and employee attendance in Gujarat using Nialab’s Biometric System. Experience face and fingerprint-based authentication, cloud-based dashboards, payroll & HRMS integration, GPS-based attendance, and dependable local support.",
    heading: "Gujarat",
    image: "/cityImages/Gujarat.webp",
    subHeading: "Reliable Attendance Management for Gujarat’s Industrial & Education Sectors",
    desc: [
      "Gujarat boasts diverse industrial clusters, service centres, educational institutions, healthcare facilities, and retail chains. Nialabs offers an innovative biometric attendance system for schools, colleges, offices, industries, hospitals, and retail outlets. It helps organizations to maintain accurate attendance, avoid misuse, and automate workforce records through Payroll, HRMS, and school ERP integration.",
      "From metro cities like Ahmedabad, Surat, Vadodara, and Rajkot to industrial areas like Vapi, Ankleshwar, Morbi, Jamnagar, and Sanand, Nialabs provides biometric attendance solutions that can be customized for various working conditions in the state of Gujarat.",
    ],
    whyNia: {
      title: "Why Organisations in Gujarat Choose Nialabs",
      points: [
        {
          icon: "/homePage/identification.png",
          text: "AI-based Face & Fingerprint",
        },
        {
          icon: "/homePage/encrypted.png",
          text: "Authentication accuracy up to 99.9%",
        },
        {
          icon: "/homePage/server.png",
          text: "Cloud attendance system with centralized control for access",
        },
        {
          icon: "/homePage/scalability.png",
          text: "Rapid install and roll-out in Gujarat",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Auto shift scheduling, overtime calculation & leave management",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Eradicates attendance tampering and buddy punching",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Reliable performance in an outdoor environment, low-dim light, high-density entry area",
        },
        {
          icon: "/homePage/visitor.webp",
          text: "Communication features for schools to parents",
        },
        // {
        //   icon: "",
        //   text: "Seamless integration with payroll, HRMS, and school ERP systems",
        // },
      ]
    },
    features: {
      title: "Features of Nialabs Biometric Attendance System",
      desc: "Nialabs offers the most robust, secure automation for attendance:",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "High-speed AI face recognition with instant identification",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "Multiple authentication types: Face, Fingerprint, and RFID",
        },
        {
          icon: "/homePage/access-control.png",
          text: "Mobile attendance for field employees with GPS tracking",
        },
        {
          icon: "/homePage/roll-call.png",
          text: "Shift-wise attendance, overtime, and leave policy management",
        },
        {
          icon: "/homePage/location1.webp",
          text: "Geofencing, attendance validation",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Automatically sync data with your ERP/HRMS/ Payroll",
        },
        {
          icon: "/homePage/visitors.png",
          text: "Optional access control and visitor management modules",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Safe, anti-spoofing biometric devices",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Simple to install-plug & play hardware",
        },
        {
          icon: "/homePage/report.webp",
          text: "Advanced attendance reports & analytics",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Gujarat",
      points: [
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "IT & Technology Firms (Ahmedabad, Gandhinagar)",
          desc: "Centralised attendance solution for corporate offices & IT parks in Gujarat",
        },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges (Ahmedabad, Vadodara)",
          desc: "Accurate student and staff attendance data, with parent notification and ERP integration.",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics ",
          desc: "Accurate attendance management for a 24/7 operating hospital with shift-based medical workers. ",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Manufacturing & Industrial Units (Sanand, Ankleshwar)",
          desc: "Heavy-duty biometric devices for factory, plant, and industrial locations",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering",
          desc: "Attendance monitoring for your permanent, contract, and temporary staff",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail Chains & Supermarkets ",
          desc: "Consolidated attendance report for stores/ outlets ",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Warehousing & Logistics Operations",
          desc: "GPS-based attendance for warehouse staff, drivers, & shift based team",
        },
        {
          icon: "/headerImages/industries/event.webp",
          title: "Hotel & Hospitality Industry",
          desc: "Low-cost attendance solution for front office, operations, and housekeeping staff",
        },
        // {
        //   icon: "",
        //   title: "Startups & Co-working spaces",
        //   desc: "Biometric attendance solutions for progressive organizations",
        // },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer ",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "Advanced Facial Recognition Device",
          machine: "N-AI06",
          desc: "High-speed and high-accuracy identification using a large database with an AI-based facial recognition terminal. With the support for mask detection and anti-proxy attendance, it is suitable for offices, campuses, factories, or public entrances.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Fingerprint with Dual Authentication",
          machine: "N-AI07F",
          desc: "Combines fingerprint & face recognition for stricter identity verification. Outdoor dust and a wet industrial environment are suitable for use.",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multi-Modal Attendance and Access Control Machine",
          desc: "N-AI07 and other terminals that support face, fingerprint, RFID & QR code as a method of authentication. They offer adaptable solutions to control access and attendance in education, business, and industrial settings.",
        },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Gujarat",
      desc: "At Nialabs, we don’t stop at device installation- we make attendance easy for organisations across Gujarat.",
      points: [
        {
          icon: "/homePage/backend-coding.webp",
          text: "Regional backup and coverage throughout Gujarat",
        },
        {
          icon: "/homePage/server.webp",
          text: "Integrated cloud-based attendance solution"
        },
        {
          icon: "/homePage/report.webp",
          text: "Economical warranty and service contract plans",
        },
        {
          icon: "/homePage/check.png",
          text: "High-accuracy recognition with advanced AI algorithms",
        },
        {
          icon: "/homePage/education.png",
          text: "Customizable solutions for education, industry, and enterprises",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "Complete integration with HRMS, Payroll, and ERP Support ",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Fast roll-out within 1-2 working days",
        },
        {
          icon: "/homePage/access-control.png",
          text: "Emphasis on data privacy & security system",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“Our multi-location Gujarat attendance monitoring is now precise and centrally monitored.”",
          position: "HR Manager,",
          place: "Industrial Group",
        },
        {
          desc: "“The system has streamlined the tracking of student attendance, allowing for greater transparency.”",
          position: "Principal,",
          place: "CBSE School,",
          district: "Gujarat",
        },
        {
          desc: "“We can automate and accurately calculate the shift schedules and the overtime.”",
          position: "Operations Head,",
          place: "Manufacturing Unit",
        },
        {
          desc: "“ We receive live attendance reports for all our outlets in Gujarat.”",
          position: "Regional Manager,",
          place: "Retail Chain",
        },
        // {
        //   desc: "“Reliable system with rapid support- fits perfectly within our healthcare business.”",
        //   position: "Admin Manager,",
        //   place: "Hospital Group",
        // },
      ]
    },
    faqs: [
      {
        question: "Is it possible to put this system up in a few cities in Gujarat?",
        solution: "Yes, you can monitor attendance from different locations with one cloud dashboard.",
      },
      {
        question: "Is the system applicable to job seekers and staff?",
        solution: "Yes, you can set up the attendance policies for students, staff, and employees individually.",
      },
      {
        question: "Can it be used outdoors at night? ",
        solution: "Yes, the system can accurately operate under any light or outdoor environment.",
      },
      {
        question: "What if there is no internet connection?",
        solution: "Attendance is taken offline and synced automatically when the connection is available.",
      },
      {
        question: "Can it support night shifts & rotating schedules?",
        solution: "Yes, it supports flexible shift rules and night shift duties as well as overtime.",
      },
      {
        question: "Can the attendance data be integrated with payroll, HRMS, and School ERP systems?",
        solution: "Yes, it integrates well with payroll, hrms and school erp solutions.",
      },
      {
        question: "Is it suitable for large campuses or factories?",
        solution: "Yes, you can have multiple devices deployed in different buildings and via different doors, all connected to a central monitoring system.",
      },
      {
        question: "How about managing contractors and temporary workers?",
        solution: "Yes, attendance policies can be applied to the permanent, contractual, and temporary employees.",
      },
    ],
    cta: {
      title: "Looking to update and streamline attendance management in Gujarat?",
      desc: [
        "Make the move to a biometric attendance system that is secure, scalable, and accurate for businesses on the rise.",
      ],
    }
  },
  {
    route: "biometric-attendance-system-in-coimbatore",
    metaTitle: "Biometric Attendance System Coimbatore | Face & Fingerprint",
    metaDesc: "Looking for a Reliable Supplier of Coimbatore? Nialabs provides AI-based face recognition & fingerprint attendance with cloud reports, payroll, HRMS integration, GPS tracking, and quick local support.",
    heading: "Coimbatore",
    image: "/cityImages/Coimbatore.webp",
    subHeading: "Eliminate Attendance Manipulation with Smart Biometric Systems in Coimbatore",
    desc: [
      "Coimbatore is the major centre of development for manufacturing, IT services, education, health care, and textile industries in Tamil Nadu. In such a dynamic environment, it is necessary to take the attendance of employees or students accurately.",
      "Nialabs offers an intelligent Biometric attendance system in Coimbatore for automated attendance monitoring with AI-based face recognition & fingerprint solution, maintaining accuracy, transparency, and compliance. Tailored to the needs of schools, colleges, offices, factories, hospitals, and retail chains, our solutions help your organisation reduce manual errors and attendance manipulation.",
    ],
    whyNia: {
      title: "Why Organisations in Coimbatore Choose Nialabs",
      points: [
        {
          icon: "/homePage/access-control.png",
          text: "AI-based Face Recognition & Fingerprint Attendance System",
        },
        {
          icon: "/homePage/roll-call.png",
          text: "Attendance is 100% Contactless and Hygienic.",
        },
        {
          icon: "/homePage/server.webp",
          text: "Attendance reports are cloud-based and can be accessed anytime.",
        },
        {
          icon: "/homePage/api.png",
          text: "HRMS & Payroll Integration",
        },
        {
          icon: "/homePage/location1.webp",
          text: "Attendance and GPS Tracking by Location",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "Multi-Branch & Single-Branch Organisation working flawlessly",
        },
        {
          icon: "/homePage/support.webp",
          text: "Hassle-Free Installation and Local Support at Coimbatore.",
        },
      ]
    },
    features: {
      title: "Features of Nialabs Biometric Attendance System",
      desc: "",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "AI-powered face recognition attendance system",
        },
        {
          icon: "/homePage/identification.png",
          text: "Fingerprint biometric authentication",
        },
        {
          icon: "/homePage/roll-call.png",
          text: "Touch-free & clean attendance system",
        },
        {
          icon: "/homePage/server.webp",
          text: "Cloud-oriented attendance dashboard",
        },
        {
          icon: "/homePage/check.png",
          text: "Mobile and GPS attendance monitoring",
        },
        {
          icon: "/homePage/visitor.webp",
          text: "Shift, Roster, and Overtime Scheduling",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Payroll integration & HRMS integration",
        },
        {
          icon: "/homePage/api.png",
          text: "Live attendance reports",
        },
        {
          icon: "/homePage/server.png",
          text: "Multi-branch & Multi-location support",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "Secure data storage and access",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Coimbatore",
      points: [
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "IT & Technology Firms (Saravanampatti, Peelamedu)",
          desc: "Centralised attendance solution for IT offices and technology parks.",
        },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges (Coimbatore & Nearby Areas) ",
          desc: "Precision in student and staff attendance with alerts to parents and ERP integration. ",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics",
          desc: "24/7 hospital attendance management with shift-based staff is guaranteed",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Manufacturing and Industrial Units (SIDCO, Kurichi, Singanallur)",
          desc: "Advanced industrial biometric hardware for workplace and worksite applications",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering ",
          desc: "Time & attendance management for permanent, contract, and temporary employees",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail Chains & Supermarkets",
          desc: "Attendance reports are centralised for multiple stores and outlets",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Warehousing & Logistics Operations",
          desc: "GPS-based attendance for warehouse teams and field workers",
        },
        {
          icon: "/headerImages/industries/event.webp",
          title: "Hotel & Hospitality Industry",
          desc: "Effective management of attendance for the operation and housekeeping team",
        },
        // {
        //   icon: "",
        //   title: "Start-ups & Co- working spaces",
        //   desc: "Scalable and cost-effective solutions for growing companies  ",
        // },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "Advanced Face Recognition Device",
          machine: "N-AI06",
          desc: "High-performance AI face recognition device for rapid identification of users in large databases. With support for mask detection and anti-proxy, it can be deployed to offices, schools, campuses, factories, and transit sites.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Fingerprint with Dual Authentication",
          machine: "N-AI07F",
          desc: "The product incorporates a fingerprint and face recognition to provide enhanced security. It is specially designed to work stably in dusty, wet, and outdoor surroundings, which makes it an outstanding choice for industry and field work.",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multi-Modal Attendance & Access Control Terminal",
          desc: "N-AI07 and other models support multi-authentication, including face, fingerprint, RFID, and QR code. This makes it perfect for schools, corporate offices, and manufacturing facilities to track attendance and control access.",
        },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Coimbatore",
      desc: "At Nialabs, we do more than just set up biometric solutions - we enable you to master attendance for your organization in Coimbatore.",
      points: [
        {
          icon: "/homePage/location1.webp",
          text: "Availability of Exclusive Services in Coimbatore and its surroundings.",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "Cloud-integrated attendance and workforce management solution"
        },
        {
          icon: "/homePage/medal.webp",
          text: "Reasonable warranty and AMC packages offer long durability",
        },
        {
          icon: "/homePage/artificial-intelligence.webp",
          text: "Powered by sophisticated AI, recognition is quick and precise",
        },
        {
          icon: "/homePage/education.png",
          text: "Tailor-made solution for schools, industries, hospitals & corporates",
        },
        {
          icon: "/homePage/server.webp",
          text: "Integrated with HRMS, ERP, and payroll seamlessly",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Easy to install and configure within 1-2 business days",
        },
        {
          icon: "/homePage/access-control.png",
          text: "Robust Data Privacy, Security & System Reliability",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“Tracking attendance throughout our Coimbatore office has become error-free and effortless with Nialabs.”",
          position: "HR Manager,",
          place: "IT Company,",
          district: "Saravanampatti",
        },
        {
          desc: "“Our factory shift and overtime calculations are done automatically now.”",
          position: "Plant Head,",
          place: "Manufacturing Unit,",
          district: "SIDCO Industrial Area",
        },
        {
          desc: "“The face recognition system runs seamlessly even at the peak entry hours of our school.”",
          position: "Principal,",
          place: "CBSE School,",
          district: "Coimbatore",
        },
        {
          desc: "“Keeping track of attendance in various outlets is now easy with centralised attendance reports.”",
          position: "Regional Manager,",
          place: "Retail Chain,",
          district: "Coimbatore",
        },
        // {
        //   desc: "“Consistent performance and prompt response are the best features of this system for our round-the-clock hospital services.”",
        //   position: "Admin Manager,",
        //   place: "Multispeciality Hospital,",
        //   district: "Coimbatore",
        // },
      ]
    },
    faqs: [
      {
        question: "Is the biometric attendance system applicable for a Coimbatore-based company?  ",
        solution: "Yes, the system is designed for all sizes of organization, from small offices to big industries, in Coimbatore.  ",
      },
      {
        question: "Can the system be used in multi-shifts and night work? ",
        solution: "Yes, it fully support multi shifts rotational shifts, night shifts, and calculation of OT.",
      },
      {
        question: "Does it operate during internet disconnections?",
        solution: "Yes, offline attendance could be recorded by biometric devices, and data would automatically be synchronized once the connectivity is re-established. ",
      },
      {
        question: "Is face recognition good in the dark or outside?",
        solution: "Yes, it is working flawlessly at classroom, factory gate, and outdoor access points under different light environments.",
      },
      {
        question: "Can I monitor attendance at multiple sites from one cloud dashboard?",
        solution: "You can view the attendance information of all branches or stores in a single cloud dashboard. ",
      },
      {
        question: "Is the system interfaced to the payroll and HR systems?",
        solution: "Yes, it effortlessly integrates with the HRMS, payroll, and ERP systems for precise salary processing. ",
      },
      {
        question: "Can I apply this system to contract and temporary employees?",
        solution: "Yes, the attendance policies can be tailored to the full-time, contract, temporary employees, etc.",
      },
      {
        question: "Is attendance information safe and secure?",
        solution: "Yes, all information is securely stored using encryption and has role-based access and strict privacy policies.",
      },
    ],
    cta: {
      title: "Want to automate attendance in Coimbatore?",
      desc: [
        "Implement the best biometric attendance system and manage your organisation in an easy and effective way.",
        "Book your Nialabs demo for free now.",
      ],
    }
  },
  {
    route: "biometric-attendance-system-in-delhi",
    metaTitle: "Biometric Attendance System Delhi | Face & Fingerprint",
    metaDesc: "Looking for a top biometric attendance system in Delhi? Nialabs provides AI-enabled face and fingerprint attendance solutions with cloud accessibility, payroll integration, and rapid local customer support.",
    heading: "Delhi",
    image: "/cityImages/Delhi.webp",
    subHeading: "Delhi’s Trusted Partner for School Biometric & Bus Attendance Systems",
    desc: [
      "Gujarat has emerged as one of the most forward-looking states in India in terms of manufacturing and industrial development, IT services, education, healthcare, and retail enterprises. Nialabs provides a smart biometric attendance system for schools, colleges, offices, industries, hospitals, and retail chains, enabling real-time monitoring, eradication of proxy attendance,e and integration with payroll, HRMS, and ERP in schools.",
      "From metro cities like Ahmedabad, Surat, Vadodara, Rajkot, and Gandhinagar to the Industrial cities like Sanand, Ankleshwar, Vapi, Morbi, and Jamnagar, Nialabs delivers solutions that monitor attendance using biometrics tailored for different work setups in the state of Gujarat.",
    ],
    whyNia: {
      title: "Why Organisations in Delhi Choose Nialabs",
      points: [
        {
          icon: "/homePage/check.png",
          text: "AI Face & Fingerprint Recognition with High Accuracy",
        },
        {
          icon: "/homePage/server.webp",
          text: "Cloud attendance is available from anywhere",
        },
        {
          icon: "/homePage/server.webp",
          text: "Fast rollout in the cities and industrial estates in Gujarat",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Auto shift assign, overtime calculation, and leave management",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Total elimination of buddy punching and human errors",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Consistent results in dark areas, outdoors,s and busy motion",
        },
        {
          icon: "/homePage/notification.webp",
          text: "Parent notification services for schools & colleges",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "Seamless integration with payroll, HRMS, and School ERP solutions",
        },
      ]
    },
    features: {
      title: "Features of Nialabs Biometric Attendance System",
      desc: "Nialabs infuses intelligent automation and enterprise-grade security:",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "Fastest AI face recognition (response time <0.3s)",
        },
        {
          icon: "/homePage/check.png",
          text: "Multi-attendance mode such as Face, Fingerprint & RFID",
        },
        {
          icon: "/homePage/location.png",
          text: "Mobile attendance app with GPS tracking for on-field employees",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Shift scheduling, overtime calculating, leave tracking, etc.",
        },
        {
          icon: "/homePage/location1.webp",
          text: "Geofencing for location-based attendance policy enforcement",
        },
        {
          icon: "/homePage/server.png",
          text: "Automatic data sync with HRMS/ERP/payroll system",
        },
        {
          icon: "/homePage/visitors.png",
          text: "Access Control and Visitor Management - Optional Modules",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Anti-spooﬁng and tamper-resistant biometrics hardware",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Plug and play, easy installation.",
        },
        {
          icon: "/homePage/seo-report.png",
          text: "Daily attendance reports with one-click analytics. ",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Delhi",
      points: [
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "IT & Technology Firms",
          desc: "Simplified employee attendance tracking across departments",
        },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges",
          desc: "Student and staff attendance management in real-time with enhanced class management",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics",
          desc: "An effective attendance system is required for doctors, nurses, and hospital staff.",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Industrial & Manufacturing Units (Okhla & Bawana Areas)",
          desc: "Rugged industrial biometric readers",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering",
          desc: "Time clocking service for all full-time, contractual, and temporary employees",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail Chains & Supermarkets",
          desc: "Access control and attendance in a multi-branch scenario",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Logistics & warehousing",
          desc: "Attendance management for employees working in warehouses and in the field",
        },
        {
          icon: "/headerImages/industries/event.webp",
          title: "Hotel & hospitality industry",
          desc: "Shift attendance across service and housekeeping shifts",
        },
        // {
        //   icon: "",
        //   title: "Start-ups & Co-working spaces",
        //   desc: "Affordable and scalable attendance solutions for growing teams",
        // },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer ",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "Advanced Facial Recognition",
          machine: "N-AI06",
          desc: "A high-precision user identification AI machine for large-scale databases at high speed and high accuracy. It also includes mask detection and anti-proximal attendance, so it can be applied in offices, campuses, and transport solutions.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Fingerprint with Dual Authentication",
          machine: "N-AI07F",
          desc: "Employs fingerprint and facial recognition authentication for enhanced security. It should work seamlessly in the outdoors, in the rain, dust, or in direct sunlight. ",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multi-Mode Access Control & Attendance Terminals",
          desc: "As with other models, the N-AI07 supports face, fingerprint, RFID, and QR code for attendance and access control solutions in education, corporate, and industrial environments.",
        },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Delhi",
      desc: "Nialabs doesn’t sell you devices- we offer end-to-end attendance automation solutions for Delhi-centric organisations.",
      points: [
        {
          icon: "/homePage/encrypted.png",
          text: "Powerful service availability across Delhi and NCR",
        },
        {
          icon: "/homePage/server.webp",
          text: "Centralised cloud attendance management system"
        },
        {
          icon: "/homePage/scalability.png",
          text: "Competitive rates with flexible AMC packages",
        },
        {
          icon: "/homePage/check.png",
          text: "Recognition based on AI for better accuracy",
        },
        {
          icon: "/homePage/visitor.webp",
          text: "Customizable solution for your industry",
        },
        {
          icon: "/homePage/api.png",
          text: "Easy integration with payroll and HR systems ",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Fast-track deployment and training",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "Rigorous attention to data-security & compliance",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“Nialabs made our attendance process quicker and more transparent.”",
          position: "Head of Admin,",
          place: "Corporate office,",
          district: "Delhi",
        },
        {
          desc: "“The face-recognition attendance system saves us so much time in the school entry hours.”",
          position: "School Administrator,",
          place: "Delhi",
        },
        {
          desc: "“We handle shift and overtime effortlessly now without manually calculating.”",
          position: "Factory Manager,",
          place: "Industrial Area,",
          district: "Delhi",
        },
        {
          desc: "“The cloud dashboard allows us to monitor attendance for multiple sites.”",
          position: "Operations Manager,",
          place: "Retail business",
        },
        // {
        //   desc: "“Dependable system and quick support when needed.”",
        //   position: "HR Executive,",
        //   place: "Healthcare Facility",
        // },
      ]
    },
    faqs: [
      {
        question: "Can both staff and students log in to the same system?",
        solution: "Yes, you can create separate attendance policies and reports for students, teaching , and non-teaching staff.",
      },
      {
        question: "Is this good for multi-branch companies based in Delhi?",
        solution: "Yes, from a single cloud dashboard, you can manage all your stores.",
      },
      {
        question: "Does face recognition work in low light or outdoors?",
        solution: "It is designed for seamless and precise operation in classrooms, at factory gates, and in outdoor environments. ",
      },
      {
        question: "What is the impact of internet downtime?",
        solution: "Offline attendance is taken and synced automatically once a connection is available. ",
      },
      {
        question: "Can parents get attendance alerts?",
        solution: "The schools can turn on alerts for arrivals, departures, and absences via the app or via SMS.",
      },
      {
        question: "Can the system handle night shifts/flexible rosters? ",
        solution: "Yes, it supports night duties, rotating shifts, overtime calculations, etc.",
      },
      {
        question: "Does it integrate with payroll and erp systems?",
        solution: "Yes, it can be integrated with HRMS, Payroll, and the School ERP system.",
      },
      {
        question: "Can it be used for multiple entries on large campuses?",
        solution: "Yes, you can install multiple units at different gates and floors, and monitor all of them from a central location.",
      },
      {
        question: "Are the contractual and temporary employees manageable?",
        solution: "Yes, you can establish policies for your attendance and enforce them separately for the permanent, contract, and temporary staff."
      },
    ],
    cta: {
      title: "Ready to automate attendance in Delhi?",
      desc: [
        "Now get precision, speed, and security in attendance at work or school in Delhi.",
        "Book your free demo with Nialabs today!",
      ],
    }
  },
  {
    route: "biometric-attendance-system-in-hyderabad",
    metaTitle: "Biometric Attendance System Hyderabad | Face & Fingerprint",
    metaDesc: "Simplify attendance tracking with Nialabs in Hyderabad using our biometric solutions. AI-based face and fingerprint devices, cloud dashboard, integration into HRMS & Payroll, GPS attendance, and speedy local support.",
    heading: "Biometric Attendance System in Hyderabad",
    image: "/cityImages/Hyderabad.webp",
    subHeading: "Powering Offices, Schools, Hospitals & Factories Across Hyderabad with Smart Attendance",
    desc: [
      "Hyderabad is a major hub for IT, manufacturing, education, healthcare, and the corporate sectors, and there is a requirement to have them mark their attendance to ensure smooth coordination of work between shifts and centres.",
      "Nialabs smart biometric attendance system for offices, schools, factories, hospitals, and retail chains is now available in Hyderabad, which allows real-time monitoring and integration with Payroll, HRMS, and ERP for schools.",
    ],
    whyNia: {
      title: "Why Organisations in Hyderabad Choose Nialabs",
      points: [
        {
          icon: "/homePage/identification.png",
          text: "High Precision Face & Fingerprint Identification",
        },
        {
          icon: "/homePage/server.png",
          text: "Cloud Attendance, access from anywhere",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Fast deployment in Hyderabad and the surrounding industrial estates",
        },
        {
          icon: "/homePage/blogger.png",
          text: "Auto shift scheduling, OT calculation, and leave management",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Prevents proxy attendance & manual work",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Dependable output in busy doors and dark rooms",
        },
        {
          icon: "/homePage/notification.webp",
          text: "Parent Alerts in Schools & Colleges",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Seamless integration with HRMS, Payroll & School ERP solutions",
        },
      ]
    },
    features: {
      title: "Features of NiaLabs Biometric Attendance System",
      desc: "Nialabs integrates smart automation and secure biometric technology:",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "Ultra high speed AI face recognition(<0.3s)",
        },
        {
          icon: "/homePage/artificial-intelligence.webp",
          text: "Multifactor authentication options: face, fingerprint & RFID",
        },
        {
          icon: "/homePage/location1.webp",
          text: "An attendance app for mobile with GPS for field staff",
        },
        {
          icon: "/homePage/seo-report.png",
          text: "Shift schedules, OT handling & absenteeism records",
        },
        {
          icon: "/homePage/check.png",
          text: "Geofenced GPS attendance",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Automated sync for HRMS, ERP, and Payroll systems",
        },
        {
          icon: "/homePage/identification.png",
          text: "Anti-spoofing, tamper-resistant biometric devices",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Plug and play installation",
        },
        {
          icon: "/homePage/roll-call.png",
          text: "Detailed attendance report and live monitoring",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Hyderabad",
      points: [
        // {
        //   icon: "/headerImages/industries/",
        //   title: "IT & Technology Firms (HITEC City, Gachibowli, Madhapur)",
        //   desc: "Consolidate attendance tracking for IT Parks & the corporate office",
        // },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges ( Hyderabad & Suburbs)",
          desc: "Student & staff attendance with real-time alert to parents",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics",
          desc: "Precise attendance and access for medical & admin staff",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Production Units(Jeedimetla, Patancheru, Uppal)",
          desc: "Strong biometric hardware for a multi-shift factory environment",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering",
          desc: "Secure attendance tracking in a regulated workplace",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail Chains & Supermarkets",
          desc: "Consolidated attendance tracking in multiple stores",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Logistics & Warehousing",
          desc: "Shift-wise and GPS-based attendance analysis",
        },
        {
          icon: "/headerImages/industries/resident.webp",
          title: "Hotel & Hospitality Industry",
          desc: "Department-wise attendance for operation and service staff",
        },
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "Start-ups & Co-working spaces",
          desc: "Flexible, scalable attendance solutions for growing teams",
        },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "AI Face Recognition Device",
          machine: "N-AI06",
          desc: "A fast AI device that can recognize users among massive user bases. The mask detection and anti-proxy functions are suitable for office, campus, factory, and transport facilities.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Fingerprint & Dual Authentication Device",
          machine: "N-AI07F",
          desc: "Integrates face and fingerprint authentication for a higher level of security. Suitable for outdoor use and for industrial applications.",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multi-Modal Attendance and Access Control Device",
          desc: "The face, fingerprint, and RFID-enabled N-AI07, along with other models, are designed for the school, office, and industry.",
        },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Hyderabad",
      desc: "At Nialabs, we don’t just provide hardware- we empower organizations to fully automate and streamline attendance tracking management.",
      points: [
        {
          icon: "/homePage/support.webp",
          text: "Exclusive support team for Telangana & Hyderabad area",
        },
        {
          icon: "/homePage/server.png",
          text: "One cloud system for all your attendance requirements"
        },
        {
          icon: "/homePage/save-money.webp",
          text: "Budget-friendly AMC & warranty schemes",
        },
        {
          icon: "/homePage/face-scan.png",
          text: "High precision AI recognition technology",
        },
        {
          icon: "/homePage/corporation.png",
          text: "Ready-made solutions for schools, offices & corporations",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Smooth integration with HRMS, ERP & Payroll",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Set up in 1-2 days",
        },
        {
          icon: "/homePage/medal.webp",
          text: "Data security and compliance are imperative",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“Monitoring attendance in our Hyderabad offices is now entirely centralized.”",
          position: "HR Lead,",
          place: "IT Company,",
          district: "HITEC City",
        },
        {
          desc: "“Our school registration process is seamless, and parents get real-time alerts.”",
          position: "Principal,",
          place: "International School,",
          district: "Hyderabad",
        },
        {
          desc: "“Shift monitoring and overtime computation have been fully automated.”",
          position: "Factory Manager,",
          place: "Patancheru",
        },
        {
          desc: "“We have the real-time attendance of all our retail stores at your fingertips.”",
          position: "Operations Head,",
          place: "Retail Chain",
        },
        // {
        //   desc: "“Trustworthy system with fast support- ideal for hospital management.”",
        //   position: "Admin Manager,",
        //   place: "Multi-Speciality Hospital,",
        //   district: "Hyderabad",
        // },
      ]
    },
    faqs: [
      {
        question: "Is biometric attendance effective for hybrid and remote teams?",
        solution: "Yes, Nialabs provides GPS-enabled mobile attendance for hybrid, field, and remote workers.",
      },
      {
        question: "Can I set different attendance rules for my department or shift?",
        solution: "Absolutely, you can apply different rules for departments, designations, shifts, and working hours.",
      },
      {
        question: "How safe is the biometric attendance data?",
        solution: "All the data of attendance is encrypted and stored on secure cloud servers with very limited access.",
      },
      {
        question: "Does it accommodate night shift, rotating shift?",
        solution: "Yes, it effectively handles night shift, rotating shift, round the clock services.",
      },
      {
        question: "Can I connect biometric devices to my access control system?",
        solution: "Yes, Nialabs solutions can be linked to or integrated with your current access control/visitor management system.",
      },
      {
        question: "Do we need to train our employees on how to use the system?",
        solution: "The interface is simple, and there is no need for training with included onboarding support.",
      },
      {
        question: "What is the lowest user number that can be accommodated?",
        solution: "It scales from small teams to large organizations with a number of users.",
      },
    ],
    cta: {
      title: "Looking for attendance automation in Hyderabad?",
      desc: [
        "Transform your office or school with our high-speed, secure, and accurate biometric attendance system.",
        "Book your Nialabs demo for free now.",
      ],
    }
  },
  {
    route: "biometric-attendance-system-in-gurugram",
    metaTitle: "Biometric Attendance System Gurugram | Face & Fingerprint",
    metaDesc: "Keep Track of Attendance easily through Nialabs Biometric Solutions, Gurugram.  AI smart face attendance & fingerprint, cloud dashboard, HRMS, Payroll Integration, GPS attendance, and quick local support.",
    heading: "Biometric Attendance System in Gurugram",
    desc: [
      "Gurugram is one of India's leading corporate and industrial hubs and home to multinational offices, IT parks, production units, schools, and hospitals. High employee mobility, large teams, and multishift work necessitate precision and automation in attendance management.",
      "Nialabs offers a modern office with the best biometric attendance system for schools, offices, factories, hospitals, and retail chains in Gurugram with real-time monitoring and integration with payroll, HRMS, and School ERP solutions.",
    ],
    image: "/cityImages/Gurugram.webp",
    subHeading: "AI-Powered Biometric Attendance & Access Control Solutions for Offices, Schools, Hospitals & Industries in Gurugram",
    whyNia: {
      title: "Why Organisations in Gurugram Choose Nialabs",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "Accurate face & fingerprint recognition system",
        },
        {
          icon: "/homePage/server.png",
          text: "Cloud attendance monitoring at your fingertips",
        },
        {
          icon: "/homePage/location1.webp",
          text: "Fast implementation across multiple locations in Gurugram and NCR",
        },
        {
          icon: "/homePage/blogger.png",
          text: "Auto shift scheduling, OT calculation, and leave management",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Eliminates proxy attendances and manual errors",
        },
        {
          icon: "/homePage/corporation.png",
          text: "Clean, busy door & low light tolerant",
        },
        {
          icon: "/homePage/notification.webp",
          text: "Feature to inform parents of schools/ colleges",
        },
        {
          icon: "/homePage/server.png",
          text: "Seamlessly integrates with HRMS, Payroll & School ERP solutions.",
        },
      ]
    },
    features: {
      title: "Features of NiaLabs Biometric Attendance System",
      desc: "Built for today’s work environments, Nialabs provides an all-in-one attendance solution:",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "AI-Powered Face Recognition with instant response",
        },
        {
          icon: "/homePage/identification.png",
          text: "Multi-verification face, fingerprint, & RFID",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Attendance on mobile with GPS for field users",
        },
        {
          icon: "/homePage/seo-report.png",
          text: "Shift scheduling, overtime monitoring & absence reporting",
        },
        {
          icon: "/homePage/location1.webp",
          text: "Location-based attendance using geofencing",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Real-time data sync with HRMS, ERP & Payroll software",
        },
        {
          icon: "/homePage/spoofing.webp",
          text: "Anti-spoofing protection and secure device hardware",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Rapid deployment with little demand for IT resources",
        },
        {
          icon: "/homePage/progress.png",
          text: "Actionable attendance reports and dashboards",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Gurugram",
      points: [
        // {
        //   icon: "/headerImages/industries/",
        //   title: "IT & Technology Firms ( Cyber City, Golf Course Road, Udyog Vihar)",
        //   desc: "Attendance management for larger office spaces",
        // },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges",
          desc: "Real-time attendance monitoring at student and staff levels, with notifications to parents.",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics",
          desc: "Precise attendance and access for medical & admin staff",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Production Units (Manesar, Sector 37, IMT)",
          desc: "Rugged biometric devices for 24x7 operations",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering",
          desc: "Time & attendance management for permanent, contract, and temporary employees",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail Chains & Supermarkets",
          desc: "To bring uniformity in the reporting of attendance for all outlets",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Logistics & Warehousing",
          desc: "GPS-based attendance for warehouse teams and field workers",
        },
        {
          icon: "/headerImages/industries/resident.webp",
          title: "Hotel & Hospitality Industry",
          desc: "Seamless attendance management for the operations and housekeeping teams",
        },
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "Start-ups & Co- working spaces",
          desc: "Scalable and cost-effective solutions for growing companies",
        },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "AI Face Recognition Terminal",
          machine: "N-AI06",
          desc: "This is a high-speed facial recognition terminal capable of large scale users environment. With the features of mask detection and anti-proxy attendance, it is ideal for offices, schools, and industrial entrances.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Fingerprint & Dual Authentication Device",
          machine: "N-AI07F",
          desc: "Offers fingerprint and face recognition security for two-factor authentication. Built for robust outdoor and industrial environment performance",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multi-mode attendance & access control unit",
          desc: "Products such as N-AI07 provide authentication via face, fingerprint, and RFID, and cater to businesses with diverse needs in attendance and access control.",
        },
      ]
    },
    whyBetter: {
      title: "Why Nialabs is Better Than Other Providers in Gurugram",
      desc: "At Nialabs, hardware delivery is just the beginning – we empower organizations to create automated workflows.",
      points: [
        {
          icon: "/homePage/support.webp",
          text: "Dedicated regional support for Gurugram & NCR",
        },
        {
          icon: "/homePage/server.png",
          text: "One cloud-based platform to manage your attendance data"
        },
        {
          icon: "/homePage/save-money.webp",
          text: "The warranty and AMC plans have clear pricing",
        },
        {
          icon: "/homePage/artificial-intelligence.webp",
          text: "High precision AI recognition technology",
        },
        {
          icon: "/homePage/corporation.png",
          text: "Standard solution for education, business & enterprise",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Seamless Integration with HRMS, ERP, and Payroll Software.",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Rapid deployment, typically within 1-2 days",
        },
        {
          icon: "/homePage/medal.webp",
          text: "Absolute importance to data privacy & system security.",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“Visibility of attendance in our offices has become much better.”",
          position: "HR Operations Lead,",
          place: "Corporate office,",
          district: "Gurugram",
        },
        {
          desc: "“Entry management is good even at the busiest school timings.”",
          position: "School Administrator,",
          place: "Gurugram",
        },
        {
          desc: "“Our system now automates the calculations of attendance and overtime for the workers in our factory.”",
          position: "Production Manager,",
          place: "Manesar",
        },
        {
          desc: "“We monitor the attendance of all the stores from a single dashboard.”",
          position: "Regional Head,",
          place: "Retail Business",
        },
        // {
        //   desc: "“Dependable performance with prompt local service.”",
        //   position: "Hospital Administration Manager,",
        //   place: "Gurugram",
        // },
      ]
    },
    faqs: [
      {
        question: "Can a biometric attendance system accommodate flexible working hours?",
        solution: "Yes, you will have the option to configure flexible schedules, grace periods, and custom shift rules.",
      },
      {
        question: "Is this good for large campuses with many doors to the outside?",
        solution: "Yes, you can manage multiple devices from a single dashboard, centrally.",
      },
      {
        question: "Are reports for compliance and audits available? ",
        solution: "Yes, you are able to export detailed reports in different file formats.",
      },
      {
        question: "Is the system complex to maintain?",
        solution: "No, the equipment is easy to maintain, and our local team provides support.",
      },
      {
        question: "What happens when a device goes offline?",
        solution: "Attendance is taken locally and synced once the device has internet access.",
      },
      {
        question: "Does the biometric attendance get linked with the rights of access to different roles?",
        solution: "You can also create role-based access policies to specify which employees can access certain rooms or areas.",
      },
      {
        question: "Can we know how quickly the system can be scaled if the number of our employees grows?",
        solution: "It is scalable, so you can add more users, devices, and sites to it without changing your existing configuration.",
      },
    ],
    cta: {
      title: "Want to automate attendance in Gurugram?",
      desc: [
        "Implement the best biometric attendance system and manage your organisation in an easy and effective way.",
        "Book your Nialabs demo for free now.",
      ],
    }
  },
  {
    route: "biometric-attendance-system-in-chennai",
    metaTitle: "Biometric Attendance System Chennai | Face & Fingerprint",
    metaDesc: "Nialabs offers the best biometric attendance system in India with fast face recognition, accurate attendance tracking, cloud reports, and seamless integration for all industries.",
    heading: "Chennai",
    image: "/cityImages/Chennai.webp",
    subHeading: "Reliable Attendance Management for Chennai’s Industrial & Education Sectors",
    desc: [
      "Tracking employee attendance is necessary for operational efficiency, particularly in an expanding city like Chennai. With a dispersed workforce, multiple shifts, and rigorous compliance requirements, manual tracking is prone to errors and delays.",
      "Nialabs was built to meet the business needs in Chennai with advanced solutions that deliver accurate, real-time attendance data, prevent proxy punching, offer real-time insights, and are integrated seamlessly into payroll and HR solutions. Whether it's an IT company in OMR, a production house in Ambattur, or a school in the heart of the city, Nialabs provides the ideal biometric solution to make your attendance process hassle-free and easy.",
    ],
    whyNia: {
      title: "Why Choose Nialabs?",
      points: [
        {
          icon: "/homePage/identification.png",
          text: "99.9% accurate biometric ID — contactless & fraud-proof.",
        },
        {
          icon: "/homePage/server.png",
          text: "Live attendance data from any device, anywhere, anytime.",
        },
        {
          icon: "/homePage/metrics.png",
          text: "Quick setup at offices, factories & sites in Chennai.",
        },
        {
          icon: "/homePage/backend-coding.webp",
          text: "Auto-manage shifts, overtime & leave — zero manual effort.",
        },
        {
          icon: "/homePage/encrypted.png",
          text: "Buddy punching & manual data errors permanently eliminated.",
        },
        {
          icon: "/homePage/workforce.png",
          text: "Reliable in dim light, outdoors & high-footfall entrances.",
        },
        {
          icon: "/homePage/notification.webp",
          text: "Instant SMS to parents for every student check-in event.",
        },
        {
          icon: "/homePage/api.png",
          text: "Seamless API sync with payroll, HRMS & school ERP tools.",
        },
      ]
    },
    features: {
      title: "Features of Nialabs Biometric Attendance System",
      desc: "Discover the advanced capabilities of Nialabs biometric systems designed for modern businesses.",
      points: [
        {
          icon: "/homePage/face-scan.png",
          text: "Instant ID in <0.3 sec — fastest biometric on the market.",
        },
        {
          icon: "/homePage/identification.png",
          text: "3-in-1 attendance modes for every workforce type on site.",
        },
        {
          icon: "/homePage/location.png",
          text: "Field staff mark attendance via app with live GPS tracking.",
        },
        {
          icon: "/homePage/accountant.webp",
          text: "Auto-schedule shifts, compute OT & track leave seamlessly.",
        },
        {
          icon: "/homePage/check.png",
          text: "Location-locked check-ins enforce site-based attendance rules.",
        },
        {
          icon: "/homePage/api.png",
          text: "Real-time auto-sync with all major HR and payroll platforms.",
        },
        {
          icon: "/homePage/visitors.png",
          text: "Optional module for door access and visitor entry management.",
        },
        {
          icon: "/homePage/cyber-security.png",
          text: "Tamper-proof devices block fake biometric attempts always.",
        },
        {
          icon: "/homePage/deployment.webp",
          text: "Zero-IT setup — device activates and goes live in minutes.",
        },
        {
          icon: "/homePage/seo-report.png",
          text: "One-click attendance reports with real-time data dashboards.",
        },
      ]
    },
    industries: {
      title: "Industries We Serve in Chennai",
      points: [
        {
          icon: "/headerImages/industries/cowork.webp",
          title: "IT & Software Companies (OMR, ECR, Tidel Park)",
          desc: "Multi-location sync, security, access, and analytics for large teams",
        },
        {
          icon: "/headerImages/industries/school.webp",
          title: "Schools & Colleges",
          desc: "Student and staff attendance with instant parent alerts",
        },
        {
          icon: "/headerImages/industries/Healthcare.webp",
          title: "Hospitals & Clinics",
          desc: "24/7 shift attendance and security access control",
        },
        {
          icon: "/headerImages/industries/enterprise.webp",
          title: "Manufacturing Units (Ambattur, Sriperumbudur, Oragadam)",
          desc: "Durable devices for factory and contract workforces",
        },
        {
          icon: "/headerImages/industries/parking.webp",
          title: "Automobile & Engineering",
          desc: "Technical teams receive high-precision attendance logs.",
        },
        {
          icon: "/headerImages/industries/retail.webp",
          title: "Retail & Supermarkets",
          desc: "Attendance at the branch level with centralised reporting",
        },
        {
          icon: "/headerImages/industries/warehouse.webp",
          title: "Logistics & Warehousing",
          desc: "GPS attendance for shift workers and fleets",
        },
        {
          icon: "/headerImages/industries/event.webp",
          title: "Hotels & Hospitality",
          desc: "Streamlined staff attendance for the kitchen, housekeeping, and operations",
        },
      ],
    },
    deviceOffer: {
      title: "Biometric Devices We Offer",
      points: [
        {
          icon: "/product/ai04/242.webp",
          title: "Advanced Facial Recognition Terminal",
          machine: "N-AI06",
          desc: "High-speed AI face recognition device for user identification of a large database. Mask detection and anti-proxy attendance functions.",
        },
        {
          icon: "/product/ai10/235.webp",
          title: "Face, Fingerprint & Dual Authentication",
          machine: "N-AI07",
          desc: "Both fingerprint and face recognition are supported for higher security. Reliable performance in industrial and outdoor environments.",
        },
        {
          icon: "/product/ai09/239.webp",
          title: "Multimodal Bus Attendance System",
          machine: "N-AI10",
          desc: "N-AI10 Bus Attendance Machine with AI Face Recognition & GPS, ideal for tracking real-time student activity.",
        },
      ]
    },
    whyBetter: {
      title: "Why Choose Nialabs?",
      desc: "Nialabs offers the most reliable biometric attendance systems, ensuring 99.9% accurate time tracking for offices, factories, and institutions.",
      points: [
        {
          icon: "/homePage/customer-service.png",
          text: "City-specific support team available in Chennai & region.",
        },
        {
          icon: "/homePage/server.png",
          text: "One cloud system tracks attendance across all your branches."
        },
        {
          icon: "/homePage/encrypted.png",
          text: "Affordable, clearly priced AMC and warranty plans — no hidden fees.",
        },
        {
          icon: "/homePage/artificial-intelligence.webp",
          text: "Best-in-class AI models deliver the highest recognition rates.",
        },
        {
          icon: "/homePage/education.png",
          text: "Custom-fit for schools, corporates, hospitals & industries.",
        },
        {
          icon: "/homePage/personalization.webp",
          text: "One-click sync with all major payroll and HR management tools.",
        },
        {
          icon: "/homePage/metrics.png",
          text: "Fastest deployment — fully operational within 48 hours.",
        },
        {
          icon: "/homePage/access-control.png",
          text: "Enterprise-grade encryption and full compliance guaranteed.",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      points: [
        {
          desc: "“Nialabs has fully automated our attendance system in all our Chennai branches; their face recognition device even works in lowlight.”",
          position: "HR Manager",
          place: "OMR IT Company",
        },
        {
          desc: "“Our Sriperumbudur factory experienced a 90% reduction in manual errors post-implementation of Nialabs.”",
          position: "Head of Plant",
          place: "Automotive Unit",
        },
        {
          desc: "“Nialabs simplified our shift and OT tracking. The cloud report is allowing us to save hours each week.”",
          position: "Operations Manager",
          place: "Ambattur Manufacturing Unit",
        },
        {
          desc: "“Nialabs simplified our shift and OT tracking. The cloud report is allowing us to save hours each week.”",
          position: "Operations Manager",
          place: "Ambattur Manufacturing Unit",
        },
      ]
    },
    faqs: [
      {
        question: "Do you provide installation services in Chennai?",
        solution: "Yes, our local operations team ensures fast deployment and installation universally within Chennai and surrounding industrial areas.",
      },
      {
        question: "Can my payroll be integrated with your system?",
        solution: "Absolutely, it offers one-click, seamless API sync with all major payroll and HRMS management tools.",
      },
      {
        question: "Are both Face & Fingerprint machines available?",
        solution: "Yes, we offer advanced devices that include multi-modal (face, fingerprint, and RFID) tracking specifically adapted for mixed environments.",
      },
      {
        question: "What is the duration of the warranty?",
        solution: "We provide comprehensive, fully transparent AMC and warranty plans to ensure lifetime usability with minimal interruption.",
      },
      {
        question: "Can you manage 24/7 support?",
        solution: "Yes, our dedicated local support handles technical queries and ensures minimal downtime for rotational operational environments like hospitals and IT companies.",
      },
      {
        question: "Do you provide AMC and after-sales service in Chennai?",
        solution: "Yes, our transparently priced AMC guarantees ongoing maintenance, repairs, and updates to the service.",
      },
      {
        question: "Does it support multiple shifts, including night shifts?",
        solution: "Definitely, it features auto-management of multiple changing shifts including precise OT calculations for operations at factories and 24/7 offices.",
      },
      {
        question: "What if we lose Internet Connectivity?",
        solution: "All tracking continues natively offline and securely buffers the logs until connection is re-established where it seamlessly syncs without manual intervention.",
      },
      {
        question: "Can we install Nialabs devices outdoors and in dim lighting conditions?",
        solution: "Yes, our anti-spoofing hardware and AI cameras are built rugged and perform flawlessly in dim light, outdoors, and high-footfall entrance contexts.",
      },
      {
        question: "Are demo sessions available?",
        solution: "Yes, you can readily book a free demo allowing us to walk through exactly how our systems will cater to your needs.",
      },
    ],
    cta: {
      title: "Ready to automate attendance in Chennai?",
      desc: [
        "Get the most effective Biometric Attendance System from Nialabs - Fast, Accurate & Reliable.",
        "Book your free demo with Nialabs today!",
      ],
    }
  }
];
