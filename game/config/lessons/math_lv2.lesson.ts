
import { Lesson } from '../../../types';

export const MATH_LV2_LESSONS: Lesson[] = [
  {
    id: "MAT2-L01",
    title: "1. Reta Tangente",
    description: "Interpretação geométrica da derivada e o 'velocímetro' local.",
    xp: 100,
    cards: [
      {
        type: "visual",
        title: "A Reta que Toca",
        html: "<p>A reta tangente em um ponto $(x_0, y_0)$ é a melhor aproximação linear da função naquele local.</p>",
        latex: "$$y - y_0 = f'(x_0)(x - x_0)$$"
      }
    ],
    questions: [
      { id: "m2_l1_q1", type: "multiple_choice", prompt: "Se a derivada em um ponto é positiva, a reta tangente é:", options: ["Crescente", "Decrescente", "Horizontal"], answer: "Crescente" },
      { id: "m2_l1_q2", type: "numeric", prompt: "Se f(x) = x^2, qual a inclinação da reta tangente em x=3?", answer: "6" },
      { id: "m2_l1_q3", type: "fill_gap", text: "Uma reta tangente horizontal indica que o valor da derivada naquele ponto é {{gap}}.", answer: "zero" },
      { id: "m2_l1_q4", type: "multiple_choice", prompt: "A reta tangente toca a curva em quantos pontos na vizinhança imediata?", options: ["Apenas 1", "Sempre 2", "Infinitos"], answer: "Apenas 1" },
      { id: "m2_l1_q5", type: "numeric", prompt: "Qual o coeficiente angular da reta y = 4x + 10?", answer: "4" }
    ]
  },
  {
    id: "MAT2-L02",
    title: "2. Máximos e Mínimos",
    description: "Encontrando os pontos críticos da economia.",
    xp: 100,
    cards: [
      {
        type: "concept",
        title: "Pontos Críticos",
        html: "<p>Para achar topos e vales, procuramos onde a inclinação é nula. É a chamada Condição de Primeira Ordem (CPO).</p>",
        latex: "$$f'(x) = 0$$"
      }
    ],
    questions: [
      { id: "m2_l2_q1", type: "multiple_choice", prompt: "Um ponto onde f'(x) = 0 é chamado de:", options: ["Ponto Crítico", "Ponto de Inflexão", "Ponto de Descontinuidade"], answer: "Ponto Crítico" },
      { id: "m2_l2_q2", type: "numeric", prompt: "Dada f(x) = -x^2 + 8x. Em qual valor de x temos o máximo?", answer: "4", explanation: "-2x + 8 = 0 -> x = 4" },
      { id: "m2_l2_q3", type: "fill_gap", text: "Se f'(x) muda de positivo para negativo, o ponto crítico é um {{gap}} local.", answer: "máximo" }
    ]
  }
] as const;
