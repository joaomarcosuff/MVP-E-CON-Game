
import { Lesson } from '../../../types';

export const MATH_LV3_LESSONS: Lesson[] = [
  {
    id: "MAT3-L01",
    title: "1. Derivadas Parciais",
    description: "Análise de múltiplas variáveis (Ceteris Paribus).",
    xp: 150,
    cards: [
      {
        type: "formal",
        title: "Ceteris Paribus",
        html: "<p>Derivamos em relação a uma variável tratando todas as outras como se fossem números constantes.</p>",
        latex: "$$\\frac{\\partial f}{\\partial x}$$"
      }
    ],
    questions: [
      { id: "m3_l1_q1", type: "numeric", prompt: "Dada f(x,y) = x^2 + 3xy. Qual a derivada parcial em relação a x no ponto (1, 2)?", answer: "8", explanation: "df/dx = 2x + 3y -> 2(1) + 3(2) = 8" },
      { id: "m3_l1_q2", type: "fill_gap", text: "O símbolo ∂ (dê curvo) representa uma derivada {{gap}}.", answer: "parcial" },
      { id: "m3_l1_q3", type: "numeric", prompt: "Dada f(x,y) = y^3 + 10. Qual a derivada parcial em relação a x?", answer: "0" }
    ]
  }
] as const;
