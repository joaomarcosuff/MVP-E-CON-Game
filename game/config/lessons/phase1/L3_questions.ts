
import { Question } from '../../../../types';

export const L3_QUESTIONS: Question[] = [
  // --- TREINO 1/3: Básico (0-9) ---
  { id: "m1_l3_q1", type: "numeric", prompt: "Qual a derivada da função constante f(x) = 1.050?", answer: "0" },
  { id: "m1_l3_q2", type: "multiple_choice", prompt: "O Custo Fixo afeta a decisão na margem (produzir +1)?", options: ["Não", "Sim"], answer: "Não" },
  { id: "m1_l3_q3", type: "numeric", prompt: "Se C(q) = 500, quanto vale C'(10)?", answer: "0" },
  { id: "m1_l3_q4", type: "fill_gap", text: "A derivada de uma constante é sempre {{gap}}.", answer: "zero" },
  { id: "m1_l3_q5", type: "multiple_choice", prompt: "Geometricamente, o custo fixo é uma linha:", options: ["Horizontal", "Vertical", "Inclinada"], answer: "Horizontal" },
  { id: "m1_l3_q6", type: "numeric", prompt: "Qual a derivada de 1.000.000?", answer: "0" },
  { id: "m1_l3_q7", type: "fill_gap", text: "A inclinação de uma reta horizontal é sempre {{gap}}.", answer: "zero" },
  { id: "m1_l3_q8", type: "multiple_choice", prompt: "Se uma função não reage à mudança de x, sua derivada é:", options: ["0", "x", "1"], answer: "0" },
  { id: "m1_l3_q9", type: "multiple_choice", prompt: "Em f(x) = k, onde k é um número real, qual a derivada?", options: ["0", "k", "1"], answer: "0" },
  { id: "m1_l3_q10", type: "multiple_choice", prompt: "O custo do aluguel é um exemplo clássico de custo:", options: ["Fixo", "Marginal", "Variável"], answer: "Fixo" },

  // --- TREINO 2/3: Intermediário (10-19) ---
  { id: "m1_l3_q11", type: "numeric", prompt: "Dada a função C(q) = 2q + 500, qual o valor do Custo Marginal?", answer: "2" },
  { id: "m1_l3_q12", type: "multiple_choice", prompt: "Na função f(x) = x² + 50, por que o 50 desaparece na derivação?", options: ["É uma constante", "É um erro", "Ele vira x"], answer: "É uma constante" },
  { id: "m1_l3_q13", type: "multiple_choice", prompt: "Se o Custo Fixo de uma fábrica dobrar, o que acontece com o CMg?", options: ["Não muda", "Dobra também", "Diminuir"], answer: "Não muda" },
  { id: "m1_l3_q14", type: "numeric", prompt: "Calcule f'(10) para f(x) = 999.", answer: "0" },
  { id: "m1_l3_q15", type: "numeric", prompt: "Se L(q) = 10q - 200, qual o lucro marginal?", answer: "10" },
  { id: "m1_l3_q16", type: "multiple_choice", prompt: "Em C(q) = 0.5q² + 100, qual o custo fixo?", options: ["100", "0.5", "q"], answer: "100" },
  { id: "m1_l3_q17", type: "fill_gap", text: "A derivada da soma f(x) + k (constante) é f'(x) + {{gap}}.", answer: "zero" },
  { id: "m1_l3_q18", type: "numeric", prompt: "Qual a derivada de pi (3,1415...)?", answer: "0" },
  { id: "m1_l3_q19", type: "multiple_choice", prompt: "O custo fixo influencia o ponto onde RMg = CMg?", options: ["Não", "Sim"], answer: "Não" },
  { id: "m1_l3_q20", type: "numeric", prompt: "Se f(x) = 10, qual a inclinação em x=5?", answer: "0" },

  // --- TREINO 3/3: Avançado (20-29) ---
  { id: "m1_l3_q21", type: "fill_gap", text: "Tudo o que não reage à mudança tem derivada igual a {{gap}}.", answer: "zero" },
  { id: "m1_l3_q22", type: "numeric", prompt: "C(q) = 10q + sqrt(100). Qual o Custo Marginal?", answer: "10" },
  { id: "m1_l3_q23", type: "numeric", prompt: "Se f(x) = e² (onde e é a base natural), qual f'(x)?", answer: "0" },
  { id: "m1_l3_q24", type: "multiple_choice", prompt: "Por que 'Sunk Costs' são ignorados na margem?", options: ["Sua variação é zero", "Eles são muito caros", "Eles mudam sempre"], answer: "Sua variação é zero" },
  { id: "m1_l3_q25", type: "multiple_choice", prompt: "Se o Custo Total sobe verticalmente no gráfico, o CMg:", options: ["Permanece o mesmo", "Aumenta", "Cai"], answer: "Permanece o mesmo" },
  { id: "m1_l3_q26", type: "numeric", prompt: "Qual a derivada de sen(90 graus)?", answer: "0" },
  { id: "m1_l3_q27", type: "fill_gap", text: "O empresário que foca no aluguel passado comete a falácia do custo {{gap}}.", answer: "afundado" },
  { id: "m1_l3_q28", type: "numeric", prompt: "C(q) = k * q^0. Qual a derivada?", answer: "0" },
  { id: "m1_l3_q29", type: "multiple_choice", prompt: "Se o Capital (K) é fixo no curto prazo, quanto vale dK/dt?", options: ["0", "K", "1"], answer: "0" },
  { id: "m1_l3_q30", type: "numeric", prompt: "Se f(x) = 10² - 100. Qual o valor de f'(x)?", answer: "0" },
  {
    id: "m1_l3_q31",
    type: "graph_point",
    prompt: "No gráfico abaixo, identifique a linha que representa uma função com DERIVADA IGUAL A ZERO.",
    instruction: "Toque em qualquer ponto da linha perfeitamente horizontal.",
    svgPath: "M 0 150 L 300 150",
    target: { x: 150, y: 150, tolerance: 150 },
    answer: "correct",
    explanation: "Linhas horizontais representam valores constantes. Como não há inclinação (subida ou descida), a taxa de variação é zero."
  }
];
