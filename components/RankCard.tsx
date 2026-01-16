
import React from 'react';
import { Rank } from '../types';

interface RankCardProps {
  rank: Rank;
  onSelect: (rank: Rank) => void;
}

const RankCard: React.FC<RankCardProps> = ({ rank, onSelect }) => {
  const isPopular = rank.badge === 'POPULAR' || rank.badge === 'LEGENDARIO';
  
  return (
    <div 
      className="group relative flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-2"
      onClick={() => onSelect(rank)}
    >
      {/* Glow Effect behind card */}
      <div 
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-50 blur transition duration-500"
        style={{ background: isPopular ? `linear-gradient(to right, ${rank.accentColor}, #2563eb)` : undefined }}
      />
      
      <div className="relative h-full bg-[#0d121f] rounded-3xl p-5 border border-white/10 flex flex-col gap-5 h-full overflow-hidden">
        
        {/* Badge */}
        {rank.badge && (
          <div className={`absolute top-0 right-0 rounded-bl-2xl px-4 py-1.5 font-black text-[10px] tracking-widest uppercase text-white
            ${isPopular ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-white/10'}`}>
            {rank.badge}
          </div>
        )}

        {/* Image Area */}
        <div className="w-full aspect-square rounded-2xl overflow-hidden relative group-hover:ring-2 ring-white/20 transition-all">
          <img 
            src={rank.image} 
            alt={rank.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d121f] to-transparent opacity-80" />
          
          <div className="absolute bottom-3 left-4">
             <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase drop-shadow-md">
              {rank.name}
            </h3>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-3 flex-grow">
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-white tracking-tight">{rank.price}€</span>
            <span className="text-sm text-gray-500 font-medium mb-1.5 line-through">{(rank.price * 1.5).toFixed(2)}€</span>
          </div>
          
          <p className="text-gray-400 text-sm font-medium leading-relaxed">
            {rank.description}
          </p>
        </div>

        {/* Button Mockup */}
        <div className="mt-auto pt-4">
          <button className="w-full bg-white/5 group-hover:bg-blue-600 text-white font-black uppercase py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-sm tracking-widest">
            Comprar Ahora
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
