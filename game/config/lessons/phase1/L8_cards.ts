
import { LessonCard } from '../../../../types';

export const L8_MASTERY_CARDS: Record<number, LessonCard[]> = {
  // --- TREINO 1/3: NÍVEL CONCRETO (INTUIÇÃO E MÉDIAS) ---
  0: [
    {
      type: "economic_intuition",
      title: "O Custo por Unidade",
      html: `
        <div class="space-y-4">
          <p>Imagine que sua fábrica gasta $1000 para produzir 10 cadeiras. O <strong>Custo Médio ($AC$)</strong> é $100 por cadeira.</p>
          <div class="bg-indigo-900 text-white p-6 rounded-3xl text-center text-xl font-mono shadow-xl">
            $AC = \frac{TC}{Q}$
          </div>
          <p class="text-sm italic">Como o custo por unidade muda quando aumentamos a produção? Para descobrir essa taxa de variação, precisamos da <strong>Regra do Quociente</strong>.</p>
        </div>
      `
    },
    {
      type: "visual",
      title: "O Cabo de Guerra",
      html: `
        <div class="space-y-4">
          <p>Uma fração $f/g$ é como um cabo de guerra:</p>
          <ul class="space-y-2 text-sm font-medium">
            <li>Se o numerador ($f$) cresce, o resultado <strong>sobe</strong>.</li>
            <li>Se o denominador ($g$) cresce, o resultado <strong>desce</strong>.</li>
          </ul>
          <div class="bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 flex items-center justify-center">
             <svg viewBox="0 0 200 80" class="w-full h-20">
                <text x="90" y="30" class="text-lg font-black fill-brand-primary">f ↑</text>
                <line x1="50" y1="45" x2="150" y2="45" stroke="#94a3b8" stroke-width="3" />
                <text x="90" y="70" class="text-lg font-black fill-slate-400">g ↑</text>
                <path d="M 170 30 L 170 60" stroke="#4338ca" stroke-width="2" marker-end="url(#arrow)" />
             </svg>
          </div>
        </div>
      `
    },
    {
      type: "concept",
      title: "Média vs. Marginal",
      html: `
        <div class="space-y-4">
          <p>Pense na sua nota: se você tira uma nota <strong>menor</strong> que sua média atual, sua média <strong>cai</strong>.</p>
          <div class="bg-amber-50 p-4 rounded-2xl border border-amber-200">
            <p class="text-xs font-black uppercase text-amber-600 mb-2">Regra de Ouro:</p>
            <p class="text-sm leading-tight italic">"Se o Marginal ($MC$) < Médio ($AC$), então o Médio está caindo."</p>
          </div>
          <p class="text-xs text-slate-400">Isso explica o formato de "U" das curvas de custo.</p>
        </div>
      `
    },
    {
      type: "example",
      title: "O Caso Simples",
      html: `
        <div class="space-y-4">
          <p>Se você tem $y = \frac{10x}{2}$, a derivada é simplesmente $5$.</p>
          <p class="text-sm">Por que? Porque dividir por uma constante é o mesmo que multiplicar por $1/2$. Nem sempre precisamos da regra complexa se o denominador for fixo!</p>
        </div>
      `,
      latex: "$$ \\frac{d}{dx} \\left( \\frac{f(x)}{k} \\right) = \\frac{f'(x)}{k} $$"
    },
    {
      type: "concept",
      title: "Ponto de Equilíbrio",
      html: `
        <div class="space-y-4">
          <p>Onde o Custo Médio para de cair e começa a subir? Exatamente no seu <strong>ponto mínimo</strong>.</p>
          <div class="bg-slate-900 text-emerald-400 p-5 rounded-3xl text-center font-mono">
            Inclinação do AC = 0
          </div>
          <p class="text-sm">Neste ponto, o Custo Marginal ($MC$) cruza o Custo Médio ($AC$).</p>
        </div>
      `
    }
  ],

  // --- TREINO 2/3: NÍVEL PICTÓRICO (MECÂNICA DA REGRA) ---
  1: [
    {
      type: "formal",
      title: "A Fórmula do Quociente",
      html: `
        <div class="space-y-4">
          <p>Para derivar uma razão $\frac{f}{g}$, seguimos um padrão visual rigoroso:</p>
          <div class="bg-brand-primary text-white p-6 rounded-[2.5rem] text-center font-mono text-xl shadow-2xl">
            $\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$
          </div>
          <p class="text-xs text-center text-slate-400 italic mt-2 uppercase font-black">"O de baixo ao quadrado no denominador"</p>
        </div>
      `
    },
    {
      type: "concept",
      title: "Cuidado com o Sinal!",
      html: `
        <div class="space-y-4">
          <p>Diferente da Regra do Produto, aqui usamos o sinal de <strong>MENOS</strong> no numerador.</p>
          <div class="bg-red-50 p-5 rounded-3xl border-2 border-red-100 flex items-center gap-4">
            <span class="text-3xl">⚠️</span>
            <p class="text-xs font-bold text-red-800 uppercase leading-tight">A ordem importa! Sempre comece derivando o NUMERADOR ($f'g$). Se inverter, o sinal da sua inclinação estará errado.</p>
          </div>
        </div>
      `
    },
    {
      type: "example",
      title: "Exemplo: $\frac{x}{x+1}$",
      html: `
        <div class="space-y-4">
          <ul class="list-disc pl-5 text-sm space-y-1 font-mono">
            <li>$f = x \implies f' = 1$</li>
            <li>$g = x+1 \implies g' = 1$</li>
          </ul>
          <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 font-mono text-xs">
            $\frac{(1)(x+1) - (x)(1)}{(x+1)^2} = \frac{1}{(x+1)^2}$
          </div>
          <p class="text-xs text-slate-400 italic">O denominador $(x+1)^2$ garante que o valor original nunca seja zero no resultado.</p>
        </div>
      `
    },
    {
      type: "example",
      title: "Exemplo: $\frac{x}{e^x}$",
      html: `
        <div class="space-y-4">
          <p>Derivando com a exponencial:</p>
          <div class="bg-indigo-900 text-white p-6 rounded-3xl font-mono text-sm space-y-2">
            <p>1. Numerador: $(1 \cdot e^x) - (x \cdot e^x)$</p>
            <p>2. Denominador: $(e^x)^2 = e^{2x}$</p>
            <p class="text-emerald-400 mt-2">➜ $\frac{e^x(1-x)}{e^{2x}} = \frac{1-x}{e^x}$</p>
          </div>
        </div>
      `
    },
    {
      type: "concept",
      title: "Potência vs. Quociente",
      html: `
        <div class="space-y-4">
          <p>Funções como $y = 5/x$ podem ser resolvidas de duas formas:</p>
          <ol class="list-decimal pl-5 text-sm space-y-2">
            <li><strong>Quociente:</strong> $f=5, g=x$.</li>
            <li><strong>Potência:</strong> $5x^{-1}$.</li>
          </ol>
          <p class="text-xs text-slate-500 italic">Dica: Se o numerador for apenas um número, a Regra da Potência costuma ser muito mais rápida!</p>
        </div>
      `
    }
  ],

  // --- TREINO 3/3: NÍVEL ABSTRATO (APLICAÇÃO E OTIMIZAÇÃO) ---
  2: [
    {
      type: "economic_intuition",
      title: "A Minimização do Custo",
      html: `
        <div class="space-y-4">
          <p>Para achar o menor Custo Médio ($AC$), derivamos $AC = \frac{C(Q)}{Q}$ e igualamos a zero:</p>
          <div class="bg-slate-900 text-white p-6 rounded-3xl font-mono text-sm">
            $\frac{d}{dQ} \left( \frac{C}{Q} \right) = \frac{C' \cdot Q - C \cdot 1}{Q^2} = 0$
          </div>
          <p class="text-sm">Para a fração ser zero, o numerador deve ser zero: $C' \cdot Q = C \implies C' = \frac{C}{Q}$.</p>
          <p class="text-brand-primary font-black text-center mt-2">PROVADO: No mínimo, $MC = AC$.</p>
        </div>
      `
    },
    {
      type: "example",
      title: "Custo Médio na Prática",
      html: `
        <div class="space-y-4">
          <p>Se $TC = Q^2 + 100$, então $AC = Q + \frac{100}{Q}$.</p>
          <p class="text-sm">A derivada é $1 - \frac{100}{Q^2}$. Onde isso é zero?</p>
          <div class="bg-indigo-50 p-4 rounded-2xl text-center font-mono font-bold border-2 border-indigo-200">
            $Q^2 = 100 \implies Q = 10$
          </div>
          <p class="text-xs text-center text-slate-400 italic">A 10 unidades, sua empresa atinge a maior eficiência produtiva.</p>
        </div>
      `
    },
    {
      type: "concept",
      title: "Inverso de uma Função",
      html: `
        <div class="space-y-4">
          <p>Se você quer derivar $1/g(x)$, a Regra do Quociente gera um atalho:</p>
          <div class="bg-amber-50 p-6 rounded-3xl text-center font-mono text-xl border-2 border-amber-200">
            $y' = -\frac{g'(x)}{g(x)^2}$
          </div>
          <p class="text-sm italic">O sinal negativo aparece porque estamos "subindo" uma função do denominador.</p>
        </div>
      `
    },
    {
      type: "example",
      title: "Logaritmo no Quociente",
      html: `
        <div class="space-y-4">
          <p>A derivada de $\frac{\ln x}{x}$ é clássica em modelos de crescimento:</p>
          <div class="bg-slate-900 text-indigo-300 p-6 rounded-3xl font-mono text-sm">
             $\frac{(1/x) \cdot x - (\ln x) \cdot 1}{x^2} = \frac{1 - \ln x}{x^2}$
          </div>
          <p class="text-xs text-slate-400 mt-2">Esta função atinge seu máximo quando $\ln x = 1$, ou seja, em $x = e$.</p>
        </div>
      `
    },
    {
      type: "example",
      title: "O Teste de Inclinação",
      html: `
        <div class="space-y-4">
          <p>Se a derivada do Custo Médio é positiva ($\frac{dAC}{dQ} > 0$), o que sabemos sobre o Marginal?</p>
          <div class="p-4 bg-emerald-900 text-white rounded-2xl shadow-xl text-center">
            <p class="font-black">O MC está ACIMA do AC!</p>
          </div>
          <p class="text-xs text-slate-400 text-center mt-2 italic">A próxima unidade é mais cara que a média, puxando a média para cima.</p>
        </div>
      `
    }
  ]
};
