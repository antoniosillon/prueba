
import React from 'react';
import { Rank } from '../types';

interface RankCardProps {
  rank: Rank;
  onSelect: (rank: Rank) => void;
}

const RankCard: React.FC<RankCardProps> = ({ rank, onSelect }) => {
  const isPopular = rank.badge === 'POPULAR';
  
  return (
    <div 
      className="rank-card group cursor-pointer flex flex-col gap-5"
      onClick={() => onSelect(rank)}
    >
      <div className="card-image-container relative border border-white/5 group-hover:border-blue-500/30 transition-all rounded-xl overflow-hidden">
        <img 
          src={rank.image} 
          alt={rank.name}
          className="w-full h-full object-cover card-zoom opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />
        {rank.badge && (
          <div className={`absolute top-4 left-4 text-[9px] font-black px-3 py-1.5 rounded tracking-widest uppercase z-10 shadow-lg ${
            isPopular 
              ? 'bg-[#eab308] text-black' 
              : 'bg-blue-600 text-white'
          }`}>
            {rank.badge}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120]/80 via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-white font-bold text-sm tracking-tight uppercase group-hover:text-blue-400 transition-colors">
          {rank.name}
        </h3>
        <span className="text-white text-sm font-bold">{rank.price.toFixed(2).replace('.', ',')}€</span>
      </div>
    </div>
  );
};

export default RankCard;
