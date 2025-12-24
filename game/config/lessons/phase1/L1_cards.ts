
import { LessonCard } from '../../../../types';

export const L1_MASTERY_CARDS: Record<number, LessonCard[]> = {
  0: [
    {
      type: "story",
      title: "O Radar e a Multa",
      html: `
        <div class="space-y-4">
          <p>Imagine que você viajou de São Paulo ao Rio (450km) em 5 horas. Sua <strong>Velocidade Média</strong> foi de 90km/h.</p>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-3 italic text-sm text-slate-700">
            "O policial te para: 'Você passou a 140km/h no radar ali atrás!'"
          </div>
          <p>O radar não se importa com a sua média. Ele mediu sua <strong>Velocidade Marginal</strong> (instantânea), ou seja, a derivada da sua posição no tempo naquele exato momento.</p>
        </div>
      `
    },
    {
      type: "visual",
      title: "Média vs. Marginal no Gráfico",
      html: `
        <div class="space-y-4">
          <p>A <strong>Média</strong> olha para dois pontos e traça uma linha entre eles (reta azul). A <strong>Marginal</strong> olha para apenas UM ponto (reta vermelha).</p>
          <div class="relative h-48 w-full bg-slate-50 border-2 border-slate-200 rounded-3xl overflow-hidden flex items-center justify-center p-4">
            <svg viewBox="0 0 300 200" class="w-full h-full max-w-xs">
              <!-- Curva -->
              <path d="M 30 170 Q 150 170 270 30" stroke="#94a3b8" stroke-width="2" fill="none" />
              <!-- Reta Secante (Média) -->
              <line x1="30" y1="170" x2="270" y2="30" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4" />
              <!-- Reta Tangente (Marginal) -->
              <line x1="150" y1="180" x2="280" y2="20" stroke="#ef4444" stroke-width="3" />
              <circle cx="215" cy="95" r="5" fill="#ef4444" />
              
              <text x="40" y="150" class="text-[10px] fill-blue-600 font-bold uppercase">Média (Secante)</text>
              <text x="180" y="140" class="text-[10px] fill-red-600 font-bold uppercase">Marginal (Tangente)</text>
            </svg>
          </div>
          <p class="text-xs text-slate-500 italic text-center">Note como a reta vermelha indica a direção exata da curva naquele ponto.</p>
        </div>
      `
    },
    {
      type: "economic_intuition",
      title: "O Prazer da Pizza",
      html: `
        <div class="space-y-4">
          <p>Por que a primeira fatia de pizza é maravilhosa e a décima te deixa enjoado?</p>
          <div class="bg-amber-50 p-4 rounded-2xl border border-amber-200">
            <p class="text-sm">A <strong>Utilidade Total</strong> (satisfação acumulada) aumenta, mas a <strong>Utilidade Marginal</strong> (o prazer da PRÓXIMA fatia) diminui.</p>
          </div>
          <p>Na economia, tomamos decisões baseadas nesse "valor extra". Se o prazer extra é menor que o preço, você para de comer.</p>
        </div>
      `
    }
  ],
  1: [
    {
      type: "visual",
      title: "O Zoom Infinito",
      html: `
        <div class="space-y-4">
          <p>Geometricamente, a derivada surge quando damos um "zoom" tão grande em um ponto da curva que ela parece uma linha reta.</p>
          <div class="relative h-40 w-full bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden">
             <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#4338ca_1px,transparent_1px)] [background-size:16px_16px]"></div>
             <svg viewBox="0 0 200 100" class="w-48">
                <path d="M 20 80 L 180 20" stroke="#4338ca" stroke-width="1" stroke-dasharray="2 2" />
                <circle cx="100" cy="50" r="30" fill="none" stroke="white" stroke-width="0.5" />
                <line x1="70" y1="60" x2="130" y2="40" stroke="white" stroke-width="2" />
             </svg>
          </div>
          <p class="text-sm text-center font-serif">
            $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$
          </p>
          <p class="text-xs text-slate-400 text-center uppercase tracking-widest font-black">h é a distância que estamos reduzindo a zero</p>
        </div>
      `
    },
    {
      type: "concept",
      title: "A Inclinação é o Preço",
      html: `
        <div class="space-y-4">
          <p>Se você tem uma função de Custo $C(q) = 10q$, a derivada é 10. Graficamente, isso é uma reta com inclinação constante.</p>
          <p>Não importa se você produz a 1ª ou a 1.000ª unidade, o <strong>Custo Marginal</strong> é sempre 10$.</p>
          <div class="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500">
            <p class="text-xs font-bold uppercase text-indigo-600">Conclusão Econômica:</p>
            <p class="text-sm italic">"Em funções lineares, a marginal e a média são idênticas."</p>
          </div>
        </div>
      `
    }
  ],
  2: [
    {
      type: "formal",
      title: "O Topo da Montanha do Lucro",
      html: `
        <div class="space-y-4">
          <p>Imagine que você está subindo uma montanha para alcançar o lucro máximo.</p>
          <div class="relative h-40 w-full bg-emerald-50 border-b-4 border-emerald-200 rounded-t-3xl overflow-hidden">
            <svg viewBox="0 0 300 150" class="w-full h-full">
              <path d="M 20 150 Q 150 20 280 150" stroke="#059669" stroke-width="4" fill="none" />
              <line x1="100" y1="20" x2="200" y2="20" stroke="#10b981" stroke-width="2" stroke-dasharray="4" />
              <circle cx="150" cy="50" r="6" fill="#059669" />
            </svg>
          </div>
          <p class="text-sm">No ponto mais alto (máximo), a inclinação é <strong>ZERO</strong>. A reta tangente é horizontal.</p>
          <div class="p-3 bg-slate-900 text-emerald-400 rounded-xl font-mono text-center shadow-xl">
            $L'(q) = 0 \\implies RMg = CMg$
          </div>
        </div>
      `
    }
  ]
};
