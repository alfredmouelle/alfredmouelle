export default {
  navbar: {
    links: {
      scholarship: 'Parcours Académique',
      job: 'Parcours Professionnel',
      contact: 'Me contacter',
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

  section_skills: {
    title: 'Compétences',
    eyebrow: 'Expertise',
    description:
      'Les technologies avec lesquelles je conçois, du back-end à l’infrastructure.',
    backend_desc:
      'Expertise en Node.js, PHP (Laravel) et Java Spring Boot pour des applications serveur robustes.',
    frontend_desc:
      "Création d'interfaces modernes avec Next.js, TanStack Start, Astro et Angular, soignées avec Tailwind CSS et ShadcnUI.",
    mobile_desc:
      "Développement d'applications mobiles multi-plateformes avec Flutter et React Native pour iOS et Android.",
    database_desc:
      'Modélisation et gestion des données avec PostgreSQL, MongoDB et Redis, via Prisma et Drizzle.',
    devops_desc:
      'Conteneurisation et déploiement continu avec Docker, Vercel et GitHub Actions.',
    tests_desc:
      "Tests end-to-end, unitaires et d'intégration avec Cypress, Vitest et Playwright.",
  },

  section_hero: {
    greetings: 'Salut, je suis',
    position: 'Développeur FullStack',
    availability: 'Disponible pour de nouvelles opportunités',
    description:
      'Développeur fullstack freelance basé au Cameroun. Depuis 5 ans, je conçois et développe des applications web et mobiles, du back-end à l’interface, avec une attention constante portée à la clarté, à la performance et à la qualité.',
    downloadCvBtn: 'Télécharger Mon CV',
  },

  section_scholarship: {
    title: 'Parcours Académique',
    eyebrow: 'Formation',
    bts: {
      title: 'Brevet de Technicien Supérieur',
      specialty: 'Génie Logiciel',
      location: 'Douala - Cameroun',
      academy: 'Institut Universitaire des Grandes Ecoles des Tropiques',
    },
    bac: {
      title: 'Baccalauréat',
      specialty: "Technologie de l'information",
      location1: 'Lycée Bilingue de Kribi',
      location2: 'Kribi - Cameroun',
    },
    probatoire: {
      title: 'Probatoire',
    },
  },

  section_jobs: {
    title: 'Parcours Professionnel',
    eyebrow: 'Expérience',
    description:
      'Quelques entreprises et projets sur lesquels j’ai travaillé ces dernières années.',
    showJobs: 'Voir tout',
  },

  section_projects: {
    title: 'Réalisations',
    eyebrow: 'Projets',
    description:
      'Une sélection de projets que j’ai conçus, développés et livrés.',
    showProjects: 'Voir tout',
    visitWebsite: 'Visiter le site web',
  },

  section_contact: {
    title: 'Travaillons ensemble',
    eyebrow: 'Contact',
    quickContact: 'Liens Rapides',
    description:
      'Un projet, une question ou une opportunité ? Écrivez-moi via le formulaire, je réponds généralement sous 24 heures.',
    form: {
      fields: {
        email: 'Adresse électronique',
        message: 'Votre message',
        name: 'Nom et prénom',
        subject: 'Objet du message',
        submit: 'Envoyer',
      },
      errors: {
        email: 'Veuillez saisir une adresse électronique valide.',
        name: 'Le nom doit contenir au moins 2 caractères.',
        message: 'Le message doit contenir au moins 10 caractères.',
        subject: 'L’objet doit contenir au moins 2 caractères.',
      },
      placeholders: {
        subject: 'Proposition pour un service de...',
      },
      messages: {
        success: 'Votre message a été transmis avec succès.',
        error:
          'Une erreur s’est produite lors de l’envoi de votre message. Veuillez réessayer.',
      },
    },
  },

  notFound: {
    title: '404 - Page Non Trouvée',
    message: "Oups ! La page que vous recherchez n'existe pas.",
    backHome: "Retour à l'Accueil",
  },

  breadcrumb: {
    home: 'Accueil',
    jobs: 'Parcours professionnel',
    projects: 'Réalisations',
  },

  job: {
    visitWebsite: 'Visiter le site web',
    readTime: 'mins de lecture',
    period: {
      elapsed: 'Depuis',
      from: 'De',
      to: 'à',
    },
  },

  footer: {
    text: 'Conception et intégration par Alfred Mouelle. Tous droits réservés.',
    tagline:
      'Développeur fullstack freelance. Je conçois des produits web et mobiles soignés.',
    navTitle: 'Navigation',
    socialTitle: 'Réseaux',
  },
} as const;
