import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Trophy, Award, ArrowRight, Play } from 'lucide-react';
import HeroUEB from './components/HeroUEB';
import BentoProyectos from './components/BentoProyectos';
import ProjectsTable from './components/ProjectsTable';
import EvaluationModal from './components/EvaluationModal';

function App() {
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleEvaluate = (project: any) => {
    setSelectedProject(project);
    setShowEvaluation(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#166534] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">🌳</span>
            </div>
            <div>
              <div className="font-bold text-2xl tracking-tighter">UEB Demo Day</div>
              <div className="text-[10px] text-gray-500 -mt-1">Universidad El Bosque • 2026</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <a href="#proyectos" className="hover:text-[#166534] transition-colors">Proyectos</a>
            <a href="#jurados" className="hover:text-[#166534] transition-colors">Jurados</a>
            <a href="#criterios" className="hover:text-[#166534] transition-colors">Criterios</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="px-6 py-2.5 rounded-2xl border border-gray-300 text-sm font-semibold hover:bg-gray-50 transition-all active:scale-[0.985]">Ver proyectos</button>
            <button onClick={() => setShowEvaluation(true)} className="px-6 py-2.5 bg-[#166534] text-white rounded-2xl text-sm font-semibold flex items-center gap-2 hover:bg-[#14532d] transition-all active:scale-[0.985]">
              <Play className="w-4 h-4" /> Evaluar ahora
            </button>
          </div>
        </div>
      </nav>
      <HeroUEB />
      <div className="border-b border-gray-100 bg-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex gap-8">
            <div><span className="font-semibold text-[#166534]">48</span> proyectos inscritos</div>
            <div><span className="font-semibold text-[#166534]">12</span> jurados expertos</div>
            <div><span className="font-semibold text-[#166534]">$85M</span> en premios</div>
          </div>
          <div className="text-[#166534] font-medium flex items-center gap-2"><div className="w-2 h-2 bg-[#166534] rounded-full animate-pulse"></div> EN VIVO • 1,284 personas conectadas</div>
        </div>
      </div>
      <section id="proyectos" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-sm font-semibold mb-4"><Trophy className="w-4 h-4" /> PROYECTOS DESTACADOS 2026</div>
          <h2 className="text-6xl font-semibold tracking-tighter">Las ideas que están<br />cambiando el país</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-md mx-auto">Explora los proyectos más innovadores de esta edición</p>
        </div>
        <BentoProyectos onEvaluate={handleEvaluate} />
      </section>
      <section className="bg-[#0a0a0a] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div><div className="text-[#eab308] text-sm font-semibold tracking-[3px]">TODOS LOS PROYECTOS</div><h3 className="text-5xl font-semibold tracking-tighter mt-2">Explora y vota</h3></div>
            <button className="flex items-center gap-3 text-sm font-medium group">VER TODOS <ArrowRight className="group-hover:translate-x-1 transition" /></button>
          </div>
          <ProjectsTable onEvaluate={handleEvaluate} />
        </div>
      </section>
      <section id="jurados" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5"><div className="sticky top-24"><div className="text-sm font-semibold text-[#2563eb]">EL EQUIPO QUE DECIDE</div><h2 className="text-6xl font-semibold tracking-tighter leading-none mt-3">Jurados de<br />élite 2026</h2><p className="mt-6 text-lg text-gray-600">Emprendedores exitosos, inversores y líderes de industria que evaluarán tu proyecto.</p><div className="mt-10 flex gap-4"><button className="px-8 py-4 rounded-3xl bg-black text-white font-semibold flex-1">Conocer a todos los jurados</button></div></div></div>
          <div className="md:col-span-7"><div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{[{ name: "María González", role: "CEO & Founder @Kavak", img: "https://randomuser.me/api/portraits/women/44.jpg" },{ name: "Carlos Mendoza", role: "Managing Partner @Kaszek", img: "https://randomuser.me/api/portraits/men/32.jpg" },{ name: "Laura Pérez", role: "Chief Innovation @Grupo Éxito", img: "https://randomuser.me/api/portraits/women/65.jpg" },{ name: "Andrés Ramírez", role: "Ex-CEO @Rappi", img: "https://randomuser.me/api/portraits/men/86.jpg" }].map((juror, i) => (<motion.div key={i} whileHover={{ y: -8 }} className="glass rounded-3xl p-8 border border-gray-100 flex gap-5 items-start"><img src={juror.img} alt={juror.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white" /><div><div className="font-semibold text-xl">{juror.name}</div><div className="text-gray-600 text-sm mt-1">{juror.role}</div><div className="mt-4 text-xs px-3 py-1 bg-[#166534]/10 text-[#166534] rounded-full w-fit">Jurad@ 2026</div></div></motion.div>))}</div></div>
        </div>
      </section>
      <footer className="bg-[#0a0a0a] text-white/70 py-16 border-t border-white/10"><div className="max-w-7xl mx-auto px-6 text-center"><div className="flex justify-center mb-8"><div className="flex items-center gap-3"><div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center"><span className="text-[#166534] text-2xl">🌳</span></div><span className="font-semibold text-white text-2xl tracking-tighter">Universidad El Bosque</span></div></div><p className="max-w-xs mx-auto text-sm">Demo Day 2026 • 8 de mayo • Auditorio Principal</p><div className="mt-12 text-xs flex justify-center gap-8"><a href="#" className="hover:text-white">Términos</a><a href="#" className="hover:text-white">Privacidad</a><a href="#" className="hover:text-white">Contacto</a></div></div></footer>
      <EvaluationModal isOpen={showEvaluation} onClose={() => setShowEvaluation(false)} project={selectedProject} />
    </div>
  );
}
export default App;