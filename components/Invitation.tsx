
import React from 'react';
import { MapPin, Clock, Users, Scissors, Camera, Heart, BookOpen, Send, ChevronLeft, Share2, Heart as HeartIcon } from 'lucide-react';

interface InvitationProps {
  onViewMemories: () => void;
  onViewStory: () => void;
  onViewRSVP: () => void;
}

const ProgramItem: React.FC<{ time: string; title: string; desc: string; icon: React.ReactNode }> = ({ time, title, desc, icon }) => (
  <div className="flex gap-4 relative">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-500">
        {icon}
      </div>
      <div className="w-[1px] flex-grow bg-yellow-500/20 my-2" />
    </div>
    <div className="pb-8">
      <p className="text-yellow-500 text-sm font-bold">{time}</p>
      <h4 className="text-white font-bold text-lg">{title}</h4>
      <p className="text-gray-400 text-xs leading-relaxed mt-1">{desc}</p>
    </div>
  </div>
);

const Invitation: React.FC<InvitationProps> = ({ onViewMemories, onViewStory, onViewRSVP }) => {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-[#1a1a10]/80 backdrop-blur-md">
        <button className="p-2 text-yellow-500"><ChevronLeft /></button>
        <div className="text-center">
            <p className="text-[10px] uppercase tracking-widest text-yellow-500/60">Save the Date</p>
            <h2 className="text-white font-serif font-bold">Wedding Invitation</h2>
        </div>
        <button className="p-2 text-yellow-500"><Share2 className="w-5 h-5" /></button>
      </header>

      {/* Hero Section */}
      <div className="px-6 py-10">
        <div className="relative p-8 rounded-2xl overflow-hidden border border-yellow-500/20 shadow-xl">
           {/* Wooden/Stone Texture bg placeholder */}
           <div className="absolute inset-0 bg-[#2d2d1a] opacity-40" 
                style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-wood.png")'}} />
           
           <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <span className="text-3xl">🏛️</span>
              <h1 className="text-4xl font-serif text-gold font-bold leading-tight">
                Sophea <br/> <span className="text-2xl text-yellow-500/60">&</span> Dara
              </h1>
              <div className="w-24 h-[1px] bg-yellow-500/30" />
              <p className="text-gray-300 text-sm italic font-light">Together with their families</p>
              <h3 className="text-xl font-bold tracking-wider">December 12, 2024</h3>
              <p className="text-yellow-500 text-xs tracking-[0.2em] font-semibold uppercase">Phnom Penh, Cambodia</p>
           </div>

           {/* Decorative Corners */}
           <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-500/40 rounded-tl-xl" />
           <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-500/40 rounded-tr-xl" />
           <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-500/40 rounded-bl-xl" />
           <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-500/40 rounded-br-xl" />
        </div>
      </div>

      {/* Program */}
      <div className="px-6 py-8">
        <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-grow bg-yellow-500/20" />
            <h3 className="text-yellow-500 font-bold tracking-[0.2em] text-xs uppercase">Wedding Program</h3>
            <div className="h-[1px] flex-grow bg-yellow-500/20" />
        </div>

        <div className="space-y-2">
            <ProgramItem 
                time="07:00 AM" 
                title="Hai Goan Gomlong" 
                desc="Groom's Procession. The groom and his family parade to the bride's house bearing gifts."
                icon={<Users className="w-4 h-4" />}
            />
            <ProgramItem 
                time="08:00 AM" 
                title="Sien Doan Taa" 
                desc="Call to Ancestors. Offering food and tea to honor the spirits of ancestors."
                icon={<Users className="w-4 h-4" />}
            />
            <ProgramItem 
                time="09:00 AM" 
                title="Kat Sork" 
                desc="Hair Cutting Ceremony. Symbolizing a fresh start for the couple's life together."
                icon={<Scissors className="w-4 h-4" />}
            />
            <ProgramItem 
                time="11:00 AM" 
                title="Pteah Ongkur" 
                desc="Reception & Lunch. Celebrating with friends and family."
                icon={<Clock className="w-4 h-4" />}
            />
        </div>
      </div>

      {/* Venue */}
      <div className="px-6 py-8">
        <div className="relative group rounded-2xl overflow-hidden border border-yellow-500/20">
            <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" 
                alt="Venue" 
                className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-end">
                    <div>
                        <h4 className="text-white font-bold text-lg">Sokha Hotel Grand Ballroom</h4>
                        <p className="text-gray-300 text-xs mt-1">Street Keo Chenda, Phum 1, Sangkat Chroy Changvar, Phnom Penh</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black">
                        <MapPin className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <button className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 border border-white/10">
                <Send className="w-3 h-3 text-yellow-500" />
                View Map
            </button>
        </div>
        
        <button className="w-full mt-6 bg-yellow-500 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Get Directions
        </button>
      </div>

      <div className="flex flex-col items-center py-12 space-y-2 opacity-50">
        <div className="text-yellow-500">🌿</div>
        <p className="text-[10px] tracking-[0.3em] uppercase">Built with Love</p>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#1a1a10]/95 backdrop-blur-lg border-t border-yellow-500/20 px-6 py-3 flex justify-between items-center z-50">
        <button onClick={onViewStory} className="flex flex-col items-center gap-1 text-yellow-500">
            <BookOpen className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase">Story</span>
        </button>
        <button onClick={onViewMemories} className="flex flex-col items-center gap-1 text-gray-500">
            <Camera className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase">Gallery</span>
        </button>
        <button onClick={onViewRSVP} className="flex flex-col items-center gap-1 text-gray-500">
            <HeartIcon className="w-6 h-6" />
            <span className="text-[10px] font-bold uppercase">RSVP</span>
        </button>
      </nav>
    </div>
  );
};

export default Invitation;
