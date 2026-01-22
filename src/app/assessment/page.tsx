'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ASSESSMENT_QUESTIONS } from '@/data/assessments';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';

export default function AssessmentPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

    const question = ASSESSMENT_QUESTIONS[currentStep];
    const isLastStep = currentStep === ASSESSMENT_QUESTIONS.length - 1;

    const handleSelect = (option: string) => {
        if (question.type === 'single-choice') {
            setAnswers({ ...answers, [question.id]: option });
        } else if (question.type === 'multi-choice') {
            const current = (answers[question.id] as string[]) || [];
            if (current.includes(option)) {
                setAnswers({ ...answers, [question.id]: current.filter(i => i !== option) });
            } else {
                setAnswers({ ...answers, [question.id]: [...current, option] });
            }
        }
    };

    const handleNext = () => {
        if (isLastStep) {
            // Encode answers to pass to match page (simple prototype approach)
            const query = encodeURIComponent(JSON.stringify(answers));
            router.push(`/match?answers=${query}`);
        } else {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => prev - 1);
    };

    const canProceed = !!answers[question.id] && (Array.isArray(answers[question.id]) ? (answers[question.id] as string[]).length > 0 : true);

    return (
        <div className="max-w-2xl mx-auto px-4 py-12">
            <div className="mb-8">
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                        style={{ width: `${((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
                    />
                </div>
                <p className="text-sm text-gray-500 mt-2 text-right">
                    Step {currentStep + 1} of {ASSESSMENT_QUESTIONS.length}
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 min-h-[400px] flex flex-col">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{question.text}</h2>

                <div className="space-y-3 flex-1">
                    {question.options?.map((option) => {
                        const isSelected = Array.isArray(answers[question.id])
                            ? (answers[question.id] as string[]).includes(option)
                            : answers[question.id] === option;

                        return (
                            <button
                                key={option}
                                onClick={() => handleSelect(option)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group
                  ${isSelected
                                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                                        : 'border-gray-100 hover:border-indigo-200 hover:bg-gray-50'
                                    }`}
                            >
                                <span className="font-medium">{option}</span>
                                {isSelected && <Check className="h-5 w-5 text-indigo-600" />}
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 0}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors
              ${currentStep === 0
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Back
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={!canProceed}
                        className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white transition-all
              ${!canProceed
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl'
                            }`}
                    >
                        {isLastStep ? 'Find Match' : 'Next'}
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
