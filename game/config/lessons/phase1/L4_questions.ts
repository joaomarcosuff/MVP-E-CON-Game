
import { Question } from '../../../../types';

export const L4_QUESTIONS: Question[] = [
  // --- TREINO 1/3: Fundamentos da Linearidade (0-9) ---
  { id: "m1_l4_q1", type: "numeric", prompt: "Qual a derivada da função f(x) = x² + x?", answer: "2x + 1" },
  { id: "m1_l4_q2", type: "multiple_choice", prompt: "Qual a derivada de g(x) = 3x² - 5x?", options: ["6x - 5", "3x - 5", "6x"], answer: "6x - 5" },
  { id: "m1_l4_q3", type: "multiple_choice", prompt: "Dada f(x) = x³ + x² + x, qual sua derivada?", options: ["3x² + 2x + 1", "x² + x + 1", "3x² + 2x"], answer: "3x² + 2x + 1" },
  { id: "m1_l4_q4", type: "fill_gap", text: "A derivada de uma soma de funções é igual à {{gap}} das derivadas individuais.", answer: "soma" },
  { id: "m1_l4_q5", type: "numeric", prompt: "Se o custo total é C(q) = 10q + 50, qual o Custo Marginal?", answer: "10" },
  { id: "m1_l4_q6", type: "multiple_choice", prompt: "Qual a derivada de f(x) = 4x³ + 100?", options: ["12x²", "12x² + 100", "4x²"], answer: "12x²" },
  { id: "m1_l4_q7", type: "multiple_choice", prompt: "Calcule f'(x) para f(x) = -2x² + 8x - 12.", options: ["-4x + 8", "4x + 8", "-2x + 8"], answer: "-4x + 8" },
  { id: "m1_l4_q8", type: "numeric", prompt: "Se f(x) = x² + 3x, qual o valor de f'(1)?", answer: "5" },
  { id: "m1_l4_q9", type: "multiple_choice", prompt: "Qual a derivada de h(x) = 0.5x² + 2x?", options: ["x + 2", "2x + 2", "0.5x + 2"], answer: "x + 2" },
  { id: "m1_l4_q10", type: "multiple_choice", prompt: "Qual a derivada do polinômio f(x) = ax + b?", options: ["a", "b", "ax"], answer: "a" },

  // --- TREINO 2/3: Aplicação Econômica e Curvatura (10-19) ---
  { id: "m1_l4_q11", type: "multiple_choice", prompt: "Se C(q) = q² + 20q + 100, qual o Custo Marginal?", options: ["2q + 20", "q + 20", "2q"], answer: "2q + 20" },
  { id: "m1_l4_q12", type: "multiple_choice", prompt: "Dada a receita R(q) = 100q - 2q², qual a Receita Marginal?", options: ["100 - 4q", "100 - 2q", "100q - 4q"], answer: "100 - 4q" },
  { id: "m1_l4_q13", type: "numeric", prompt: "Para a receita R(q) = 100q - 2q², em qual valor de q a Receita Marginal é zero?", answer: "25" },
  { id: "m1_l4_q14", type: "multiple_choice", prompt: "Se R = 50q e C = q² + 10q, qual o Lucro Marginal (R' - C')?", options: ["40 - 2q", "50 - 2q", "40"], answer: "40 - 2q" },
  { id: "m1_l4_q15", type: "numeric", prompt: "Qual a inclinação da reta tangente à curva f(x) = x³ - x no ponto x=2?", answer: "11" },
  { id: "m1_l4_q16", type: "multiple_choice", prompt: "Na função C(q) = 0.1q² + 5q + 2000, qual o custo fixo?", options: ["2000", "0.1", "5"], answer: "2000" },
  { id: "m1_l4_q17", type: "numeric", prompt: "Se f(x) = x² - 4x + 4, qual o valor de x que torna f'(x) = 0?", answer: "2" },
  { id: "m1_l4_q18", type: "multiple_choice", prompt: "Qual cresce mais rápido em x=10: f(x)=10x ou g(x)=x²+1?", options: ["g(x)", "f(x)"], answer: "g(x)" },
  { id: "m1_l4_q19", type: "multiple_choice", prompt: "Qual a derivada de f(x) = (x³/3) + (x²/2) + x?", options: ["x² + x + 1", "3x² + 2x + 1", "x³ + x²"], answer: "x² + x + 1" },
  { id: "m1_l4_q20", type: "numeric", prompt: "Se CMg = 2q + 5, qual era o grau do polinômio do Custo Total?", answer: "2" },

  // --- TREINO 3/3: Síntese e Otimização Marginal (20-29) ---
  { id: "m1_l4_q21", type: "numeric", prompt: "Se RMg = 100 - 2q e CMg = 20 + 2q, qual o q onde RMg = CMg?", answer: "20" },
  { id: "m1_l4_q22", type: "numeric", prompt: "Dada L(q) = -q² + 60q - 500, qual o q de lucro máximo (L'=0)?", answer: "30" },
  { id: "m1_l4_q23", type: "multiple_choice", prompt: "Se C(q) = q³ - 6q² + 15q, qual o polinômio do CMg?", options: ["3q² - 12q + 15", "3q² - 6q + 15", "q² - 6q"], answer: "3q² - 12q + 15" },
  { id: "m1_l4_q24", type: "multiple_choice", prompt: "Calcule a derivada de f(x) = x(x + 5) + 10.", options: ["2x + 5", "x + 5", "2x"], answer: "2x + 5" },
  { id: "m1_l4_q25", type: "numeric", prompt: "Onde f''(x) = 0 para f(x) = x³ - 3x²?", answer: "1" },
  { id: "m1_l4_q26", type: "numeric", prompt: "Qual a derivada da soma de 100 termos, onde cada termo é 'x'?", answer: "100" },
  { id: "m1_l4_q27", type: "numeric", prompt: "Para C(q) = q² + 10q, em que q o CMg é 50?", answer: "20" },
  { id: "m1_l4_q28", type: "multiple_choice", prompt: "Se f(x) = ax² + bx + c e a < 0, f'(x)=0 indica um ponto de:", options: ["Máximo", "Mínimo"], answer: "Máximo" },
  { id: "m1_l4_q29", type: "numeric", prompt: "Se f(x) = (x-2)(x-3), qual o valor de f'(2.5)?", answer: "0" },
  { id: "m1_l4_q30", type: "numeric", prompt: "Dada L'(q) = -3q² + 60q - 225. Qual o maior valor de q que zera L'?", answer: "15" }
];
