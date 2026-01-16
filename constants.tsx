
import { Rank } from './types.ts';

export const RANKS: Rank[] = [
  {
    id: 'rank-explorador',
    name: 'Rango Explorador',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=600&auto=format&fit=crop',
    badge: 'BÁSICO',
    accentColor: '#3b82f6',
    description: 'Acceso inicial al servidor con comandos básicos esenciales.'
  },
  {
    id: 'rank-guerrero',
    name: 'Rango Guerrero',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    badge: 'POPULAR',
    accentColor: '#eab308',
    description: 'Kit de combate avanzado y acceso a zonas de entrenamiento.'
  },
  {
    id: 'rank-mistico',
    name: 'Rango Místico',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=600&auto=format&fit=crop',
    badge: 'ESPECIAL',
    accentColor: '#3b82f6',
    description: 'Habilidades mágicas únicas y cosméticos de partículas.'
  },
  {
    id: 'rank-leyenda',
    name: 'Rango Leyenda',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1614018424573-67db2698947c?q=80&w=600&auto=format&fit=crop',
    badge: 'ÉPICO',
    accentColor: '#3b82f6',
    description: 'El rango definitivo con todos los beneficios globales desbloqueados.'
  }
];

export const DISCORD_URL = "https://discord.gg/tuservidor";
