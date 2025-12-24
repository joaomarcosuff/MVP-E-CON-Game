
import { LessonCard } from '../../../../types';

export const L3_MASTERY_CARDS: Record<number, LessonCard[]> = {
  0: [
    {
      type: "story",
      title: "O Buffet Livre vs. A Quilo",
      html: `
        <div class="space-y-4">
          <p>Imagine dois restaurantes:</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-50 p-3 rounded-2xl border border-blue-100">
              <p class="font-black text-blue-700 text-xs uppercase mb-1">A Quilo</p>
              <p class="text-sm">Quanto mais você come, mais paga. <br><strong>Custo Variável.</strong></p>
            </div>
            <div class="bg-amber-50 p-3 rounded-2xl border border-amber-100">
              <p class="font-black text-amber-700 text-xs uppercase mb-1">Buffet Livre</p>
              <p class="text-sm">Você paga $50 e come o quanto quiser. <br><strong>Custo Fixo.</strong></p>
            </div>
          </div>
          <p>No Buffet Livre, qual o custo de comer <strong>mais uma</strong> colherada? <strong>Zero.</strong></p>
          <div class="bg-slate-900 text-white p-4 rounded-2xl text-center font-mono text-lg">
             $\Delta \text{Custo} = 0 \implies \text{Derivada} = 0$
          </div>
        </div>
      `
    },
    {
      type: "visual",
      title: "Geometria da Imobilidade",
      html: `
        <div class="space-y-4">
          <p>O gráfico de um Custo Fixo $f(q) = 500$ é uma linha reta horizontal. Ela não tem "subida" nem "descida".</p>
          <div class="relative h-44 w-full bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 300 200" class="w-full h-full max-w-xs p-6">
              <!-- Eixos -->
              <line x1="20" y1="180" x2="280" y2="180" stroke="#cbd5e1" stroke-width="2" />
              <line x1="20" y1="180" x2="20" y2="20" stroke="#cbd5e1" stroke-width="2" />
              
              <!-- Linha Constante -->
              <line x1="20" y1="80" x2="280" y2="80" stroke="#4338ca" stroke-width="5" />
              <circle cx="150" cy="80" r="4" fill="#4338ca" />
              
              <text x="30" y="70" class="text-[12px] font-black fill-brand-primary uppercase">Inclinação = 0</text>
              <text x="230" y="195" class="text-[10px] fill-slate-400">Q (Qtd)</text>
            </svg>
          </div>
          <p class="text-xs text-slate-400 italic text-center">Como a altura não muda, a taxa de variação é nula.</p>
        </div>
      `
    }
  ],
  1: [
    {
      type: "concept",
      title: "O Efeito Elevador",
      html: `
        <div class="space-y-4">
          <p>Adicionar uma constante a uma função é como colocar uma rampa dentro de um elevador e subir um andar.</p>
          <div class="relative h-48 w-full bg-indigo-50 rounded-3xl border-2 border-indigo-100 overflow-hidden p-4">
            <svg viewBox="0 0 300 150" class="w-full h-full">
              <!-- Rampa Base -->
              <line x1="50" y1="130" x2="250" y2="80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4" />
              <!-- Rampa Elevada -->
              <line x1="50" y1="80" x2="250" y2="30" stroke="#4338ca" stroke-width="4" />
              
              <path d="M 40 130 L 40 80" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" />
              <text x="50" y="110" class="text-[10px] fill-amber-600 font-bold">+ CUSTO FIXO</text>
            </svg>
          </div>
          <p class="text-sm">A rampa (função) subiu, mas a sua <strong>inclinação</strong> continua exatamente a mesma. Por isso a constante "morre" na derivada.</p>
        </div>
      `
    },
    {
      type: "visual",
      title: "Translação e Paralelismo",
      html: `
        <div class="space-y-4">
          <p>Seja $f(q) = 2q$ e $g(q) = 2q + 500$.</p>
          <p>Ambas têm a mesma derivada: $2$. Graficamente, isso significa que as duas retas são <strong>paralelas</strong>.</p>
          <div class="bg-slate-900 text-white p-4 rounded-xl font-mono text-center text-sm">
             $C'(q) = \text{Inclinação}$ <br>
             $\frac{d}{dq}(2q + 500) = 2 + 0 = 2$
          </div>
          <p class="text-xs text-slate-400 text-center">O "500" não ajuda nem atrapalha a velocidade com que o custo cresce.</p>
        </div>
      `
    }
  ],
  2: [
    {
      type: "economic_intuition",
      title: "Irrelevância do Passado",
      html: `
        <div class="space-y-4">
          <p>Na economia, dizemos que <strong>"Sunk Costs are Sunk"</strong> (custos afundados são passado).</p>
          <p>Se você já pagou $10.000 de licença para operar, esse valor é uma constante. Ele não muda se você atender 1 ou 100 clientes hoje.</p>
          <div class="bg-red-50 p-4 rounded-[2rem] border-2 border-red-100 flex items-center gap-4">
            <div class="text-3xl">🚫</div>
            <p class="text-xs font-bold text-red-800 uppercase leading-tight">Decisões marginais ignoram constantes. Foque apenas no que varia!</p>
          </div>
          <div class="bg-slate-50 p-3 rounded-xl border border-slate-200">
             <p class="text-center font-mono text-xs">$L(q) = \text{Receita}(q) - \text{Custo}(q) - \text{Fixo}$</p>
             <p class="text-center font-mono text-xs mt-1 text-brand-primary">$L'(q) = RMg - CMg - 0$</p>
          </div>
        </div>
      `
    }
  ]
};
