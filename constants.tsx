
import { Rank } from './types';

export const RANKS: Rank[] = [
  {
    id: 'rank-vip',
    name: 'VIP',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=600&auto=format&fit=crop',
    badge: 'INICIO',
    accentColor: '#3b82f6', // Blue
    description: 'Empieza tu aventura con kit de inicio, nombre azul y 2 parcelas.'
  },
  {
    id: 'rank-elite',
    name: 'ELITE',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
    badge: 'POPULAR',
    accentColor: '#a855f7', // Purple
    description: 'Vuela en el lobby, acceso a zona VIP y multiplicador de XP x1.5.'
  },
  {
    id: 'rank-ultra',
    name: 'ULTRA',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1535156628002-da7d47155e99?q=80&w=600&auto=format&fit=crop',
    badge: 'DESTACADO',
    accentColor: '#ec4899', // Pink
    description: 'Acceso a beta cerrada, partículas exclusivas y 5 parcelas gigantes.'
  },
  {
    id: 'rank-god',
    name: 'GOD',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=600&auto=format&fit=crop',
    badge: 'LEGENDARIO',
    accentColor: '#eab308', // Gold
    description: 'El rango definitivo. Comandos admin cosméticos, prefijo personalizado y respeto total.'
  }
];

export const DISCORD_URL = "https://discord.gg/tu-servidor";
