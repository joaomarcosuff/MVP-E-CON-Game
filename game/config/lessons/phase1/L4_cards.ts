
import { LessonCard } from '../../../../types';

export const L4_MASTERY_CARDS: Record<number, LessonCard[]> = {
  0: [
    {
      type: "story",
      title: "A Orquestra das Derivadas",
      html: `
        <div class="space-y-4">
          <p>Imagine uma orquestra. O som total é a soma dos violinos, trompetes e tambores. Se os violinos aumentam o volume e os tambores diminuem, o volume total muda pela <strong>soma</strong> dessas variações.</p>
          <div class="bg-indigo-50 p-4 rounded-3xl border-2 border-indigo-100 flex items-center gap-4">
            <div class="text-3xl">🎻+🎺</div>
            <p class="text-sm font-medium text-indigo-900">Na matemática, cada termo de um polinômio ($x^2$, $5x$, $10$) é um instrumento independente.</p>
          </div>
          <p class="text-sm">A derivada do polinômio é simplesmente a "nota" (derivada) de cada instrumento tocada ao mesmo tempo.</p>
        </div>
      `
    },
    {
      type: "visual",
      title: "Visualizando a Soma",
      html: `
        <div class="space-y-4">
          <p>Veja como a função $f(x) = x^2 + 2x$ é construída. A inclinação total (vermelha) é a soma da inclinação da parábola com a da reta.</p>
          <div class="relative h-48 w-full bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden flex items-center justify-center p-4">
            <svg viewBox="0 0 300 200" class="w-full h-full max-w-xs">
              <!-- Componente 1: x^2 (tracejado) -->
              <path d="M 50 180 Q 150 180 250 80" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4" fill="none" />
              <!-- Componente 2: 2x (tracejado) -->
              <line x1="50" y1="150" x2="250" y2="50" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4" />
              
              <!-- Resultado: x^2 + 2x (sólido) -->
              <path d="M 50 150 Q 150 100 250 20" stroke="#4338ca" stroke-width="3" fill="none" />
              
              <text x="60" y="175" class="text-[8px] fill-slate-400 font-bold uppercase">Termo 1: x²</text>
              <text x="210" y="75" class="text-[8px] fill-slate-400 font-bold uppercase">Termo 2: 2x</text>
              <text x="140" y="40" class="text-[10px] fill-brand-primary font-black uppercase italic">Soma Total</text>
            </svg>
          </div>
          <p class="text-xs text-slate-400 italic text-center">A derivada da soma é a soma das derivadas: $2x + 2$.</p>
        </div>
      `
    }
  ],
  1: [
    {
      type: "concept",
      title: "O Princípio da Independência",
      html: `
        <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
          <p>Imagine que o lucro de uma loja venha de dois departamentos: Roupas ($f$) e Calçados ($g$). A variação total do lucro da loja é apenas a soma da variação de cada departamento.</p>
          <div class="bg-emerald-50 border-2 border-emerald-200 p-6 rounded-3xl text-center">
            <p class="text-sm font-bold text-emerald-800 uppercase mb-2">Regra da Linearidade</p>
            <p class="text-2xl font-serif">$(f \pm g)' = f' \pm g'$</p>
          </div>
          <p class="text-sm">Se um termo tem um sinal de <strong>menos</strong>, a regra continua a mesma: você subtrai a derivada daquele termo.</p>
        </div>
      `
    },
    {
      type: "economic_intuition",
      title: "Anatomia da Firma Real",
      html: `
        <div class="space-y-4">
          <p>Funções de Custo Polinomiais são as mais usadas na economia. Veja a composição típica:</p>
          <div class="bg-white border-2 border-slate-100 p-4 rounded-2xl shadow-sm">
            <p class="text-center font-mono text-lg mb-4">$C(q) = \color{blue}{aq^2} + \color{green}{bq} + \color{red}{k}$</p>
            <div class="grid grid-cols-3 gap-2 text-[10px] text-center uppercase font-black">
              <div class="text-blue-600">Complexidade</div>
              <div class="text-green-600">Variável</div>
              <div class="text-red-600">Fixo</div>
            </div>
          </div>
          <p class="text-sm">Ao derivar para achar o <strong>Custo Marginal ($CMg$)</strong>:</p>
          <p class="text-center font-mono text-brand-primary">$CMg = 2aq + b$</p>
          <p class="text-xs italic text-center">O custo fixo ($k$) desaparece, sobrando apenas os termos que reagem à produção ($q$).</p>
        </div>
      `
    }
  ],
  2: [
    {
      type: "visual",
      title: "A Escada das Derivadas",
      html: `
        <div class="space-y-4">
          <p>Para polinômios de grau superior, visualize cada termo como um degrau de uma escada de complexidade.</p>
          <div class="bg-slate-900 p-6 rounded-3xl space-y-4">
             <div class="flex items-center justify-between text-white font-mono text-xs border-b border-white/10 pb-2">
                <span>Função:</span>
                <span class="text-indigo-400">x³ + 5x² - 10</span>
             </div>
             <div class="flex items-center justify-between text-white font-mono text-xs border-b border-white/10 pb-2">
                <span>Passo 1 (x³):</span>
                <span class="text-emerald-400">3x²</span>
             </div>
             <div class="flex items-center justify-between text-white font-mono text-xs border-b border-white/10 pb-2">
                <span>Passo 2 (+5x²):</span>
                <span class="text-emerald-400">+ 10x</span>
             </div>
             <div class="flex items-center justify-between text-white font-mono text-xs">
                <span>Passo 3 (-10):</span>
                <span class="text-red-400">+ 0</span>
             </div>
          </div>
          <p class="text-sm font-bold text-center text-slate-800">Resultado Final: $3x^2 + 10x$</p>
        </div>
      `
    },
    {
      type: "formal",
      title: "O Poder dos Polinômios",
      html: `
        <div class="space-y-4">
          <p>Polinômios de grau 3 (cúbicos) modelam funções de custo que primeiro ganham eficiência e depois perdem. Exemplo:</p>
          <div class="bg-indigo-50 p-4 rounded-xl font-mono text-center text-sm">
            $C(q) = q^3 - 6q^2 + 15q + 100$
          </div>
          <p class="text-sm text-center">A derivada (Custo Marginal) será uma parábola:</p>
          <div class="p-3 rounded-lg text-center font-bold text-brand-primary border-2 border-brand-primary">
            $CMg = 3q^2 - 12q + 15$
          </div>
          <p class="text-xs text-center italic mt-2">Isso permite encontrar onde o custo cresce mais devagar ou mais rápido.</p>
        </div>
      `
    }
  ]
};
