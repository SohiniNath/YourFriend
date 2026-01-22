export interface Counselor {
    id: string;
    name: string;
    specialties: string[];
    languages: string[];
    communicationStyle: 'Direct' | 'Empathetic' | 'Analytical' | 'Holistic';
    availability: string; // e.g., "Available Today", "Next Available: Tomorrow"
    imageUrl: string;
    rating: number;
    bio: string;
}

export const MOCK_COUNSELORS: Counselor[] = [
    {
        id: 'c1',
        name: 'Dr. Ananya Sharma',
        specialties: ['Anxiety', 'Stress', 'Work-Life Balance'],
        languages: ['English', 'Hindi'],
        communicationStyle: 'Empathetic',
        availability: 'Available Today',
        imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
        rating: 4.9,
        bio: 'Specializes in helping professionals manage stress and anxiety with a warm, empathetic approach.',
    },
    {
        id: 'c2',
        name: 'Mr. Rahul Verma',
        specialties: ['Career Counseling', 'Depression', 'Relationships'],
        languages: ['English', 'Hindi', 'Bengali'],
        communicationStyle: 'Analytical',
        availability: 'Next Available: Tomorrow',
        imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
        rating: 4.8,
        bio: 'Focuses on practical solutions and cognitive behavioral techniques to overcome challenges.',
    },
    {
        id: 'c3',
        name: 'Ms. Priya Patel',
        specialties: ['Relationships', 'Family Therapy', 'Self-Esteem'],
        languages: ['English', 'Gujarati'],
        communicationStyle: 'Holistic',
        availability: 'Available Today',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
        rating: 4.9,
        bio: 'Believes in a holistic approach to mental wellness, integrating mindfulness and emotional healing.',
    },
    {
        id: 'c4',
        name: 'Dr. Vikram Singh',
        specialties: ['Trauma', 'Grief', 'Addiction'],
        languages: ['English', 'Punjabi', 'Hindi'],
        communicationStyle: 'Direct',
        availability: 'Next Available: Wed',
        imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop',
        rating: 4.7,
        bio: 'Experienced clinical psychologist specializing in trauma recovery and addiction support.',
    },
];
