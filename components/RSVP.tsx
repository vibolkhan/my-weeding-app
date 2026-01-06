
import React, { useState } from 'react';
import { ChevronLeft, User, Minus, Plus, Send, Flower, Church } from 'lucide-react';

interface RSVPProps {
  onBack: () => void;
}

const RSVP: React.FC<RSVPProps> = ({ onBack }) => {
    const [attending, setAttending] = useState<boolean | null>(true);
    const [guests, setGuests] = useState(1);

    return (
        <div className="min-h-screen bg-[#1a1a10] pb-12 flex flex-col items-center">
            <header className="w-full flex items-center justify-between p-4">
                <button onClick={onBack} className="p-2 text-yellow-500"><ChevronLeft /></button>
                <h2 className="text-white font-bold tracking-widest uppercase text-sm">RSVP</h2>
                <div className="w-10" />
            </header>

            <div className="flex flex-col items-center text-center px-8 py-6">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-500 mb-6">
                    <Church className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-bold tracking-[0.15em] text-yellow-500 uppercase mb-4">Join Our Celebration</h1>
                <p className="text-gray-400 text-sm leading-relaxed">
                    We invite you to share in our joy. Please confirm your presence by December 12th.
                </p>
            </div>

            <div className="w-12 h-[1px] bg-yellow-500/30 my-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-yellow-500/40 rotate-45" />
            </div>

            <div className="w-full px-6 flex-grow">
                <div className="glass-card rounded-3xl p-8 space-y-8">
                    {/* Name Input */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-yellow-500">Your Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-4 flex items-center text-gray-500">
                                <User className="w-5 h-5" />
                            </div>
                            <input 
                                type="text" 
                                placeholder="Enter your full name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-yellow-500/50 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Attendance Toggle */}
                    <div className="space-y-3">
                        <label className="text-center block text-[10px] font-bold uppercase tracking-widest text-yellow-500">Will You Attend?</label>
                        <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10">
                            <button 
                                onClick={() => setAttending(true)}
                                className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all ${
                                    attending === true ? 'bg-yellow-500 text-black shadow-lg' : 'text-gray-400'
                                }`}
                            >
                                Joyfully Accept
                            </button>
                            <button 
                                onClick={() => setAttending(false)}
                                className={`flex-1 py-3.5 rounded-xl font-bold text-sm transition-all ${
                                    attending === false ? 'bg-yellow-500 text-black shadow-lg' : 'text-gray-400'
                                }`}
                            >
                                Regretfully Decline
                            </button>
                        </div>
                    </div>

                    {/* Guest Counter */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-yellow-500">Number of Guests</label>
                        <div className="flex items-center justify-between bg-white/5 border border-white/10 p-2 rounded-2xl">
                            <button 
                                onClick={() => setGuests(Math.max(1, guests - 1))}
                                className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-500"
                            >
                                <Minus className="w-5 h-5" />
                            </button>
                            <span className="text-2xl font-bold text-white">{guests}</span>
                            <button 
                                onClick={() => setGuests(guests + 1)}
                                className="w-12 h-12 rounded-xl bg-yellow-500/80 border border-yellow-500 flex items-center justify-center text-black"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Dietary */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-yellow-500">Dietary Restrictions</label>
                        <textarea 
                            rows={3}
                            placeholder="Any allergies or special requests?"
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-yellow-500/50 transition-colors resize-none text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full px-6 pt-10 pb-12 flex flex-col items-center">
                <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(234,179,8,0.2)] active:scale-95 transition-transform mb-10">
                    Confirm Attendance
                    <Send className="w-4 h-4" />
                </button>

                <div className="flex flex-col items-center gap-2 opacity-50">
                    <div className="w-12 h-12 rounded-full border border-yellow-500/20 flex items-center justify-center">
                        <Flower className="w-6 h-6 text-yellow-500/60" />
                    </div>
                    <p className="text-[8px] uppercase tracking-[0.4em] font-bold">With Love</p>
                </div>
            </div>
        </div>
    );
};

export default RSVP;
