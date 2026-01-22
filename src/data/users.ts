import { Counselor } from './counselors';

export interface Session {
    id: string;
    date: string;
    counselorId: string;
    notes: string;
    status: 'completed' | 'upcoming' | 'cancelled';
}

export interface User {
    id: string;
    name: string;
    email: string;
    assignedCounselorId?: string;
    sessions: Session[];
    assessmentAnswers?: Record<string, string | string[]>;
}

export const MOCK_USER: User = {
    id: 'u1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    sessions: [],
};
