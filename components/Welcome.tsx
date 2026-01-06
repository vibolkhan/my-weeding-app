
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface WelcomeProps {
  onOpen: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onOpen }) => {
  const targetDate = new Date('2024-12-12T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const CountdownBlock = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center min-w-[60px]">
      <span className="text-2xl font-serif font-bold text-gold">{value.toString().padStart(2, '0')}</span>
      <span className="text-[9px] uppercase tracking-widest text-yellow-500/60 font-bold">{label}</span>
    </div>
  );

  return (
    <div className="relative h-screen flex flex-col items-center justify-between text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-110 animate-[pulse_10s_ease-in-out_infinite]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&q=80&w=1200")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a10] via-transparent to-[#1a1a10] opacity-80" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16 flex flex-col items-center w-full px-6">
        <div className="mb-4">
          <h1 className="text-4xl tracking-[0.3em] font-light text-yellow-600/60 flex items-center gap-2">
            LEAF<span className="text-yellow-500/80">_</span><span className="text-2xl mt-1">🌿</span>RK
          </h1>
        </div>
        
        <p className="text-yellow-500/80 tracking-[0.2em] text-sm font-semibold uppercase mb-6">
          The Wedding Celebration Of
        </p>

        <div className="space-y-4">
          <h2 className="font-khmer text-3xl text-white font-medium">សុខា & បុប្ផា</h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-6xl font-serif text-gold font-bold">Sokha</h1>
            <span className="text-3xl text-yellow-500/60 font-serif italic">&</span>
            <h1 className="text-6xl font-serif text-gold font-bold">Bopha</h1>
          </div>
        </div>

        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent my-6 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">💎</div>
        </div>

        <div className="space-y-1 mb-8">
          <p className="text-xl font-medium tracking-wide">December 12th, 2024</p>
          <p className="text-yellow-500/70 flex items-center justify-center gap-1 text-sm">
            <span className="opacity-70">📍</span> Phnom Penh, Cambodia
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="glass-card px-6 py-4 rounded-2xl border border-yellow-500/20 mb-8">
          <div className="flex items-center gap-4">
            <CountdownBlock value={timeLeft.days} label="Days" />
            <div className="w-[1px] h-8 bg-yellow-500/20" />
            <CountdownBlock value={timeLeft.hours} label="Hours" />
            <div className="w-[1px] h-8 bg-yellow-500/20" />
            <CountdownBlock value={timeLeft.minutes} label="Mins" />
            <div className="w-[1px] h-8 bg-yellow-500/20" />
            <CountdownBlock value={timeLeft.seconds} label="Secs" />
          </div>
        </div>

        <p className="text-gray-300/80 italic text-sm leading-relaxed max-w-[280px]">
          "We invite you to join us in celebrating our union, surrounded by love, tradition, and the blessings of our ancestors."
        </p>
      </div>

      {/* Footer Image & Button */}
      <div className="relative z-10 w-full px-6 pb-12 flex flex-col items-center">
        <div className="mb-8 p-1 rounded-full border border-yellow-500/30">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=300&h=300" 
            alt="Couple" 
            className="w-24 h-24 rounded-full object-cover grayscale-[0.2]"
          />
        </div>

        <button 
          onClick={onOpen}
          className="w-full bg-[#1a1a10] border-2 border-yellow-500/60 text-yellow-500 py-4 rounded-xl font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-yellow-500 hover:text-black transition-all group"
        >
          Open Invitation
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="mt-6 text-gray-500 text-[10px] uppercase tracking-widest">Tap to enter</p>
      </div>
    </div>
  );
};

export default Welcome;
