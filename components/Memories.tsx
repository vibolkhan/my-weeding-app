
import React, { useState } from 'react';
import { ChevronLeft, Share2, Heart, ChevronRight, Camera, Search } from 'lucide-react';

interface MemoriesProps {
  onBack: () => void;
}

const HIGHLIGHTS = [
    { title: "Angkor Wat Ceremony", loc: "SIEM REAP", img: "https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=400&q=80" },
    { title: "Engagement Party", loc: "PHNOM PENH", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80" },
];

const Memories: React.FC<MemoriesProps> = ({ onBack }) => {
    const [filter, setFilter] = useState('All Photos');
    const categories = ['All Photos', 'Ceremony', 'Reception', 'Pre-Wedding'];

    return (
        <div className="min-h-screen bg-[#1a1a10] pb-24">
            <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-[#1a1a10]/80 backdrop-blur-md">
                <button onClick={onBack} className="p-2 text-yellow-500"><ChevronLeft /></button>
                <h2 className="text-white font-bold">Our Memories</h2>
                <div className="flex gap-2">
                    <button className="p-2 text-yellow-500"><Heart className="w-5 h-5" /></button>
                    <button className="p-2 text-yellow-500"><Share2 className="w-5 h-5" /></button>
                </div>
            </header>

            {/* Highlights */}
            <div className="py-6 px-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-yellow-500 font-bold text-lg">Highlights</h3>
                    <button className="text-gray-400 text-xs flex items-center gap-1">View Story <ChevronRight className="w-3 h-3" /></button>
                </div>
                <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                    {HIGHLIGHTS.map((h, i) => (
                        <div key={i} className="min-w-[280px] h-44 rounded-2xl overflow-hidden relative border border-yellow-500/10">
                            <img src={h.img} alt={h.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <h4 className="text-white font-bold">{h.title}</h4>
                                <p className="text-yellow-500 text-[10px] font-bold tracking-widest flex items-center gap-1">
                                    <span className="text-[8px]">📍</span> {h.loc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filters */}
            <div className="px-4 py-2 flex gap-3 overflow-x-auto hide-scrollbar">
                {categories.map(c => (
                    <button 
                        key={c}
                        onClick={() => setFilter(c)}
                        className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                            filter === c ? 'bg-yellow-500 text-black' : 'bg-white/5 text-gray-400 border border-white/10'
                        }`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* Gallery Grid */}
            <div className="px-4 py-6">
                <h3 className="text-white text-2xl font-bold mb-6">Gallery</h3>
                
                <div className="columns-2 gap-4 space-y-4">
                    {/* Item 1 - Featured Portrait */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden border border-yellow-500/10">
                        <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=300&q=80" className="w-full h-auto" />
                    </div>

                    {/* Item 2 - Card */}
                    <div className="break-inside-avoid bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 aspect-square flex flex-col items-center justify-center text-center">
                        <Heart className="w-8 h-8 text-yellow-500 fill-yellow-500 mb-2" />
                        <h4 className="text-yellow-500 font-bold text-sm">Best Day</h4>
                        <p className="text-gray-400 text-[10px]">December 12th, 2023</p>
                    </div>

                    {/* Item 3 - Macro Details */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=300&q=80" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                    </div>

                    {/* Item 4 - Illustration style */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&w=300&q=80" className="w-full h-auto" />
                    </div>

                    {/* Item 5 - Landscape */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden border border-yellow-500/20">
                        <img src="https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=300&q=80" className="w-full h-auto" />
                    </div>

                    {/* Item 6 - Portrait Detail */}
                    <div className="break-inside-avoid relative rounded-xl overflow-hidden border border-yellow-500/10">
                        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=300&q=80" className="w-full h-auto" />
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/40 backdrop-blur-md rounded-lg text-[8px] text-white">
                            Temple Details
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center py-12 gap-2 opacity-50">
                    <div className="w-5 h-5 border-2 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin" />
                    <p className="text-xs text-gray-400 italic">Loading memories...</p>
                </div>
            </div>

            {/* FAB */}
            <button className="fixed bottom-28 right-6 w-14 h-14 bg-yellow-500 rounded-full shadow-2xl flex items-center justify-center text-black active:scale-95 transition-transform z-50">
                <Camera className="w-7 h-7" />
            </button>
        </div>
    );
};

export default Memories;
