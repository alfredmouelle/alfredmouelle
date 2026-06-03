export default {
  navbar: {
    links: {
      scholarship: 'Academic Path',
      job: 'Career Path',
      contact: 'Contact Me',
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

  section_skills: {
    title: 'Skills',
    eyebrow: 'Expertise',
    description:
      'The technologies I build with, from backend to infrastructure.',
    backend_desc:
      'Expertise in Node.js, PHP (Laravel) and Java Spring Boot for robust server-side applications.',
    frontend_desc:
      'Building modern interfaces with Next.js, TanStack Start, Astro and Angular, polished with Tailwind CSS and ShadcnUI.',
    mobile_desc:
      'Developing cross-platform mobile applications with Flutter and React Native for iOS and Android.',
    database_desc:
      'Data modeling and management with PostgreSQL, MongoDB and Redis, through Prisma and Drizzle.',
    devops_desc:
      'Containerization and continuous deployment with Docker, Vercel and GitHub Actions.',
    tests_desc:
      'End-to-end, unit and integration testing with Cypress, Vitest and Playwright.',
  },

  section_hero: {
    greetings: 'Hello, I am',
    position: 'Full-Stack Developer',
    availability: 'Available for new opportunities',
    description:
      'Freelance full-stack developer, I design, evolve and consolidate web applications and B2B/B2C SaaS products. For the past 6 years, I have helped founders, startups and companies turn an idea or an existing product into a reliable, maintainable solution. My goal is not just to move a project forward, but to deliver a solid foundation you can use, grow and rely on with confidence over time.',
    downloadCvBtn: 'Download Resume',
    comeup: {
      badge: 'Top-rated on ComeUp',
      reviews: 'reviews',
      positive: 'positive',
      viewProfile: 'View ComeUp profile',
    },
  },

  section_scholarship: {
    title: 'Academic Path',
    eyebrow: 'Education',
    bts: {
      title: 'Brevet de Technicien Supérieur',
      specialty: 'Software Engineering',
      location: 'Douala - Cameroon',
      academy: 'Institut Universitaire des Grandes Ecoles des Tropiques',
    },
    bac: {
      title: 'Baccalauréat',
      specialty: 'Information Technology',
      location1: 'Lycée Bilingue de Kribi',
      location2: 'Kribi - Cameroon',
    },
    probatoire: {
      title: 'Probatoire',
    },
  },

  section_jobs: {
    title: 'Career path',
    eyebrow: 'Experience',
    description: 'A few companies and projects I’ve worked on over the years.',
    showJobs: 'See All',
  },

  section_projects: {
    title: 'Projects',
    eyebrow: 'Work',
    description: 'A selection of projects I’ve designed, built and shipped.',
    showProjects: 'See all',
    visitWebsite: 'Visit website',
  },

  section_contact: {
    title: "Let's work together",
    eyebrow: 'Contact',
    quickContact: 'Quick Links',
    description:
      'A project, a question or an opportunity? Send me a message through the form, I usually reply within 24 hours.',
    form: {
      fields: {
        email: 'Your email address',
        message: 'Your message',
        name: 'Your full name',
        subject: 'Your message subject',
        submit: 'Submit',
      },
      errors: {
        email: 'Please enter a valid email address.',
        name: 'Your name must be at least two characters long.',
        subject: 'The subject line must be at least two characters long.',
        message: 'Your message must be at least ten characters long.',
      },
      placeholders: {
        subject: 'Proposal for a service of...',
      },
      messages: {
        success: 'Your message has been successfully transmitted.',
        error:
          'An error occurred while sending your message. Please try again.',
      },
    },
  },

  job: {
    visitWebsite: 'Visit website',
    readTime: 'mins read',
    period: {
      elapsed: 'Since',
      from: 'From',
      to: 'to',
    },
  },

  notFound: {
    title: '404 - Page Not Found',
    message: "Oops! The page you're looking for doesn't exist.",
    backHome: 'Back to Home',
  },

  breadcrumb: {
    home: 'Home',
    jobs: 'Career path',
    projects: 'Projects',
  },

  footer: {
    text: 'Designed and integrated by Alfred Mouelle. All rights reserved.',
    tagline:
      'Freelance full-stack developer. I craft polished web and mobile products.',
    navTitle: 'Navigation',
    socialTitle: 'Social',
  },
} as const;
