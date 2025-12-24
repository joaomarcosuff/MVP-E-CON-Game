
import { LessonCard } from '../../../../types';

export const L10_MASTERY_CARDS: Record<number, LessonCard[]> = {
  // --- TREINO 1/3: NÍVEL CONCRETO (INTUIÇÃO E NATUREZA) ---
  0: [
    {
      type: "economic_intuition",
      title: "O Número de Deus e do Dinheiro",
      html: `
        <div class="space-y-4">
          <p>O número $e \approx 2,718$ surge quando os juros são capitalizados <strong>continuamente</strong>. É a base natural de todo crescimento orgânico.</p>
          <div class="bg-indigo-900 text-white p-6 rounded-3xl flex items-center justify-around shadow-xl border-b-4 border-indigo-950">
             <div class="text-center"><p class="text-[10px] opacity-60">Mensal</p><p class="text-lg">🏦</p></div>
             <div class="text-xl">➜</div>
             <div class="text-center"><p class="text-[10px] opacity-60">Diário</p><p class="text-lg">⏱️</p></div>
             <div class="text-xl">➜</div>
             <div class="text-center font-black text-amber-400"><p class="text-[10px] opacity-60">Contínuo</p><p class="text-2xl">$e$</p></div>
          </div>
          <p class="text-sm">Se um investimento cresce a uma taxa $r$, seu valor no tempo $t$ é $V = V_0 e^{rt}$.</p>
        </div>
      `
    },
    {
      type: "visual",
      title: "Espelhos Matemáticos",
      html: `
        <div class="space-y-4">
          <p>A função exponencial $e^x$ e o logaritmo natural $\ln(x)$ são <strong>inversas</strong>. O que uma faz, a outra desfaz.</p>
          <div class="relative h-44 w-full bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 300 200" class="w-full h-full p-4">
              <!-- Eixos -->
              <line x1="20" y1="180" x2="280" y2="180" stroke="#cbd5e1" stroke-width="1" />
              <line x1="20" y1="180" x2="20" y2="20" stroke="#cbd5e1" stroke-width="1" />
              <!-- Identidade -->
              <line x1="20" y1="180" x2="180" y2="20" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4" />
              <!-- e^x -->
              <path d="M 20 170 Q 150 165 180 20" stroke="#4338ca" stroke-width="3" fill="none" />
              <!-- ln(x) -->
              <path d="M 30 180 Q 35 50 180 20" stroke="#f59e0b" stroke-width="3" fill="none" transform="rotate(90 100 100) translate(0, -100)" />
              
              <text x="140" y="50" class="text-[10px] fill-brand-primary font-bold">$e^x$</p>
              <text x="150" y="160" class="text-[10px] fill-amber-600 font-bold">$\ln(x)$</p>
            </svg>
          </div>
          <p class="text-xs text-slate-400 italic text-center">$\ln(e^x) = x$. Elas se cancelam perfeitamente!</p>
        </div>
      `
    }
  ],

  // --- TREINO 2/3: NÍVEL PICTÓRICO (MECÂNICA E REGRAS) ---
  1: [
    {
      type: "formal",
      title: "Derivadas Imortais",
      html: `
        <div class="space-y-4">
          <p>A função $e^x$ é a única cuja taxa de variação é <strong>ela mesma</strong>. Para o logaritmo, a regra muda para a razão inversa.</p>
          <div class="grid grid-cols-2 gap-4 my-4">
            <div class="bg-indigo-50 p-4 rounded-2xl border border-indigo-200 text-center">
              <p class="text-xs font-black mb-2 uppercase">Exponencial</p>
              <p class="font-mono text-brand-primary">$(e^x)' = e^x$</p>
            </div>
            <div class="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-center">
              <p class="text-xs font-black mb-2 uppercase">Logaritmo</p>
              <p class="font-mono text-amber-700">$(\ln x)' = \frac{1}{x}$</p>
            </div>
          </div>
          <p class="text-sm italic text-slate-500">Note: $\ln(x)$ cresce cada vez mais devagar (taxa decrescente), enquanto $e^x$ explode infinitamente.</p>
        </div>
      `
    },
    {
      type: "concept",
      title: "Simplificando com Logs",
      html: `
        <div class="space-y-4">
          <p>Logaritmos são os "abridores de latas" da economia. Eles transformam multiplicações complexas em somas simples.</p>
          <div class="bg-slate-900 text-white p-5 rounded-3xl font-mono text-xs space-y-3 shadow-xl">
            <p>• $\ln(u \cdot v) = \ln u + \ln v$</p>
            <p>• $\ln(u^n) = n \cdot \ln u$</p>
            <p>• $\ln(u / v) = \ln u - \ln v$</p>
          </div>
          <p class="text-xs text-brand-primary font-bold uppercase mt-2">Dica: Use isso para derivar funções Cobb-Douglas!</p>
        </div>
      `
    }
  ],

  // --- TREINO 3/3: NÍVEL ABSTRATO (APLICAÇÃO) ---
  2: [
    {
      type: "economic_intuition",
      title: "A Taxa de Crescimento",
      html: `
        <div class="space-y-4">
          <p>Como medir quão rápido o PIB ($y$) está crescendo em termos percentuais? Use o logaritmo!</p>
          <div class="bg-emerald-50 border-2 border-emerald-200 p-6 rounded-3xl text-center">
            <p class="text-xs font-black text-emerald-800 uppercase mb-2">Crescimento Instantâneo</p>
            <p class="text-xl font-mono">$\frac{y'}{y} = \frac{d}{dt} \ln(y)$</p>
          </div>
          <p class="text-sm">A derivada do log natural de uma variável é exatamente a sua <strong>taxa de crescimento</strong>.</p>
        </div>
      `
    },
    {
      type: "formal",
      title: "Regra de L'Hôpital",
      html: `
        <div class="space-y-4">
          <p>Quando um limite resulta em $0/0$ ou $\infty/\infty$, derivamos o numerador e o denominador separadamente.</p>
          <div class="bg-slate-900 text-indigo-300 p-6 rounded-3xl text-center font-mono text-lg">
            $\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}$
          </div>
          <p class="text-xs italic text-slate-400">Essencial para avaliar modelos de crescimento de longo prazo quando o tempo tende ao infinito.</p>
        </div>
      `
    },
    {
      type: "economic_intuition",
      title: "Elasticidade e Cobb-Douglas",
      html: `
        <div class="space-y-4">
          <p>Na função $Q = AK^a L^b$, os expoentes são as elasticidades. Ao aplicar $\ln$, a relação torna-se linear:</p>
          <p class="text-center font-mono bg-slate-50 p-3 rounded-xl border border-slate-200">
            $\ln Q = \ln A + a \ln K + b \ln L$
          </p>
          <div class="p-4 bg-brand-primary text-white rounded-2xl shadow-xl text-center">
            <p class="font-black italic uppercase tracking-tighter">Parabéns! Você concluiu a Fase 1 de Matemática Aplicada!</p>
          </div>
        </div>
      `
    }
  ]
};
