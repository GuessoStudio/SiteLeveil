export type Trait = 'Ouverture' | 'Conscience' | 'Extraversion' | 'Agréabilité' | 'Névrosisme';

export interface Question {
    id: number;
    text: string;
    trait: Trait;
    reversed: boolean; // Si true, 1 = Score élevé, 5 = Score faible (ou inversement selon l'échelle)
}

export interface TraitResult {
    trait: Trait;
    score: number; // 0 à 100
    label: string;
    description: string;
    advice: string;
}

// 30 questions basées sur l'IPIP-NEO (version courte adaptée)
// Échelle de 1 (Pas du tout d'accord) à 5 (Tout à fait d'accord)
export const QUESTIONS: Question[] = [
    // Ouverture (Openness)
    { id: 1, text: "J'ai une imagination débordante.", trait: 'Ouverture', reversed: false },
    { id: 6, text: "J'aime réfléchir à des concepts abstraits.", trait: 'Ouverture', reversed: false },
    { id: 11, text: "Je suis peu intéressé(e) par les idées abstraites.", trait: 'Ouverture', reversed: true },
    { id: 16, text: "J'ai des difficultés à comprendre les idées abstraites.", trait: 'Ouverture', reversed: true },
    { id: 21, text: "J'aime l'art, la musique ou la littérature.", trait: 'Ouverture', reversed: false },
    { id: 26, text: "Je n'ai pas beaucoup de curiosité intellectuelle.", trait: 'Ouverture', reversed: true },

    // Conscienciosité (Conscientiousness)
    { id: 2, text: "Je suis toujours préparé(e).", trait: 'Conscience', reversed: false },
    { id: 7, text: "Je laisse souvent mes affaires traîner.", trait: 'Conscience', reversed: true },
    { id: 12, text: "Je prête attention aux détails.", trait: 'Conscience', reversed: false },
    { id: 17, text: "Je remets souvent les choses au lendemain.", trait: 'Conscience', reversed: true },
    { id: 22, text: "J'aime l'ordre et la régularité.", trait: 'Conscience', reversed: false },
    { id: 27, text: "Je néglige parfois mes devoirs.", trait: 'Conscience', reversed: true },

    // Extraversion
    { id: 3, text: "Je me sens à l'aise avec les gens.", trait: 'Extraversion', reversed: false },
    { id: 8, text: "Je reste souvent en retrait.", trait: 'Extraversion', reversed: true },
    { id: 13, text: "J'aime être au centre de l'attention.", trait: 'Extraversion', reversed: false },
    { id: 18, text: "Je ne parle pas beaucoup.", trait: 'Extraversion', reversed: true },
    { id: 23, text: "Je commence souvent les conversations.", trait: 'Extraversion', reversed: false },
    { id: 28, text: "Je préfère rester silencieux(se) entouré(e) d'inconnus.", trait: 'Extraversion', reversed: true },

    // Agréabilité (Agreeableness)
    { id: 4, text: "Je compatis aux émotions des autres.", trait: 'Agréabilité', reversed: false },
    { id: 9, text: "Je ne m'intéresse pas vraiment aux autres.", trait: 'Agréabilité', reversed: true },
    { id: 14, text: "J'insulte parfois les gens.", trait: 'Agréabilité', reversed: true },
    { id: 19, text: "Je suis intéressé(e) par les autres.", trait: 'Agréabilité', reversed: false },
    { id: 24, text: "J'ai un cœur tendre.", trait: 'Agréabilité', reversed: false },
    { id: 29, text: "Je ressens peu d'empathie pour les autres.", trait: 'Agréabilité', reversed: true },

    // Névrosisme/Stabilité émotionnelle (Neuroticism) - Note: Ici on mesure souvent le Névrosisme (tendance aux émotions négatives)
    // Un score élevé = Moins stable.
    { id: 5, text: "Je me stresse facilement.", trait: 'Névrosisme', reversed: false },
    { id: 10, text: "Je suis détendu(e) la plupart du temps.", trait: 'Névrosisme', reversed: true },
    { id: 15, text: "Je m'inquiète pour des choses sans importance.", trait: 'Névrosisme', reversed: false },
    { id: 20, text: "Je me sens rarement triste.", trait: 'Névrosisme', reversed: true },
    { id: 25, text: "Je change souvent d'humeur.", trait: 'Névrosisme', reversed: false },
    { id: 30, text: "Je garde mon calme dans les situations difficiles.", trait: 'Névrosisme', reversed: true },
];

export const INTERPRETATIONS: Record<Trait, { high: string; low: string; title: string }> = {
    'Ouverture': {
        title: "Ouverture à l'expérience",
        high: "Vous êtes curieux, créatif et ouvert aux nouvelles idées. Vous appréciez l'art, l'émotion et l'aventure. Vous avez tendance à être non conventionnel et à penser de manière abstraite.",
        low: "Vous préférez les traditions et le concret. Vous êtes pragmatique, réaliste et préférez vous en tenir à ce que vous connaissez plutôt que d'explorer l'inconnu."
    },
    'Conscience': {
        title: "Conscienciosité",
        high: "Vous êtes organisé, fiable et discipliné. Vous planifiez à l'avance et visez l'accomplissement. On peut compter sur vous, mais attention au perfectionnisme.",
        low: "Vous êtes spontané et flexible, mais pouvez manquer d'organisation et de fiabilité. Vous préférez agir sur le moment plutôt que de suivre un plan strict."
    },
    'Extraversion': {
        title: "Extraversion",
        high: "Vous tirez votre énergie des interactions sociales. Vous êtes enthousiaste, assertif et aimez l'action. Vous recherchez la stimulation et la compagnie.",
        low: "Vous êtes introverti et réservez votre énergie. Vous préférez le calme, la solitude ou les petits groupes. Vous êtes réfléchi et indépendant."
    },
    'Agréabilité': {
        title: "Agréabilité",
        high: "Vous êtes compatissant, coopératif et attentionné. Vous valorisez l'harmonie sociale et êtes perçu comme chaleureux et digne de confiance.",
        low: "Vous êtes plus compétitif que coopératif. Vous pouvez être sceptique quant aux intentions des autres et privilégiez votre propre intérêt ou la vérité objective."
    },
    'Névrosisme': {
        title: "Sensibilité émotionnelle",
        high: "Vous ressentez les émotions intensément et pouvez être sujet au stress ou à l'anxiété. Vous êtes sensible à votre environnement et aux critiques.",
        low: "Vous êtes émotionnellement stable et résilient. Vous gérez bien le stress, ne vous inquiétez pas outre mesure et restez calme sous la pression."
    }
};
