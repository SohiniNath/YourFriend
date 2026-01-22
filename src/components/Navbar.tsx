import Link from 'next/link';
import { Heart, Menu, User } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600">
                    <Heart className="h-6 w-6 fill-current" />
                    <span>YourDOST</span>
                </Link>

                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/dashboard" className="hover:text-indigo-600 transition-colors">Dashboard</Link>
                    <Link href="/assessment" className="hover:text-indigo-600 transition-colors">Assessment</Link>
                    <Link href="#" className="hover:text-indigo-600 transition-colors">Resources</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <User className="h-5 w-5 text-gray-600" />
                    </button>
                    <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Menu className="h-5 w-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
