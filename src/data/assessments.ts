export interface Question {
    id: string;
    text: string;
    type: 'single-choice' | 'multi-choice' | 'text';
    options?: string[];
}

export const ASSESSMENT_QUESTIONS: Question[] = [
    {
        id: 'q1',
        text: "What brings you here today?",
        type: 'multi-choice',
        options: [
            'Stress & Anxiety',
            'Relationship Issues',
            'Career Guidance',
            'Depression or Low Mood',
            'Grief or Loss',
            'Self-Improvement',
        ],
    },
    {
        id: 'q2',
        text: "How have you been feeling lately?",
        type: 'single-choice',
        options: [
            'Overwhelmed',
            'Sad or Hopeless',
            'Anxious or Restless',
            'Numb',
            'Just need someone to talk to',
        ],
    },
    {
        id: 'q3',
        text: "What kind of communication style do you prefer in a counselor?",
        type: 'single-choice',
        options: [
            'Empathetic & Warm (Good listener)',
            'Direct & Solution-Oriented (Actionable advice)',
            'Analytical & Structured (Deep dive into root causes)',
            'Holistic & Spiritual (Mind-body connection)',
        ],
    },
    {
        id: 'q4',
        text: "Which language are you most comfortable speaking in?",
        type: 'single-choice',
        options: ['English', 'Hindi', 'Bengali', 'Gujarati', 'Punjabi'],
    },
];
