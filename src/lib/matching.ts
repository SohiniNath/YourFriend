import { Counselor, MOCK_COUNSELORS } from '@/data/counselors';

interface AssessmentAnswers {
    [key: string]: string | string[];
}

export function matchCounselor(answers: AssessmentAnswers): Counselor {
    // Simple matching logic based on communication style and language
    // In a real app, this would be a complex AI/ML model or weighted algorithm

    const preferredStyle = answers['q3'] as string; // Communication style
    const preferredLanguage = answers['q4'] as string; // Language

    // Filter by language first (if possible)
    let candidates = MOCK_COUNSELORS.filter(c =>
        c.languages.includes(preferredLanguage)
    );

    if (candidates.length === 0) {
        // Fallback to all counselors if no language match
        candidates = MOCK_COUNSELORS;
    }

    // Find best match by style
    const bestMatch = candidates.find(c =>
        preferredStyle.includes(c.communicationStyle)
    );

    // Return best match or just the first candidate if no specific style match found
    return bestMatch || candidates[0] || MOCK_COUNSELORS[0];
}
