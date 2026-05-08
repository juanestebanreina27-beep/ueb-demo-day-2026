import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HeroUEB() {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#166534] rounded-full blur-[120px] opacity-20 animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#2563eb] rounded-full blur-[100px] opacity-20 animate-[pulse_6s_ease-in-out_infinite_1s]"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-white/20 text-white/80 text-sm mb-8">
          <div className="w-1.5 h-1.5 bg-[#eab308] rounded-full animate-pulse"></div>
          8 DE MAYO 2026 • BOGOTÁ
        </div>
        <h1 className="text-[92px] md:text-[120px] leading-[0.9] font-semibold tracking-tighter text-white mb-6">EL FUTURO<br />SE DECIDE<br />HOY</h1>
        <p className="max-w-lg mx-auto text-2xl text-white/70 mb-12">El evento de emprendimiento más importante de la Universidad El Bosque</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.985 }} onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })} className="group px-14 py-5 rounded-3xl bg-white text-[#0a0a0a] font-semibold text-lg flex items-center justify-center gap-3 hover:bg-[#eab308] transition-all">Explorar proyectos <ArrowRight className="group-hover:-rotate-45 transition" /></motion.button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.985 }} className="group px-10 py-5 rounded-3xl border border-white/30 text-white font-semibold text-lg flex items-center justify-center gap-3 hover:bg-white/5 transition-all"><PlayCircle className="w-6 h-6" /> Ver video del evento</motion.button>
        </div>
        <div className="mt-16 text-white/50 text-sm tracking-[2px]">SCROLL PARA DESCUBRIR ↓</div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 text-white/60 text-sm">
        <div className="flex -space-x-2">{[1,2,3,4].map(i => (<div key={i} className="w-7 h-7 rounded-full border-2 border-[#0a0a0a] overflow-hidden"><img src={`https://randomuser.me/api/portraits/${i%2===0?'women':'men'}/${20+i}.jpg`} alt="" /></div>))}</div>
        <span>Únte a <span className="font-semibold text-white">2.847</span> emprendedores</span>
      </div>
    </div>
  );
}