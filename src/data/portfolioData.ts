import type { Project, SkillCategory, Experience, Certification, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Elakkiya V',
  headline: 'Software Developer | Full-Stack Development | AI/ML Enthusiast',
  professionalTitle: 'Software Developer',
  degree: 'B.Tech — Computer Science and Business Systems (CSBS)',
  college: 'Easwari Engineering College',
  currentYear: 'Third year',
  educationDuration: '2024–2028',
  cgpa: '9.0',
  location: 'Chennai, Tamil Nadu, India',
  email: 'elakkiyaohai@gmail.com',
  phone: '+91 7397290089',
  githubUrl: 'https://github.com/Elakkiya2708',
  linkedinUrl: 'https://www.linkedin.com/in/elakkiya-varadharajan',
  heroIntroduction:
    "I'm a Computer Science and Business Systems student passionate about software development and building practical, real-world applications. I have developed full-stack web applications involving manufacturing quality inspection and AI-powered placement preparation. I enjoy solving technical problems, exploring modern technologies, and creating solutions that are useful, reliable, and scalable.",
  aboutParagraphs: [
    "I am a third-year B.Tech Computer Science and Business Systems (CSBS) student at Easwari Engineering College, Chennai, maintaining a CGPA of 9.0. My primary focus lies in software engineering, full-stack application development, and practical AI/ML integrations.",
    "Through engineering projects and industry internships, I have architected and deployed full-stack solutions ranging from an OpenCV-powered automated manufacturing defect inspection platform (VisionInspect AI) to an intelligent placement assessment platform (InterviewIQ).",
    "I hold three official AWS certifications spanning AI, Cloud, and Developer Associate competencies. Committed to writing clean, maintainable code and solving real-world challenges, I am actively seeking software engineering internships and placement opportunities where I can deliver impactful, scalable software."
  ],
  resumePdfPath: '/Elakkiya_V_Resume (1).pdf',
  resumeFileName: 'Elakkiya_V_Resume (1).pdf',
  profilePhotoPath: '/profile.jpg',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core foundation in systems, enterprise logic, and modern scripting',
    skills: [
      { name: 'C', tag: 'Procedural' },
      { name: 'C++', tag: 'OOP / Systems' },
      { name: 'Java', tag: 'Enterprise / OOP' },
      { name: 'Python', tag: 'Core / Scripting' },
      { name: 'JavaScript', tag: 'ES6+ / Web' },
      { name: 'TypeScript', tag: 'Typed JS' },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Component architecture, semantic design, and reactive interfaces',
    skills: [
      { name: 'HTML', tag: 'Semantic HTML5' },
      { name: 'CSS', tag: 'Modern CSS3' },
      { name: 'React', tag: 'Hooks / SPA' },
    ],
  },
  {
    title: 'Backend Development',
    description: 'RESTful APIs, asynchronous services, and micro-frameworks',
    skills: [
      { name: 'Node.js', tag: 'Runtime' },
      { name: 'Express.js', tag: 'API Framework' },
      { name: 'FastAPI', tag: 'Python REST' },
      { name: 'Flask', tag: 'Python Web' },
    ],
  },
  {
    title: 'Cloud and Database',
    description: 'Cloud infrastructure, managed backends, and relational querying',
    skills: [
      { name: 'AWS', tag: 'Cloud Platform' },
      { name: 'Supabase', tag: 'Postgres / BaaS' },
      { name: 'SQL', tag: 'Relational DB' },
    ],
  },
  {
    title: 'AI and Machine Learning',
    description: 'Computer vision, language processing, and multimodal LLM APIs',
    skills: [
      { name: 'OpenCV', tag: 'Computer Vision' },
      { name: 'Natural Language Processing (NLP)', tag: 'Text Analysis' },
      { name: 'Gemini API', tag: 'GenAI / LLM' },
    ],
  },
  {
    title: 'Development Tools',
    description: 'Version control, cloud hosting, developer IDEs, and data tools',
    skills: [
      { name: 'Git', tag: 'VCS' },
      { name: 'GitHub', tag: 'Collaboration' },
      { name: 'VS Code', tag: 'Primary IDE' },
      { name: 'Vercel', tag: 'Frontend Deploy' },
      { name: 'Render', tag: 'Backend Deploy' },
      { name: 'Excel', tag: 'Data Tracking' },
    ],
  },
  {
    title: 'Security',
    description: 'Network communication security and threat defense concepts',
    skills: [
      { name: 'Network Security', tag: 'Infrastructure Defense' },
    ],
  },
  {
    title: 'Spoken Languages',
    description: 'Professional and technical communication',
    skills: [
      { name: 'Tamil', tag: 'Native' },
      { name: 'English', tag: 'Professional' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'renewguard',
    title: 'RenewGuard',
    subtitle: 'Comprehensive Renewal & Compliance Tracking Management System',
    category: 'Renewal Management System',
    description:
      'RenewGuard is a renewal management application designed to help users organize and track important renewals, such as contracts, licenses, certifications, warranties, insurance, subscriptions, and permits.',
    problem:
      'Organizations and professionals manage dozens of critical contracts, trade licenses, compliance certificates, and service subscriptions. Tracking these manually across disparate spreadsheets leads to lapsed renewals, legal non-compliance, unexpected penalties, and operational downtime.',
    solution:
      'A structured, centralized management dashboard that monitors renewal lifecycles in real time. It features automated reminder email dispatches, status indicators (Active, Due Soon, Expired), audit logging, and document attachment storage.',
    keyFeatures: [
      'Add and manage renewal records across multiple categories',
      'Track important renewal dates with automated countdown indicators',
      'Manage comprehensive renewal information and vendor contacts',
      'Receive automated email renewal reminders with configurable intervals',
      'Upload and securely manage renewal contracts and certificates',
      'View complete renewal history and activity audit logs',
      'Monitor organization-wide renewal health through an interactive dashboard',
    ],
    technologies: ['Node.js', 'Express.js', 'JavaScript', 'HTML5', 'CSS3', 'Nodemailer', 'Document Storage'],
    screenshots: [
      {
        url: '/projects/renewguard_dashboard.png',
        caption: 'RenewGuard Central Dashboard showcasing total records, active status, expiring renewals, and distribution chart.',
      },
      {
        url: '/projects/renewguard_activity.png',
        caption: 'Automated email dispatch audit log tracking interval alerts (30-day, 15-day) sent to recipients.',
      },
      {
        url: '/projects/renewguard_login.png',
        caption: 'Secure authentication gateway for organization renewal administrators.',
      },
    ],
    statusNote: 'Full-stack application implemented locally with automated dispatch logging & document storage.',
  },
  {
    id: 'visioninspect-ai',
    title: 'VisionInspect AI',
    subtitle: 'Manufacturing Defect Detection & Automated Quality Control Platform',
    category: 'Quality Inspection Platform',
    description:
      'VisionInspect AI is a manufacturing quality inspection platform that compares reference product images against test images to identify potential defects and support quality-control decisions.',
    problem:
      'Manual visual inspection on high-throughput factory assembly lines is slow, prone to visual fatigue, and creates subjective inspection inconsistencies that result in defective items reaching end customers.',
    solution:
      'An automated image comparison pipeline using OpenCV Structural Similarity Index (SSIM) and contour analysis. It computes exact structural variances between a verified golden reference image and production samples to generate anomaly heatmaps, severity scores, and automated Pass, Rework, or Reject decisions.',
    architectureOverview:
      'The platform combines a TypeScript React frontend with a FastAPI backend. Production test images are processed via OpenCV image alignment, difference subtraction, and SSIM masking to isolate scratches, dents, and surface holes. Docker containerization ensures consistent runtime across production inspection stations.',
    keyFeatures: [
      'Role-based dashboards for plant operators and quality inspectors',
      'High-resolution reference and test image uploads',
      'SSIM-based reference-to-sample image comparison',
      'Pixel difference visualization and anomaly heatmaps',
      'Automated defect classification (scratch, dent, hole, crack)',
      'Weighted severity scoring algorithm',
      'Pass, Rework, and Reject automated decision thresholds',
      'Inspection reports with downloadable PDF certificates',
      'Analytics dashboard tracking defect trends and severity distribution',
      'Per-product-line reporting and inspection metrics',
    ],
    technologies: ['FastAPI', 'React', 'TypeScript', 'OpenCV', 'Docker'],
    liveUrl: 'https://visioninspect-ai-lovat.vercel.app',
    screenshots: [
      {
        url: '/projects/visioninspect_screen.png',
        caption: 'VisionInspect AI Inspection Screen: Real-time inspection result (INS-000234), anomaly analysis, and image quality metrics.',
      },
      {
        url: '/projects/visioninspect_scratch_heatmap.jpg',
        caption: 'Anomaly Heatmap: Precise spatial localization of surface defects computed via structural difference.',
      },
      {
        url: '/projects/visioninspect_metrics.png',
        caption: 'Quality Analytics: Precision, Recall, and Accuracy distribution across industrial material categories (metal plate, fabric, tile).',
      },
    ],
    statusNote: 'Live web deployment available on Vercel with responsive inspection dashboard.',
  },
  {
    id: 'interviewiq',
    title: 'InterviewIQ',
    subtitle: 'AI-Powered Placement Preparation & Mock Assessment Platform',
    category: 'Placement Preparation Platform',
    description:
      'InterviewIQ is a full-stack interview preparation platform designed to help students prepare for placements through aptitude tests, AI-assisted mock interviews, performance reports, and interactive assistance.',
    problem:
      'Campus placement aspirants often lack individualized technical mentorship, struggle to gauge timing on core aptitude rounds, and have limited access to realistic mock interviews before company recruitment drives.',
    solution:
      'A full-stack placement portal that simulates real interview experiences. Powered by Google Gemini API, it provides dynamic, responsive mock interview questions, automated answer evaluation, timed aptitude exams, and comprehensive candidate performance analytics.',
    keyFeatures: [
      'Timed aptitude test modules with categorized question banks',
      'AI-powered mock interviews featuring dynamic follow-up questioning',
      'Comprehensive performance reports with skill breakdown charts',
      'Interactive AI placement preparation chatbot for 24/7 technical queries',
      'Gemini API integration with customized placement evaluation prompts',
      'Local question-bank fallback ensuring 100% offline and API-resilient operation',
      'Supabase authentication and secure student profile management',
      'Database-backed historical test results and tracking',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Supabase', 'Gemini API', 'Vercel', 'Render'],
    liveUrl: 'https://interview-iq-krhm.vercel.app',
    githubUrl: 'https://github.com/Elakkiya2708/InterviewIQ',
    screenshots: [
      {
        url: '/projects/interviewiq/dashboard.svg',
        caption: 'InterviewIQ Dashboard: Student progression overview, upcoming test modules, and preparation metrics.',
      },
      {
        url: '/projects/interviewiq/interview.svg',
        caption: 'AI Mock Interview Portal: Interactive interview environment with conversational prompt feedback.',
      },
      {
        url: '/projects/interviewiq/analytics.svg',
        caption: 'Analytics Engine: Deep-dive score distribution, timing efficiency, and domain readiness reports.',
      },
      {
        url: '/projects/interviewiq/reports.svg',
        caption: 'Performance Evaluation: Detailed feedback reports pinpointing areas for technical improvement.',
      },
    ],
    statusNote: 'Production deployment live on Vercel with active GitHub open-source repository.',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'cisco-boost',
    role: 'Cybersecurity & Networking Trainee',
    organization: 'Cisco',
    program: 'BOOST 6.0 Program',
    duration: '45-Day Remote Training Program',
    period: '2026',
    year: '2026',
    location: 'Chennai, India',
    status: 'Trainee',
    description: [
      'Gained hands-on training in cybersecurity fundamentals, perimeter defenses, and secure protocols.',
      'Learned network security concepts including routing architecture, threat detection, and packet inspection.',
      'Developed deep awareness of modern cyber attack vectors, defensive mitigation strategies, and industry compliance.',
    ],
    technologies: ['Network Security', 'Cybersecurity Fundamentals', 'Threat Analysis'],
    certificateLink: '#certifications',
  },
  {
    id: 'tamizhan-skills',
    role: 'Data Science & Analytics',
    organization: 'Tamizhan Skills',
    duration: 'One-Month Remote Experience',
    period: '2026',
    year: '2026',
    location: 'Chennai, India',
    status: 'Completed',
    description: [
      'Applied core data science and exploratory data analytics concepts to structured tabular information.',
      'Worked with Python on practical datasets, conducting preprocessing, statistical analysis, and visual trend discovery.',
    ],
    technologies: ['Python', 'Data Analytics', 'Data Exploration'],
  },
  {
    id: 'eagle-hitech',
    role: 'Junior Software Trainee',
    organization: 'Eagle Hi-Tech SoftClou Solutions Pvt. Ltd.',
    duration: 'One-Month On-Site Experience',
    period: '2025–2026',
    year: '2025–2026',
    location: 'Chennai, India',
    status: 'Completed',
    description: [
      'Contributed directly to software development tasks within an agile team setting.',
      'Gained practical hands-on experience with commercial development workflows, code versioning, and feature validation.',
    ],
    technologies: ['Software Engineering', 'Agile Workflow', 'Version Control'],
  },
  {
    id: 'prodigy-infotech',
    role: 'Web Development Intern',
    organization: 'Prodigy InfoTech',
    duration: 'Virtual Internship',
    period: 'Completed',
    year: '2025',
    location: 'Remote',
    status: 'Completed',
    description: [
      'Completed web development projects focusing on responsive frontend design and interactive component logic.',
      'Practiced clean code conventions, DOM manipulation, and cross-browser accessibility standards.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
  },
  {
    id: 'codsoft',
    role: 'Python Programming Intern',
    organization: 'CodSoft',
    duration: 'Virtual Internship',
    period: 'Completed',
    year: '2025',
    location: 'Remote',
    status: 'Completed',
    description: [
      'Implemented foundational Python programming tasks emphasizing algorithmic problem-solving and clean syntax.',
      'Built modular CLI and data handling utilities adhering to standard Python practices.',
    ],
    technologies: ['Python', 'Data Structures', 'Algorithmic Problem Solving'],
  },
  {
    id: 'infosys-springboard',
    role: 'Intern',
    organization: 'Infosys Springboard',
    program: 'Internship 7.0',
    duration: 'Ongoing Industry Program',
    period: 'Current',
    year: '2026',
    location: 'Remote / Virtual',
    status: 'Ongoing',
    description: [
      'Participating in structured industry-aligned technical curriculum and enterprise engineering mentorship.',
      'Collaborating on modern software development methodologies and emerging digital technology solutions.',
    ],
    technologies: ['Enterprise Software', 'Professional Development', 'Cloud Concepts'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'aws-ai-practitioner',
    name: 'AWS Certified AI Practitioner',
    issuingOrg: 'Amazon Web Services',
    issueDate: 'September 5, 2026',
    expirationDate: 'September 5, 2029',
    validationNumber: '299a801ed43c4c14b69c8c817f3ad350',
    validationUrl: 'https://aws.amazon.com/verification',
    fileUrl: '/certificates/aws_cert.pdf',
    fileType: 'pdf',
    page: 1,
    description:
      'Validates foundational understanding of artificial intelligence, machine learning concepts, and relevant AWS AI/ML services and use cases.',
  },
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuingOrg: 'Amazon Web Services',
    issueDate: 'September 13, 2026',
    expirationDate: 'September 13, 2029',
    validationNumber: 'e87e0b8d505f478ca6bd81e82105702d',
    validationUrl: 'https://aws.amazon.com/verification',
    fileUrl: '/certificates/aws_cert.pdf',
    fileType: 'pdf',
    page: 2,
    description:
      'Validates overall knowledge of the AWS Cloud platform, covering cloud concepts, security, architecture, pricing, and support.',
  },
  {
    id: 'aws-developer-associate',
    name: 'AWS Certified Developer – Associate',
    issuingOrg: 'Amazon Web Services',
    issueDate: 'September 13, 2026',
    expirationDate: 'September 13, 2029',
    validationNumber: 'a5f7edbc27fe45df847d39ff884ccee4',
    validationUrl: 'https://aws.amazon.com/verification',
    fileUrl: '/certificates/aws_cert.pdf',
    fileType: 'pdf',
    page: 3,
    description:
      'Demonstrates technical expertise in developing, deploying, debugging, and maintaining cloud-based applications using AWS core services.',
  },
  {
    id: 'cisco-boost-6',
    name: 'Cisco BOOST 6.0 — Cybersecurity Training',
    issuingOrg: 'Cisco Women in Cybersecurity & Entry-level Talent Recruiting at Cisco',
    issueDate: '2026',
    description:
      'Certificate of Completion for 45-day intensive remote cybersecurity training awarded to Elakkiya V at Easwari Engineering College.',
  },
  {
    id: 'nptel-mis',
    name: 'Management Information System',
    issuingOrg: 'National Programme on Technology Enhanced Learning (NPTEL)',
    issueDate: 'Academic Year',
    description:
      'Certification validating knowledge of enterprise information flows, business system architectures, and organizational IT alignment.',
  },
  {
    id: 'nptel-ebusiness',
    name: 'E Business',
    issuingOrg: 'National Programme on Technology Enhanced Learning (NPTEL)',
    issueDate: 'Academic Year',
    description:
      'Certification covering digital commerce systems, electronic business architectures, and online transaction security.',
  },
  {
    id: 'pattern-forge-artisan',
    name: 'Pattern Forge Artisan Certificate',
    issuingOrg: 'Cogtis Technologies Pvt Ltd / Code Galatta',
    issueDate: 'October 25, 2026',
    validationNumber: '003324',
    validationUrl: 'https://www.codegalatta.com/certificate',
    fileUrl: '/certificates/artisan.png',
    fileType: 'image',
    description:
      'Certificate of Completion awarded to Elakkiya V for algorithmic pattern programming and problem solving proficiency.',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Tech — Computer Science and Business Systems (CSBS)',
    institution: 'Easwari Engineering College, Chennai, Tamil Nadu',
    duration: '2024 – 2028',
    gradeLabel: 'Cumulative GPA',
    gradeValue: '9.0 / 10.0',
    description:
      'Currently in Third Year. Specializing in computer science foundations intertwined with business system strategies, including data structures, cloud computing, AI/ML pipelines, software engineering, and enterprise architecture.',
    highlights: [
      'Strong academic performance maintaining 9.0 CGPA',
      'Active developer in college technical projects and hackathons',
      'Three AWS Certifications achieved alongside coursework',
      'Completed Cisco BOOST 6.0 Cybersecurity training',
    ],
  },
  {
    degree: 'Higher Secondary (Class 12) & Secondary (Class 10)',
    institution: 'Swami Dayananda Matriculation School',
    duration: '2022 – 2024',
    gradeLabel: 'Board Examination Scores',
    gradeValue: 'Class 12: 87% | Class 10: 86%',
    description:
      'Rigorous academic foundation in Mathematics, Physics, Chemistry, and Computer Science, establishing strong analytical and algorithmic fundamentals.',
    highlights: [
      'Achieved 87% in 12th Grade Board Examinations',
      'Achieved 86% in 10th Grade Board Examinations',
      'Consistent distinction in mathematics and science coursework',
    ],
  },
];
