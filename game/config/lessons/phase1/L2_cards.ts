
import { LessonCard } from '../../../../types';

export const L2_MASTERY_CARDS: Record<number, LessonCard[]> = {
  0: [
    {
      type: "story",
      title: "O Atalho Matemático",
      html: `
        <div class="space-y-4">
          <p>Calcular limites toda vez é exaustivo. Felizmente, existe um padrão para funções do tipo $x^n$. Chamamos de <strong>Regra do Tombo</strong>.</p>
          <div class="bg-indigo-50 p-6 rounded-3xl text-center border-2 border-indigo-100 relative overflow-hidden">
            <div class="absolute -right-4 -top-4 text-indigo-100 text-6xl rotate-12 font-black">xⁿ</div>
            <p class="text-3xl font-serif text-brand-primary">x³ <span class="text-slate-400">➜</span> 3x²</p>
            <p class="text-xs mt-2 text-indigo-600 font-bold uppercase tracking-widest">O expoente "tomba" e perde um ponto!</p>
          </div>
        </div>
      `
    },
    {
      type: "visual",
      title: "A Rampa que Acelera",
      html: `
        <div class="space-y-4">
          <p>Imagine uma rampa no formato de $f(x) = x^2$. No começo ($x=0$), ela é plana. Conforme você avança, ela fica <strong>duas vezes</strong> mais íngreme ($2x$).</p>
          <div class="relative h-48 w-full bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden flex items-center justify-center p-4">
            <svg viewBox="0 0 300 200" class="w-full h-full max-w-xs">
              <!-- Curva x^2 -->
              <path d="M 50 180 Q 150 180 250 20" stroke="#94a3b8" stroke-width="2" fill="none" />
              
              <!-- Tangente em x pequeno -->
              <line x1="80" y1="175" x2="140" y2="165" stroke="#10b981" stroke-width="2" />
              <text x="70" y="160" class="text-[10px] fill-emerald-600 font-bold">Pouca inclinação</text>
              
              <!-- Tangente em x grande -->
              <line x1="180" y1="100" x2="260" y2="10" stroke="#ef4444" stroke-width="3" />
              <text x="160" y="60" class="text-[10px] fill-red-600 font-bold uppercase">Inclinação 2x maior!</text>
            </svg>
          </div>
          <p class="text-xs text-slate-400 italic text-center">A derivada nos diz exatamente quão difícil é continuar subindo.</p>
        </div>
      `
    }
  ],
  1: [
    {
      type: "concept",
      title: "O Multiplicador Fiel",
      html: `
        <div class="space-y-4">
          <p>E se houver um número na frente do $x$? Por exemplo: $5x^2$.</p>
          <div class="bg-indigo-50 p-4 rounded-2xl border-l-4 border-indigo-500 italic text-sm text-indigo-900">
            "A constante não sofre o tombo; ela apenas espera o expoente descer para multiplicá-lo."
          </div>
          <div class="bg-slate-900 text-white p-6 rounded-3xl text-center shadow-xl">
            <p class="text-sm text-slate-400 mb-2 uppercase font-black">O Processo:</p>
            <p class="text-xl font-mono">5x² <span class="text-indigo-400">➜</span> 5 · (2x¹) <span class="text-indigo-400">➜</span> 10x</p>
          </div>
        </div>
      `
    },
    {
      type: "visual",
      title: "Comparando Potências",
      html: `
        <div class="space-y-4">
          <p>Veja como a "força" da derivada muda com o expoente:</p>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-slate-50 p-3 rounded-2xl border border-slate-200">
               <p class="text-xs font-black text-slate-400 uppercase mb-1">Linear (x¹)</p>
               <p class="text-lg font-bold">Derivada = 1</p>
               <p class="text-[10px] text-slate-500 italic">Rampa constante</p>
            </div>
            <div class="bg-indigo-50 p-3 rounded-2xl border border-indigo-100">
               <p class="text-xs font-black text-indigo-400 uppercase mb-1">Quadrática (x²)</p>
               <p class="text-lg font-bold text-brand-primary">Derivada = 2x</p>
               <p class="text-[10px] text-indigo-500 italic">Rampa que acelera</p>
            </div>
          </div>
          <p class="text-sm">Em economia, isso explica por que dobrar a escala pode às vezes quadruplicar o custo (deseconomias de escala).</p>
        </div>
      `
    }
  ],
  2: [
    {
      type: "visual",
      title: "O Mergulho da Raiz",
      html: `
        <div class="space-y-4">
          <p>Como derivar $\sqrt{x}$? Lembre-se: raízes são potências fracionárias!</p>
          <div class="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center font-mono">
            $\sqrt{x} = x^{0.5} \implies 0.5x^{-0.5}$
          </div>
          <div class="relative h-32 w-full bg-white rounded-2xl border-2 border-slate-100 overflow-hidden flex items-center justify-center p-2">
            <svg viewBox="0 0 200 100" class="w-full h-full">
              <path d="M 10 90 Q 30 10 180 10" stroke="#f59e0b" stroke-width="3" fill="none" />
              <text x="100" y="40" class="text-[10px] fill-amber-600 font-black">Inclinação diminui com x!</text>
            </svg>
          </div>
          <p class="text-xs text-slate-400 italic">Funções de raiz modelam retornos decrescentes: o primeiro esforço rende muito, os próximos rendem cada vez menos.</p>
        </div>
      `
    }
  ]
};
