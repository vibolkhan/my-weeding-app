
import React from 'react';
import { ChevronLeft, Music, Heart, Calendar, MapPin, ChevronDown } from 'lucide-react';

interface LoveStoryProps {
  onBack: () => void;
}

const LoveStory: React.FC<LoveStoryProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-[#1a1a10] pb-24">
            <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-[#1a1a10]/80 backdrop-blur-md">
                <button onClick={onBack} className="p-2 text-yellow-500"><ChevronLeft /></button>
                <div className="text-center">
                    <h2 className="text-white font-bold">Our Love Story</h2>
                    <p className="text-yellow-500/60 font-khmer text-[10px]">រឿងរ៉ាវស្នេហា</p>
                </div>
                <button className="p-2 text-yellow-500"><Music className="w-5 h-5" /></button>
            </header>

            {/* Hero */}
            <div className="relative h-72 flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800" 
                        alt="Temple" 
                        className="w-full h-full object-cover opacity-20 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a10] to-transparent" />
                </div>
                <div className="relative z-10 space-y-4">
                    <span className="bg-yellow-500/20 text-yellow-500 text-[10px] font-bold px-3 py-1 rounded-full border border-yellow-500/40 uppercase tracking-widest">Since 2019</span>
                    <h1 className="text-4xl font-serif text-white font-bold">A Tale Written in Stone</h1>
                    <p className="text-gray-400 text-sm italic">From our first meeting at the riverside to forever in the temples.</p>
                </div>
            </div>

            {/* Timeline */}
            <div className="px-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500/10 via-yellow-500/30 to-yellow-500/10" />

                <div className="space-y-12">
                    {/* Event 1 */}
                    <div className="relative pl-10">
                        <div className="absolute left-[-5px] top-1.5 w-4 h-4 rounded-full border-2 border-yellow-500 bg-[#1a1a10]" />
                        <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                            <div className="absolute top-4 right-4 text-yellow-500"><Heart className="w-4 h-4 fill-yellow-500" /></div>
                            <h3 className="text-white font-bold text-xl">The First Meeting</h3>
                            <div className="flex gap-4 mt-1 text-[10px] font-bold text-yellow-500 tracking-widest uppercase">
                                <span>April 12, 2019</span>
                                <span>•</span>
                                <span>Phnom Penh</span>
                            </div>
                            <p className="text-gray-300 text-xs leading-relaxed mt-3">
                                It was during the Khmer New Year celebrations. We bumped into each other near Wat Phnom, amidst the powder and water games. A shared laugh turned into a coffee, which turned into everything.
                            </p>
                            <img 
                                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=400" 
                                className="w-full h-40 object-cover rounded-xl mt-4" 
                            />
                            {/* Card Decorative Corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-yellow-500/30 rounded-tl-lg" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-yellow-500/30 rounded-br-lg" />
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="relative pl-10">
                        <div className="absolute left-[-5px] top-1.5 w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                        <div className="glass-card rounded-2xl p-6">
                            <h3 className="text-white font-bold text-xl">Blossoming Love</h3>
                            <div className="flex gap-4 mt-1 text-[10px] font-bold text-yellow-500 tracking-widest uppercase">
                                <span>2020 - 2022</span>
                                <span>•</span>
                                <span>Adventures</span>
                            </div>
                            <p className="text-gray-300 text-xs leading-relaxed mt-3">
                                From street food hunts to temple hopping in Siem Reap, every weekend became a new chapter in our adventure book.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <div>
                                    <img src="https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&q=80&w=200" className="w-full h-32 object-cover rounded-xl" />
                                    <p className="text-center text-[8px] text-gray-500 mt-1 uppercase tracking-tighter">Night Market</p>
                                </div>
                                <div>
                                    <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=200" className="w-full h-32 object-cover rounded-xl" />
                                    <p className="text-center text-[8px] text-gray-500 mt-1 uppercase tracking-tighter">First Anniversary</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="relative pl-10">
                        <div className="absolute left-[-5px] top-1.5 w-4 h-4 rounded-full border-2 border-yellow-500 bg-[#1a1a10]" />
                        <div className="glass-card rounded-2xl p-6 relative">
                             <div className="text-[10px] font-bold text-yellow-500 tracking-widest uppercase flex items-center gap-1.5 mb-2">
                                💎 December 2023
                             </div>
                             <h3 className="text-white font-bold text-2xl">The Proposal</h3>
                             <p className="text-gray-300 text-xs leading-relaxed mt-3">
                                Under the golden sunrise at Angkor Wat, surrounded by the whispers of history, he knelt down. It wasn't just a question; it was a promise to build our own legacy.
                            </p>
                             <img 
                                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=400" 
                                className="w-full h-44 object-cover rounded-xl mt-4" 
                            />
                             {/* Gradient Overlay for Proposal image */}
                             <div className="absolute bottom-6 left-6 right-6">
                                <div className="h-20 bg-gradient-to-t from-[#1a1a10] to-transparent pointer-events-none rounded-xl" />
                             </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center py-12 text-gray-500 space-y-4">
                    <div className="w-8 h-8 rounded-lg border border-white/5 flex items-center justify-center">
                        <ChevronDown className="w-5 h-5" />
                    </div>
                    <p className="text-xs italic">To be continued on our wedding day...</p>
                </div>
            </div>

            <div className="fixed bottom-6 left-6 right-6 max-w-[calc(100%-48px)] mx-auto z-50">
                <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-transform">
                    <Calendar className="w-5 h-5" />
                    Save the Date
                </button>
            </div>
        </div>
    );
};

export default LoveStory;
