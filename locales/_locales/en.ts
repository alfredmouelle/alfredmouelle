export default {
  navbar: {
    links: {
      scholarship: 'Academic Path',
      job: 'Career Path',
      contact: 'Contact Me',
      skills: 'Skills',
    },
    locales: {
      label: 'Change Language',
      fr: '🇫🇷 French',
      en: '🇬🇧 English',
    },
  },

  section_skills: {
    title: 'Skills',
    backend_desc:
      'Expertise in Node.js, PHP (Laravel, Symfony) and Java Spring Boot for robust server-side applications.',
    frontend_desc:
      'Creating modern interfaces with Next.js, Nuxt, and Angular for responsive and dynamic web applications.',
    mobile_desc:
      'Developing cross-platform mobile applications with Flutter and React Native for iOS and Android.',
    node_code_desc:
      'Mastery of Webflow for code-free website creation, enabling rapid prototyping and design implementation.',
  },

  section_hero: {
    greetings: 'Hello, I am',
    position: 'FullStack Developer',
    description:
      'Based in Cameroon with 5 years of experience in web development and application design. Passionate and self-taught, I have acquired strong skills in software engineering through numerous projects. My goal is to master new technologies to not only enrich my knowledge, but also to offer tailored and high-quality solutions to those who need them. As a freelancer, I am dedicated to providing efficient service and actively contributing to the success of the projects entrusted to me.',
    downloadCvBtn: 'Download my CV',
    contact: 'Contact me',
  },

  section_scholarship: {
    title: 'Academic Path',
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
    showJobs: 'See All',
  },

  section_contact: {
    title: 'Contact Me',
    quickContact: 'Quick Links',
    form: {
      fields: {
        email: 'Your email',
        message: 'Your message',
        name: 'Your name and surname',
        submit: 'Send',
      },
      errors: {
        email: 'Please provide a valid email address.',
        name: 'The name must be at least 2 characters long.',
        message: 'The message must be at least 10 characters long.',
      },
      messages: {
        success: 'Your message has been sent successfully.',
        error: 'Error sending the message, please try again.',
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

  breadcrumb: {
    home: 'Home',
    jobs: 'Career path',
  },

  footer: {
    text: 'Designed and integrated by Alfred Mouelle. All rights reserved.',
  },
} as const;
