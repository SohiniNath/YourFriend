import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4 py-12">
      <div className="max-w-3xl space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">
          <Sparkles className="h-4 w-4" />
          <span>AI-Powered Continuity Engine</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          Never feel lost in your <br />
          <span className="text-indigo-600">mental health journey</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We match you with a dedicated primary counselor who understands your unique needs, ensuring consistent care and better outcomes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
          >
            Find My Counselor
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-700 font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            View Demo Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 text-left">
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Smart Matching</h3>
            <p className="text-gray-600">Our AI analyzes your needs to pair you with the perfect expert for your journey.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Consistent Care</h3>
            <p className="text-gray-600">Stick with one primary counselor who knows your history and progress.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Proactive Nudges</h3>
            <p className="text-gray-600">We'll gently remind you to stay on track if you miss a session.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
