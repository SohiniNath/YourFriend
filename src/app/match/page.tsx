'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { matchCounselor } from '@/lib/matching';
import { Counselor } from '@/data/counselors';
import { Check, Star, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

function MatchContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [counselor, setCounselor] = useState<Counselor | null>(null);

    useEffect(() => {
        const answersParam = searchParams.get('answers');
        if (answersParam) {
            try {
                const answers = JSON.parse(decodeURIComponent(answersParam));
                const matched = matchCounselor(answers);
                setCounselor(matched);
            } catch (e) {
                console.error('Failed to parse answers', e);
            }
        }
    }, [searchParams]);

    if (!counselor) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-12 bg-indigo-100 rounded-full mb-4"></div>
                    <p className="text-gray-500">Finding your best match...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">We've found your primary counselor</h1>
                <p className="text-lg text-gray-600">Based on your needs and preferences, we believe this is the perfect start for your journey.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-indigo-50 to-white">
                        <div className="relative w-48 h-48 mx-auto mb-6">
                            <Image
                                src={counselor.imageUrl}
                                alt={counselor.name}
                                fill
                                className="rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <div className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                <span className="font-bold text-sm">{counselor.rating}</span>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">{counselor.name}</h2>
                        <p className="text-center text-indigo-600 font-medium mb-6">{counselor.specialties.join(' • ')}</p>

                        <div className="flex justify-center gap-2 flex-wrap">
                            {counselor.languages.map(lang => (
                                <span key={lang} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="h-5 w-5 text-green-600" />
                            </div>
                            Why this match?
                        </h3>

                        <div className="space-y-4 mb-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <MessageCircle className="h-5 w-5 text-gray-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Communication Style</h4>
                                    <p className="text-gray-600 text-sm">Matches your preference for a <span className="font-semibold text-indigo-600">{counselor.communicationStyle}</span> approach.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <Calendar className="h-5 w-5 text-gray-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">Availability</h4>
                                    <p className="text-gray-600 text-sm">{counselor.availability}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl mb-8">
                            <p className="text-gray-600 italic">"{counselor.bio}"</p>
                        </div>

                        <button
                            onClick={() => router.push(`/dashboard?counselorId=${counselor.id}`)}
                            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            Continue with {counselor.name.split(' ')[0]}
                            <ArrowRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MatchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MatchContent />
        </Suspense>
    );
}
