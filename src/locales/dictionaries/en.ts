export default {
  navbar: {
    links: {
      scholarship: 'Education',
      job: 'Experience',
      contact: 'Contact',
      skills: 'Skills',
      projects: 'Projects',
    },
    locales: {
      label: 'Change Language',
      fr: '🇫🇷 French',
      en: '🇬🇧 English',
    },
  },

  theme_toggle: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },

  section_hero: {
    experience: '6+ years of exp.',
    tagline:
      'Helping founders and engineering teams build reliable web applications and scalable SaaS products, from database schemas to polished interfaces.',
    description:
      'Full-stack developer with over six years of experience building web applications and SaaS products. I work with founders and engineering teams to turn ideas into reliable, production-ready software with clean data models and maintainable code.',
    downloadCvBtn: 'Download Resume',
    comeup: {
      badge: 'Top-rated on ComeUp',
      reviews: 'reviews',
      positive: 'positive',
      viewProfile: 'View Alfred Mouelle profile on ComeUp',
    },
    nav: {
      manifesto: 'Engineering Philosophy',
      projects: 'Projects',
      jobs: 'Experience',
      skills: 'Capabilities',
      scholarship: 'Education',
      contact: 'Contact',
    },
  },

  section_manifesto: {
    title: 'Engineering Philosophy',
    pillar:
      'I focus on strict data modeling, responsive interfaces, and maintainable code that your team can operate and scale without surprises.',
  },

  section_skills: {
    title: 'Skills',
    matrixTitle: 'Technical Capabilities',
    eyebrow: 'Expertise',
    description:
      'Technologies I build with, from backend services to infrastructure.',
    capabilities: [
      {
        domain: 'Backend & Architecture',
        technologies: 'Node.js, Spring Boot, PHP Laravel, REST, GraphQL',
        focus:
          'Modular architectures, scalable APIs, security, and high availability',
      },
      {
        domain: 'Frontend & Modern SaaS',
        technologies: 'Next.js, TanStack Start, React 19, Astro, Tailwind CSS',
        focus: 'Responsive interfaces, design systems, SSR, and SSG',
      },
      {
        domain: 'Mobile Applications',
        technologies: 'React Native, Flutter, iOS & Android Deployment',
        focus: 'Cross-platform mobile apps, offline support, and native feel',
      },
      {
        domain: 'Data Modeling & Cache',
        technologies: 'PostgreSQL, MongoDB, Redis, Prisma, Drizzle ORM',
        focus: 'Strict relational schemas, indexing, and query optimization',
      },
      {
        domain: 'Cloud Infra & CI/CD',
        technologies: 'Docker, GitHub Actions, Vercel, AWS S3, Linux',
        focus:
          'Automated CI/CD pipelines, containerization, and reproducible environments',
      },
      {
        domain: 'Quality Assurance & Testing',
        technologies: 'Vitest, Playwright, Cypress',
        focus: 'Unit tests, integration tests, and end-to-end non-regression',
      },
    ],
  },

  section_scholarship: {
    title: 'Education',
    eyebrow: 'Background',
    bts: {
      title: 'Brevet de Technicien Supérieur',
      specialty: 'Software Engineering',
      location: 'Douala, Cameroon',
      academy: 'Institut Universitaire des Grandes Ecoles des Tropiques',
    },
    bac: {
      title: 'Baccalauréat',
      specialty: 'Information Technology',
      location1: 'Lycée Bilingue de Kribi',
      location2: 'Kribi, Cameroon',
    },
    probatoire: {
      title: 'Probatoire',
    },
  },

  section_jobs: {
    title: 'Experience',
    eyebrow: 'Career',
    description: 'Companies and products I have worked on over the years.',
    showJobs: 'See all',
    count: 'roles',
    coreTech: 'Core technologies',
    callout: {
      title: 'Hiring or contract?',
      description: 'Available for freelance contracts and engineering roles.',
      cta: 'Get in touch',
    },
  },

  section_projects: {
    title: 'Projects',
    eyebrow: 'Work',
    description:
      'A selection of production apps and open-source tools I designed and built.',
    showProjects: 'See all',
    visitWebsite: 'Visit website',
    count: 'projects',
    defaultRole: 'Creator',
    techUsed: 'Technologies used',
    callout: {
      title: 'Have a project in mind?',
      description: 'Available to design and build your web or mobile product.',
      cta: 'Get in touch',
    },
  },

  section_contact: {
    title: "Let's work together",
    eyebrow: 'Contact',
    description:
      'Have a project in mind or want to talk shop? Drop a note below and I will reply within 24 hours.',
    form: {
      fields: {
        email: 'Your email address',
        message: 'Your message',
        name: 'Your full name',
        subject: 'Subject',
        submit: 'Send message',
      },
      errors: {
        email: 'Please enter a valid email address.',
        name: 'Your name must be at least two characters long.',
        subject: 'The subject line must be at least two characters long.',
        message: 'Your message must be at least ten characters long.',
      },
      placeholders: {
        subject: 'MVP development, consulting...',
        message: 'Your message...',
      },
      note: 'Replies within 24 hours.',
      messages: {
        success: 'Message sent. I will get back to you shortly.',
        error:
          'An error occurred while sending your message. Please try again.',
      },
    },
  },

  job: {
    visitWebsite: 'Visit website',
    readTime: 'min read',
    current: 'Current',
    period: {
      elapsed: 'Since',
      from: 'From',
      to: 'to',
    },
  },

  notFound: {
    title: '404 - Page Not Found',
    message: 'The page you are looking for does not exist.',
    backHome: 'Back to Home',
  },

  breadcrumb: {
    home: 'Home',
    jobs: 'Experience',
    projects: 'Projects',
  },

  footer: {
    text: 'Built by Alfred Mouelle. All rights reserved.',
    tagline: 'Full-stack developer building reliable web and mobile products.',
    navTitle: 'Navigation',
    socialTitle: 'Social',
  },
} as const;
