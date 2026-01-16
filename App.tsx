
import React, { useState, useEffect, useRef } from 'react';
import { RANKS, DISCORD_URL } from './constants';
import RankCard from './components/RankCard';
import { Rank } from './types';

// Declaration for PayPal window object
declare global {
  interface Window {
    paypal?: any;
  }
}

const App: React.FC = () => {
  const [selectedRank, setSelectedRank] = useState<Rank | null>(null);
  const [username, setUsername] = useState('');
  const paypalContainerRef = useRef<HTMLDivElement>(null);

  // PayPal Integration
  useEffect(() => {
    // Cleanup existing buttons if any
    if (paypalContainerRef.current) {
        paypalContainerRef.current.innerHTML = '';
    }

    if (selectedRank && paypalContainerRef.current && window.paypal) {
      const container = paypalContainerRef.current;
      
      try {
        const buttons = window.paypal.Buttons({
          createOrder: (_data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                description: `${selectedRank.name} Rank - User: ${username || 'Anon'}`,
                amount: {
                  currency_code: 'EUR',
                  value: selectedRank.price.toString()
                }
              }]
            });
          },
          onApprove: async (_data: any, actions: any) => {
            try {
              const order = await actions.order.capture();
              alert(`¡Éxito! Gracias ${order.payer.name.given_name}. Tu rango ${selectedRank.name} ha sido activado.`);
              setSelectedRank(null);
            } catch (err) {
              console.error("PayPal Capture Error:", err);
              alert("Hubo un error procesando el pago final.");
            }
          },
          onError: (err: any) => {
            console.error("PayPal Error:", err);
          },
          style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'pay',
            height: 44
          }
        });

        if (buttons.isEligible()) {
          buttons.render(container);
        }
      } catch (error) {
        console.error("Failed to render PayPal buttons:", error);
      }
    }
  }, [selectedRank, username]);

  return (
    <div className="min-h-screen bg-[#02040a] text-white selection:bg-blue-500/90 selection:text-white font-['Outfit'] overflow-x-hidden relative flex flex-col">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-800/20 rounded-full blur-[128px] translate-y-1/3 pointer-events-none z-0"></div>

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 h-20 border-b border-white/5 bg-[#02040a]/80 backdrop-blur-xl flex items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-3">
           {/* Placeholder for Logo - replace src with your actual logo file */}
           <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center font-black italic text-xl shadow-lg shadow-blue-500/20">
             M
           </div>
           <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
             MINECRAFT<span className="text-blue-500">SHOP</span>