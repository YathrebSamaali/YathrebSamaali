export type SkillDomain =
  | 'All'
  | 'Frontend Development'
  | 'Backend Development'
  | 'Programming Languages'
  | 'AI & Machine Learning'
  | 'Databases'
  | 'DevOps & Tools';

export type ProjectCategory = 'All' | 'Full-Stack & DevOps' | 'AI, RAG & Vision';

export interface SkillGroup {
  domain: Exclude<SkillDomain, 'All'>;
  summary: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  technologies: string[];
  repoUrl?: string;
  portfolioUrl?: string;
  availabilityNote?: string;
  isFlagship?: boolean;
  highlights?: string[];
}

export interface InterestItem {
  index: string;
  title: string;
  detail: string;
}

export const PROFILE = {
  name: 'Yathreb Samaali',
  handle: 'YathrebSamaali',
  role: 'Full-Stack & AI Developer',
  tagline:
    'Designing scalable web architectures and intelligent applications powered by Machine Learning, NLP, and semantic search.',
  education:
    "Professional Master's Degree in Intelligent Web Applications · B.Sc. in Software & Systems Engineering (ISI Kef)",
  bio: "I build end-to-end web applications using Spring Boot, React, Angular, Python, and FastAPI, integrating practical AI capabilities—from Machine Learning and Deep Learning to NLP, Retrieval-Augmented Generation (RAG), semantic search, and recommendation systems.",
  location: 'Tunisia',
  email: 'yathrebsamaali25@gmail.com',
  githubUrl: 'https://github.com/YathrebSamaali',
  githubReposUrl: 'https://github.com/YathrebSamaali?tab=repositories',
  linkedinUrl: 'https://www.linkedin.com/in/yathreb-samaali',
  portfolioUrl: 'https://yathrebsamaali.vercel.app/',
  publicRepoCount: 21,
} as const;

export const SKILL_DOMAINS: SkillDomain[] = [
  'All',
  'Frontend Development',
  'Backend Development',
  'Programming Languages',
  'AI & Machine Learning',
  'Databases',
  'DevOps & Tools',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    domain: 'Frontend Development',
    summary: 'Component-driven interfaces and responsive web layouts',
    items: ['React', 'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    domain: 'Backend Development',
    summary: 'RESTful APIs, microservices, and authentication workflows',
    items: [
      'Spring Boot',
      'FastAPI',
      'Django',
      'Node.js',
      'Express',
      'Laravel',
      'Flask',
    ],
  },
  {
    domain: 'Programming Languages',
    summary: 'Application, systems, and data science languages',
    items: ['Python', 'Java', 'JavaScript', 'PHP', 'C#', 'C', 'C++', 'Dart'],
  },
  {
    domain: 'AI & Machine Learning',
    summary: 'Deep learning, NLP, RAG pipelines, semantic search, and vision',
    items: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Scikit-Learn',
      'LangChain',
      'FAISS',
      'Sentence Transformers',
      'YOLOv5',
      'Mask R-CNN',
      'OpenCV',
      'NumPy',
      'Pandas',
      'Prophet',
    ],
  },
  {
    domain: 'Databases',
    summary: 'Relational, document, and in-memory vector/cache stores',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis Stack',
      'Oracle',
      'SQLite',
    ],
  },
  {
    domain: 'DevOps & Tools',
    summary: 'Containerization, CI/CD automation, IaC, and observability',
    items: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Terraform',
      'SonarQube',
      'Nexus',
      'Prometheus',
      'Grafana',
      'AWS',
      'Linux',
      'Git',
      'Postman',
    ],
  },
];

export const FLAGSHIP_PROJECT: ProjectItem = {
  id: 'mawjoude',
  name: 'Mawjoude',
  subtitle: 'Intelligent Multi-Vendor Marketplace · Master’s Graduation Project (Zeus Labs)',
  category: 'AI, RAG & Vision',
  isFlagship: true,
  description:
    'Designed and developed an intelligent multi-vendor e-commerce platform combining a hybrid recommendation engine with semantic vector search to personalize product discovery and improve search relevance.',
  highlights: [
    'Hybrid recommendation system combining content-based and collaborative filtering',
    'Semantic vector search powered by Sentence Transformers and Redis Stack',
    'Multi-vendor storefront, catalog management, and order workflows across React.js, Spring Boot (Java 21), and Python FastAPI microservices',
  ],
  technologies: [
    'React.js',
    'Spring Boot (Java 21)',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'Redis Stack',
    'Sentence Transformers',
  ],
  portfolioUrl: 'https://yathrebsamaali.vercel.app/',
  availabilityNote: 'Private internship / thesis repository · Documented on portfolio',
};

export const PUBLIC_PROJECTS: ProjectItem[] = [
  {
    id: 'multi-document-chatbot',
    name: 'Multi-Document Chatbot',
    subtitle: 'Conversational RAG Assistant',
    category: 'AI, RAG & Vision',
    description:
      'AI-powered assistant built with Streamlit to answer questions across PDF, DOCX, and PPTX documents using LangChain conversation management and FAISS vector search.',
    technologies: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'RAG'],
    repoUrl: 'https://github.com/YathrebSamaali/multi-document-chatbot',
  },
  {
    id: 'prm-25',
    name: 'PRM-25',
    subtitle: 'Full-Stack Property Management Platform',
    category: 'Full-Stack & DevOps',
    description:
      'Secure full-stack property management system featuring JWT authentication, role-based access control, structured REST APIs, and relational MySQL persistence.',
    technologies: ['Angular', 'Spring Boot', 'Java 17', 'MySQL', 'JWT'],
    repoUrl: 'https://github.com/YathrebSamaali/PRM-25',
  },
  {
    id: 'devops-project',
    name: 'StationSKI — DevOps Pipeline',
    subtitle: 'Automated CI/CD & Observability Stack',
    category: 'Full-Stack & DevOps',
    description:
      'Modular Spring Boot and Angular application backed by an automated CI/CD, quality gate, containerization, Kubernetes orchestration, Terraform provisioning, and monitoring pipeline.',
    technologies: [
      'Spring Boot',
      'Angular',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'SonarQube',
      'Terraform',
      'Prometheus',
      'Grafana',
      'AWS',
    ],
    repoUrl: 'https://github.com/YathrebSamaali/devops-project',
  },
  {
    id: 'fish-detection',
    name: 'Fish Species Detection',
    subtitle: 'Aquaculture Computer Vision Pipeline',
    category: 'AI, RAG & Vision',
    description:
      'Automated detection, identification, and instance segmentation of fish species in aquaculture environments combining YOLOv5 object detection with Mask R-CNN segmentation.',
    technologies: ['Python', 'YOLOv5', 'Mask R-CNN', 'PyTorch', 'OpenCV', 'Detectron2'],
    repoUrl: 'https://github.com/YathrebSamaali/fish_detection',
  },
  {
    id: 'suivi-ecrans',
    name: 'SuiviEcrans',
    subtitle: 'Industrial Traceability Web Application (CIPI ACTIA)',
    category: 'Full-Stack & DevOps',
    description:
      'Web application developed during an internship at CIPI ACTIA to automate screen-printing screen tracking across production and cleaning phases with usage history search and export.',
    technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'PostgreSQL'],
    repoUrl: 'https://github.com/YathrebSamaali/SuiviEcrans',
  },
];

export const INTERESTS: InterestItem[] = [
  {
    index: '01.',
    title: 'Full-Stack Development',
    detail: 'Designing modular APIs, secure backends, and responsive web interfaces',
  },
  {
    index: '02.',
    title: 'AI-Powered Applications',
    detail: 'Integrating LLMs, RAG pipelines, and intelligent workflows into real-world software',
  },
  {
    index: '03.',
    title: 'Machine Learning & Computer Vision',
    detail: 'Building and evaluating predictive models and visual recognition systems',
  },
  {
    index: '04.',
    title: 'Intelligent Web Systems',
    detail: 'Bridging classical web architectures with adaptive, data-driven intelligence',
  },
  {
    index: '05.',
    title: 'Semantic Search & Recommendations',
    detail: 'Improving retrieval relevance and personalization with vector embeddings and hybrid filtering',
  },
];
