import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, TrendingUp, Globe } from 'lucide-react';

const projects = [
  { id: 1, title: "EcoPack", category: "Sostenibilidad", votes: 1248, status: "Finalista", description: "Empaques biodegradables hechos de residuos agrícolas" },
  { id: 2, title: "MediLink", category: "Salud", votes: 987, status: "En votación", description: "Plataforma de telemedicina rural con IA" },
  { id: 3, title: "AgroSmart", category: "Agro", votes: 756, status: "Finalista", description: "Sensores IoT para optimizar cultivos" },
];

export default function BentoProyectos({ onEvaluate }: { onEvaluate: (p: any) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
      <motion.div whileHover={{ scale: 1.015 }} className="md:col-span-7 bg-[#166534] rounded-3xl p-12 text-white flex flex-col justify-between relative overflow-hidden demo-card">
        <div>
          <div className="uppercase tracking-[3px] text-sm opacity-75">PROYECTO ESTRELLA</div>
          <div className="text-6xl font-semibold tracking-tighter mt-4 leading-none">EcoPack</div>
          <div className="mt-6 max-w-md text-xl">Empaques 100% biodegradables que reducen 87% el plástico en supermercados colombianos.</div>
        </div>
        <button onClick={() => onEvaluate(projects[0])} className="mt-8 self-start px-8 py-4 rounded-2xl bg-white text-[#166534] font-semibold flex items-center gap-3 hover:bg-[#eab308] hover:text-black transition-all">Evaluar proyecto <Award className="w-5 h-5" /></button>
        <div className="absolute bottom-8 right-8 text-[120px] opacity-10 font-bold">01</div>
      </motion.div>
      {projects.slice(1).map((project) => (
        <motion.div key={project.id} whileHover={{ scale: 1.015 }} onClick={() => onEvaluate(project)} className="md:col-span-5 bg-white border border-gray-100 rounded-3xl p-8 flex flex-col cursor-pointer demo-card group">
          <div className="flex-1">
            <div className="project-badge bg-[#2563eb]/10 text-[#2563eb]">{project.category}</div>
            <div className="mt-6 text-4xl font-semibold tracking-tight group-hover:text-[#166534] transition-colors">{project.title}</div>
            <p className="mt-4 text-gray-600 pr-8">{project.description}</p>
          </div>
          <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100">
            <div><div className="text-xs text-gray-500">VOTOS</div><div className="font-semibold text-2xl text-[#166534]">{project.votes}</div></div>
            <div className="text-right"><div className="project-badge bg-[#eab308]/10 text-[#854d0e]">{project.status}</div></div>
          </div>
        </motion.div>
      ))}
      <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
        {[{ icon: <Users className="w-7 h-7" />, label: "Emprendedores", value: "184" }, { icon: <TrendingUp className="w-7 h-7" />, label: "Inversión captada", value: "$12.4M" }, { icon: <Globe className="w-7 h-7" />, label: "Países impactados", value: "7" }].map((stat, i) => (
          <div key={i} className="glass border border-gray-100 rounded-3xl p-8 flex gap-5 items-center">
            <div className="text-[#166534]">{stat.icon}</div>
            <div><div className="text-4xl font-semibold tracking-tighter">{stat.value}</div><div className="text-sm text-gray-500">{stat.label}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}