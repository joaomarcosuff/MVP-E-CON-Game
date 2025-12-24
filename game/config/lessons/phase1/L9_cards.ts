
import { LessonCard } from '../../../../types';

export const L9_MASTERY_CARDS: Record<number, LessonCard[]> = {
  // --- TREINO 1/3: NÍVEL CONCRETO (IDENTIFICAÇÃO E CONEXÃO) ---
  0: [
    {
      type: "economic_intuition",
      title: "Engrenagens e Elo da Cadeia",
      html: `
        <div class="space-y-4">
          <p>Na economia, uma variável raramente afeta outra diretamente. Existe uma <strong>corrente de transmissão</strong>.</p>
          <div class="bg-indigo-900 text-white p-6 rounded-3xl flex items-center justify-around shadow-xl border-b-4 border-indigo-950">
             <div class="text-center"><p class="text-[10px] opacity-60">Juros</p><p class="text-xl font-bold">$x$</p></div>
             <div class="text-xl">⚙️</div>
             <div class="text-center"><p class="text-[10px] opacity-60">Investimento</p><p class="text-xl font-bold">$u$</p></div>
             <div class="text-xl">⚙️</div>
             <div class="text-center"><p class="text-[10px] opacity-60">PIB</p><p class="text-xl font-bold">$y$</p></div>
          </div>
          <p class="text-sm">A <strong>Regra da Cadeia</strong> calcula o efeito <strong>indireto</strong> de $x$ sobre $y$ multiplicando os efeitos de cada elo.</p>
        </div>
      `,
      latex: "$$ \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} $$"
    },
    {
      type: "visual",
      title: "A Analogia da Cebola",
      html: `
        <div class="space-y-4">
          <p>Uma função <strong>composta</strong> como $y = (5x + 2)^3$ é como uma cebola:</p>
          <ul class="space-y-2 text-sm">
            <li><strong class="text-brand-primary">Camada de Fora:</strong> $(\\dots)^3$ (A potência)</li>
            <li><strong class="text-amber-600">Camada de Dentro ($u$):</strong> $5x + 2$</li>
          </ul>
          <div class="bg-amber-50 p-4 rounded-2xl border-2 border-amber-200 italic text-center">
            "Sempre derivamos a camada de <strong>fora</strong> primeiro, mantendo o recheio intacto, e depois multiplicamos pela derivada de <strong>dentro</strong>."
          </div>
        </div>
      `
    },
    {
      type: "economic_intuition",
      title: "O MRPL: Trabalho e Receita",
      html: `
        <div class="space-y-4">
          <p>O <strong>Produto Marginal da Receita ($MRPL$)</strong> liga a Receita ($R$) ao Trabalho ($L$) através da Produção ($Q$).</p>
          <div class="bg-slate-900 text-white p-5 rounded-3xl font-mono text-center space-y-2">
             <p class="text-emerald-400">$\\frac{dR}{dL} = \\frac{dR}{dQ} \\cdot \\frac{dQ}{dL}$</p>
             <p class="text-[10px] uppercase font-black tracking-widest text-slate-400">$MRPL = MR \\cdot MPPL$</p>
          </div>
          <p class="text-xs text-slate-500 italic">Se o $MR=5$ e o $MPPL=10$, o $MRPL$ é $50$. Multiplicamos as taxas!</p>
        </div>
      `
    },
    {
      type: "concept",
      title: "Notação de Leibniz",
      html: `
        <div class="space-y-4">
          <p>Gottfried Leibniz via derivadas como frações que se cancelam. Se $y = f(u)$ e $u = g(x)$:</p>
          <div class="bg-brand-primary text-white p-6 rounded-[2.5rem] text-center font-mono text-xl shadow-2xl">
            $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$
          </div>
          <p class="text-sm">Isso prova que a ordem importa: derivamos a externa em relação à interna, e a interna em relação ao $x$.</p>
        </div>
      `
    },
    {
      type: "example",
      title: "Lucro e Propaganda",
      html: `
        <div class="space-y-4">
          <p>Se o Lucro ($\\pi$) depende das Vendas ($Q$) e as Vendas dependem da Propaganda ($A$):</p>
          <div class="bg-slate-50 p-5 rounded-3xl border border-slate-200 text-center">
            <p class="font-bold text-indigo-600 text-lg">$\\frac{d\\pi}{dA} = \\frac{d\\pi}{dQ} \\cdot \\frac{dQ}{dA}$</p>
            <p class="text-xs text-slate-400 mt-2 italic uppercase font-black">Ligar variáveis por cadeias de transmissão</p>
          </div>
        </div>
      `
    }
  ],

  // --- TREINO 2/3: NÍVEL PICTÓRICO (MECÂNICA E REGRAS) ---
  1: [
    {
      type: "formal",
      title: "A Potência da Cadeia",
      html: `
        <div class="space-y-4">
          <p>Para derivar qualquer função do tipo $[f(x)]^p$, o padrão visual é:</p>
          <div class="bg-indigo-50 p-6 rounded-3xl border-2 border-indigo-200 space-y-4">
            <p class="font-mono text-center text-xl text-brand-primary">$p[f(x)]^{p-1} \\cdot f'(x)$</p>
            <div class="flex justify-between text-[10px] font-black uppercase text-slate-400">
               <span>1. Tomba o p</span>
               <span>2. Mantém o f</span>
               <span>3. Deriva a alma</span>
            </div>
          </div>
        </div>
      `
    },
    {
      type: "example",
      title: "Exemplo: $(3x+1)^2$",
      html: `
        <div class="space-y-4">
          <p>Vamos derivar passo a passo:</p>
          <ol class="list-decimal pl-5 text-sm space-y-2">
            <li><strong>Fora:</strong> Tomba o $2$ $\\implies 2(3x+1)^1$</li>
            <li><strong>Dentro:</strong> Derivada de $3x+1$ é $3$.</li>
            <li><strong>Multiplica:</strong> $2(3x+1) \\cdot 3 = 6(3x+1)$</li>
          </ol>
          <p class="text-xs text-emerald-600 font-bold text-center italic">Em $x=0$, o resultado é $6(1) = 6$.</p>
        </div>
      `
    },
    {
      type: "example",
      title: "Raízes: $\\sqrt{x^2+1}$",
      html: `
        <div class="space-y-4">
          <p>Transforme em potência: $(x^2+1)^{1/2}$.</p>
          <div class="bg-slate-900 text-white p-5 rounded-3xl font-mono text-xs space-y-2">
            <p>• Fora: $\\frac{1}{2}(x^2+1)^{-1/2}$</p>
            <p>• Dentro: $2x$</p>
            <p class="text-amber-400 mt-2">➜ $\\frac{1}{2}(x^2+1)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2+1}}$</p>
          </div>
        </div>
      `
    },
    {
      type: "formal",
      title: "Exponenciais e Logs",
      html: `
        <div class="space-y-4">
          <p>A alma da função "desce" multiplicando:</p>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <p class="text-xs font-black mb-2">$e^{u(x)}$</p>
              <p class="font-mono text-brand-primary">$e^u \\cdot u'$</p>
            </div>
            <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
              <p class="text-xs font-black mb-2">$\\ln(u(x))$</p>
              <p class="font-mono text-brand-primary">$\\frac{u'}{u}$</p>
            </div>
          </div>
          <p class="text-xs text-slate-400 italic text-center">Ex: a derivada de $\\ln(x^2+3x+5)$ tem numerador $2x+3$.</p>
        </div>
      `
    },
    {
      type: "example",
      title: "A Derivada de $e^{3x}$",
      html: `
        <div class="space-y-4">
          <p>Se $y = e^{3x}$, temos $u = 3x$.</p>
          <p class="text-sm">A derivada de $u$ é $3$. Logo:</p>
          <div class="bg-indigo-900 text-white p-6 rounded-3xl text-center font-mono text-2xl shadow-xl">
             $3 \\cdot e^{3x}$
          </div>
          <p class="text-xs text-slate-400 text-center uppercase font-black mt-2">O coeficiente 3 "salta" para a frente.</p>
        </div>
      `
    }
  ],

  // --- TREINO 3/3: NÍVEL ABSTRATO (SÍNTESE E APLICAÇÃO) ---
  2: [
    {
      type: "economic_intuition",
      title: "Valor de Ativos no Tempo",
      html: `
        <div class="space-y-4">
          <p>O valor de um ativo $V = 100e^{0.1t}$ cresce continuamente. Qual a taxa de variação ($dV/dt$)?</p>
          <div class="bg-amber-50 p-5 rounded-3xl border-2 border-amber-200 text-center">
            <p class="font-mono text-xl">$100 \\cdot (0.1 \\cdot e^{0.1t}) = 10e^{0.1t}$</p>
            <p class="text-xs text-amber-700 font-bold mt-2 italic">Em $t=0$, a variação é exatamente 10.</p>
          </div>
        </div>
      `
    },
    {
      type: "example",
      title: "Cadeia + Produto",
      html: `
        <div class="space-y-4">
          <p>Para funções como $g(x) = (2x^2 - 3x)^{10} \\cdot \\sqrt{-5 + x^3}$, você deve:</p>
          <ol class="list-decimal pl-5 text-sm space-y-2">
            <li>Identificar a <strong>Regra do Produto</strong> como estrutura principal.</li>
            <li>Aplicar a <strong>Regra da Cadeia</strong> dentro de cada termo da soma.</li>
          </ol>
          <p class="text-xs text-red-600 font-black uppercase text-center mt-2">Dificuldade Nível 5 atingida!</p>
        </div>
      `
    },
    {
      type: "example",
      title: "Cadeia + Quociente",
      html: `
        <div class="space-y-4">
          <p>Dada $y = \\left[ \\frac{2x+1}{3x-1} \\right]^4$. O primeiro passo é:</p>
          <div class="bg-slate-900 text-emerald-400 p-6 rounded-3xl font-mono text-sm text-center italic">
            $4 \\cdot \\left[ \\frac{2x+1}{3x-1} \\right]^3 \\cdot \\left( \\text{derivada do quociente} \\right)$
          </div>
        </div>
      `
    },
    {
      type: "concept",
      title: "Funções Trigonométricas",
      html: `
        <div class="space-y-4">
          <p>A regra também vale para trigonometria: $(\\text{sen}(x^2))'$. </p>
          <p class="text-sm">Fora: $\\cos(x^2)$. Dentro: $2x$.</p>
          <div class="bg-indigo-50 p-4 rounded-xl text-center font-bold text-indigo-700">
             $2x \\cdot \\cos(x^2)$
          </div>
        </div>
      `
    },
    {
      type: "economic_intuition",
      title: "Resumo da Jornada",
      html: `
        <div class="space-y-4">
          <p>Você agora domina a ferramenta mais potente do Cálculo Econômico.</p>
          <div class="p-5 bg-emerald-900 text-white rounded-[2.5rem] shadow-2xl text-center space-y-2 border-b-8 border-emerald-950">
            <p class="font-black italic text-xl uppercase tracking-tighter italic">Cadeia de Sucesso!</p>
            <p class="text-[10px] opacity-60 uppercase font-bold tracking-widest">Siga para as Derivadas Transcendentais</p>
          </div>
        </div>
      `
    }
  ]
};
