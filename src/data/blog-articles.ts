export interface ArticleData {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    readTime: number;
    date: string;
    image: string;
    slug: string;
    featured?: boolean;
}

export const articles: ArticleData[] = [
    {
        id: 1,
        title: "Rejet social : ce que les neurosciences révèlent sur la douleur sociale",
        excerpt: "Découvrez les mécanismes neuroscientifiques du rejet et 7 stratégies issues d'approches validées pour reprogrammer votre cerveau.",
        category: "Neurosciences",
        readTime: 14,
        date: "2025-12-17",
        image: "/images/articles/rejet-social-cover",
        slug: "surmonter-rejet-social",
        featured: true
    },
    {
        id: 2,
        title: "Neuroplasticité : comment reprogrammer son cerveau après 25 ans",
        excerpt: "Découvrez les mécanismes scientifiques de la neuroplasticité et 7 stratégies concrètes pour optimiser la plasticité de votre cerveau.",
        category: "Neurosciences",
        readTime: 12,
        date: "2024-01-12",
        image: "/images/articles/neuroplasticite-cover",
        slug: "neuroplasticite-cerveau"
    },
    {
        id: 3,
        title: "Construire une confiance en soi durable",
        excerpt: "Les fondements scientifiques de l'estime de soi et les techniques pratiques pour la développer.",
        category: "Développement Personnel",
        readTime: 10,
        date: "2024-01-10",
        image: "/images/articles/confiance-soi-cover",
        slug: "confiance-en-soi-durable"
    },
    {
        id: 4,
        title: "Dopamine Naturelle : 10 Méthodes Scientifiques + Détox Complète (Guide 2026)",
        excerpt: "Découvrez comment booster naturellement votre dopamine avec 10 techniques validées par les neurosciences. Protocole détox inclus + aliments + exercice. Guide complet 2026.",
        category: "Neurosciences",
        readTime: 15,
        date: "2026-01-31",
        image: "/images/articles/dopamine-cover",
        slug: "neuro-dopamine-routine",
        featured: true
    },
    {
        id: 5,
        title: "Attention fragmentée : restaurer sa concentration profonde à l'ère numérique",
        excerpt: "Découvrez les mécanismes neuroscientifiques de l'attention fragmentée et 8 stratégies scientifiquement validées.",
        category: "Neurosciences",
        readTime: 12,
        date: "2025-08-28",
        image: "/images/articles/attention-fragmentee-cover-1200x630",
        slug: "attention-fragmentee-concentration-numerique"
    },
    {
        id: 6,
        title: "Rumination mentale : comprendre et libérer son esprit des pensées obsessionnelles",
        excerpt: "Découvrez les mécanismes neuroscientifiques de la rumination et 7 stratégies validées scientifiquement.",
        category: "Psychologie",
        readTime: 11,
        date: "2025-08-29",
        image: "/images/articles/rumination-cover",
        slug: "rumination-mentale-pensees-obsessionnelles"
    },
    {
        id: 7,
        title: "Procrastination : comprendre les mécanismes cérébraux pour enfin passer à l'action",
        excerpt: "Découvrez les bases neuroscientifiques de la procrastination et 8 stratégies validées scientifiquement.",
        category: "Psychologie",
        readTime: 13,
        date: "2025-08-30",
        image: "/images/articles/procrastination-brain-conflict",
        slug: "procrastination-cerveau-agir-neurosciences"
    },
    {
        id: 8,
        title: "La méthode ACR : répondre aux bonnes nouvelles pour renforcer les relations",
        excerpt: "Découvrez comment la réponse active-constructive (ACR) transforme votre façon de célébrer les bonnes nouvelles et renforce durablement vos liens interpersonnels.",
        category: "Relations Humaines",
        readTime: 10,
        date: "2025-08-30",
        image: "/images/articles/methode-acr-repondre-aux-bonnes-nouvelles-og-1200x630",
        slug: "methode-acr-repondre-aux-bonnes-nouvelles"
    },
    {
        id: 9,
        title: "Syndrome de l'imposteur : comprendre ses mécanismes et 6 solutions efficaces",
        excerpt: "70% des personnes vivent le syndrome de l'imposteur. Explore les mécanismes neuroscientifiques et 6 stratégies concrètes pour t'en libérer définitivement.",
        category: "Psychologie",
        readTime: 10,
        date: "2025-09-05",
        image: "/images/articles/syndrome-imposteur-cover",
        slug: "syndrome-imposteur-solutions",
        featured: true
    },
    {
        id: 10,
        title: "Sommeil réparateur : 7 stratégies validées pour booster énergie & mémoire",
        excerpt: "30% des adultes souffrent de troubles du sommeil. Explorez les mécanismes neuroscientifiques et 7 stratégies scientifiques pour une récupération optimale.",
        category: "Neurosciences",
        readTime: 12,
        date: "2025-09-06",
        image: "/images/articles/sommeil-reparateur-cover",
        slug: "sommeil-reparateur-7-strategies-validees",
        featured: true
    },
    {
        id: 11,
        title: "Lumière naturelle : effets sur le cerveau, le sommeil et la santé mentale",
        excerpt: "90% de notre temps passé en intérieur dérègle notre horloge biologique. Explorez les mécanismes neuroscientifiques et 7 stratégies pour retrouver un équilibre naturel.",
        category: "Neurosciences",
        readTime: 14,
        date: "2025-09-08",
        image: "/images/articles/lumiere-naturelle-cover",
        slug: "lumiere-naturelle-cerveau-sommeil-sante-mentale",
        featured: true
    },
    {
        id: 12,
        title: "BDNF : 8 Méthodes Scientifiques pour Augmenter le Facteur Neurotrophique",
        excerpt: "Le BDNF est la protéine clé de la neuroplasticité. Découvrez 8 méthodes validées par les neurosciences pour augmenter naturellement le BDNF et booster mémoire, humeur et apprentissage.",
        category: "Neurosciences",
        readTime: 13,
        date: "2026-04-11",
        image: "/images/articles/bdnf-augmenter-naturellement-cover",
        slug: "bdnf-augmenter-naturellement-neurosciences",
        featured: false
    },
    {
        id: 13,
        title: "Système Limbique : Comment Votre Cerveau Émotionnel Contrôle Vos Décisions",
        excerpt: "Le système limbique gouverne émotions, mémoire et décisions. 5 structures clés, mécanismes amygdale–PFC et 4 méthodes validées pour moduler votre cerveau émotionnel.",
        category: "Neurosciences",
        readTime: 13,
        date: "2026-04-12",
        image: "/images/articles/systeme-limbique-cerveau-emotionnel-cover",
        slug: "systeme-limbique-cerveau-emotionnel",
        featured: false
    },
    {
        id: 14,
        title: "Plasticité synaptique : comment le cerveau modifie ses connexions pour apprendre",
        excerpt: "La plasticité synaptique est le mécanisme par lequel le cerveau renforce ou affaiblit ses connexions pour apprendre. LTP, LTD, mécanismes humains et 5 stratégies validées.",
        category: "Neurosciences",
        readTime: 14,
        date: "2026-04-13",
        image: "/images/articles/plasticite-synaptique-apprentissage-cerveau-cover",
        slug: "plasticite-synaptique-apprentissage-cerveau",
        featured: false
    },
    {
        id: 15,
        title: "Empathie et neurones miroirs : ce que les neurosciences révèlent vraiment",
        excerpt: "Les neurones miroirs expliquent-ils vraiment l'empathie ? Circuits cérébraux réels, paradoxe de la fatigue empathique et 4 méthodes validées pour se connecter sans s'épuiser.",
        category: "Relations Humaines",
        readTime: 14,
        date: "2026-04-19",
        image: "/images/articles/empathie-neurones-miroirs-connexion-humaine-cover",
        slug: "empathie-neurones-miroirs-connexion-humaine",
        featured: false
    },
    {
        id: 16,
        title: "7 Neurotransmetteurs Qui Contrôlent Votre Humeur : Ce que la Science Dit Vraiment",
        excerpt: "Dopamine, sérotonine, GABA : les 7 neurotransmetteurs qui régulent votre humeur expliqués avec les études PubMed 2022-2024. Mythe du déséquilibre chimique déconstruit.",
        category: "Neurosciences",
        readTime: 16,
        date: "2026-04-25",
        image: "/images/articles/neurotransmetteurs-humeur-cerveau-cover",
        slug: "neurotransmetteurs-humeur-cerveau",
        featured: false
    },
    {
        id: 17,
        title: "Cortisol et stress chronique : effets réels sur le cerveau et la mémoire",
        excerpt: "Le stress chronique rétrécit littéralement le cerveau. Découvrez comment le cortisol détruit la mémoire et 5 stratégies validées pour inverser ce processus.",
        category: "Neurosciences",
        readTime: 15,
        date: "2026-04-27",
        image: "/images/articles/cortisol-stress-chronique-cerveau-memoire-cover",
        slug: "cortisol-stress-chronique-cerveau-memoire",
        featured: false
    },
    {
        id: 18,
        title: "Communication Non-Violente (CNV) : les 4 étapes OSBD validées par la science",
        excerpt: "Communication non violente : 4 étapes OSBD, RCT 2025 sur empathie et PTSD, tableau CNV vs assertivité. Guide scientifique complet, limites incluses.",
        category: "Relations Humaines",
        readTime: 14,
        date: "2026-05-07",
        image: "/images/articles/communication-non-violente-cnv-cover",
        slug: "communication-non-violente-cnv",
        featured: true
    },
    {
        id: 19,
        title: "Écoute active : 5 techniques de Carl Rogers validées par la science",
        excerpt: "Écoute active : 5 techniques de Carl Rogers, synchronisation inter-cérébrale fNIRS 2025, différence avec CNV. Guide scientifique complet avec limites.",
        category: "Relations Humaines",
        readTime: 13,
        date: "2026-05-11",
        image: "/images/articles/ecoute-active-technique-carl-rogers-cover",
        slug: "ecoute-active-technique-carl-rogers",
        featured: false
    },
    {
        id: 20,
        title: "Mindset de croissance : la psychologie de Dweck expliquée",
        excerpt: "Mindset de croissance selon Carol Dweck : mécanismes cérébraux, méta-analyse 97 672 sujets, nuance stress. Guide scientifique avec limites incluses.",
        category: "Psychologie",
        readTime: 12,
        date: "2026-05-12",
        image: "/images/articles/mindset-de-croissance-psychologie-dweck-cover",
        slug: "mindset-de-croissance-psychologie-dweck",
        featured: false
    },
    {
        id: 21,
        title: "Routine matinale : ce que la neurologie dit des 90 premières minutes",
        excerpt: "Routine matinale scientifique : CAR, lumière circadienne, BDNF. Ce que la neurologie dit des 90 premières minutes après le réveil. Guide 2026 avec sources.",
        category: "Développement Personnel",
        readTime: 13,
        date: "2026-05-17",
        image: "/images/articles/routine-matinale-scientifique-cerveau-cover",
        slug: "routine-matinale-scientifique-cerveau",
        featured: false
    },
    {
        id: 22,
        title: "Régulation émotionnelle : 8 techniques validées par la psychologie (2026)",
        excerpt: "Régulation émotionnelle : 8 techniques classées par efficacité selon 306 études. Modèle de Gross, circuit amygdale-CPF, affect labeling. Guide 2026.",
        category: "Psychologie",
        readTime: 12,
        date: "2026-06-05",
        image: "/images/articles/regulation-emotionnelle-techniques-psychologie-cover",
        slug: "regulation-emotionnelle-techniques-psychologie",
        featured: false
    },
    {
        id: 23,
        title: "Résoudre un conflit : mécanismes cérébraux et 6 méthodes validées par la psychologie sociale",
        excerpt: "Résoudre un conflit efficacement : fenêtre d'inhibition de 20 min, 4 Cavaliers de Gottman, méthode Harvard. 6 méthodes validées par la psychologie sociale.",
        category: "Relations Humaines",
        readTime: 12,
        date: "2026-06-09",
        image: "/images/articles/resoudre-un-conflit-methodes-psychologie-cover",
        slug: "resoudre-un-conflit-methodes-psychologie",
        featured: false
    },
    {
        id: 24,
        title: "Objectifs SMART : ce que les neurosciences disent vraiment de la méthode",
        excerpt: "Objectifs SMART décryptés par les neurosciences : pourquoi la spécificité active le cortex préfrontal, les plans si/alors validés sur 94 études, et les limites réelles de la méthode.",
        category: "Développement Personnel",
        readTime: 13,
        date: "2026-06-15",
        image: "/images/articles/objectifs-smart-methode-neurosciences-cover",
        slug: "objectifs-smart-methode-neurosciences",
        featured: false
    },
    {
        id: 25,
        title: "Formation des habitudes dans le cerveau : ce que disent les neurosciences",
        excerpt: "Comment le cerveau forme les habitudes : le circuit du striatum, le transfert dorsomédial vers dorsolatéral, le mythe des 21 jours et 3 leviers validés pour les changer.",
        category: "Développement Personnel",
        readTime: 14,
        date: "2026-06-19",
        image: "/images/articles/formation-habitudes-cerveau-neurosciences-cover",
        slug: "formation-habitudes-cerveau-neurosciences",
        featured: false
    },
    {
        id: 26,
        title: "Concentration profonde : ce que les neurosciences révèlent sur le deep work",
        excerpt: "Concentration profonde et deep work : le mécanisme cérébral DMN/DAN, le mythe des 23 minutes, l'attention résiduelle de Leroy et 4 leviers validés pour retrouver le focus.",
        category: "Développement Personnel",
        readTime: 13,
        date: "2026-06-20",
        image: "/images/articles/concentration-profonde-deep-work-neurosciences-cover",
        slug: "concentration-profonde-deep-work-neurosciences",
        featured: false
    }
];
