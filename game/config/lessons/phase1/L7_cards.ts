
import { LessonCard } from '../../../../types';

export const L7_MASTERY_CARDS: Record<number, LessonCard[]> = {
  // --- TREINO 1/3: NÍVEL CONCRETO (A ÁREA DO RETÂNGULO) ---
  0: [
    {
      type: "economic_intuition",
      title: "O Movimento Duplo",
      html: `
        <div class="space-y-4">
          <p>Imagine um retângulo representando sua Receita: <strong>Preço x Quantidade</strong>.</p>
          <div class="bg-indigo-50 p-4 rounded-2xl border-l-4 border-indigo-500 my-4 text-sm">
            Se você aumenta a produção para vender mais, o preço costuma cair. Ou seja: <strong>a largura e a altura do seu lucro mudam ao mesmo tempo.</strong>
          </div>
          <p>Não podemos derivar um e ignorar o outro. Precisamos da <strong>Regra do Produto</strong>.</p>
        </div>
      `,
      latex: "$$ R = P \\cdot Q $$"
    },
    {
      type: "visual",
      title: "A Dança das Variáveis",
      html: `
        <div class="space-y-4">
          <p>Seja $y = u \\cdot v$. A variação total depende de:</p>
          <ol class="list-decimal pl-5 text-sm space-y-2">
            <li>O quanto $u$ muda enquanto $v$ está parado.</li>
            <li>O quanto $v$ muda enquanto $u$ está parado.</li>
          </ol>
          <div class="bg-slate-900 text-white p-6 rounded-3xl text-center font-mono text-xl mt-4">
            $(u \\cdot v)' = u'v + uv'$
          </div>
        </div>
      `
    }
  ],

  // --- TREINO 2/3: NÍVEL PICTÓRICO (A REGRA MECÂNICA) ---
  1: [
    {
      type: "concept",
      title: "Deriva Um, Mantém o Outro",
      html: `
        <div class="space-y-4">
          <p>A regra é uma soma de dois termos cruzados. Nunca multiplique as derivadas diretamente!</p>
          <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <p class="text-xs font-black uppercase text-amber-600 mb-2">Padrão Gasing:</p>
            <p class="text-sm italic">"Deriva a 1ª, copia a 2ª. SOMA. Copia a 1ª, deriva a 2ª."</p>
          </div>
          <p class="text-center font-mono text-lg py-2">
            $(f \\cdot g)' = f'g + fg'$
          </p>
        </div>
      `
    },
    {
      type: "example",
      title: "Exemplo: $x \\cdot e^x$",
      html: `
        <div class="space-y-4">
          <p>Vamos derivar o produto da identidade pela exponencial:</p>
          <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 font-mono text-sm space-y-2">
            <p>• $f = x \\implies f' = 1$</p>
            <p>• $g = e^x \\implies g' = e^x$</p>
            <p class="text-brand-primary font-bold mt-2">Resultado: $1 \\cdot e^x + x \\cdot e^x$</p>
          </div>
        </div>
      `
    }
  ],

  // --- TREINO 3/3: NÍVEL ABSTRATO (RECEITA MARGINAL) ---
  2: [
    {
      type: "economic_intuition",
      title: "Receita Marginal Geral",
      html: `
        <div class="space-y-4">
          <p>Para um monopolista, o preço $P$ cai quando $Q$ sobe. A Receita Marginal ($MR$) é:</p>
          <div class="bg-indigo-900 text-white p-6 rounded-3xl text-center space-y-4">
             <p class="text-xl font-mono">$MR = P + Q \\cdot \\frac{dP}{dQ}$</p>
          </div>
          <p class="text-xs text-slate-400">Isso prova que a Receita Marginal é sempre menor que o preço, pois a inclinação da demanda $(dP/dQ)$ é negativa.</p>
        </div>
      `
    }
  ]
};
