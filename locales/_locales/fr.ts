export default {
  navbar: {
    links: {
      scholarship: 'Parcours Académique',
      job: 'Parcours Professionnel',
      contact: 'Me contacter'
    },
    locales: {
      label: 'Changer de langue',
      fr: '🇫🇷 Français',
      en: '🇬🇧 Anglais'
    }
  },

  section_hero: {
    greetings: 'Salut, je suis',
    position: 'Développeur FullStack',
    description: 'Basé au Cameroun avec 5 ans d’expérience dans le développement web et la conception d’applications. Passionné et autodidacte, j’ai acquis des compétences solides en ingénierie logicielle à travers de nombreux projets. Mon objectif est de maîtriser les nouvelles technologies pour non seulement enrichir mes connaissances, mais surtout pour offrir des solutions adaptées et de grande qualité à ceux qui en ont besoin. En tant que freelance, je suis dévoué à fournir un service efficace et à contribuer activement à la réussite des projets qui me sont confiés.',
    downloadCvBtn: 'Télécharger mon CV',
    contact: 'Me contacter'
  },

  section_scholarship: {
    title: 'Parcours Académique',
    bts: {
      title: 'Brevet de Technicien Supérieur',
      specialty: 'Génie Logiciel',
      location: 'Douala - Cameroun',
      academy: 'Institut Universitaire des Grandes Ecoles des Tropiques'
    },
    bac: {
      title: 'Baccalauréat',
      specialty: 'Technologie de l\'information',
      location1: 'Lycée Bilingue de Kribi',
      location2: 'Kribi - Cameroun'
    },
    probatoire: {
      title: 'Probatoire'
    }
  },

  section_jobs: {
    title: 'Parcours Professionnel',
    showJobs: 'Voir tout'
  },

  section_contact: {
    title: 'Contactez Moi',
    quickContact: 'Liens Rapides',
    form: {
      fields: {
        email: 'Votre email',
        message: 'Votre message',
        name: 'Votre nom et prénom',
        submit: 'Envoyer',
      },
      errors: {
        email: 'Veuillez fournir une adresse email valide.',
        name: 'Le nom doit comporter au moins 2 caractères.',
        message: 'Le message doit comporter au moins 10 caractères.'
      },
      messages: {
        success: 'Votre message a bien été envoyé.',
        error: 'Une erreur est survenue lors de l\'envoi de votre message, veuillez réessayer.'
      }
    }
  },

  breadcrumb: {
    home: 'Accueil',
    jobs: 'Parcours professionnel'
  },

  job: {
    visitWebsite: 'Visiter le site web',
    readTime: 'mins de lecture',
    period: {
      elapsed: 'Depuis',
      from: 'De',
      to: 'à'
    }
  },

  footer: {
    text: 'Conception et intégration par Alfred Mouelle. Tous droits réservés.'
  }
} as const;
