export default {
  navbar: {
    links: {
      scholarship: 'Formation',
      job: 'Expérience',
      contact: 'Contact',
      skills: 'Compétences',
      projects: 'Réalisations',
    },
    locales: {
      label: 'Changer de langue',
      fr: '🇫🇷 Français',
      en: '🇬🇧 Anglais',
    },
  },

  theme_toggle: {
    light: 'Clair',
    dark: 'Sombre',
    system: 'Système',
  },

  section_hero: {
    experience: "6+ ans d'expérience",
    tagline:
      "J'aide les porteurs de projet et les équipes techniques à concevoir des applications web durables et des SaaS évolutifs, du modèle de données jusqu'à l'interface.",
    description:
      'Développeur full-stack freelance avec plus de 6 ans d’expérience dans la création d’applications web et de SaaS. J’aide les porteurs de projet et les équipes techniques à concevoir des systèmes fiables, du modèle de données aux interfaces, avec un code maintenable et sans dette cachée.',
    downloadCvBtn: 'Télécharger mon CV',
    comeup: {
      badge: 'Top vendeur ComeUp',
      reviews: 'avis',
      positive: 'positifs',
      viewProfile: "Voir le profil d'Alfred Mouelle sur ComeUp",
    },
    nav: {
      manifesto: 'Philosophie & Méthode',
      projects: 'Réalisations',
      jobs: 'Expérience',
      skills: 'Compétences',
      scholarship: 'Formation',
      contact: 'Contact',
    },
  },

  section_manifesto: {
    title: 'Philosophie & Méthode',
    pillar:
      'Je privilégie des schémas de données stricts, des interfaces directes et un code sans dette cachée, conçu pour être facilement repris et maintenu par vos équipes.',
  },

  section_skills: {
    title: 'Compétences',
    matrixTitle: 'Matrice des Compétences',
    eyebrow: 'Expertise',
    description:
      'Technologies avec lesquelles je développe, du back-end à l’infrastructure.',
    capabilities: [
      {
        domain: 'Backend & Architecture',
        technologies: 'Node.js, Spring Boot, PHP Laravel, REST, GraphQL',
        focus:
          'Architectures modulaires, APIs évolutives, sécurité et haute disponibilité',
      },
      {
        domain: 'Frontend & SaaS Modernes',
        technologies: 'Next.js, TanStack Start, React 19, Astro, Tailwind CSS',
        focus: 'Interfaces réactives et soignées, design systems, SSR et SSG',
      },
      {
        domain: 'Applications Mobiles',
        technologies: 'React Native, Flutter, Déploiement iOS & Android',
        focus:
          'Applications mobiles multiplateformes, support hors-ligne et fluidité native',
      },
      {
        domain: 'Data Modeling & Cache',
        technologies: 'PostgreSQL, MongoDB, Redis, Prisma, Drizzle ORM',
        focus: 'Schémas de données stricts, indexation et requêtes optimisées',
      },
      {
        domain: 'Cloud Infra & CI/CD',
        technologies: 'Docker, GitHub Actions, Vercel, AWS S3, Linux',
        focus:
          'Pipelines CI/CD automatisés, conteneurisation et environnements reproductibles',
      },
      {
        domain: 'Assurance Qualité & Tests',
        technologies: 'Vitest, Playwright, Cypress',
        focus: 'Tests unitaires, intégration et non-régression de bout en bout',
      },
    ],
  },

  section_scholarship: {
    title: 'Formation',
    eyebrow: 'Parcours',
    bts: {
      title: 'Brevet de Technicien Supérieur',
      specialty: 'Génie Logiciel',
      location: 'Douala, Cameroun',
      academy: 'Institut Universitaire des Grandes Ecoles des Tropiques',
    },
    bac: {
      title: 'Baccalauréat',
      specialty: "Technologie de l'information",
      location1: 'Lycée Bilingue de Kribi',
      location2: 'Kribi, Cameroun',
    },
    probatoire: {
      title: 'Probatoire',
    },
  },

  section_jobs: {
    title: 'Expérience',
    eyebrow: 'Parcours',
    description:
      'Entreprises et produits sur lesquels j’ai travaillé ces dernières années.',
    showJobs: 'Voir tout',
    count: 'expériences',
    coreTech: 'Technologies clés',
    callout: {
      title: 'Recrutement ou mission ?',
      description:
        "Disponible pour des missions freelance ou des opportunités d'ingénierie logicielle.",
      cta: 'Me contacter',
    },
  },

  section_projects: {
    title: 'Réalisations',
    eyebrow: 'Projets',
    description:
      'Sélection d’applications en production et d’outils open source que j’ai conçus et développés.',
    showProjects: 'Voir tout',
    visitWebsite: 'Visiter le site',
    count: 'projets',
    defaultRole: 'Créateur',
    techUsed: 'Technologies mobilisées',
    callout: {
      title: 'Un projet en tête ?',
      description:
        'Disponible pour concevoir et développer votre application web ou mobile.',
      cta: 'Me contacter',
    },
  },

  section_contact: {
    title: 'Travaillons ensemble',
    eyebrow: 'Contact',
    description:
      'Un projet en tête ou une question technique ? Envoyez-moi un message via le formulaire, je réponds sous 24 heures.',
    form: {
      fields: {
        email: 'Adresse email',
        message: 'Votre message',
        name: 'Nom complet',
        subject: 'Objet',
        submit: 'Envoyer le message',
      },
      errors: {
        email: 'Veuillez saisir une adresse email valide.',
        name: 'Le nom doit contenir au moins 2 caractères.',
        message: 'Le message doit contenir au moins 10 caractères.',
        subject: 'L’objet doit contenir au moins 2 caractères.',
      },
      placeholders: {
        subject: 'Développement MVP, mission freelance...',
        message: 'Votre message...',
      },
      note: 'Réponse sous 24h.',
      messages: {
        success: 'Message envoyé. Je vous réponds dans les plus brefs délais.',
        error:
          'Une erreur s’est produite lors de l’envoi de votre message. Veuillez réessayer.',
      },
    },
  },

  notFound: {
    title: '404 - Page non trouvée',
    message: "La page que vous recherchez n'existe pas.",
    backHome: "Retour à l'accueil",
  },

  breadcrumb: {
    home: 'Accueil',
    jobs: 'Expérience',
    projects: 'Réalisations',
  },

  job: {
    visitWebsite: 'Visiter le site',
    readTime: 'min de lecture',
    current: 'Poste actuel',
    period: {
      elapsed: 'Depuis',
      from: 'De',
      to: 'à',
    },
  },

  footer: {
    text: 'Conçu et développé par Alfred Mouelle. Tous droits réservés.',
    tagline:
      'Développeur full-stack freelance. Je conçois des applications web et mobiles fiables et performantes.',
    navTitle: 'Navigation',
    socialTitle: 'Réseaux',
  },
} as const;
