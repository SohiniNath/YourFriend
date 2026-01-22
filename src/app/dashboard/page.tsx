'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { MOCK_COUNSELORS, Counselor } from '@/data/counselors';
import { generateSessionSummary } from '@/lib/summary';
import { Calendar, Clock, FileText, MessageSquare, Video, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function DashboardContent() {
    const searchParams = useSearchParams();
    const [counselor, setCounselor] = useState<Counselor | null>(null);

    useEffect(() => {
        const counselorId = searchParams.get('counselorId');
        if (counselorId) {
            const found = MOCK_COUNSELORS.find(c => c.id === counselorId);
            setCounselor(found || null);
        }
    }, [searchParams]);

    const summary = counselor
        ? generateSessionSummary(counselor.name, ['Stress', 'Work-Life Balance'])
        : '';

    if (!counselor) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">No Counselor Assigned Yet</h1>
                <p className="text-gray-600 mb-8">Take the assessment to find your perfect match.</p>
                <Link
                    href="/assessment"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
                >
                    Start Assessment
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-indigo-600" />
                            Latest Session Summary
                        </h2>
                        <div className="prose prose-indigo max-w-none">
                            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-indigo-900 whitespace-pre-line">
                                {summary}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-indigo-600" />
                            Upcoming Sessions
                        </h2>
                        <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                            No upcoming sessions scheduled.
                            <div className="mt-4">
                                <button className="text-indigo-600 font-medium hover:underline">Schedule Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Your Primary Counselor</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative h-16 w-16 flex-shrink-0">
                                <Image
                                    src={counselor.imageUrl}
                                    alt={counselor.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">{counselor.name}</h4>
                                <p className="text-sm text-gray-600">{counselor.specialties[0]}</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                                <Video className="h-4 w-4" />
                                Join Session
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                <MessageSquare className="h-4 w-4" />
                                Message
                            </button>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-sm border border-purple-100 p-6">
                        <h3 className="font-bold text-purple-900 mb-2">Weekly Check-in</h3>
                        <p className="text-sm text-purple-700 mb-4">How are you feeling today?</p>
                        <div className="flex justify-between gap-2">
                            {['😔', '😐', '🙂', '😊'].map(emoji => (
                                <button key={emoji} className="text-2xl hover:scale-110 transition-transform p-2 bg-white rounded-full shadow-sm">
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function DashboardPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DashboardContent />
        </Suspense>
    );
}
