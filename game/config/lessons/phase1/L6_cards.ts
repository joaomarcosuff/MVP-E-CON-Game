
import { LessonCard } from '../../../../types';

export const L6_MASTERY_CARDS: Record<number, LessonCard[]> = {
  // --- TREINO 1/3: NÍVEL CONCRETO (INTUIÇÃO) ---
  0: [
    {
      type: "economic_intuition",
      title: "O Custo que 'Dilui'",
      html: `
        <div class="space-y-4">
          <p>Imagine que você paga <strong>100</strong> de aluguel (Custo Fixo). Se você produz apenas 1 item, o custo por item é 100. Se produz 100, o custo cai para 1.</p>
          <div class="bg-indigo-50 p-4 rounded-2xl border-l-4 border-indigo-500 my-4 text-indigo-900 italic text-sm">
            "Quanto mais você produz, menos o custo fixo 'pesa' por unidade. Isso é uma relação <strong>inversa</strong>."
          </div>
        </div>
      `,
      latex: "$$ CMe = \\frac{100}{q} = 100q^{-1} $$"
    },
    {
      type: "visual",
      title: "A Curva do Desânimo",
      html: `
        <div class="space-y-4">
          <p>A função raiz quadrada cresce, mas cada vez mais devagar. Na economia, chamamos isso de <strong>Utilidade Marginal Decrescente</strong>.</p>
          <div class="relative h-40 w-full bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden flex items-center justify-center my-4">
            <svg viewBox="0 0 300 150" class="w-full h-full p-4">
              <path d="M 10 140 Q 30 20 280 10" stroke="#f59e0b" stroke-width="4" fill="none" />
              <text x="100" y="60" class="text-[12px] font-black fill-amber-600 uppercase">Ganhos Decrescentes</text>
            </svg>
          </div>
          <p class="text-xs text-slate-400 text-center italic">O primeiro gole d'água vale muito; o centésimo, quase nada.</p>
        </div>
      `,
      latex: "$$ U = \\sqrt{x} = x^{1/2} $$"
    },
    {
      type: "concept",
      title: "O Padrão do Espelho",
      html: `
        <div class="space-y-4">
          <p>Para "subir" um $x$ que está no denominador, basta trocar o <strong>sinal do expoente</strong>. É o padrão Gasing do espelho.</p>
          <div class="bg-slate-900 text-white p-6 rounded-3xl text-center space-y-4 my-4">
            <p class="text-xl font-mono">$$ \\frac{1}{x^1} \\implies x^{-1} $$</p>
            <p class="text-xl font-mono">$$ \\frac{1}{x^2} \\implies x^{-2} $$</p>
          </div>
          <p class="text-sm text-slate-500">Inverter a posição do $x$ inverte o sinal da potência.</p>
        </div>
      `
    },
    {
      type: "concept",
      title: "Quem está no Sol vai para a Sombra",
      html: `
        <div class="space-y-4">
          <p>Toda raiz é uma potência fracionária. O índice da raiz sempre vai para o <strong>denominador</strong> do expoente.</p>
          <p class="text-xs text-amber-600 font-bold uppercase text-center mt-2">Padrão Gasing: Índice da Raiz = Denominador da Potência</p>
        </div>
      `,
      latex: "$$ \\sqrt[n]{x^m} = x^{m/n} $$"
    },
    {
      type: "visual",
      title: "A Barreira do Zero",
      html: `
        <div class="space-y-4">
          <p>Gráficos de funções como $1/x$ nunca tocam o eixo zero. Por quê? Porque <strong>é impossível dividir por nada</strong>!</p>
          <div class="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 text-sm font-medium leading-relaxed">
            Isso explica por que o Custo Fixo Médio nunca chega a zero, não importa o quanto você produza. O custo "dilui", mas nunca some.
          </div>
        </div>
      `
    },
    {
      type: "example",
      title: "Teste Rápido: Potências",
      html: `
        <div class="space-y-4">
          <p>Antes de derivar, transforme mentalmente usando os padrões que vimos:</p>
          <div class="bg-slate-50 p-5 rounded-3xl border border-slate-200">
            <ul class="space-y-3 text-sm font-mono italic">
              <li>• Inverso de 5: $5^{-1}$</li>
              <li>• Raiz de 4: $4^{1/2} = 2$</li>
              <li>• $1/x^2$: $x^{-2}$</li>
            </ul>
          </div>
        </div>
      `
    }
  ],

  // --- TREINO 2/3: NÍVEL PICTÓRICO (REGRAS) ---
  1: [
    {
      type: "concept",
      title: "Derivando Negativos",
      html: `
        <div class="space-y-4">
          <p>A <strong>Regra do Tombo</strong> não muda! Mas atenção à aritmética da subtração no expoente:</p>
          <div class="bg-slate-900 text-white p-6 rounded-3xl text-center my-4">
            <p class="text-xl font-mono text-indigo-400">$$ (x^{-1})' = -1 \\cdot x^{-2} $$</p>
            <p class="text-xs text-slate-400 mt-4 italic">Lembre-se: $-1 - 1 = -2$ (o valor ficou "mais negativo")</p>
          </div>
        </div>
      `
    },
    {
      type: "concept",
      title: "Derivando Frações",
      html: `
        <div class="space-y-4">
          <p>Para $\\sqrt{x}$ (ou $x^{1/2}$), o $1/2$ tomba e subtraímos $1$.</p>
          <p class="text-center font-mono py-2 text-indigo-600 font-bold">$ 0.5 - 1 = -0.5 $</p>
          <p class="text-sm text-slate-600">Note que o resultado é positivo, mas o expoente negativo indica que a inclinação <strong>diminui</strong> conforme $x$ cresce.</p>
        </div>
      `,
      latex: "$$ (\\sqrt{x})' = \\frac{1}{2}x^{-1/2} $$"
    },
    {
      type: "example",
      title: "O Pulo do Gato",
      html: `
        <div class="space-y-4">
          <p>Qual o primeiro passo para derivar $\\frac{1}{x^4}$?</p>
          <div class="p-6 bg-emerald-50 rounded-[2rem] border-2 border-emerald-200 shadow-sm my-4 text-center">
            <p class="font-black text-emerald-800 text-xl uppercase tracking-tighter italic">Reescrever como $x^{-4}$!</p>
          </div>
          <p class="text-sm">Nunca tente derivar o $x$ enquanto ele estiver no denominador. Suba ele primeiro, troque o sinal, e então aplique o tombo.</p>
        </div>
      `,
      latex: "$$ f'(x) = -4x^{-5} $$"
    },
    {
      type: "concept",
      title: "Inclinação Negativa",
      html: `
        <div class="space-y-4">
          <p>A derivada de $1/x$ é $-1/x^2$. Notou o sinal de menos?</p>
          <p class="text-sm leading-relaxed">Isso significa que a curva está <strong>sempre caindo</strong>. Na economia, isso mostra que o custo por unidade (CMe) sempre cai conforme a escala de produção aumenta.</p>
        </div>
      `,
      latex: "$$ \\frac{d}{dx}\\left(\\frac{1}{x}\\right) = -\\frac{1}{x^2} $$"
    },
    {
      type: "concept",
      title: "Potências Compostas",
      html: `
        <div class="space-y-4">
          <p>O que é $x^{3/2}$? É a <strong>raiz quadrada</strong> de $x$ elevado ao cubo.</p>
          <p class="text-sm text-slate-500">Padrão Gasing: O de cima (3) é a força (potência), o de baixo (2) é a raiz que "segura" a função.</p>
        </div>
      `,
      latex: "$$ x^{3/2} = \\sqrt{x^3} $$"
    },
    {
      type: "example",
      title: "Mecânica: $2x^{-1}$",
      html: `
        <div class="space-y-4">
          <p>Vamos calcular a inclinação em um ponto específico: $f(x) = 2x^{-1}$. Em $x=1$:</p>
          <div class="bg-indigo-900 text-white p-6 rounded-3xl space-y-3 font-mono text-sm my-4">
            <p>1. Derivada: $-2x^{-2}$</p>
            <p>2. Substitua x=1: $-2(1)^{-2}$</p>
            <p>3. Resultado: $-2$</p>
          </div>
        </div>
      `
    }
  ],

  // --- TREINO 3/3: NÍVEL ABSTRATO (APLICAÇÃO) ---
  2: [
    {
      type: "example",
      title: "Custo Fixo Médio Real",
      html: `
        <div class="space-y-4">
          <p>Se seu Custo Fixo ($CF$) é 50, o CMe é dado por $50q^{-1}$.</p>
          <p class="text-sm">A taxa de variação (derivada) desse custo é $-50q^{-2}$. Em $q=5$:</p>
          <div class="bg-slate-900 text-emerald-400 p-6 rounded-3xl text-center font-mono text-xl my-4">
            $-50 / 25 = -2$
          </div>
          <p class="text-xs italic text-slate-400 text-center">Interpretação: O custo médio está caindo 2 reais para cada unidade extra produzida.</p>
        </div>
      `
    },
    {
      type: "concept",
      title: "Produção e Trabalho",
      html: `
        <div class="space-y-4">
          <p>Uma função de produção muito comum é $Q = L^{0.5}$ (Raiz de L).</p>
          <p class="text-sm leading-relaxed">Se você dobrar o trabalho ($L$), o produto ($Q$) <strong>não dobra</strong>. Ele cresce menos que o dobro devido ao expoente fracionário. É a famosa lei dos rendimentos decrescentes.</p>
        </div>
      `,
      latex: "$$ Q' = 0.5L^{-0.5} $$"
    },
    {
      type: "example",
      title: "Derivada de $3/x^2$",
      html: `
        <div class="space-y-4">
          <p>Vamos seguir o processo completo:</p>
          <ol class="list-decimal pl-5 text-sm space-y-3">
            <li><strong>Reescreva:</strong> $3x^{-2}$</li>
            <li><strong>Tombe o -2:</strong> $3 \\cdot (-2)x^{-3}$</li>
            <li><strong>Simplifique:</strong> $-6x^{-3}$</li>
          </ol>
        </div>
      `,
      latex: "$$ f'(x) = -\\frac{6}{x^3} $$"
    },
    {
      type: "concept",
      title: "Concavidade e 2ª Ordem",
      html: `
        <div class="space-y-4">
          <p>Para a função $1/x^3$, a 1ª derivada é $-3x^{-4}$. A 2ª derivada é $+12x^{-5}$.</p>
          <p class="text-sm">Como +12 é um número positivo (para $x > 0$), a curva "abre para cima". Na matemática, chamamos isso de uma <strong>função convexa</strong>.</p>
        </div>
      `
    },
    {
      type: "example",
      title: "O Ponto de Equilíbrio",
      html: `
        <div class="space-y-4">
          <p>Dada a função $f(x) = x^{-2} + x^2$. Qual a inclinação no ponto $x=1$?</p>
          <div class="bg-slate-50 p-5 rounded-3xl border border-slate-200 text-sm space-y-2 font-mono my-4">
            <p>• Derivada: $-2x^{-3} + 2x$</p>
            <p>• Em x=1: $-2(1) + 2(1) = 0$</p>
          </div>
          <p class="text-xs font-black text-emerald-600 uppercase text-center tracking-widest italic">Ponto de mínimo atingido!</p>
        </div>
      `
    },
    {
      type: "economic_intuition",
      title: "Utilidade Marginal na Prática",
      html: `
        <div class="space-y-4">
          <p>Se sua Utilidade é $U = \\sqrt{x}$, em $x=25$ a satisfação extra da próxima unidade é:</p>
          <div class="bg-indigo-50 p-6 rounded-3xl text-center font-mono text-xl my-4 text-indigo-600 font-bold">
            1 / 10 = 0.1
          </div>
          <p class="text-sm">Note que se $x$ fosse 100, a utilidade marginal cairia para 0.05. Você está ficando <strong>saciado</strong>.</p>
        </div>
      `,
      latex: "$$ UMg = \\frac{1}{2\\sqrt{x}} $$"
    }
  ]
};
