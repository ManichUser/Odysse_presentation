import { NavigationItem, Feature, Testimonial, Stat, Solution, SecurityFeature, Problem } from "../types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'Problèmes', id: 'problèmes' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Fonctionnalités', id: 'fonctionnalités' },
    { label: 'Témoignages', id: 'témoignages' },
    { label: 'Sécurité', id: 'sécurité' }
  ];
  
  export const PREDEFINED_KEYWORDS: string[] = [
    'Respect', 'Écoute', 'Bienveillance', 'Responsabilité', 'Communication',
    'Empathie', 'Courage', 'Équité', 'Intégrité', 'Solidarité',
    'Ouverture', 'Gentillesse', 'Engagement', 'Soutien', 'Authenticité'
  ];
  
  export const STOP_WORDS: string[] = [
    'le', 'la', 'les', 'un', 'une', 'des', 'de', 'du',
    'et', 'ou', 'mais', 'pour', 'dans', 'sur', 'à', 'avec'
  ];
  
  export const FEATURES_DATA: Feature[] = [
    {
      title: 'Missions Quotidiennes',
      desc: 'Accomplissez des missions adaptées à vos objectifs personnels',
      icon: '🎯'
    },
    {
      title: 'Forum Thématique',
      desc: 'Discussions organisées par sujets : famille, émotions, finances...',
      icon: '💬'
    },
    {
      title: 'Système de Badges',
      desc: 'Débloquez des récompenses en progressant dans votre parcours',
      icon: '🏆'
    },
    {
      title: 'Classements Inclusifs',
      desc: 'Comparez vos progrès par quartier, ville, sans jugement',
      icon: '📊'
    },
    {
      title: 'Contenus Bilingues',
      desc: 'Ressources disponibles en français et en anglais',
      icon: '🌍'
    },
    {
      title: 'Mode Hors Ligne',
      desc: 'Accédez aux contenus essentiels même sans connexion',
      icon: '📱'
    },
    {
      title: 'Messages Motivants',
      desc: 'Recevez des encouragements quotidiens : "On peut mieux faire ensemble"',
      icon: '💪'
    },
    {
      title: 'Projets Collectifs',
      desc: 'Participez à des initiatives d\'impact social dans votre communauté',
      icon: '🤝'
    }
  ];
  
  export const TESTIMONIALS_DATA: Testimonial[] = [
    {
      quote: "J'ai appris à communiquer mes émotions sans violence. Ma famille me remercie chaque jour.",
      author: "Jean-Pierre, 34 ans",
      level: "Niveau Ngon'a Muna"
    },
    {
      quote: "Les challenges m'ont aidé à devenir un meilleur père. Je suis plus présent et à l'écoute.",
      author: "Amadou, 41 ans",
      level: "250 missions accomplies"
    },
    {
      quote: "Cette plateforme m'a donné un espace sûr pour parler de mes difficultés sans jugement.",
      author: "Kevin, 28 ans",
      level: "Champion du mois"
    }
  ];
  
  export const STATS_DATA: Stat[] = [
    { number: '10,000+', label: 'Hommes engagés' },
    { number: '500+', label: 'Missions disponibles' },
    { number: '95%', label: 'Taux de satisfaction' },
    { number: '50+', label: 'Villes couvertes' }
  ];
  
  export const SOLUTIONS_DATA: Solution[] = [
    {
      title: 'Cours & Contenus Éducatifs',
      description: 'Accédez gratuitement à des cours sur la gestion des émotions, la communication non-violente, la prévention des VBG, et la gestion de relations saines. Vidéos courtes et impactantes.',
      gradient: 'bg-gradient-to-br from-blue-400 to-teal-500',
      iconName: 'BookOpen'
    },
    {
      title: 'Espace d\'Échange Sécurisé',
      description: 'Rejoignez une communauté bienveillante d\'hommes qui partagent leurs expériences, leurs défis et leurs victoires. Un lieu sans jugement pour grandir ensemble.',
      gradient: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      iconName: 'MessageCircle'
    },
    {
      title: 'Challenges & Gamification',
      description: 'Participez à des défis réguliers (ex: "10 jours pour exprimer sa gratitude"). Gagnez des badges, montez en niveaux, et célébrez vos progrès avec la communauté.',
      gradient: 'bg-gradient-to-br from-purple-400 to-pink-500',
      iconName: 'Award'
    }
  ];
  
  export const SECURITY_DATA: SecurityFeature[] = [
    {
      title: 'Anonymat Garanti',
      description: 'Vous contrôlez ce que vous partagez. Pseudonymes acceptés, aucune obligation de révéler votre identité. Vos données personnelles sont chiffrées et jamais partagées avec des tiers.',
      gradient: 'bg-gradient-to-br from-blue-50 to-teal-50',
      iconName: 'Shield'
    },
    {
      title: 'Espace Bienveillant',
      description: 'Modération active pour garantir un environnement respectueux. Zéro tolérance pour les comportements toxiques. Signalement facile, réponse rapide.',
      gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconName: 'Heart'
    },
    {
      title: 'Inclusivité Totale',
      description: 'Tous les hommes sont les bienvenus, quels que soient leur âge, origine, orientation, situation. Aucun prérequis, aucun jugement. Chacun avance à son rythme.',
      gradient: 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconName: 'Users'
    },
    {
      title: 'Impact Social Positif',
      description: 'En rejoignant Ngon\'a, vous contribuez à réduire les violences, améliorer les relations familiales et construire des communautés plus saines et solidaires.',
      gradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
      iconName: 'TrendingUp'
    }
  ];
  
  export const PROBLEMS_DATA: Problem[] = [
    {
      title: 'Divergences de définition de la masculinité positive',
      description: 'Chaque homme a sa propre vision de ce qu\'est une masculinité saine et positive. Cette diversité de perspectives peut créer de la confusion et limiter l\'engagement collectif. Notre plateforme permet d\'explorer ces définitions ensemble et de construire un consensus inclusif.',
      imagePosition: 'right',
      gradient: 'bg-gradient-to-br from-amber-200 to-orange-300',
      url:'/pb-1.png'
      
    },
    {
      title: 'Manque d\'éducation émotionnelle chez les hommes',
      description: 'Beaucoup d\'hommes n\'ont jamais appris à identifier, exprimer et gérer leurs émotions de manière saine. Cette carence éducative peut conduire à des comportements toxiques, de l\'isolement et des relations difficiles. Nous proposons des ressources et un espace sûr pour développer ces compétences essentielles.',
      imagePosition: 'left',
      gradient: 'bg-gradient-to-br from-blue-200 to-indigo-300',
      url:'/pb-2.png'
    }
  ];
  
  