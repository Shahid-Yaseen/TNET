"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar"
type Direction = "ltr" | "rtl"

interface LanguageContextType {
  language: Language
  direction: Direction
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// English translations
const enTranslations: Record<string, string> = {
  // Header
  home: "Home",
  about: "About Us",
  services: "Services",
  clients: "Clients",
  work: "Work",
  careers: "Careers",
  contact: "Contact",
  getInTouch: "Get in Touch",

  // Hero Section
  heroTitle: "Innovative Technology Solutions for Modern Businesses",
  heroDescription:
    "TNET delivers cutting-edge IT services, web solutions, and digital marketing strategies to help your business thrive in the digital age.",
  heroTitleUpdated: "Empowering Your Digital Transformation",
  heroDescriptionUpdated:
    "We're not just another tech company. We're a team of passionate problem-solvers, driven to empower businesses in the digital age with cutting-edge technology solutions.",
  exploreServices: "Explore Our Services",
  contactUs: "Contact Us",

  // About Section
  aboutTnet: "About TNET",
  empoweringBusinesses: "Empowering Businesses Through Technology",
  empoweringBusinessesUpdated: "A Future Fueled by Innovation",
  aboutDescription:
    "At TNET, we believe in harnessing the power of technology to drive business growth and innovation. With our comprehensive suite of services, we provide end-to-end solutions tailored to your unique needs.",
  aboutDescriptionUpdated:
    "We envision a future where technology seamlessly integrates with every aspect of business, unlocking new possibilities and driving unprecedented success. We strive to be at the forefront of this digital revolution, constantly pushing the boundaries of what's possible.",
  learnMoreAboutUs: "Learn More About Us",
  learnMore: "Learn More",

  // Work Process Section
  workProcess: "Work Process",
  simpleSmartProcess: "Simple & Smart Work Process",
  processDescription: "We follow a streamlined process to ensure efficient delivery of high-quality solutions.",
  processStep1Title: "Discovery",
  processStep1Description: "We analyze your requirements and understand your business objectives.",
  processStep2Title: "Planning",
  processStep2Description: "We create a detailed roadmap and strategy for implementation.",
  processStep3Title: "Execution",
  processStep3Description: "Our team develops and implements the solution with precision.",
  processStep4Title: "Delivery",
  processStep4Description: "We deliver the final product with ongoing support and maintenance.",

  // Statistics Section
  ourAchievements: "Our Achievements",
  creativeStatistics: "Creative Statistics Quality",
  statisticsDescription: "Our track record speaks for itself. Here's what we've accomplished over the years.",
  happyClients: "Happy Clients",
  yearsExperience: "Years Experience",
  projectsCompleted: "Projects Completed",
  ownProducts: "Own Products",

  // Services Section
  ourServices: "Our Services",
  comprehensiveSolutions: "Comprehensive Technology Solutions",
  servicesDescription: "We offer a wide range of services to meet all your technology needs.",
  servicesDescriptionUpdated:
    "We believe in going beyond just meeting your technology needs. Our comprehensive solutions are tailored to your unique business requirements, helping you achieve your strategic goals.",
  viewAllServices: "View All Services",

  // Service Categories
  accounting: "Accounting & Bookkeeping",
  accountingDescription: "Comprehensive financial management solutions for your business.",
  accountingDescriptionUpdated:
    "We provide comprehensive financial management solutions that go beyond compliance, offering insightful analysis and proactive advice to optimize your financial health.",
  hosting: "Hosting & Domain",
  hostingDescription: "Reliable hosting and domain registration services.",
  consulting: "IT Consulting",
  consultingDescription: "Strategic guidance to optimize your technology investments.",
  consultingDescriptionUpdated:
    "Our IT consulting services empower your organization to leverage technology for growth, efficiency, and innovation with strategic guidance from our experienced professionals.",
  it: "Information Technology",
  itDescription: "Custom IT solutions and infrastructure support.",
  itDescriptionUpdated:
    "We deliver custom IT solutions and infrastructure support to help your business harness the power of technology for operational excellence and competitive advantage.",
  security: "Security & Surveillance",
  securityDescription: "CCTV, access control, and monitoring solutions.",
  socialMedia: "Social Media Marketing",
  socialMediaDescription: "Digital marketing strategies to grow your online presence.",
  seo: "Search Engine Optimization",
  seoDescription: "Improve search rankings and online visibility.",
  vulnerability: "Vulnerability Assessment",
  vulnerabilityDescription: "Identify and mitigate cybersecurity risks.",
  vulnerabilityDescriptionUpdated:
    "Our VAPT services identify and mitigate cybersecurity risks, ensuring your systems are secure and compliant with industry standards like ADHICS for healthcare facilities.",
  webDesign: "Website Design",
  webDesignDescription: "Custom, responsive, and user-friendly website development.",
  webDesignDescriptionUpdated:
    "We create visually stunning, user-friendly websites that are strategically engineered to captivate your audience, drive engagement, and deliver measurable results.",

  // Why Choose Us
  whyChooseUs: "Why Choose Us",
  tnetAdvantage: "The TNET Advantage",
  advantageDescription:
    "We combine technical expertise with business acumen to deliver solutions that drive real results.",
  expertise: "Expertise",
  expertiseDescription: "Our team of certified professionals brings years of industry experience to every project.",
  customization: "Customization",
  customizationDescription: "We tailor our solutions to meet your specific business requirements and objectives.",
  support: "Support",
  supportDescription: "We provide ongoing support and maintenance to ensure your systems run smoothly.",

  // Testimonials
  testimonials: "Testimonials",
  whatClientsSay: "What Our Clients Say",
  testimonialsDescription:
    "Don't just take our word for it. Here's what our clients have to say about working with TNET.",
  previousTestimonial: "Previous testimonial",
  nextTestimonial: "Next testimonial",
  goToTestimonial: "Go to testimonial",
  ourClients: "Our Clients",

  // Get In Touch Section
  getInTouchTitle: "Let's Discuss Your Project",
  getInTouchDescription: "Have a question or want to know more about our services? Get in touch with us today.",
  sendMessage: "Send Us a Message",
  yourName: "Your Name",
  namePlaceholder: "Enter your name",
  yourEmail: "Your Email",
  emailPlaceholder: "Enter your email",
  subject: "Subject",
  subjectPlaceholder: "Enter subject",
  message: "Message",
  messagePlaceholder: "Enter your message",
  sendMessageButton: "Send Message",
  followUs: "Follow Us",

  // CTA
  readyToTransform: "Ready to Transform Your Business?",
  ctaDescription: "Let's discuss how TNET can help you achieve your technology goals.",
  contactUsToday: "Contact Us Today",

  // Footer
  quickLinks: "Quick Links",
  contactInfo: "Contact Us",
  allRightsReserved: "All rights reserved.",
  footerDescription:
    "Innovative technology solutions for modern businesses. We help organizations leverage technology to achieve their goals.",
  address: "123 Tech Street, Innovation City, 12345",
  phone: "(123) 456-7890",
  email: "info@tnet.com",

  // Language
  english: "English",
  arabic: "العربية",

  // About Us Page
  aboutUsHero: "Who We Are: TNET InfoTech Solutions",
  aboutUsHeroDesc:
    "We're not just another tech company. We're a team of passionate problem-solvers, driven to empower businesses in the digital age.",
  whoWeAre: "Who We Are",
  notJustAnotherTechCompany: "Not Just Another Tech Company",
  whoWeAreDesc:
    "Born in the heart of innovation, TNET InfoTech Solutions (FZC) is a leading provider of cutting-edge technology solutions designed to streamline operations, enhance efficiency, and drive growth.",
  ourMission: "Our Mission",
  ourMissionDesc:
    "Our mission is to be your trusted partner in navigating the ever-evolving landscape of information technology. We believe in the power of technology to transform businesses, and we're committed to delivering solutions that not only meet your current needs but also anticipate your future challenges.",
  ourVision: "Our Vision",
  ourVisionDesc:
    "We envision a future where technology seamlessly integrates with every aspect of business, unlocking new possibilities and driving unprecedented success. We strive to be at the forefront of this digital revolution, constantly pushing the boundaries of what's possible and empowering our clients to achieve their full potential.",
  ourValues: "Our Values",
  whatDrivesUs: "What Drives Us Forward",
  ourValuesDesc:
    "Our core values shape everything we do, from how we develop solutions to how we interact with our clients.",
  valueInnovation: "Innovation",
  valueInnovationDesc:
    "We embrace new technologies and ideas, constantly seeking innovative ways to improve our solutions and services.",
  valueExcellence: "Excellence",
  valueExcellenceDesc:
    "We strive for excellence in everything we do, from the quality of our solutions to the level of service we provide.",
  valueCustomerCentric: "Customer-Centric",
  valueCustomerCentricDesc:
    "We put our clients at the heart of everything we do. Our solutions are tailored to your unique needs and goals, ensuring maximum value and impact.",
  valueIntegrity: "Integrity",
  valueIntegrityDesc:
    "We conduct our business with the highest ethical standards, building trust through transparency and honesty.",
  whatSetsUsApart: "What Sets Us Apart",
  ourDifference: "The TNET Difference",
  whatSetsUsApartDesc:
    "We combine technical expertise with business acumen to deliver solutions that drive real results for our clients.",
  customerCentricApproach: "Customer-Centric Approach",
  customerCentricApproachDesc:
    "We put our clients at the heart of everything we do. Our solutions are tailored to your unique needs and goals, ensuring maximum value and impact.",
  expertiseAndExperience: "Expertise and Experience",
  expertiseAndExperienceDesc:
    "Our team boasts a diverse range of skills and experience across various technologies and industries. We're equipped to handle any challenge you throw our way.",
  provenTrackRecord: "Proven Track Record",
  provenTrackRecordDesc:
    "We've helped numerous businesses across the UAE achieve their digital transformation goals. Our success stories speak for themselves.",
  commitmentToExcellence: "Commitment to Excellence",
  commitmentToExcellenceDesc:
    "We strive for excellence in everything we do, from the quality of our solutions to the level of service we provide.",
  ourTeam: "Our Team",
  meetOurExperts: "Meet Our Experts",
  ourTeamDesc:
    "Our team of dedicated professionals brings together diverse expertise and a shared passion for technology and innovation.",
  ceoFounder: "CEO & Founder",
  ceoFounderBio:
    "With over 20 years of experience in the technology sector, John leads our company with vision and expertise.",
  cto: "Chief Technology Officer",
  ctoBio: "Sarah oversees our technical strategy and ensures we stay at the cutting edge of technological innovation.",
  headOfOperations: "Head of Operations",
  headOfOperationsBio:
    "Michael ensures that our projects are delivered on time, within budget, and to the highest standards of quality.",
  marketingDirector: "Marketing Director",
  marketingDirectorBio:
    "Emily leads our marketing efforts, helping clients understand how our solutions can transform their businesses.",
  readyToPartner: "Ready to Partner with TNET?",
  readyToPartnerDesc:
    "Let's discuss how we can help you leverage technology to achieve your business goals and drive growth.",

  // Services Page
  needCustomSolution: "Need a Custom Solution?",
  customSolutionDesc:
    "Contact us today to discuss your specific requirements and how we can help you achieve your technology goals.",

  // Web Design Page
  webDesignThatWorks: "Web Design That Doesn't Just Look Good, It Works",
  webDesignIntro:
    "At TNET, we believe your website is more than just a digital storefront – it's the heart of your online brand, a 24/7 ambassador for your business.",
  getStarted: "Get Started",
  learnAboutProcess: "Learn About Our Process",
  whyWebDesignImportant: "Why Web Design is Important",
  benefitsOfProfessionalWebsite: "Benefits of a Professional Website",
  benefitsOfProfessionalWebsiteDesc:
    "In the digital age, a well-designed website is essential for healthcare providers for several crucial reasons.",
  buildingTrustCredibility: "Building Trust and Credibility",
  buildingTrustCredibilityDesc:
    "A professional, modern website establishes trust and credibility with potential patients. It signals that your practice is up-to-date and dedicated to providing quality care.",
  accessibility: "Accessibility",
  accessibilityDesc:
    "Healthcare websites must be accessible to all, including individuals with disabilities. A well-designed site ensures everyone can easily access information about your services, providers, and contact details.",
  patientEngagement: "Patient Engagement and Education",
  patientEngagementDesc:
    "Websites offer a platform to share educational resources, answer FAQs, and engage patients with relevant health information. This can empower patients to make informed decisions about their care and improve health outcomes.",
  appointmentScheduling: "Appointment Scheduling and Communication",
  appointmentSchedulingDesc:
    "Online appointment scheduling and secure messaging features streamline patient communication, making it convenient for them to book appointments and contact your practice.",
  telehealth: "Telehealth Integration",
  telehealthDesc:
    "With the rise of telemedicine, integrating a telehealth platform into your website enables remote consultations, expands access to care, and improves patient convenience.",
  marketingPatientAcquisition: "Marketing and Patient Acquisition",
  marketingPatientAcquisitionDesc:
    "A well-designed website can serve as a powerful marketing tool, attracting new patients through search engine optimization (SEO), social media integration, and targeted advertising.",
  enhancedPatientExperience: "Enhanced Patient Experience",
  enhancedPatientExperienceDesc:
    "A user-friendly website with clear navigation and relevant information enhances the overall patient experience, making it easier for them to find what they need and fostering a positive impression of your practice.",
  dataCollection: "Data Collection and Analysis",
  dataCollectionDesc:
    "Websites can collect valuable data on patient demographics, preferences, and behaviors, helping you tailor your services and marketing efforts more effectively.",
  ourApproach: "Our Approach",
  strategicDesign: "Strategic Design",
  strategicDesignDesc:
    "We don't just create pretty websites. We dive deep into your business goals, target audience, and industry landscape to craft a design that aligns with your overall strategy.",
  userCentricExperience: "User-Centric Experience (UX)",
  userCentricExperienceDesc:
    "We prioritize intuitive navigation, seamless interactions, and fast loading times to ensure a positive user experience that keeps visitors coming back for more.",
  conversionFocusedDesign: "Conversion-Focused Design",
  conversionFocusedDesignDesc:
    "Every element of your website is intentionally designed to guide users towards a desired action, whether it's making a purchase, filling out a form, or subscribing to your newsletter.",
  mobileFirstApproach: "Mobile-First Approach",
  mobileFirstApproachDesc:
    "We know that most users browse the web on their smartphones. Our responsive designs look stunning and function flawlessly on all devices.",
  seoOptimization: "SEO Optimization",
  seoOptimizationDesc:
    "We build your website with search engine optimization (SEO) in mind, ensuring your content is discoverable by the right audience.",
  ourProcess: "Our Process",
  designProcess: "Our Design Process",
  designProcessDesc:
    "We follow a proven methodology to ensure your website not only looks amazing but also delivers results.",
  discovery: "Discovery",
  discoveryDesc: "We learn about your business, goals, and target audience.",
  conceptStrategy: "Concept and Strategy",
  conceptStrategyDesc: "We develop a creative concept and strategy that aligns with your objectives.",
  designDevelopment: "Design and Development",
  designDevelopmentDesc:
    "We bring your vision to life with stunning visuals, intuitive user interfaces, and cutting-edge technology.",
  testingLaunch: "Testing and Launch",
  testingLaunchDesc:
    "We thoroughly test your website on all devices to ensure optimal performance and a seamless user experience before launch.",
  continuousImprovement: "Continuous Improvement",
  continuousImprovementDesc:
    "We provide ongoing support and maintenance to ensure your website stays ahead of the curve.",
  readyToTransformWebsite: "Ready to Transform Your Online Presence?",
  readyToTransformWebsiteDesc:
    "Contact us today for a free consultation and discover how TNET can create a website that not only looks amazing but also drives measurable results for your business.",

  // Accounting Page
  beyondNumbers: "Beyond Numbers: Your Partner in Financial Clarity and Confidence",
  accountingIntro:
    "We believe that accounting and bookkeeping are more than just crunching numbers and filing reports. It's about understanding your financial story, making informed decisions, and achieving your business goals with confidence.",
  financialClarityConfidence: "Financial Clarity and Confidence",
  financialClarityConfidenceDesc:
    "Our accounting and bookkeeping services go beyond compliance to provide you with the insights and support you need to make informed business decisions.",
  beyondCompliance: "Beyond Compliance",
  beyondComplianceDesc:
    "We go beyond simply meeting regulatory requirements. We provide insightful analysis and proactive advice to help you optimize your financial health.",
  personalizedSolutions: "Personalized Solutions",
  personalizedSolutionsDesc:
    "We understand that every business is unique. That's why we tailor our services to meet your specific needs, whether you're a startup, small business, or established enterprise.",
  clearCommunication: "Clear Communication",
  clearCommunicationDesc:
    "We believe in open and transparent communication. We'll explain complex financial concepts in simple terms, ensuring you fully understand your financial situation.",
  technologyDrivenEfficiency: "Technology-Driven Efficiency",
  technologyDrivenEfficiencyDesc:
    "We leverage the latest accounting software and technologies to streamline processes, save you time, and reduce errors.",
  trustedAdvisors: "Trusted Advisors",
  trustedAdvisorsDesc:
    "We are more than just your accountants; we are your trusted advisors, committed to your success. We'll be there to support you every step of the way.",
  comprehensiveFinancialServices: "Comprehensive Financial Services",
  comprehensiveFinancialServicesDesc:
    "Our range of accounting and bookkeeping services is designed to meet all your financial management needs.",
  bookkeeping: "Bookkeeping",
  bookkeepingDesc:
    "Meticulous recording and organization of your financial transactions, ensuring accurate and up-to-date records.",
  accountingServiceDesc:
    "Comprehensive financial reporting, analysis, and insights to help you make informed business decisions.",
  taxPreparation: "Tax Preparation and Planning",
  taxPreparationDesc:
    "Accurate and timely tax preparation, along with strategic tax planning to minimize your tax burden.",
  payrollServices: "Payroll Services",
  payrollServicesDesc:
    "Efficient and reliable payroll processing, including tax calculations, deductions, and direct deposits.",
  financialConsulting: "Financial Consulting",
  financialConsultingDesc: "Expert advice on financial management, budgeting, forecasting, and strategic planning.",
  readyToOptimizeFinances: "Ready to Optimize Your Financial Management?",
  readyToOptimizeFinancesDesc:
    "Let's discuss how our accounting and bookkeeping services can help you achieve financial clarity and confidence.",
  scheduleConsultation: "Schedule a Consultation",

  // IT Consulting Page
  yourTrustedItPartner: "Your Trusted IT Partner",
  consultingIntro:
    "In today's fast-paced digital landscape, harnessing the power of technology is essential for businesses to thrive. At TNET, we offer expert IT consulting services that empower your organization to leverage technology for growth, efficiency, and innovation.",
  leverageTechnologyForGrowth: "Leverage Technology for Growth",
  leverageTechnologyForGrowthDesc:
    "Our IT consulting services are designed to help you harness the power of technology to drive business growth and innovation.",
  strategicItConsulting: "Strategic IT Consulting",
  strategicItConsultingDesc:
    "We don't just offer solutions; we partner with you to develop a comprehensive IT strategy aligned with your business goals.",
  experiencedProfessionals: "Experienced Professionals",
  experiencedProfessionalsDesc:
    "Our team of seasoned IT consultants brings a wealth of knowledge and industry experience to the table.",
  customizedSolutions: "Customized Solutions",
  customizedSolutionsDesc:
    "We understand that every organization is unique. That's why we tailor our solutions to your specific needs and challenges.",
  provenResults: "Proven Results",
  provenResultsDesc:
    "We have a track record of delivering successful IT projects for businesses across various industries.",
  clientFocusedApproach: "Client-Focused Approach",
  clientFocusedApproachDesc:
    "Your success is our priority. We are committed to providing exceptional service and building long-lasting partnerships.",
  comprehensiveItConsultingServices: "Comprehensive IT Consulting Services",
  comprehensiveItConsultingServicesDesc:
    "Our range of IT consulting services is designed to address all your technology needs.",
  itStrategyDevelopment: "IT Strategy Development",
  itStrategyDevelopmentDesc:
    "We'll help you create a roadmap for leveraging technology to achieve your business objectives.",
  itInfrastructureAssessment: "IT Infrastructure Assessment",
  itInfrastructureAssessmentDesc:
    "We'll evaluate your current IT infrastructure to identify strengths, weaknesses, and areas for improvement.",
  technologyImplementation: "Technology Implementation",
  technologyImplementationDesc:
    "We'll guide you through the selection, implementation, and integration of new technologies.",
  cloudMigration: "Cloud Migration and Management",
  cloudMigrationDesc:
    "We'll help you transition to the cloud and optimize your cloud environment for maximum efficiency.",
  cybersecurityConsulting: "Cybersecurity Consulting",
  cybersecurityConsultingDesc:
    "We'll assess your security risks and implement measures to protect your sensitive data and systems.",
  itProjectManagement: "IT Project Management",
  itProjectManagementDesc:
    "We'll manage your IT projects from start to finish, ensuring they are delivered on time and within budget.",
  industriesWeServe: "Industries We Serve",
  tailoredSolutionsForIndustries: "Tailored Solutions for Various Industries",
  tailoredSolutionsForIndustriesDesc:
    "We provide specialized IT consulting services for a wide range of industries, each with its unique challenges and requirements.",
  healthcare: "Healthcare",
  healthcareDesc:
    "We help healthcare providers leverage technology to improve patient care, streamline operations, and ensure compliance with regulations.",
  finance: "Finance",
  financeDesc:
    "We assist financial institutions in implementing secure, efficient, and innovative technology solutions.",
  retail: "Retail",
  retailDesc:
    "We enable retailers to enhance customer experience, optimize inventory management, and increase sales through technology.",
  manufacturing: "Manufacturing",
  manufacturingDesc:
    "We support manufacturers in improving operational efficiency, quality control, and supply chain management through technology.",
  readyToOptimizeItInfrastructure: "Ready to Optimize Your IT Infrastructure?",
  readyToOptimizeItInfrastructureDesc:
    "Let's discuss how our IT consulting services can help you leverage technology for growth, efficiency, and innovation.",

  // Vulnerability Assessment Page
  vulnerabilityAssessmentPenetrationTesting: "Vulnerability Assessment & Penetration Testing (VAPT)",
  vaptIntro:
    "Protect your systems and data with our comprehensive Vulnerability Assessment and Penetration Testing (VAPT) services. We identify and address security vulnerabilities before they can be exploited.",
  whyVaptImportant: "Why VAPT is Important",
  criticalForHealthcare: "Critical for Healthcare Facilities",
  criticalForHealthcareDesc:
    "The Abu Dhabi Healthcare Information and Cyber Security (ADHICS) standard mandates VAPT for healthcare facilities in Abu Dhabi for several critical reasons.",
  protectionOfSensitiveData: "Protection of Sensitive Patient Data",
  protectionOfSensitiveDataDesc:
    "Healthcare facilities handle highly sensitive patient information, including medical records, financial data, and personal details. VAPT helps identify vulnerabilities in their systems that could be exploited by malicious actors to steal or compromise this data.",
  ensuringContinuityOfCare: "Ensuring Continuity of Care",
  ensuringContinuityOfCareDesc:
    "Healthcare facilities rely on complex IT systems to deliver patient care. A successful cyber-attack can disrupt these systems, leading to delays in treatment, compromised medical devices, and even life-threatening situations. VAPT helps identify and address vulnerabilities before they can be exploited.",
  regulatoryCompliance: "Regulatory Compliance",
  regulatoryComplianceDesc:
    "Healthcare facilities must comply with various regulations and standards related to data protection and cybersecurity. VAPT is often a requirement for compliance with these regulations, helping facilities avoid penalties and legal issues.",
  buildingTrustWithPatients: "Building Trust with Patients",
  buildingTrustWithPatientsDesc:
    "Patients trust healthcare facilities with their most sensitive information. By demonstrating a commitment to robust cybersecurity measures, including VAPT, healthcare providers can build trust with patients and assure them that their data is safe.",
  stayingAheadOfCyberThreats: "Staying Ahead of Cyber Threats",
  stayingAheadOfCyberThreatsDesc:
    "The cyber threat landscape is constantly evolving, with new vulnerabilities and attack vectors emerging regularly. VAPT allows healthcare facilities to proactively identify and address these threats before they can be exploited, ensuring a strong defense against cyber-attacks.",
  comprehensiveVaptProcess: "Comprehensive VAPT Process",
  comprehensiveVaptProcessDesc:
    "Our VAPT process is designed to thoroughly assess your systems and identify vulnerabilities before they can be exploited.",
  scoping: "Scoping",
  scopingDesc:
    "We work with you to define the scope of the VAPT assessment, including the systems, networks, and applications to be tested.",
  vulnerabilityAssessment: "Vulnerability Assessment",
  vulnerabilityAssessmentDesc: "We conduct a thorough scan to identify potential vulnerabilities.",
  penetrationTesting: "Penetration Testing",
  penetrationTestingDesc: "Our ethical hackers attempt to exploit vulnerabilities to assess their severity and impact.",
  reporting: "Reporting",
  reportingDesc:
    "We provide a detailed report outlining the findings, including vulnerabilities, their severity, and recommended remediation steps.",
  remediation: "Remediation",
  remediationDesc: "We can assist you with implementing the necessary fixes to address the identified vulnerabilities.",
  adhicsCompliance: "ADHICS Compliance",
  meetingHealthcareStandards: "Meeting Healthcare Security Standards",
  meetingHealthcareStandardsDesc:
    "Our VAPT services help healthcare facilities comply with the Abu Dhabi Healthcare Information and Cyber Security (ADHICS) standard.",
  adhicsRequirement: "ADHICS Requirement",
  adhicsRequirementDesc:
    "The ADHICS standard mandates regular VAPT assessments for healthcare facilities in Abu Dhabi to ensure the security of patient data and systems.",
  ourExpertise: "Our Expertise",
  ourExpertiseDesc:
    "Our team of security professionals has extensive experience in conducting VAPT assessments for healthcare facilities, ensuring compliance with ADHICS and other relevant standards.",
  comprehensiveAssessment: "Comprehensive Assessment",
  comprehensiveAssessmentDesc:
    "Our VAPT assessments cover all aspects of your IT infrastructure, including networks, applications, and systems, to identify and address vulnerabilities comprehensively.",
  secureYourSystems: "Secure Your Systems Today",
  secureYourSystemsDesc:
    "Don't wait for a security breach to happen. Proactively identify and address vulnerabilities with our VAPT services.",
  scheduleAssessment: "Schedule an Assessment",

  // Work Page
  ourWork: "Our Work",
  explorePortfolio:
    "Explore our portfolio of successful projects across various industries and services. Each project represents our commitment to excellence and client satisfaction.",
  viewProjects: "View Projects",
  startYourProject: "Start Your Project",
  ourPortfolio: "Our Portfolio",
  featuredProjects: "Featured Projects",
  browsePortfolio:
    "Browse through our diverse portfolio of projects that showcase our expertise and the results we deliver for our clients.",
  viewProject: "View Project",
  technologies: "Technologies",
  technologiesWeUse: "Technologies We Use",
  leverageTechnologies:
    "We leverage cutting-edge technologies and platforms to deliver innovative solutions for our clients.",
  projectMetrics: "Project Metrics",
  deliveringResults: "Delivering Measurable Results",
  measuringSuccess:
    "We believe in measuring the success of our projects through tangible metrics and outcomes. Here are some of the results we've achieved for our clients.",
  increaseWebsiteConversions: "Average increase in website conversions",
  improvementOperationalEfficiency: "Improvement in operational efficiency",
  reductionSecurityIncidents: "Reduction in security incidents",
  increaseQualifiedLeads: "Increase in qualified leads",
  projectSpotlight: "Project Spotlight",
  featuredProjectHealthcare: "Featured Project: Healthcare Provider Website Redesign",
  closerLook:
    "A closer look at how we transformed a healthcare provider's digital presence and improved patient engagement.",
  theChallenge: "The Challenge",
  healthcareChallenge:
    "A multi-location healthcare practice was struggling with an outdated website that was difficult to navigate, not mobile-friendly, and failed to effectively communicate their services and expertise. They were losing potential patients to competitors with more modern online presences.",
  ourSolution: "Our Solution",
  healthcareSolution:
    "We implemented a comprehensive website redesign with a clean, modern design, intuitive navigation, online appointment scheduling, and responsive design that worked flawlessly on all devices. We also optimized the site for search engines to improve visibility.",
  theResults: "The Results",
  increaseOnlineAppointments: "150% increase in online appointment bookings",
  increaseTimeOnWebsite: "200% increase in time spent on the website",
  improvementPatientSatisfaction: "Significant improvement in patient satisfaction scores",
  newPatientsCitedWebsite: "New patients frequently cited the website as a key factor in choosing the practice",
  viewFullCaseStudy: "View Full Case Study",
  readyToStartProject: "Ready to Start Your Project?",
  contactToDiscuss:
    "Contact us today to discuss how we can help you achieve your technology goals and create a solution tailored to your specific needs.",
  letsDiscussProject: "Let's Discuss Your Project",
  allProjects: "All Projects",
  webDesign: "Web Design",
  itInfrastructure: "IT Infrastructure",
  security: "Security",
  digitalMarketing: "Digital Marketing",
  healthcareWebsiteRedesignTitle: "Healthcare Provider Website Redesign",
  healthcareWebsiteRedesignDescription:
    "A complete redesign of a multi-location healthcare practice's website, improving patient engagement and online appointment bookings.",
  manufacturingItUpgradeTitle: "Manufacturing Firm IT Infrastructure Upgrade",
  manufacturingItUpgradeDescription:
    "Comprehensive IT infrastructure modernization for a manufacturing company, improving operational efficiency and reducing downtime.",
  financialCybersecurityTitle: "Financial Services Cybersecurity Implementation",
  financialCybersecurityDescription:
    "Implementation of robust security measures for a financial services provider, ensuring compliance with industry regulations.",
  ecommerceMarketingTitle: "E-commerce Digital Marketing Campaign",
  ecommerceMarketingDescription:
    "Strategic digital marketing campaign for an e-commerce retailer, resulting in significant increases in traffic and conversions.",
  educationWebsiteTitle: "Educational Institution Website Development",
  educationWebsiteDescription:
    "Development of a modern, user-friendly website for an educational institution, enhancing student recruitment and information accessibility.",
  retailSecurityTitle: "Retail Chain Security System Implementation",
  retailSecurityDescription:
    "Implementation of comprehensive security and surveillance systems for a retail chain with multiple locations.",
  hospitalityCloudTitle: "Hospitality Group Cloud Migration",
  hospitalityCloudDescription:
    "Migration of a hospitality group's IT infrastructure to the cloud, improving scalability and operational efficiency.",
  professionalSeoTitle: "Professional Services SEO Campaign",
  professionalSeoDescription:
    "Comprehensive SEO strategy for a professional services firm, resulting in improved search rankings and increased qualified leads.",
  regionalMedicalCenter: "Regional Medical Center",
  industrialInnovations: "Industrial Innovations Ltd.",
  globalFinancialGroup: "Global Financial Group",
  urbanStyleOutlet: "Urban Style Outlet",
  internationalAcademy: "International Academy",
  premiumRetailGroup: "Premium Retail Group",
  luxuryResortsInternational: "Luxury Resorts International",
  eliteConsultingPartners: "Elite Consulting Partners",

  globalInnovations: "Global Innovations",
  techSolutionsInc: "TechSolutions Inc.",
  secureSystemsLtd: "Secure Systems Ltd.",
  retailInnovations: "Retail Innovations",
  manufacturingExcellence: "Manufacturing Excellence",
  healthcarePartners: "Healthcare Partners",
  financialServicesGroup: "Financial Services Group",
  educationSolutions: "Education Solutions",

  testimonial1Quote:
    "TNET transformed our IT infrastructure and significantly improved our operational efficiency. Their team was professional and knowledgeable throughout the entire process.",
  testimonial1Author: "Sarah Johnson",
  testimonial1Position: "CTO",
  testimonial1Company: "Global Innovations",
  testimonial2Quote:
    "The website TNET designed for us has dramatically increased our online conversions. Their SEO expertise has also helped us rank higher in search results.",
  testimonial2Author: "Michael Chen",
  testimonial2Position: "Marketing Director",
  testimonial2Company: "TechSolutions Inc.",
  testimonial3Quote:
    "TNET's security solutions have given us peace of mind. Their vulnerability assessment identified critical issues we weren't aware of and provided effective solutions.",
  testimonial3Author: "David Rodriguez",
  testimonial3Position: "Security Manager",
  testimonial3Company: "Secure Systems Ltd.",
  testimonial4Quote:
    "Working with TNET on our social media strategy has been a game-changer. Our engagement metrics have improved by over 200% since implementing their recommendations.",
  testimonial4Author: "Emily Watson",
  testimonial4Position: "Social Media Manager",
  testimonial4Company: "Retail Innovations",
  ecommerceSecurityEnhancementDesc:
    "Implementing robust security measures for an online retailer, preventing data breaches and improving customer trust.",
  ourClientsAndSuccessStories: "Our Clients and Success Stories",
  discoverHowWeHelped:
    "Discover how we've helped businesses across various industries achieve their technology goals and drive growth through innovative solutions.",
  viewSuccessStories: "View Success Stories",
  becomeOurClient: "Become Our Client",
  trustedByLeadingOrganizations: "Trusted by Leading Organizations",
  proudToPartner:
    "We're proud to partner with businesses of all sizes across various industries, helping them achieve their technology goals and drive growth.",
  dontJustTakeOurWord: "Don't just take our word for it. Here's what our clients have to say about working with TNET.",
  successStories: "Success Stories",
  caseStudies: "Case Studies",
  exploreHowWeHelped:
    "Explore how we've helped our clients overcome challenges and achieve their business goals through innovative technology solutions.",
  readCaseStudy: "Read Case Study",
  viewAllCaseStudies: "View All Case Studies",
  industries: "Industries",
  extensiveExperience:
    "We have extensive experience working with clients across a wide range of industries, providing tailored solutions to address their unique challenges.",
  clientResults: "Client Results",
  deliveringMeasurableResults: "Delivering Measurable Results for Our Clients",
  committedToDelivering:
    "At TNET, we're committed to delivering solutions that drive real, measurable results for our clients. Our success is measured by the success of our clients.",
  increasedOperationalEfficiency: "Increased Operational Efficiency",
  increasedOperationalEfficiencyDesc:
    "Our IT solutions have helped clients achieve up to 40% improvement in operational efficiency.",
  enhancedOnlinePresence: "Enhanced Online Presence",
  enhancedOnlinePresenceDesc:
    "Our web design and digital marketing services have helped clients increase online conversions by an average of 150%.",
  improvedSecurityPosture: "Improved Security Posture",
  improvedSecurityPostureDesc:
    "Our security solutions have helped clients reduce security incidents by up to 75% and achieve compliance with industry regulations.",
  costSavings: "Cost Savings",
  costSavingsDesc:
    "Our IT consulting services have helped clients reduce technology costs by an average of 30% while improving capabilities.",
  readyToBecomeNextSuccess: "Ready to Become Our Next Success Story?",
  contactTodayToDiscuss:
    "Contact us today to discuss how we can help your business leverage technology to achieve your goals and drive growth.",
  letsWorkTogether: "Let's Work Together",
  healthcareProviderDigitalTransformation: "Healthcare Provider Digital Transformation",
  healthcareProviderDigitalTransformationDesc:
    "How we helped a multi-location healthcare practice modernize their digital presence and increase patient engagement by 150%.",
  ecommerceSecurityEnhancement: "E-commerce Security Enhancement",
  financialServicesDigitalMarketing: "Financial Services Digital Marketing",
  financialServicesDigitalMarketingDesc:
    "Strategic social media and SEO campaign that generated a 200% increase in qualified leads for a financial services provider.",
  education: "Education",
  educationDesc:
    "Supporting educational institutions with technology solutions that enhance learning experiences and administrative efficiency.",
  professionalServices: "Professional Services",
  professionalServicesDesc:
    "Providing professional service firms with the digital tools and strategies they need to showcase their expertise and attract clients.",
  itConsulting: "IT Consulting",
}

// Arabic translations
const arTranslations: Record<string, string> = {
  // Header
  home: "الرئيسية",
  about: "من نحن",
  services: "خدماتنا",
  clients: "عملاؤنا",
  work: "أعمالنا",
  careers: "وظائف",
  contact: "اتصل بنا",
  getInTouch: "تواصل معنا",

  // Hero Section
  heroTitle: "حلول تكنولوجية مبتكرة للشركات الحديثة",
  heroDescription:
    "تقدم TNET خدمات تكنولوجيا المعلومات المتطورة وحلول الويب واستراتيجيات التسويق الرقمي لمساعدة عملك على الازدهار في العصر الرقمي.",
  heroTitleUpdated: "تمكين تحولك الرقمي",
  heroDescriptionUpdated:
    "نحن لسنا مجرد شركة تكنولوجيا أخرى. نحن فريق من المبدعين الشغوفين بحل المشكلات، مدفوعين لتمكين الشركات في العصر الرقمي بحلول تكنولوجية متطورة.",
  exploreServices: "استكشف خدماتنا",
  contactUs: "اتصل بنا",

  // About Section
  aboutTnet: "عن TNET",
  empoweringBusinesses: "تمكين الشركات من خلال التكنولوجيا",
  empoweringBusinessesUpdated: "مستقبل مدعوم بالابتكار",
  aboutDescription:
    "في TNET، نؤمن بتسخير قوة التكنولوجيا لدفع نمو الأعمال والابتكار. من خلال مجموعة شاملة من الخدمات، نقدم حلولًا متكاملة مصممة خصيصًا لتلبية احتياجاتك الفريدة.",
  aboutDescriptionUpdated:
    "نتصور مستقبلاً تتكامل فيه التكنولوجيا بسلاسة مع كل جانب من جوانب الأعمال، مما يفتح إمكانيات جديدة ويدفع نحو نجاح غير مسبوق. نسعى جاهدين لنكون في طليعة هذه الثورة الرقمية، ونتحدى باستمرار حدود ما هو ممكن.",
  learnMoreAboutUs: "تعرف علينا أكثر",
  learnMore: "اقرأ المزيد",

  // Work Process Section
  workProcess: "عملية العمل",
  simpleSmartProcess: "عملية عمل بسيطة وذكية",
  processDescription: "نتبع عملية مبسطة لضمان تقديم حلول عالية الجودة بكفاءة.",
  processStep1Title: "الاكتشاف",
  processStep1Description: "نحلل متطلباتك ونفهم أهداف عملك.",
  processStep2Title: "التخطيط",
  processStep2Description: "نقوم بإنشاء خارطة طريق مفصلة واستراتيجية للتنفيذ.",
  processStep3Title: "التنفيذ",
  processStep3Description: "يقوم فريقنا بتطوير وتنفيذ الحل بدقة.",
  processStep4Title: "التسليم",
  processStep4Description: "نقدم المنتج النهائي مع الدعم والصيانة المستمرة.",

  // Statistics Section
  ourAchievements: "إنجازاتنا",
  creativeStatistics: "إحصائيات إبداعية",
  statisticsDescription: "سجلنا يتحدث عن نفسه. إليك ما أنجزناه على مر السنين.",
  happyClients: "عملاء سعداء",
  yearsExperience: "سنوات الخبرة",
  projectsCompleted: "مشاريع مكتملة",
  ownProducts: "منتجات خاصة",

  // Services Section
  ourServices: "خدماتنا",
  comprehensiveSolutions: "حلول تكنولوجية شاملة",
  servicesDescription: "نقدم مجموعة واسعة من الخدمات لتلبية جميع احتياجاتك التكنولوجية.",
  servicesDescriptionUpdated:
    "نؤمن بتجاوز مجرد تلبية احتياجاتك التكنولوجية. حلولنا الشاملة مصممة خصيصًا لتلبية متطلبات عملك الفريدة، مما يساعدك على تحقيق أهدافك الاستراتيجية.",
  viewAllServices: "عرض جميع الخدمات",

  // Service Categories
  accounting: "المحاسبة ومسك الدفاتر",
  accountingDescription: "حلول إدارة مالية شاملة لعملك.",
  accountingDescriptionUpdated:
    "نقدم حلول إدارة مالية شاملة تتجاوز الامتثال، وتقدم تحليلات مفيدة ونصائح استباقية لتحسين صحتك المالية.",
  hosting: "الاستضافة والنطاقات",
  hostingDescription: "خدمات استضافة وتسجيل نطاقات موثوقة.",
  consulting: "استشارات تكنولوجيا المعلومات",
  consultingDescription: "توجيه استراتيجي لتحسين استثماراتك التكنولوجية.",
  consultingDescriptionUpdated:
    "تمكن خدمات استشارات تكنولوجيا المعلومات لدينا مؤسستك من الاستفادة من التكنولوجيا للنمو والكفاءة والابتكار مع التوجيه الاستراتيجي من المحترفين ذوي الخبرة لدينا.",
  it: "تكنولوجيا المعلومات",
  itDescription: "حلول تكنولوجيا المعلومات المخصصة ودعم البنية التحتية.",
  itDescriptionUpdated:
    "نقدم حلول تكنولوجيا المعلومات المخصصة ودعم البنية التحتية لمساعدة عملك على تسخير قوة التكنولوجيا للتميز التشغيلي والميزة التنافسية.",
  security: "الأمن والمراقبة",
  securityDescription: "حلول الدوائر التلفزيونية المغلقة والتحكم في الوصول والمراقبة.",
  socialMedia: "التسويق عبر وسائل التواصل الاجتماعي",
  socialMediaDescription: "استراتيجيات التسويق الرقمي لتنمية تواجدك عبر الإنترنت.",
  seo: "تحسين محركات البحث",
  seoDescription: "تحسين ترتيب البحث والظهور عبر الإنترنت.",
  vulnerability: "تقييم نقاط الضعف",
  vulnerabilityDescription: "تحديد مخاطر الأمن السيبراني والتخفيف منها.",
  vulnerabilityDescriptionUpdated:
    "تحدد خدمات VAPT لدينا مخاطر الأمن السيبراني وتخفف منها، مما يضمن أن أنظمتك آمنة ومتوافقة مع معايير الصناعة مثل ADHICS للمرافق الصحية.",
  webDesign: "تصميم المواقع الإلكترونية",
  webDesignDescription: "تطوير مواقع ويب مخصصة ومتجاوبة وسهلة الاستخدام.",
  webDesignDescriptionUpdated:
    "نقوم بإنشاء مواقع ويب مذهلة بصريًا وسهلة الاستخدام يتم تصميمها استراتيجيًا لجذب جمهورك وتعزيز المشاركة وتحقيق نتائج قابلة للقياس.",

  // Why Choose Us
  whyChooseUs: "لماذا تختارنا",
  tnetAdvantage: "ميزة TNET",
  advantageDescription: "نجمع بين الخبرة التقنية والفطنة التجارية لتقديم حلول تحقق نتائج حقيقية.",
  expertise: "الخبرة",
  expertiseDescription: "يجلب فريقنا من المحترفين المعتمدين سنوات من الخبرة في المجال لكل مشروع.",
  customization: "التخصيص",
  customizationDescription: "نصمم حلولنا لتلبية متطلبات وأهداف عملك المحددة.",
  support: "الدعم",
  supportDescription: "نقدم الدعم والصيانة المستمرة لضمان تشغيل أنظمتك بسلاسة.",

  // Testimonials
  testimonials: "آراء العملاء",
  whatClientsSay: "ماذا يقول عملاؤنا",
  testimonialsDescription: "لا تأخذ كلمتنا فقط. إليك ما يقوله عملاؤنا عن العمل مع TNET.",
  previousTestimonial: "الشهادة السابقة",
  nextTestimonial: "الشهادة التالية",
  goToTestimonial: "الانتقال إلى الشهادة",
  ourClients: "عملاؤنا",

  // Get In Touch Section
  getInTouchTitle: "دعنا نناقش مشروعك",
  getInTouchDescription: "هل لديك سؤال أو تريد معرفة المزيد عن خدماتنا؟ تواصل معنا اليوم.",
  sendMessage: "أرسل لنا رسالة",
  yourName: "اسمك",
  namePlaceholder: "أدخل اسمك",
  yourEmail: "بريدك الإلكتروني",
  emailPlaceholder: "أدخل بريدك الإلكتروني",
  subject: "الموضوع",
  subjectPlaceholder: "أدخل الموضوع",
  message: "الرسالة",
  messagePlaceholder: "أدخل رسالتك",
  sendMessageButton: "إرسال الرسالة",
  followUs: "تابعنا",

  // CTA
  readyToTransform: "هل أنت مستعد لتحويل عملك؟",
  ctaDescription: "دعنا نناقش كيف يمكن لـ TNET مساعدتك في تحقيق أهدافك التكنولوجية.",
  contactUsToday: "اتصل بنا اليوم",

  // Footer
  quickLinks: "روابط سريعة",
  contactInfo: "اتصل بنا",
  allRightsReserved: "جميع الحقوق محفوظة.",
  footerDescription:
    "حلول تكنولوجية مبتكرة للشركات الحديثة. نساعد المؤسسات على الاستفادة من التكنولوجيا لتحقيق أهدافها.",
  address: "١٢٣ شارع التكنولوجيا، مدينة الابتكار، ١٢٣٤٥",
  phone: "(١٢٣) ٤٥٦-٧٨٩٠",
  email: "info@tnet.com",

  // Language
  english: "English",
  arabic: "العربية",

  // About Us Page
  aboutUsHero: "من نحن: تي نت لحلول تكنولوجيا المعلومات",
  aboutUsHeroDesc:
    "نحن لسنا مجرد شركة تكنولوجيا أخرى. نحن فريق من المبدعين الشغوفين بحل المشكلات، مدفوعين لتمكين الشركات في العصر الرقمي.",
  whoWeAre: "من نحن",
  notJustAnotherTechCompany: "لسنا مجرد شركة تكنولوجيا أخرى",
  whoWeAreDesc:
    "ولدت في قلب الابتكار، تي نت لحلول تكنولوجيا المعلومات هي مزود رائد لحلول التكنولوجيا المتطورة المصممة لتبسيط العمليات وتعزيز الكفاءة ودفع النمو.",
  ourMission: "مهمتنا",
  ourMissionDesc:
    "مهمتنا هي أن نكون شريكك الموثوق في التنقل في المشهد المتطور باستمرار لتكنولوجيا المعلومات. نحن نؤمن بقوة التكنولوجيا لتحويل الأعمال، ونحن ملتزمون بتقديم حلول لا تلبي احتياجاتك الحالية فحسب، بل تتوقع أيضًا تحدياتك المستقبلية.",
  ourVision: "رؤيتنا",
  ourVisionDesc:
    "نتصور مستقبلاً تتكامل فيه التكنولوجيا بسلاسة مع كل جانب من جوانب الأعمال، مما يفتح إمكانيات جديدة ويدفع نحو نجاح غير مسبوق. نسعى جاهدين لنكون في طليعة هذه الثورة الرقمية، ونتحدى باستمرار حدود ما هو ممكن وتمكين عملائنا من تحقيق إمكاناتهم الكاملة.",
  ourValues: "قيمنا",
  whatDrivesUs: "ما يدفعنا إلى الأمام",
  ourValuesDesc: "تشكل قيمنا الأساسية كل ما نقوم به، من كيفية تطوير الحلول إلى كيفية تفاعلنا مع عملائنا.",
  valueInnovation: "الابتكار",
  valueInnovationDesc: "نحن نتبنى التقنيات والأفكار الجديدة، ونسعى باستمرار إلى طرق مبتكرة لتحسين حلولنا وخدماتنا.",
  valueExcellence: "التميز",
  valueExcellenceDesc: "نحن نسعى للتميز في كل ما نقوم به، من جودة حلولنا إلى مستوى الخدمة التي نقدمها.",
  valueCustomerCentric: "التركيز على العميل",
  valueCustomerCentricDesc:
    "نضع عملاءنا في قلب كل ما نقوم به. حلولنا مصممة خصيصًا لتلبية احتياجاتك وأهدافك الفريدة، مما يضمن أقصى قيمة وتأثير.",
  valueIntegrity: "النزاهة",
  valueIntegrityDesc: "نحن ندير أعمالنا بأعلى المعايير الأخلاقية، ونبني الثقة من خلال الشفافية والصدق.",
  whatSetsUsApart: "ما يميزنا",
  ourDifference: "الفرق مع تي نت",
  whatSetsUsApartDesc: "نحن نجمع بين الخبرة التقنية والفطنة التجارية لتقديم حلول تحقق نتائج حقيقية لعملائنا.",
  customerCentricApproach: "نهج يركز على العميل",
  customerCentricApproachDesc:
    "نضع عملاءنا في قلب كل ما نقوم به. حلولنا مصممة خصيصًا لتلبية احتياجاتك وأهدافك الفريدة، مما يضمن أقصى قيمة وتأثير.",
  expertiseAndExperience: "الخبرة والتجربة",
  expertiseAndExperienceDesc:
    "يتمتع فريقنا بمجموعة متنوعة من المهارات والخبرات عبر مختلف التقنيات والصناعات. نحن مجهزون للتعامل مع أي تحد تواجهه.",
  provenTrackRecord: "سجل حافل بالإنجازات",
  provenTrackRecordDesc:
    "لقد ساعدنا العديد من الشركات في جميع أنحاء الإمارات العربية المتحدة على تحقيق أهداف التحول الرقمي. قصص نجاحنا تتحدث عن نفسها.",
  commitmentToExcellence: "الالتزام بالتميز",
  commitmentToExcellenceDesc: "نحن نسعى للتميز في كل ما نقوم به، من جودة حلولنا إلى مستوى الخدمة التي نقدمها.",
  ourTeam: "فريقنا",
  meetOurExperts: "تعرف على خبرائنا",
  ourTeamDesc: "يجمع فريقنا من المحترفين المتفانين بين الخبرات المتنوعة والشغف المشترك بالتكنولوجيا والابتكار.",
  ceoFounder: "الرئيس التنفيذي والمؤسس",
  ceoFounderBio: "مع أكثر من 20 عامًا من الخبرة في قطاع التكنولوجيا، يقود جون شركتنا برؤية وخبرة.",
  cto: "المدير التقني",
  ctoBio: "تشرف سارة على استراتيجيتنا التقنية وتضمن بقاءنا في طليعة الابتكار التكنولوجي.",
  headOfOperations: "رئيس العمليات",
  headOfOperationsBio: "يضمن مايكل تسليم مشاريعنا في الوقت المحدد، وضمن الميزانية، وبأعلى معايير الجودة.",
  marketingDirector: "مدير التسويق",
  marketingDirectorBio: "تقود إيميلي جهود التسويق لدينا، مما يساعد العملاء على فهم كيف يمكن لحلولنا تحويل أعمالهم.",
  readyToPartner: "هل أنت مستعد للشراكة مع تي نت؟",
  readyToPartnerDesc: "دعنا نناقش كيف يمكننا مساعدتك في الاستفادة من التكنولوجيا لتحقيق أهداف عملك ودفع النمو.",

  // Services Page
  needCustomSolution: "هل تحتاج إلى حل مخصص؟",
  customSolutionDesc: "اتصل بنا اليوم لمناقشة متطلباتك المحددة وكيف يمكننا مساعدتك في تحقيق أهدافك التكنولوجية.",

  // Web Design Page
  webDesignThatWorks: "تصميم ويب لا يبدو جيدًا فحسب، بل يعمل بكفاءة",
  webDesignIntro:
    "في TNET، نؤمن بأن موقعك الإلكتروني هو أكثر من مجرد واجهة رقمية - إنه قلب علامتك التجارية عبر الإنترنت، وسفير على مدار الساعة لعملك.",
  getStarted: "ابدأ الآن",
  learnAboutProcess: "تعرف على عمليتنا",
  whyWebDesignImportant: "لماذا تصميم الويب مهم",
  benefitsOfProfessionalWebsite: "فوائد موقع ويب احترافي",
  benefitsOfProfessionalWebsiteDesc:
    "في العصر الرقمي، يعد موقع الويب المصمم جيدًا ضروريًا لمقدمي الرعاية الصحية لعدة أسباب حاسمة.",
  buildingTrustCredibility: "بناء الثقة والمصداقية",
  buildingTrustCredibilityDesc:
    "يؤسس موقع الويب الاحترافي والحديث الثقة والمصداقية مع المرضى المحتملين. إنه يشير إلى أن ممارستك محدثة ومكرسة لتقديم رعاية عالية الجودة.",
  accessibility: "إمكانية الوصول",
  accessibilityDesc:
    "يجب أن تكون مواقع الرعاية الصحية متاحة للجميع، بما في ذلك الأشخاص ذوي الإعاقة. يضمن الموقع المصمم جيدًا أن يتمكن الجميع من الوصول بسهولة إلى المعلومات حول خدماتك ومقدمي الخدمة وتفاصيل الاتصال.",
  patientEngagement: "مشاركة المرضى والتعليم",
  patientEngagementDesc:
    "توفر مواقع الويب منصة لمشاركة الموارد التعليمية، والإجابة على الأسئلة الشائعة، وإشراك المرضى بمعلومات صحية ذات صلة. يمكن أن يمكّن هذا المرضى من اتخاذ قرارات مستنيرة بشأن رعايتهم وتحسين نتائج الصحة.",
  appointmentScheduling: "جدولة المواعيد والتواصل",
  appointmentSchedulingDesc:
    "تعمل ميزات جدولة المواعيد عبر الإنترنت والمراسلة الآمنة على تبسيط التواصل مع المرضى، مما يجعل من السهل عليهم حجز المواعيد والاتصال بممارستك.",
  telehealth: "تكامل الصحة عن بعد",
  telehealthDesc:
    "مع ارتفاع الطب عن بعد، يتيح دمج منصة الصحة عن بعد في موقع الويب الخاص بك الاستشارات عن بعد، ويوسع الوصول إلى الرعاية، ويحسن راحة المريض.",
  marketingPatientAcquisition: "التسويق واكتساب المرضى",
  marketingPatientAcquisitionDesc:
    "يمكن أن يكون موقع الويب المصمم جيدًا بمثابة أداة تسويقية قوية، تجذب مرضى جدد من خلال تحسين محركات البحث (SEO)، وتكامل وسائل التواصل الاجتماعي، والإعلانات المستهدفة.",
  enhancedPatientExperience: "تحسين تجربة المريض",
  enhancedPatientExperienceDesc:
    "يعزز موقع الويب سهل الاستخدام مع التنقل الواضح والمعلومات ذات الصلة تجربة المريض الشاملة، مما يسهل عليهم العثور على ما يحتاجون إليه ويعزز انطباعًا إيجابيًا عن ممارستك.",
  dataCollection: "جمع البيانات وتحليلها",
  dataCollectionDesc:
    "يمكن لمواقع الويب جمع بيانات قيمة حول التركيبة السكانية للمرضى وتفضيلاتهم وسلوكياتهم، مما يساعدك على تخصيص خدماتك وجهود التسويق بشكل أكثر فعالية.",
  ourApproach: "نهجنا",
  strategicDesign: "تصميم استراتيجي",
  strategicDesignDesc:
    "نحن لا نقوم فقط بإنشاء مواقع ويب جميلة. نحن نتعمق في أهداف عملك والجمهور المستهدف ومشهد الصناعة لصياغة تصميم يتماشى مع استراتيجيتك العامة.",
  userCentricExperience: "تجربة تركز على المستخدم",
  userCentricExperienceDesc:
    "نحن نعطي الأولوية للتنقل البديهي والتفاعلات السلسة وأوقات التحميل السريعة لضمان تجربة مستخدم إيجابية تجعل الزوار يعودون للمزيد.",
  conversionFocusedDesign: "تصميم يركز على التحويل",
  conversionFocusedDesignDesc:
    "كل عنصر من عناصر موقع الويب الخاص بك مصمم عن قصد لتوجيه المستخدمين نحو إجراء مرغوب، سواء كان ذلك إجراء عملية شراء، أو ملء نموذج، أو الاشتراك في نشرتك الإخبارية.",
  mobileFirstApproach: "نهج الجوال أولاً",
  mobileFirstApproachDesc:
    "نحن نعلم أن معظم المستخدمين يتصفحون الويب على هواتفهم الذكية. تصميماتنا المتجاوبة تبدو مذهلة وتعمل بشكل مثالي على جميع الأجهزة.",
  seoOptimization: "تحسين محركات البحث",
  seoOptimizationDesc:
    "نحن نبني موقع الويب الخاص بك مع وضع تحسين محركات البحث (SEO) في الاعتبار، مما يضمن أن المحتوى الخاص بك قابل للاكتشاف من قبل الجمهور المناسب.",
  ourProcess: "عمليتنا",
  designProcess: "عملية التصميم لدينا",
  designProcessDesc: "نتبع منهجية مثبتة لضمان أن موقع الويب الخاص بك لا يبدو مذهلاً فحسب، بل يحقق أيضًا نتائج.",
  discovery: "الاكتشاف",
  discoveryDesc: "نتعرف على عملك وأهدافك وجمهورك المستهدف.",
  conceptStrategy: "المفهوم والاستراتيجية",
  conceptStrategyDesc: "نطور مفهومًا إبداعيًا واستراتيجية تتماشى مع أهدافك.",
  designDevelopment: "التصميم والتطوير",
  designDevelopmentDesc: "نحول رؤيتك إلى واقع من خلال تصميمات مذهلة وواجهات مستخدم بديهية وتكنولوجيا متطورة.",
  testingLaunch: "الاختبار والإطلاق",
  testingLaunchDesc:
    "نختبر موقع الويب الخاص بك بشكل شامل على جميع الأجهزة لضمان الأداء الأمثل وتجربة مستخدم سلسة قبل الإطلاق.",
  continuousImprovement: "التحسين المستمر",
  continuousImprovementDesc: "نقدم الدعم والصيانة المستمرة لضمان بقاء موقع الويب الخاص بك في المقدمة.",
  readyToTransformWebsite: "هل أنت مستعد لتحويل تواجدك عبر الإنترنت؟",
  readyToTransformWebsiteDesc:
    "اتصل بنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكن لـ TNET إنشاء موقع ويب لا يبدو مذهلاً فحسب، بل يحقق أيضًا نتائج قابلة للقياس لعملك.",

  // Accounting Page
  beyondNumbers: "ما وراء الأرقام: شريكك في الوضوح المالي والثقة",
  accountingIntro:
    "نحن نؤمن بأن المحاسبة ومسك الدفاتر هي أكثر من مجرد حساب الأرقام وتقديم التقارير. إنها تتعلق بفهم قصتك المالية، واتخاذ قرارات مستنيرة، وتحقيق أهداف عملك بثقة.",
  financialClarityConfidence: "الوضوح المالي والثقة",
  financialClarityConfidenceDesc:
    "تتجاوز خدمات المحاسبة ومسك الدفاتر لدينا الامتثال لتزويدك بالرؤى والدعم الذي تحتاجه لاتخاذ قرارات عمل مستنيرة.",
  beyondCompliance: "ما وراء الامتثال",
  beyondComplianceDesc:
    "نحن نتجاوز مجرد تلبية المتطلبات التنظيمية. نقدم تحليلاً مفيدًا ونصائح استباقية لمساعدتك على تحسين صحتك المالية.",
  personalizedSolutions: "حلول مخصصة",
  personalizedSolutionsDesc:
    "نحن نفهم أن كل عمل فريد من نوعه. لهذا السبب نقوم بتخصيص خدماتنا لتلبية احتياجاتك المحددة، سواء كنت شركة ناشئة، أو شركة صغيرة، أو مؤسسة راسخة.",
  clearCommunication: "تواصل واضح",
  clearCommunicationDesc:
    "نحن نؤمن بالتواصل المفتوح والشفاف. سنشرح المفاهيم المالية المعقدة بمصطلحات بسيطة، مما يضمن فهمك الكامل لوضعك المالي.",
  technologyDrivenEfficiency: "كفاءة مدفوعة بالتكنولوجيا",
  technologyDrivenEfficiencyDesc:
    "نحن نستفيد من أحدث برامج المحاسبة والتقنيات لتبسيط العمليات، وتوفير وقتك، وتقليل الأخطاء.",
  trustedAdvisors: "مستشارون موثوقون",
  trustedAdvisorsDesc:
    "نحن أكثر من مجرد محاسبين لك؛ نحن مستشاروك الموثوقون، ملتزمون بنجاحك. سنكون هناك لدعمك في كل خطوة على الطريق.",
  comprehensiveFinancialServices: "خدمات مالية شاملة",
  comprehensiveFinancialServicesDesc:
    "تم تصميم مجموعة خدمات المحاسبة ومسك الدفاتر لدينا لتلبية جميع احتياجات الإدارة المالية الخاصة بك.",
  bookkeeping: "مسك الدفاتر",
  bookkeepingDesc: "تسجيل وتنظيم دقيق لمعاملاتك المالية، مما يضمن سجلات دقيقة ومحدثة.",
  accountingServiceDesc: "تقارير مالية شاملة وتحليلات ورؤى لمساعدتك على اتخاذ قرارات عمل مستنيرة.",
  taxPreparation: "إعداد الضرائب والتخطيط",
  taxPreparationDesc:
    "إعداد ضريبي دقيق وفي الوقت المناسب، جنبًا إلى جنب مع التخطيط الضريبي الاستراتيجي لتقليل عبئك الضريبي.",
  payrollServices: "خدمات كشوف المرتبات",
  payrollServicesDesc: "معالجة كشوف المرتبات بكفاءة وموثوقية، بما في ذلك حسابات الضرائب والخصومات والإيداعات المباشرة.",
  financialConsulting: "الاستشارات المالية",
  financialConsultingDesc: "نصائح خبيرة حول الإدارة المالية والميزانية والتنبؤ والتخطيط الاستراتيجي.",
  readyToOptimizeFinances: "هل أنت مستعد لتحسين إدارتك المالية؟",
  readyToOptimizeFinancesDesc:
    "دعنا نناقش كيف يمكن لخدمات المحاسبة ومسك الدفاتر لدينا مساعدتك في تحقيق الوضوح المالي والثقة.",
  scheduleConsultation: "جدولة استشارة",

  // IT Consulting Page
  yourTrustedItPartner: "شريك تكنولوجيا المعلومات الموثوق به",
  consultingIntro:
    "في المشهد الرقمي سريع الخطى اليوم، يعد تسخير قوة التكنولوجيا أمرًا ضروريًا لازدهار الشركات. في TNET، نقدم خدمات استشارات تكنولوجيا المعلومات الخبيرة التي تمكّن مؤسستك من الاستفادة من التكنولوجيا للنمو والكفاءة والابتكار.",
  leverageTechnologyForGrowth: "الاستفادة من التكنولوجيا للنمو",
  leverageTechnologyForGrowthDesc:
    "تم تصميم خدمات استشارات تكنولوجيا المعلومات لدينا لمساعدتك على تسخير قوة التكنولوجيا لدفع نمو الأعمال والابتكار.",
  strategicItConsulting: "استشارات تكنولوجيا المعلومات الاستراتيجية",
  strategicItConsultingDesc:
    "نحن لا نقدم الحلول فحسب؛ بل نتشارك معك لتطوير استراتيجية شاملة لتكنولوجيا المعلومات تتماشى مع أهداف عملك.",
  experiencedProfessionals: "محترفون ذوو خبرة",
  experiencedProfessionalsDesc:
    "يجلب فريقنا من استشاريي تكنولوجيا المعلومات ذوي الخبرة ثروة من المعرفة والخبرة في الصناعة إلى الطاولة.",
  customizedSolutions: "حلول مخصصة",
  customizedSolutionsDesc:
    "نحن نفهم أن كل مؤسسة فريدة من نوعها. لهذا السبب نقوم بتخصيص حلولنا لتلبية احتياجاتك وتحدياتك المحددة.",
  provenResults: "نتائج مثبتة",
  provenResultsDesc: "لدينا سجل حافل في تقديم مشاريع تكنولوجيا المعلومات الناجحة للشركات عبر مختلف الصناعات.",
  clientFocusedApproach: "نهج يركز على العميل",
  clientFocusedApproachDesc: "نجاحك هو أولويتنا. نحن ملتزمون بتقديم خدمة استثنائية وبناء شراكات طويلة الأمد.",
  comprehensiveItConsultingServices: "خدمات استشارات تكنولوجيا المعلومات الشاملة",
  comprehensiveItConsultingServicesDesc:
    "تم تصميم مجموعة خدمات استشارات تكنولوجيا المعلومات لدينا لتلبية جميع احتياجاتك التكنولوجية.",
  itStrategyDevelopment: "تطوير استراتيجية تكنولوجيا المعلومات",
  itStrategyDevelopmentDesc: "سنساعدك في إنشاء خارطة طريق للاستفادة من التكنولوجيا لتحقيق أهداف عملك.",
  itInfrastructureAssessment: "تقييم البنية التحتية لتكنولوجيا المعلومات",
  itInfrastructureAssessmentDesc:
    "سنقيّم البنية التحتية الحالية لتكنولوجيا المعلومات لديك لتحديد نقاط القوة والضعف ومجالات التحسين.",
  technologyImplementation: "تنفيذ التكنولوجيا",
  technologyImplementationDesc: "سنرشدك خلال عملية اختيار وتنفيذ ودمج التقنيات الجديدة.",
  cloudMigration: "الانتقال إلى السحابة وإدارتها",
  cloudMigrationDesc: "سنساعدك في الانتقال إلى السحابة وتحسين بيئتك السحابية لتحقيق أقصى قدر من الكفاءة.",
  cybersecurityConsulting: "استشارات الأمن السيبراني",
  cybersecurityConsultingDesc: "سنقيّم مخاطر الأمان لديك وننفذ تدابير لحماية بياناتك وأنظمتك الحساسة.",
  itProjectManagement: "إدارة مشاريع تكنولوجيا المعلومات",
  itProjectManagementDesc:
    "سندير مشاريع تكنولوجيا المعلومات الخاصة بك من البداية إلى النهاية، مما يضمن تسليمها في الوقت المحدد وضمن الميزانية.",
  industriesWeServe: "الصناعات التي نخدمها",
  tailoredSolutionsForIndustries: "حلول مخصصة لمختلف الصناعات",
  tailoredSolutionsForIndustriesDesc:
    "نقدم خدمات استشارات تكنولوجيا المعلومات المتخصصة لمجموعة واسعة من الصناعات، كل منها له تحدياته ومتطلباته الفريدة.",
  healthcare: "الرعاية الصحية",
  healthcareDesc:
    "نساعد مقدمي الرعاية الصحية على الاستفادة من التكنولوجيا لتحسين رعاية المرضى، وتبسيط العمليات، وضمان الامتثال للوائح.",
  finance: "التمويل",
  financeDesc: "نساعد المؤسسات المالية في تنفيذ حلول تكنولوجية آمنة وفعالة ومبتكرة.",
  retail: "التجزئة",
  retailDesc: "نمكّن تجار التجزئة من تعزيز تجربة العملاء، وتحسين إدارة المخزون، وزيادة المبيعات من خلال التكنولوجيا.",
  manufacturing: "التصنيع",
  manufacturingDesc:
    "ندعم المصنعين في تحسين الكفاءة التشغيلية ومراقبة الجودة وإدارة سلسلة التوريد من خلال التكنولوجيا.",
  readyToOptimizeItInfrastructure: "هل أنت مستعد لتحسين البنية التحتية لتكنولوجيا المعلومات لديك؟",
  readyToOptimizeItInfrastructureDesc:
    "دعنا نناقش كيف يمكن لخدمات استشارات تكنولوجيا المعلومات لدينا مساعدتك في الاستفادة من التكنولوجيا للنمو والكفاءة والابتكار.",

  // Vulnerability Assessment Page
  vulnerabilityAssessmentPenetrationTesting: "تقييم نقاط الضعف واختبار الاختراق (VAPT)",
  vaptIntro:
    "احمِ أنظمتك وبياناتك من خلال خدمات تقييم نقاط الضعف واختبار الاختراق (VAPT) الشاملة لدينا. نحن نحدد ونعالج نقاط الضعف الأمنية قبل أن يتم استغلالها.",
  whyVaptImportant: "لماذا VAPT مهم",
  criticalForHealthcare: "حاسم لمرافق الرعاية الصحية",
  criticalForHealthcareDesc:
    "يفرض معيار أبوظبي لمعلومات الرعاية الصحية والأمن السيبراني (ADHICS) VAPT لمرافق الرعاية الصحية في أبوظبي لعدة أسباب حاسمة.",
  protectionOfSensitiveData: "حماية بيانات المرضى الحساسة",
  protectionOfSensitiveDataDesc:
    "تتعامل مرافق الرعاية الصحية مع معلومات المرضى شديدة الحساسية، بما في ذلك السجلات الطبية والبيانات المالية والتفاصيل الشخصية. يساعد VAPT في تحديد نقاط الضعف في أنظمتها التي يمكن استغلالها من قبل الجهات الخبيثة لسرقة أو المساس بهذه البيانات.",
  ensuringContinuityOfCare: "ضمان استمرارية الرعاية",
  ensuringContinuityOfCareDesc:
    "تعتمد مرافق الرعاية الصحية على أنظمة تكنولوجيا المعلومات المعقدة لتقديم رعاية المرضى. يمكن أن يؤدي الهجوم السيبراني الناجح إلى تعطيل هذه الأنظمة، مما يؤدي إلى تأخير في العلاج، وتعريض الأجهزة الطبية للخطر، وحتى مواقف تهدد الحياة. يساعد VAPT في تحديد ومعالجة نقاط الضعف قبل أن يتم استغلالها.",
  regulatoryCompliance: "الامتثال التنظيمي",
  regulatoryComplianceDesc:
    "يجب أن تمتثل مرافق الرعاية الصحية للعديد من اللوائح والمعايير المتعلقة بحماية البيانات والأمن السيبراني. غالبًا ما يكون VAPT متطلبًا للامتثال لهذه اللوائح، مما يساعد المرافق على تجنب العقوبات والقضايا القانونية.",
  buildingTrustWithPatients: "بناء الثقة مع المرضى",
  buildingTrustWithPatientsDesc:
    "يثق المرضى في مرافق الرعاية الصحية بمعلوماتهم الأكثر حساسية. من خلال إظهار الالتزام بتدابير الأمن السيبراني القوية، بما في ذلك VAPT، يمكن لمقدمي الرعاية الصحية بناء الثقة مع المرضى وطمأنتهم بأن بياناتهم آمنة.",
  stayingAheadOfCyberThreats: "البقاء في المقدمة من التهديدات السيبرانية",
  stayingAheadOfCyberThreatsDesc:
    "مشهد التهديدات السيبرانية يتطور باستمرار، مع ظهور نقاط ضعف جديدة ومتجهات هجوم بانتظام. يسمح VAPT لمرافق الرعاية الصحية بتحديد ومعالجة هذه التهديدات بشكل استباقي قبل أن يتم استغلالها، مما يضمن دفاعًا قويًا ضد الهجمات السيبرانية.",
  comprehensiveVaptProcess: "عملية VAPT شاملة",
  comprehensiveVaptProcessDesc:
    "تم تصميم عملية VAPT لدينا لتقييم أنظمتك بشكل شامل وتحديد نقاط الضعف قبل أن يتم استغلالها.",
  scoping: "تحديد النطاق",
  scopingDesc: "نعمل معك لتحديد نطاق تقييم VAPT، بما في ذلك الأنظمة والشبكات والتطبيقات التي سيتم اختبارها.",
  vulnerabilityAssessment: "تقييم نقاط الضعف",
  vulnerabilityAssessmentDesc: "نجري فحصًا شاملاً لتحديد نقاط الضعف المحتملة.",
  penetrationTesting: "اختبار الاختراق",
  penetrationTestingDesc: "يحاول قراصنتنا الأخلاقيون استغلال نقاط الضعف لتقييم شدتها وتأثيرها.",
  reporting: "إعداد التقارير",
  reportingDesc: "نقدم تقريرًا مفصلاً يوضح النتائج، بما في ذلك نقاط الضعف وشدتها وخطوات المعالجة الموصى بها.",
  remediation: "المعالجة",
  remediationDesc: "يمكننا مساعدتك في تنفيذ الإصلاحات اللازمة لمعالجة نقاط الضعف المحددة.",
  adhicsCompliance: "الامتثال لـ ADHICS",
  meetingHealthcareStandards: "تلبية معايير أمان الرعاية الصحية",
  meetingHealthcareStandardsDesc:
    "تساعد خدمات VAPT لدينا مرافق الرعاية الصحية على الامتثال لمعيار أبوظبي لمعلومات الرعاية الصحية والأمن السيبراني (ADHICS).",
  adhicsRequirement: "متطلبات ADHICS",
  adhicsRequirementDesc:
    "يفرض معيار ADHICS تقييمات VAPT منتظمة لمرافق الرعاية الصحية في أبوظبي لضمان أمان بيانات المرضى والأنظمة.",
  ourExpertise: "خبرتنا",
  ourExpertiseDesc:
    "يتمتع فريقنا من محترفي الأمان بخبرة واسعة في إجراء تقييمات VAPT لمرافق الرعاية الصحية، مما يضمن الامتثال لـ ADHICS والمعايير الأخرى ذات الصلة.",
  comprehensiveAssessment: "تقييم شامل",
  comprehensiveAssessmentDesc:
    "تغطي تقييمات VAPT لدينا جميع جوانب البنية التحتية لتكنولوجيا المعلومات لديك، بما في ذلك الشبكات والتطبيقات والأنظمة، لتحديد ومعالجة نقاط الضعف بشكل شامل.",
  secureYourSystems: "أمّن أنظمتك اليوم",
  secureYourSystemsDesc: "لا تنتظر حدوث خرق أمني. حدد ومعالج نقاط الضعف بشكل استباقي من خلال خدمات VAPT لدينا.",
  scheduleAssessment: "جدولة تقييم",

  // Work Page
  ourWork: "أعمالنا",
  explorePortfolio:
    "استكشف محفظة مشاريعنا الناجحة عبر مختلف الصناعات والخدمات. يمثل كل مشروع التزامنا بالتميز ورضا العملاء.",
  viewProjects: "عرض المشاريع",
  startYourProject: "ابدأ مشروعك",
  ourPortfolio: "معرض أعمالنا",
  featuredProjects: "المشاريع المميزة",
  browsePortfolio: "تصفح مجموعتنا المتنوعة من المشاريع التي تعرض خبرتنا والنتائج التي نقدمها لعملائنا.",
  viewProject: "عرض المشروع",
  technologies: "التقنيات",
  technologiesWeUse: "التقنيات التي نستخدمها",
  leverageTechnologies: "نحن نستفيد من أحدث التقنيات والمنصات لتقديم حلول مبتكرة لعملائنا.",
  projectMetrics: "مقاييس المشروع",
  deliveringResults: "تقديم نتائج قابلة للقياس",
  measuringSuccess:
    "نحن نؤمن بقياس نجاح مشاريعنا من خلال مقاييس ونتائج ملموسة. فيما يلي بعض النتائج التي حققناها لعملائنا.",
  increaseWebsiteConversions: "متوسط الزيادة في تحويلات الموقع",
  improvementOperationalEfficiency: "تحسين في الكفاءة التشغيلية",
  reductionSecurityIncidents: "انخفاض في الحوادث الأمنية",
  increaseQualifiedLeads: "زيادة في العملاء المحتملين المؤهلين",
  projectSpotlight: "تسليط الضوء على المشروع",
  featuredProjectHealthcare: "المشروع المميز: إعادة تصميم موقع مزود الرعاية الصحية",
  closerLook: "نظرة أقرب على كيفية تحويلنا للوجود الرقمي لمزود الرعاية الصحية وتحسين مشاركة المرضى.",
  theChallenge: "التحدي",
  healthcareChallenge:
    "كانت ممارسة الرعاية الصحية متعددة المواقع تعاني من موقع قديم يصعب التنقل فيه، وغير متوافق مع الأجهزة المحمولة، وفشل في التواصل بشكل فعال عن خدماتهم وخبراتهم. كانوا يفقدون المرضى المحتملين لصالح المنافسين ذوي الوجود الإلكتروني الأكثر حداثة.",
  ourSolution: "حلنا",
  healthcareSolution:
    "قمنا بتنفيذ إعادة تصميم شاملة للموقع مع تصميم نظيف وحديث، وتنقل بديهي، وجدولة المواعيد عبر الإنترنت، وتصميم متجاوب يعمل بشكل مثالي على جميع الأجهزة. كما قمنا بتحسين الموقع لمحركات البحث لتحسين الرؤية.",
  theResults: "النتائج",
  increaseOnlineAppointments: "زيادة بنسبة 150٪ في حجوزات المواعيد عبر الإنترنت",
  increaseTimeOnWebsite: "زيادة بنسبة 200٪ في الوقت المستغرق على الموقع",
  improvementPatientSatisfaction: "تحسن كبير في درجات رضا المرضى",
  newPatientsCitedWebsite: "غالبًا ما ذكر المرضى الجدد الموقع كعامل رئيسي في اختيار الممارسة",
  viewFullCaseStudy: "عرض دراسة الحالة الكاملة",
  readyToStartProject: "هل أنت مستعد لبدء مشروعك؟",
  contactToDiscuss:
    "اتصل بنا اليوم لمناقشة كيف يمكننا مساعدتك في تحقيق أهدافك التكنولوجية وإنشاء حل مصمم خصيصًا لاحتياجاتك المحددة.",
  letsDiscussProject: "دعنا نناقش مشروعك",
  allProjects: "جميع المشاريع",
  webDesign: "تصميم المواقع",
  itInfrastructure: "البنية التحتية لتكنولوجيا المعلومات",
  security: "الأمن",
  digitalMarketing: "التسويق الرقمي",
  healthcareWebsiteRedesignTitle: "إعادة تصميم موقع مزود الرعاية الصحية",
  healthcareWebsiteRedesignDescription:
    "إعادة تصميم كاملة لموقع ممارسة الرعاية الصحية متعددة المواقع، وتحسين مشاركة المرضى وحجوزات المواعيد عبر الإنترنت.",
  manufacturingItUpgradeTitle: "ترقية البنية التحتية لتكنولوجيا المعلومات لشركة تصنيع",
  manufacturingItUpgradeDescription:
    "تحديث شامل للبنية التحتية لتكنولوجيا المعلومات لشركة تصنيع، مما يحسن الكفاءة التشغيلية ويقلل من وقت التوقف.",
  financialCybersecurityTitle: "تنفيذ الأمن السيبراني للخدمات المالية",
  financialCybersecurityDescription: "تنفيذ تدابير أمنية قوية لمزود الخدمات المالية، مما يضمن الامتثال للوائح الصناعة.",
  ecommerceMarketingTitle: "حملة التسويق الرقمي للتجارة الإلكترونية",
  ecommerceMarketingDescription:
    "حملة تسويق رقمي استراتيجية لبائع تجزئة للتجارة الإلكترونية، مما أدى إلى زيادات كبيرة في حركة المرور والتحويلات.",
  educationWebsiteTitle: "تطوير موقع المؤسسة التعليمية",
  educationWebsiteDescription:
    "تطوير موقع حديث وسهل الاستخدام لمؤسسة تعليمية، مما يعزز توظيف الطلاب وإمكانية الوصول إلى المعلومات.",
  retailSecurityTitle: "تنفيذ نظام الأمان لسلسلة البيع بالتجزئة",
  retailSecurityDescription: "تنفيذ أنظمة أمان ومراقبة شاملة لسلسلة بيع بالتجزئة ذات مواقع متعددة.",
  hospitalityCloudTitle: "ترحيل مجموعة الضيافة إلى السحابة",
  hospitalityCloudDescription:
    "ترحيل البنية التحتية لتكنولوجيا المعلومات لمجموعة الضيافة إلى السحابة، مما يحسن قابلية التوسع والكفاءة التشغيلية.",
  professionalSeoTitle: "حملة تحسين محركات البحث للخدمات المهنية",
  professionalSeoDescription:
    "استراتيجية شاملة لتحسين محركات البحث لشركة خدمات مهنية، مما أدى إلى تحسين تصنيفات البحث وزيادة العملاء المحتملين المؤهلين.",
  regionalMedicalCenter: "المركز الطبي الإقليمي",
  industrialInnovations: "الابتكارات الصناعية المحدودة",
  globalFinancialGroup: "مجموعة المالية العالمية",
  urbanStyleOutlet: "منفذ الأسلوب الحضري",
  internationalAcademy: "الأكاديمية الدولية",
  premiumRetailGroup: "مجموعة البيع بالتجزئة المميزة",
  luxuryResortsInternational: "المنتجعات الفاخرة الدولية",
  eliteConsultingPartners: "شركاء الاستشارات النخبة",

  globalInnovations: "الابتكارات العالمية",
  techSolutionsInc: "تك سوليوشنز",
  secureSystemsLtd: "أنظمة آمنة المحدودة",
  retailInnovations: "ابتكارات التجزئة",
  manufacturingExcellence: "التميز في التصنيع",
  healthcarePartners: "شركاء الرعاية الصحية",
  financialServicesGroup: "مجموعة الخدمات المالية",
  educationSolutions: "حلول التعليم",

  testimonial1Quote:
    "قامت TNET بتحويل البنية التحتية لتكنولوجيا المعلومات لدينا وتحسين كفاءة عملياتنا بشكل كبير. كان فريقهم محترفًا ومطلعًا طوال العملية بأكملها.",
  testimonial1Author: "سارة جونسون",
  testimonial1Position: "المدير التقني",
  testimonial1Company: "الابتكارات العالمية",
  testimonial2Quote:
    "أدى موقع الويب الذي صممته TNET لنا إلى زيادة التحويلات عبر الإنترنت بشكل كبير. كما ساعدتنا خبرتهم في تحسين محركات البحث على تحقيق مرتبة أعلى في نتائج البحث.",
  testimonial2Author: "مايكل تشن",
  testimonial2Position: "مدير التسويق",
  testimonial2Company: "تك سوليوشنز",
  testimonial3Quote:
    "منحتنا حلول الأمان من TNET راحة البال. حدد تقييم نقاط الضعف لديهم المشكلات الحرجة التي لم نكن على دراية بها وقدم حلولاً فعالة.",
  testimonial3Author: "ديفيد رودريغيز",
  testimonial3Position: "مدير الأمن",
  testimonial3Company: "أنظمة آمنة المحدودة",
  testimonial4Quote:
    "كان العمل مع TNET في استراتيجية وسائل التواصل الاجتماعي الخاصة بنا بمثابة نقلة نوعية. تحسنت مقاييس المشاركة لدينا بأكثر من 200٪ منذ تنفيذ توصياتهم.",
  testimonial4Author: "إيميلي واتسون",
  testimonial4Position: "مدير وسائل التواصل الاجتماعي",
  testimonial4Company: "ابتكارات التجزئة",
  ecommerceSecurityEnhancementDesc:
    "تنفيذ تدابير أمنية قوية لمتاجر التجزئة عبر الإنترنت، ومنع خروقات البيانات وتحسين ثقة العملاء.",
  ourClientsAndSuccessStories: "عملاؤنا وقصص النجاح",
  discoverHowWeHelped:
    "اكتشف كيف ساعدنا الشركات عبر مختلف الصناعات على تحقيق أهدافهم التكنولوجية ودفع النمو من خلال الحلول المبتكرة.",
  viewSuccessStories: "عرض قصص النجاح",
  becomeOurClient: "كن عميلنا",
  trustedByLeadingOrganizations: "موثوق به من قبل المنظمات الرائدة",
  proudToPartner:
    "نحن فخورون بالشراكة مع الشركات من جميع الأحجام عبر مختلف الصناعات، ومساعدتهم على تحقيق أهدافهم التكنولوجية ودفع النمو.",
  dontJustTakeOurWord: "لا تأخذ كلمتنا فقط. إليك ما يقوله عملاؤنا عن العمل مع TNET.",
  successStories: "قصص النجاح",
  caseStudies: "دراسات الحالة",
  exploreHowWeHelped:
    "استكشف كيف ساعدنا عملائنا على التغلب على التحديات وتحقيق أهداف أعمالهم من خلال حلول تكنولوجية مبتكرة.",
  readCaseStudy: "قراءة دراسة الحالة",
  viewAllCaseStudies: "عرض جميع دراسات الحالة",
  industries: "الصناعات",
  extensiveExperience:
    "لدينا خبرة واسعة في العمل مع العملاء عبر مجموعة واسعة من الصناعات، وتقديم حلول مخصصة لمعالجة تحدياتهم الفريدة.",
  clientResults: "نتائج العملاء",
  deliveringMeasurableResults: "تقديم نتائج قابلة للقياس لعملائنا",
  committedToDelivering:
    "في TNET، نحن ملتزمون بتقديم حلول تحقق نتائج حقيقية وقابلة للقياس لعملائنا. يتم قياس نجاحنا من خلال نجاح عملائنا.",
  increasedOperationalEfficiency: "زيادة الكفاءة التشغيلية",
  increasedOperationalEfficiencyDesc:
    "ساعدت حلول تكنولوجيا المعلومات لدينا العملاء على تحقيق تحسين بنسبة تصل إلى 40٪ في الكفاءة التشغيلية.",
  enhancedOnlinePresence: "تعزيز التواجد عبر الإنترنت",
  enhancedOnlinePresenceDesc:
    "ساعدت خدمات تصميم الويب والتسويق الرقمي لدينا العملاء على زيادة التحويلات عبر الإنترنت بمتوسط 150٪.",
  improvedSecurityPosture: "تحسين الوضع الأمني",
  improvedSecurityPostureDesc:
    "ساعدت حلول الأمان لدينا العملاء على تقليل حوادث الأمان بنسبة تصل إلى 75٪ وتحقيق الامتثال للوائح الصناعة.",
  costSavings: "توفير التكاليف",
  costSavingsDesc:
    "ساعدت خدمات استشارات تكنولوجيا المعلومات لدينا العملاء على تقليل تكاليف التكنولوجيا بمتوسط 30٪ مع تحسين القدرات.",
  readyToBecomeNextSuccess: "هل أنت مستعد لتصبح قصة نجاحنا التالية؟",
  contactTodayToDiscuss:
    "اتصل بنا اليوم لمناقشة كيف يمكننا مساعدة عملك في الاستفادة من التكنولوجيا لتحقيق أهدافك ودفع النمو.",
  letsWorkTogether: "لنعمل معًا",
  healthcareProviderDigitalTransformation: "التحول الرقمي لمزود الرعاية الصحية",
  healthcareProviderDigitalTransformationDesc:
    "كيف ساعدنا ممارسة الرعاية الصحية متعددة المواقع على تحديث وجودها الرقمي وزيادة مشاركة المرضى بنسبة 150٪.",
  ecommerceSecurityEnhancement: "تعزيز أمان التجارة الإلكترونية",
  financialServicesDigitalMarketing: "التسويق الرقمي للخدمات المالية",
  financialServicesDigitalMarketingDesc:
    "حملة استراتيجية للتواصل الاجتماعي وتحسين محركات البحث أدت إلى زيادة بنسبة 200٪ في العملاء المحتملين المؤهلين لمزود الخدمات المالية.",
  education: "التعليم",
  educationDesc: "دعم المؤسسات التعليمية بحلول تكنولوجية تعزز تجارب التعلم والكفاءة الإدارية.",
  professionalServices: "الخدمات المهنية",
  professionalServicesDesc:
    "تزويد شركات الخدمات المهنية بالأدوات والاستراتيجيات الرقمية التي تحتاجها لعرض خبراتها وجذب العملاء.",
  itConsulting: "استشارات تكنولوجيا المعلومات",
}

const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  ar: arTranslations,
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")
  const direction: Direction = language === "ar" ? "rtl" : "ltr"

  const changeLanguage = (newLanguage: Language) => {
    console.log("Changing language to:", newLanguage)
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = newLanguage
  }

  const translate = (key: string): string => {
    return translations[language][key] || key
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      console.log("Loading saved language:", savedLanguage)
      changeLanguage(savedLanguage)
    }
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        setLanguage: changeLanguage,
        t: translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
