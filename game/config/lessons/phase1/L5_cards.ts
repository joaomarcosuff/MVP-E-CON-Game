
import { LessonCard } from '../../../../types';

export const L5_MASTERY_CARDS: Record<number, LessonCard[]> = {
  0: [
    {
      type: "story",
      title: "O Dicionário do Economista",
      html: `
        <div class="prose prose-slate dark:prose-invert max-w-none text-slate-700 leading-relaxed space-y-4">
          <p>Para um matemático, a derivada é a inclinação de uma reta. Para um economista, a derivada é o <strong>sentimento da próxima unidade</strong>.</p>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-2xl border-l-4 border-indigo-500 italic text-sm text-indigo-900 dark:text-indigo-300">
            "Sempre que você ler a palavra <strong>Marginal</strong>, seu cérebro deve traduzir para <strong>Derivada</strong>."
          </div>
          <p>Se o Custo Total é $C(q)$, o Custo Marginal ($CMg$) é $C'(q)$. Se a Receita é $R(q)$, a Receita Marginal ($RMg$) é $R'(q)$.</p>
        </div>
      `
    },
    {
      type: "economic_intuition",
      title: "A Balança da Decisão",
      html: `
        <div class="space-y-4">
          <p>Decidir produzir é como equilibrar uma balança mental:</p>
          <div class="relative h-32 w-full bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-slate-100">
            <svg viewBox="0 0 200 100" class="w-full h-full max-w-[150px]">
              <!-- Base da balança -->
              <path d="M 100 80 L 100 40 M 60 90 L 140 90" stroke="#475569" stroke-width="3" />
              <!-- Braço inclinado -->
              <line x1="40" y1="50" x2="160" y2="30" stroke="#4338ca" stroke-width="4" />
              <!-- Pratos -->
              <circle cx="40" cy="65" r="10" fill="#10b981" /> <!-- RMg -->
              <circle cx="160" cy="45" r="10" fill="#ef4444" /> <!-- CMg -->
              <text x="30" y="85" class="text-[8px] fill-emerald-600 font-black">RMg</text>
              <text x="150" y="65" class="text-[8px] fill-red-600 font-black">CMg</text>
            </svg>
          </div>
          <p class="text-sm text-center">Se o <strong>RMg</strong> (ganho) pesa mais que o <strong>CMg</strong> (custo), a balança diz: <strong>PRODUZA!</strong></p>
        </div>
      `
    },
    {
      type: "concept",
      title: "Receita e Custo na Margem",
      html: `
        <div class="space-y-4">
          <p>Como calculamos quanto dinheiro entra e sai na margem?</p>
          <ul class="list-disc pl-5 space-y-3 text-sm font-medium">
            <li><strong class="text-emerald-600">Receita Marginal ($RMg$):</strong> O ganho extra ao vender mais uma unidade.</li>
            <li><strong class="text-red-600">Custo Marginal ($CMg$):</strong> O gasto extra ao produzir mais uma unidade.</li>
          </ul>
          <div class="bg-slate-900 text-white p-6 rounded-3xl text-center space-y-2">
            <p class="text-[10px] text-slate-400 uppercase font-black tracking-widest">As Fórmulas do Sucesso</p>
            <p class="font-mono text-xl">$RMg = R'(q)$</p>
            <p class="font-mono text-xl">$CMg = C'(q)$</p>
          </div>
        </div>
      `
    }
  ],
  1: [
    {
      type: "visual",
      title: "O Ponto Cruzado",
      html: `
        <div class="space-y-4">
          <p>O lucro para de crescer exatamente onde as margens se encontram.</p>
          <div class="relative h-48 w-full bg-white border-2 border-slate-100 rounded-3xl overflow-hidden p-4">
            <svg viewBox="0 0 300 180" class="w-full h-full">
              <!-- RMg constante -->
              <line x1="20" y1="80" x2="280" y2="80" stroke="#10b981" stroke-width="3" />
              <!-- CMg crescente -->
              <path d="M 20 160 Q 150 150 280 20" stroke="#ef4444" stroke-width="3" fill="none" />
              <!-- Ponto de Interseção -->
              <circle cx="165" cy="80" r="6" fill="#4338ca" />
              <line x1="165" y1="80" x2="165" y2="160" stroke="#4338ca" stroke-width="1" stroke-dasharray="4" />
              
              <text x="25" y="70" class="text-[10px] fill-emerald-600 font-bold uppercase italic">RMg (Receita)</text>
              <text x="220" y="50" class="text-[10px] fill-red-600 font-bold uppercase italic">CMg (Custo)</text>
              <text x="175" y="100" class="text-[10px] fill-brand-primary font-black uppercase">Ótimo: RMg = CMg</text>
            </svg>
          </div>
          <p class="text-xs text-slate-400 italic">Antes desse ponto, RMg > CMg (Lembre: ganhe dinheiro!). Depois, CMg > RMg (Pare: você está perdendo dinheiro por unidade!).</p>
        </div>
      `
    },
    {
      type: "formal",
      title: "A Função Lucro",
      html: `
        <div class="space-y-4">
          <p>O Lucro ($L$) é o que sobra da Receita após pagarmos os Custos.</p>
          <p class="text-center font-mono text-lg bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">$L(q) = R(q) - C(q)$</p>
          <p>Pela regra da soma (e subtração), a derivada do lucro é a diferença das derivadas marginais:</p>
          <div class="bg-brand-primary text-white p-4 rounded-2xl text-center font-bold shadow-lg">
            $L'(q) = RMg - CMg$
          </div>
          <p class="text-xs italic text-slate-500 text-center mt-2">"O Lucro Marginal nos diz se a próxima unidade adiciona valor ao nosso bolso ou se nos dá prejuízo."</p>
        </div>
      `
    },
    {
      type: "economic_intuition",
      title: "A Regra de Ouro",
      html: `
        <div class="space-y-4">
          <p>Imagine que você produz canetas. Se a próxima caneta custa 2$ para fazer ($CMg$) e você a vende por 10$ ($RMg$), seu lucro marginal é +8$. <strong>Produza mais!</strong></p>
          <p>Mas se você produzir tanto que o custo sobe para 12$ e o preço continua 10$, seu lucro marginal é -2$. <strong>Pare de produzir!</strong></p>
          <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border-2 border-amber-200 dark:border-amber-900/50 text-center">
            <p class="text-sm font-black text-amber-700 dark:text-amber-400 leading-tight uppercase tracking-tighter">O Equilíbrio Perfeito:<br>$RMg = CMg$</p>
          </div>
        </div>
      `
    }
  ],
  2: [
    {
      type: "visual",
      title: "O Tanque de Lucro",
      html: `
        <div class="space-y-4">
          <p>Visualize o Lucro Total como um reservatório de água.</p>
          <div class="bg-slate-50 p-6 rounded-3xl border-2 border-slate-200 flex justify-around items-end h-40">
             <div class="flex flex-col items-center">
                <div class="w-12 h-24 bg-emerald-100 border-2 border-emerald-500 rounded-t-lg relative overflow-hidden">
                   <div class="absolute bottom-0 w-full h-full bg-emerald-400 animate-pulse"></div>
                </div>
                <span class="text-[8px] font-black uppercase mt-2">RMg</span>
             </div>
             <div class="text-2xl pb-8">➜</div>
             <div class="flex flex-col items-center">
                <div class="w-16 h-32 bg-indigo-100 border-2 border-indigo-500 rounded-lg relative overflow-hidden">
                   <div class="absolute bottom-0 w-full h-[70%] bg-indigo-500"></div>
                </div>
                <span class="text-[8px] font-black uppercase mt-2">Lucro Total</span>
             </div>
             <div class="text-2xl pb-8">➜</div>
             <div class="flex flex-col items-center">
                <div class="w-12 h-24 bg-red-100 border-2 border-red-500 rounded-b-lg relative overflow-hidden">
                   <div class="absolute bottom-0 w-full h-1/2 bg-red-400"></div>
                </div>
                <span class="text-[8px] font-black uppercase mt-2">CMg</span>
             </div>
          </div>
          <p class="text-xs text-slate-500 text-center italic">Enquanto o RMg for maior que o CMg, o nível do tanque de lucro continua subindo.</p>
        </div>
      `
    },
    {
      type: "example",
      title: "Otimização Completa",
      html: `
        <div class="space-y-4">
          <p>Considere uma firma com:</p>
          <div class="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl font-mono text-sm space-y-1">
            <p>$R(q) = 100q$ (Vende a 100$ cada)</p>
            <p>$C(q) = q^2 + 20q + 50$</p>
          </div>
          <p class="text-sm font-bold mt-4">Passo 1: Achar as Marginais</p>
          <p class="text-xs font-mono">$RMg = 100$</p>
          <p class="text-xs font-mono">$CMg = 2q + 20$</p>
          <p class="text-sm font-bold">Passo 2: Igualar ($RMg = CMg$)</p>
          <p class="text-xs font-mono">$100 = 2q + 20 \\implies 80 = 2q \\implies q = 40$</p>
          <div class="bg-emerald-900 text-white p-4 rounded-2xl shadow-xl text-center">
            <p class="font-black text-lg">LUCRO MÁXIMO EM $q=40$!</p>
          </div>
        </div>
      `
    }
  ]
};
