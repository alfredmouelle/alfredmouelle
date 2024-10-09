export default {
  navbar: {
    links: {
      scholarship: 'Parcours Académique',
      job: 'Parcours Professionnel',
      contact: 'Me contacter',
      skills: 'Compétences',
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
    backend_desc:
      'Expertise en Node.js, PHP (Laravel, Symfony) et Java Spring Boot pour des applications serveur robustes.',
    frontend_desc:
      "Création d'interfaces modernes avec Next.js, Nuxt et Angular pour des applications web réactives et dynamiques.",
    mobile_desc:
      "Développement d'applications mobiles multi-plateformes avec Flutter et React Native pour iOS et Android.",
    node_code_desc:
      'Maîtrise de Webflow pour la création de sites Web sans code, permettant un prototypage rapide et une mise en œuvre de la conception.',
  },

  section_hero: {
    greetings: 'Salut, je suis',
    position: 'Développeur FullStack',
    availability: 'Disponible pour de nouvelles opportunités',
    description:
      'Basé au Cameroun avec 5 ans d’expérience dans le développement web et la conception d’applications. Passionné et autodidacte, j’ai acquis des compétences solides en ingénierie logicielle à travers de nombreux projets. Mon objectif est de maîtriser les nouvelles technologies pour non seulement enrichir mes connaissances, mais surtout pour offrir des solutions adaptées et de grande qualité à ceux qui en ont besoin. En tant que freelance, je suis dévoué à fournir un service efficace et à contribuer activement à la réussite des projets qui me sont confiés.',
    downloadCvBtn: 'Télécharger Mon CV',
    contact: 'Me contacter',
  },

  section_scholarship: {
    title: 'Parcours Académique',
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
    showJobs: 'Voir tout',
  },

  section_contact: {
    title: 'Contactez Moi',
    quickContact: 'Liens Rapides',
    description:
      "Besoin de plus d'informations, d'un devis personnalisé ou d'un rendez-vous ? N'hésitez pas à me contacter via le formulaire ci-dessous. Je serai ravi de répondre à toutes vos questions et de discuter de votre projet en détail.",
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
  },
} as const;
