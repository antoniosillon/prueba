
import React, { useState } from 'react';
import { RANKS, DISCORD_URL } from './constants';
import RankCard from './components/RankCard';
import { Rank } from './types';

const App: React.FC = () => {
  const [selectedRank, setSelectedRank] = useState<Rank | null>(null);
  const [nickname, setNickname] = useState('');
  const [purchaseStep, setPurchaseStep] = useState<'details' | 'success'>('details');

  const handleOpenModal = (rank: Rank) => {
    setSelectedRank(rank);
    setPurchaseStep('details');
    setNickname('');
  };

  const handleSimulatePurchase = () => {
    if (!nickname.trim()) return;
    setPurchaseStep('success');
  };

  return (
    <div className="min-h-screen bg-[#0a1120] selection:bg-blue-500/30 font-['Outfit']">
      {/* Modal de Checkout */}
      {selectedRank && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedRank(null)}
          />
          <div className="glass-panel w-full max-w-lg rounded-[2rem] overflow-hidden relative z-10 shadow-2xl transform transition-all">
            <button 
              onClick={() => setSelectedRank(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="p-10">
              {purchaseStep === 'details' ? (
                <>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                      <img src={selectedRank.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black tracking-tighter text-white uppercase">{selectedRank.name}</h2>
                      <p className="text-blue-400 font-bold text-xl">{selectedRank.price.toFixed(2).replace('.', ',')}€</p>
                    </div>
                  </div>

                  <div className="space-y-6 mb-10">
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedRank.description}</p>
                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Tu Nickname de Minecraft</h4>
                      <input 
                        type="text" 
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="Ej: ElRichMC"
                        className="w-full bg-transparent border-b border-white/20 py-2 focus:border-blue-500 outline-none text-white font-bold text-lg transition-colors"
                      />
                    </div>
                    
                    <button 
                      disabled={!nickname.trim()}
                      onClick={handleSimulatePurchase}
                      className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                        nickname.trim() 
                          ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg transform hover:-translate-y-1' 
                          : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      CONTINUAR AL PAGO
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 className="text-3xl font-black text-white mb-4">¡ESTÁ LISTO!</h2>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    Para activar <span className="text-white font-bold">{selectedRank.name}</span>, únete a nuestro Discord y abre un ticket con tu nombre: <span className="text-blue-400 font-bold">{nickname}</span>.
                  </p>
                  <a href={DISCORD_URL} className="inline-block bg-[#5865F2] hover:bg-[#4752c4] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
                    ABRIR DISCORD
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Top Nav Bar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-[#0d1629]/90 backdrop-blur-xl border-b border-white/5 z-50 px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="w-10 h-10 flex items-center justify-center p-1 bg-white/5 rounded-lg border border-white/10 shrink-0">
            {/* Logo placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 rounded flex items-center justify-center font-bold text-white italic">M</div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <span className="text-white font-black text-lg tracking-widest uppercase">BattleWorld</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-gray-400 mr-2">
            <svg className="w-5 h-5 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <svg className="w-5 h-5 cursor-pointer hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </div>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="bg-[#5865F2] hover:bg-[#4752c4] text-white px-5 py-2 rounded-md font-bold text-[10px] uppercase tracking-widest transition-all shadow-lg flex items-center">
            ÚNETE A NUESTRO DISCORD
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        
        <div className="mb-24 mt-10">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-black flex items-center gap-4 uppercase tracking-tighter text-white">
              <span className="w-1.5 h-10 bg-blue-500 rounded-full" />
              PAQUETES DESTACADOS
            </h2>
            <div className="flex gap-2">
               <button className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 text-gray-400 transition-colors">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
               </button>
               <button className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 text-gray-400 transition-colors">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RANKS.map((rank) => (
              <RankCard 
                key={rank.id} 
                rank={rank} 
                onSelect={handleOpenModal} 
              />
            ))}
          </div>
        </div>

        {/* Discord Banner Section */}
        <div className="mt-20 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-[#5865F2]/20 via-[#0d1629] to-[#0a1120] border border-[#5865F2]/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          {/* Decorative background element */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none transform rotate-12 scale-150">
             <svg className="w-64 h-64 text-[#5865F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>
          </div>
          
          <div className="flex flex-col gap-4 relative z-10 text-center md:text-left">
            <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">
              ¿NECESITAS AYUDA?
            </h3>
            <p className="text-gray-400 font-medium max-w-md">
              Únete a nuestro servidor de Discord para soporte instantáneo, sorteos y noticias de la comunidad.
            </p>
          </div>

          <a 
            href={DISCORD_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative z-10 bg-[#5865F2] hover:bg-[#4752c4] text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest shadow-xl shadow-[#5865F2]/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shrink-0"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>
            UNIRSE A DISCORD
          </a>
        </div>
      </main>

      <footer className="mt-auto border-t border-white/5 bg-[#080d1a] py-10 px-6 text-center">
         <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
           &copy; 2026 BATTLEWORLD. NO ASOCIADO CON MOJANG.
         </p>
      </footer>
    </div>
  );
};

export default App;
