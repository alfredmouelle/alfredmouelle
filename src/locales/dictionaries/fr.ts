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
  },

  section_hero: {
    description:
      'Développeur full-stack freelance, je conçois, fais évoluer et consolide des applications web et des SaaS B2B/B2C. Depuis 6 ans, j’aide porteurs de projet, startups et entreprises à transformer une idée ou un produit existant en solution fiable et maintenable. Mon objectif n’est pas seulement de faire avancer un projet, mais de livrer une base solide, que vous pourrez utiliser, faire évoluer et assumer sereinement dans la durée.',
    downloadCvBtn: 'Télécharger Mon CV',
    comeup: {
      badge: 'Top vendeur ComeUp',
      reviews: 'avis',
      positive: 'positifs',
    },
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
    count: 'expériences',
  },

  section_projects: {
    title: 'Réalisations',
    eyebrow: 'Projets',
    description:
      'Une sélection de projets que j’ai conçus, développés et livrés.',
    showProjects: 'Voir tout',
    visitWebsite: 'Visiter le site web',
    count: 'projets',
  },

  section_contact: {
    title: 'Travaillons ensemble',
    eyebrow: 'Contact',
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
        message: 'Votre message...',
      },
      note: 'Réponse généralement sous 24h.',
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
      'Développeur full-stack freelance. Je conçois des produits web et mobiles soignés.',
    navTitle: 'Navigation',
    socialTitle: 'Réseaux',
  },
} as const;
