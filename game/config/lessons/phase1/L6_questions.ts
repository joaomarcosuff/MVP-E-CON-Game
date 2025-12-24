
import { Question } from '../../../../types';

export const L6_QUESTIONS: Question[] = [
  // --- NÍVEL CONCRETO (FÁCEIS: 1-10) ---
  { 
    id: "m1_l6_q1", 
    type: "multiple_choice", 
    prompt: "Se o Custo Fixo é 100, o Custo Médio (CMe) é 100/q. O que acontece com o CMe quando a produção (q) aumenta?", 
    options: ["Aumenta", "Diminuí", "Fica parado"], 
    answer: "Diminuí" 
  },
  { 
    id: "m1_l6_q2", 
    type: "fill_gap", 
    text: "Na economia, funções como 1/x representam uma relação {{gap}}: quando x cresce, o resultado cai.", 
    answer: "inversa" 
  },
  { 
    id: "m1_l6_q3", 
    type: "multiple_choice", 
    prompt: "A função raiz quadrada (√x) cresce cada vez mais devagar. Isso lembra qual conceito econômico?", 
    options: ["Retornos Crescentes", "Utilidade Marginal Decrescente"], 
    answer: "Utilidade Marginal Decrescente" 
  },
  { 
    id: "m1_l6_q4", 
    type: "fill_gap", 
    text: "Para 'subir' um x que está no denominador, devemos trocar o {{gap}} do seu expoente.", 
    answer: "sinal" 
  },
  { 
    id: "m1_l6_q5", 
    type: "multiple_choice", 
    prompt: "Uma raiz quadrada (√x) pode ser vista como x elevado a qual fração?", 
    options: ["1/2", "2/1", "-1/2"], 
    answer: "1/2" 
  },
  { 
    id: "m1_l6_q6", 
    type: "numeric", 
    prompt: "Se x = 4, qual o valor de x^{1/2}?", 
    answer: "2" 
  },
  { 
    id: "m1_l6_q7", 
    type: "fill_gap", 
    text: "O termo 1/x² é o mesmo que x elevado a {{gap}}.", 
    answer: "-2" 
  },
  { 
    id: "m1_l6_q8", 
    type: "multiple_choice", 
    prompt: "Se a inclinação de uma curva é sempre negativa (como em 1/x), a derivada será um número:", 
    options: ["Positivo", "Negativo", "Zero"], 
    answer: "Negativo" 
  },
  { 
    id: "m1_l6_q9", 
    type: "fill_gap", 
    text: "A função y = x^{-1} é uma 'pola' (padrão) onde o gráfico nunca toca o eixo {{gap}}.", 
    answer: "zero" 
  },
  { 
    id: "m1_l6_q10", 
    type: "numeric", 
    prompt: "Qual o inverso de 5 escrito na forma de potência (5^n)? O valor de n é:", 
    answer: "-1" 
  },

  // --- NÍVEL PICTÓRICO/ABSTRATO (MÉDIAS: 11-20) ---
  { 
    id: "m1_l6_q11", 
    type: "fill_gap", 
    text: "Ao derivar x⁻¹, o -1 'tomba' e o novo expoente vira {{gap}}.", 
    answer: "-2" 
  },
  { 
    id: "m1_l6_q12", 
    type: "numeric", 
    prompt: "Qual a derivada de f(x) = x⁻³? (Digite apenas o coeficiente n de nx^k)", 
    answer: "-3" 
  },
  { 
    id: "m1_l6_q13", 
    type: "multiple_choice", 
    prompt: "Qual o primeiro passo para derivar f(x) = 1/x⁴?", 
    options: ["Derivar o 1", "Reescrever como x⁻⁴", "Usar regra da soma"], 
    answer: "Reescrever como x⁻⁴" 
  },
  { 
    id: "m1_l6_q14", 
    type: "fill_gap", 
    text: "A derivada de √x (ou x^{1/2}) é {{gap}}x^{-1/2}.", 
    answer: "1/2" 
  },
  { 
    id: "m1_l6_q15", 
    type: "multiple_choice", 
    prompt: "O termo x^{3/2} representa qual operação?", 
    options: ["Raiz quadrada de x ao cubo", "Raiz cúbica de x ao quadrado"], 
    answer: "Raiz quadrada de x ao cubo" 
  },
  { 
    id: "m1_l6_q16", 
    type: "numeric", 
    prompt: "Calcule a derivada de f(x) = 2x⁻¹. Em x=1, o valor é:", 
    answer: "-2" 
  },
  { 
    id: "m1_l6_q17", 
    type: "fill_gap", 
    text: "No método Gasing, o padrão para raízes é: o índice da raiz vai para o {{gap}} do expoente fracionário.", 
    answer: "denominador" 
  },
  { 
    id: "m1_l6_q18", 
    type: "multiple_choice", 
    prompt: "A derivada de 1/x é -1/x². Isso significa que a inclinação da curva é:", 
    options: ["Sempre positiva", "Sempre negativa"], 
    answer: "Sempre negativa" 
  },
  { 
    id: "m1_l6_q19", 
    type: "numeric", 
    prompt: "Se f(x) = x^{1/2}, qual o valor do expoente após a primeira derivada?", 
    answer: "-0.5" 
  },
  { 
    id: "m1_l6_q20", 
    type: "fill_gap", 
    text: "Para a função f(x) = 1/√x, a forma de potência correta para derivar é x elevado a {{gap}}.", 
    answer: "-1/2" 
  },

  // --- NÍVEL DIFÍCIL (21-30) ---
  { 
    id: "m1_l6_q21", 
    type: "numeric", 
    prompt: "Custo Fixo (CF) = 50. Logo, CMe = 50q⁻¹. Qual a taxa de variação do CMe (derivada) quando q=5?", 
    answer: "-2" 
  },
  { 
    id: "m1_l6_q22", 
    type: "multiple_choice", 
    prompt: "A função de produção é Q = L^{1/2}. Se dobrarmos o trabalho (L), o produto (Q) dobra?", 
    options: ["Sim", "Não, cresce menos que o dobro"], 
    answer: "Não, cresce menos que o dobro" 
  },
  { 
    id: "m1_l6_q23", 
    type: "fill_gap", 
    text: "A derivada de 3/x² é -6x elevado a {{gap}}.", 
    answer: "-3" 
  },
  { 
    id: "m1_l6_q24", 
    type: "numeric", 
    prompt: "Calcule f'(4) para f(x) = 8√x. (Dica: 8x^{1/2})", 
    answer: "2" 
  },
  { 
    id: "m1_l6_q25", 
    type: "multiple_choice", 
    prompt: "Se a derivada de uma função de custo é -C/q², o custo total está:", 
    options: ["Aumentando", "Diminuindo"], 
    answer: "Diminuindo" 
  },
  { 
    id: "m1_l6_q26", 
    type: "numeric", 
    prompt: "Dada f(x) = x⁻² + x², qual o valor da derivada em x=1?", 
    answer: "0" 
  },
  { 
    id: "m1_l6_q27", 
    type: "fill_gap", 
    text: "A função h(x) = 1/x³ tem uma derivada de segunda ordem {{gap}} (positiva/negativa) para x > 0.", 
    answer: "positiva" 
  },
  { 
    id: "m1_l6_q28", 
    type: "multiple_choice", 
    prompt: "Qual a derivada de f(x) = 10x^{0.2}?", 
    options: ["2x^{-0.8}", "2x^{1.2}", "0.2x^{-0.8}"], 
    answer: "2x^{-0.8}" 
  },
  { 
    id: "m1_l6_q29", 
    type: "numeric", 
    prompt: "Se a Utilidade é U = √x, qual a Utilidade Marginal (derivada) quando x=25? (Use decimais, ex: 0.1)", 
    answer: "0.1" 
  },
  { 
    id: "m1_l6_q30", 
    type: "multiple_choice", 
    prompt: "O conceito de 'Custo Marginal' para uma função de CMe = 100/q é sempre:", 
    options: ["Positivo", "Negativo", "Zero (pois CF é constante)"], 
    answer: "Zero (pois CF é constante)" 
  }
];
