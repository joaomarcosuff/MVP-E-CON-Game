
import { Question } from '../../../../types';

export const L5_QUESTIONS: Question[] = [
  // --- TREINO 1/3: Fundamentos e Conceitos (0-9) ---
  { id: "m1_l5_q1", type: "fill_gap", text: "O Lucro Marginal é a diferença entre a Receita Marginal e o {{gap}}.", answer: "Custo Marginal" },
  { id: "m1_l5_q2", type: "numeric", prompt: "Se RMg = 15 e CMg = 10, qual o Lucro Marginal?", answer: "5" },
  { id: "m1_l5_q3", type: "multiple_choice", prompt: "Se o Lucro Marginal é POSITIVO, a empresa deve:", options: ["Aumentar a produção", "Reduzir a produção", "Parar de produzir"], answer: "Aumentar a produção" },
  { id: "m1_l5_q4", type: "numeric", prompt: "Se RMg = 20 e CMg = 20, qual o Lucro Marginal?", answer: "0" },
  { id: "m1_l5_q5", type: "fill_gap", text: "A Receita Marginal mede o ganho obtido ao vender a {{gap}} unidade.", answer: "próxima" },
  { id: "m1_l5_q6", type: "multiple_choice", prompt: "No ponto de Lucro Máximo, a derivada do Lucro (L') é:", options: ["Zero", "Um", "Positiva"], answer: "Zero" },
  { id: "m1_l5_q7", type: "numeric", prompt: "Dada a Receita R(q) = 50q, qual a Receita Marginal?", answer: "50" },
  { id: "m1_l5_q8", type: "multiple_choice", prompt: "Se o CMg > RMg, a última unidade produzida gerou:", options: ["Prejuízo marginal", "Lucro marginal", "Equilíbrio"], answer: "Prejuízo marginal" },
  { id: "m1_l5_q9", type: "fill_gap", text: "Na economia, o termo 'Marginal' é sinônimo matemático de {{gap}}.", answer: "derivada" },
  { id: "m1_l5_q10", type: "numeric", prompt: "Se L(q) = 8q - 100, qual o Lucro Marginal?", answer: "8" },

  // --- TREINO 2/3: Funções Lineares e Decisões (10-19) ---
  { id: "m1_l5_q11", type: "numeric", prompt: "C(q) = 5q + 200 e R(q) = 12q. Qual o Lucro Marginal?", answer: "7" },
  { id: "m1_l5_q12", type: "multiple_choice", prompt: "Se L'(q) = -2, aumentar a produção fará o lucro total:", options: ["Diminuir", "Aumentar", "Ficar constante"], answer: "Diminuir" },
  { id: "m1_l5_q13", type: "numeric", prompt: "R(q) = 100q - q². Qual a Receita Marginal em q=10?", answer: "80" },
  { id: "m1_l5_q14", type: "fill_gap", text: "Se RMg = CMg, a empresa atingiu o ponto de {{gap}}.", answer: "lucro máximo" },
  { id: "m1_l5_q15", type: "numeric", prompt: "Se C(q) = 0.5q² + 10q, qual o Custo Marginal em q=20?", answer: "30" },
  { id: "m1_l5_q16", type: "multiple_choice", prompt: "O Custo Fixo de $1.000 influencia o Custo Marginal?", options: ["Não", "Sim"], answer: "Não" },
  { id: "m1_l5_q17", type: "numeric", prompt: "Dada L(q) = 50q - 0.5q², qual o valor de q onde L'(q) = 0?", answer: "50" },
  { id: "m1_l5_q18", type: "numeric", prompt: "Se RMg = 40 e CMg = 2q. Em qual q o lucro para de crescer?", answer: "20" },
  { id: "m1_l5_q19", type: "fill_gap", text: "A função que subtrai o custo total da receita total é o {{gap}}.", answer: "Lucro" },
  { id: "m1_l5_q20", type: "numeric", prompt: "Se R'(q) = 15 e C'(q) = 12, quanto lucro a 101ª unidade traz?", answer: "3" },

  // --- TREINO 3/3: Otimização e Análise Complexa (20-29) ---
  { id: "m1_l5_q21", type: "numeric", prompt: "L(q) = -q² + 60q - 500. Qual a produção que maximiza o lucro?", answer: "30" },
  { id: "m1_l5_q22", type: "multiple_choice", prompt: "Se CMg é crescente e RMg é constante, o Lucro Marginal é:", options: ["Decrescente", "Crescente", "Constante"], answer: "Decrescente" },
  { id: "m1_l5_q23", type: "numeric", prompt: "C(q) = q³ - 2q² + 10q. Qual o CMg no ponto q=2?", answer: "14" },
  { id: "m1_l5_q24", type: "fill_gap", text: "Quando a derivada do lucro é negativa, dizemos que a empresa está operando com prejuízo {{gap}}.", answer: "marginal" },
  { id: "m1_l5_q25", type: "numeric", prompt: "R(q) = 120q - 3q². Em qual q a Receita Marginal é 60?", answer: "10" },
  { id: "m1_l5_q26", type: "multiple_choice", prompt: "Se f(q) representa a Utilidade, f'(q) = 0 indica:", options: ["Saciação máxima", "Fome extrema", "Sede"], answer: "Saciação máxima" },
  { id: "m1_l5_q27", type: "numeric", prompt: "Se L'(q) = 100 - 4q, qual o lucro adicional se passarmos de q=10 para q=11?", answer: "56" },
  { id: "m1_l5_q28", type: "fill_gap", text: "Se o CMg > RMg em todas as unidades, a empresa deve {{gap}}.", answer: "fechar" },
  { id: "m1_l5_q29", type: "numeric", prompt: "Dada a demanda P = 100 - q. A Receita é R = P*q = 100q - q². Qual a RMg em q=20?", answer: "60" },
  { id: "m1_l5_q30", type: "numeric", prompt: "No problema anterior (RMg = 100-2q), se CMg = 20, qual q maximiza o lucro?", answer: "40" }
];
