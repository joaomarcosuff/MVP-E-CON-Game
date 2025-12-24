
import { Question } from '../../../../types';

export const L10_QUESTIONS: Question[] = [
  // --- NÍVEL CONCRETO (FÁCEIS: 1-10) ---
  { 
    id: "m1_l10_q1", 
    type: "multiple_choice", 
    prompt: "O número $e$ (aproximadamente $2,718$) é a base dos logaritmos naturais. Ele representa o limite de qual processo econômico?", 
    options: ["Juros simples", "Juros compostos anuais", "Juros compostos contínuos"], 
    answer: "Juros compostos contínuos" 
  },
  { 
    id: "m1_l10_q2", 
    type: "fill_gap", 
    text: "A função $y = e^t$ é a única função cuja {{gap}} é igual à própria função.", 
    answer: "derivada" 
  },
  { 
    id: "m1_l10_q3", 
    type: "multiple_choice", 
    prompt: "Se o valor de uma conta bancária cresce segundo $V = 1000e^{0,05t}$, o que o número $0,05$ representa?", 
    options: ["O saldo inicial", "A taxa de crescimento instantânea", "O tempo total"], 
    answer: "A taxa de crescimento instantânea" 
  },
  { 
    id: "m1_l10_q4", 
    type: "fill_gap", 
    text: "A função logarítmica natural $\\ln(x)$ só é definida para valores de $x$ maiores que {{gap}}.", 
    answer: "zero" 
  },
  { 
    id: "m1_l10_q5", 
    type: "numeric", 
    prompt: "Qual é o valor de $\\ln(1)$?", 
    answer: "0" 
  },
  { 
    id: "m1_l10_q6", 
    type: "multiple_choice", 
    prompt: "Se uma população de bactérias dobra a cada período, seu crescimento é do tipo:", 
    options: ["Linear", "Exponencial", "Logarítmico"], 
    answer: "Exponencial" 
  },
  { 
    id: "m1_l10_q7", 
    type: "fill_gap", 
    text: "O inverso da função exponencial $y = e^x$ é a função {{gap}}.", 
    answer: "logarítmica" 
  },
  { 
    id: "m1_l10_q8", 
    type: "numeric", 
    prompt: "Qual é o valor aproximado da base $e$ (use duas casas decimais)?", 
    answer: "2.72" 
  },
  { 
    id: "m1_l10_q9", 
    type: "fill_gap", 
    text: "Na economia, usamos $\\ln(x)$ para transformar relações de multiplicação em relações de {{gap}}.", 
    answer: "adição" 
  },
  { 
    id: "m1_l10_q10", 
    type: "multiple_choice", 
    prompt: "A curva da função $e^x$ está sempre acima de qual eixo no gráfico?", 
    options: ["Eixo X (horizontal)", "Eixo Y (vertical)"], 
    answer: "Eixo X (horizontal)" 
  },

  // --- NÍVEL PICTÓRICO/ABSTRATO (MÉDIAS: 11-20) ---
  { 
    id: "m1_l10_q11", 
    type: "fill_gap", 
    text: "A regra de derivação para $f(x) = \\ln(x)$ é $f'(x) = {{gap}}.", 
    answer: "1/x" 
  },
  { 
    id: "m1_l10_q12", 
    type: "numeric", 
    prompt: "Qual a inclinação da reta tangente de $y = e^x$ no ponto $x = 0$? (Dica: $e^0 = 1$)", 
    answer: "1" 
  },
  { 
    id: "m1_l10_q13", 
    type: "multiple_choice", 
    prompt: "Qual é a derivada de $y = e^{5x}$?", 
    options: ["e^{5x}", "5e^{5x}", "5x * e^{5x}"], 
    answer: "5e^{5x}" 
  },
  { 
    id: "m1_l10_q14", 
    type: "fill_gap", 
    text: "A propriedade $\\ln(uv) = \\ln(u) + {{gap}}$ ajuda a simplificar derivadas de produtos.", 
    answer: "ln(v)" 
  },
  { 
    id: "m1_l10_q15", 
    type: "multiple_choice", 
    prompt: "Como se comporta o gráfico de $\\ln(x)$ para $x > 1$?", 
    options: ["Cresce a taxas crescentes", "Cresce a taxas decrescentes", "É uma linha reta"], 
    answer: "Cresce a taxas decrescentes" 
  },
  { 
    id: "m1_l10_q16", 
    type: "fill_gap", 
    text: "Para derivar $y = \\ln(f(x))$, a fórmula é $f'(x)$ dividida por {{gap}}.", 
    answer: "f(x)" 
  },
  { 
    id: "m1_l10_q17", 
    type: "numeric", 
    prompt: "Se $y = \\ln(x^3)$, use a regra da potência para simplificar: $y = k \\cdot \\ln(x)$. Qual o valor de $k$?", 
    answer: "3" 
  },
  { 
    id: "m1_l10_q18", 
    type: "multiple_choice", 
    prompt: "A derivada da função $y = 2^x$ envolve o termo $\\ln(2)$. Isso ocorre porque mudamos a base para:", 
    options: ["Base 10", "Base e", "Base x"], 
    answer: "Base e" 
  },
  { 
    id: "m1_l10_q19", 
    type: "fill_gap", 
    text: "O valor de $\\ln(e^x)$ é simplesmente {{gap}}.", 
    answer: "x" 
  },
  { 
    id: "m1_l10_q20", 
    type: "numeric", 
    prompt: "Calcule $f'(2)$ para $f(x) = \\ln(x)$. (Use decimais: 0.5)", 
    answer: "0.5" 
  },

  // --- NÍVEL DIFÍCIL (APLICADAS: 21-30) ---
  { 
    id: "m1_l10_q21", 
    type: "numeric", 
    prompt: "Uma cultura de bactérias cresce conforme $P(t) = 1000e^{0,1t}$. Qual a taxa de crescimento instantânea (em valor decimal)?", 
    answer: "0.1" 
  },
  { 
    id: "m1_l10_q22", 
    type: "multiple_choice", 
    prompt: "A taxa de crescimento de uma função $y=f(t)$ pode ser encontrada calculando a derivada de:", 
    options: ["f(t)^2", "ln f(t)", "sqrt(f(t))"], 
    answer: "ln f(t)" 
  },
  { 
    id: "m1_l10_q23", 
    type: "fill_gap", 
    text: "A elasticidade pontual de $y$ em relação a $x$ é a derivada de $\\ln(y)$ em relação a {{gap}}.", 
    answer: "ln(x)" 
  },
  { 
    id: "m1_l10_q24", 
    type: "numeric", 
    prompt: "Calcule a derivada de $f(x) = \\ln(x^2 + 1)$ em $x = 1$.", 
    answer: "1" 
  },
  { 
    id: "m1_l10_q25", 
    type: "multiple_choice", 
    prompt: "Dada a função produção Cobb-Douglas $Q = AK^a L^b$, se tomarmos o logaritmo $\\ln(Q)$, o expoente $a$ torna-se um:", 
    options: ["Expoente", "Coeficiente multiplicativo", "Divisor"], 
    answer: "Coeficiente multiplicativo" 
  },
  { 
    id: "m1_l10_q26", 
    type: "numeric", 
    prompt: "Qual a derivada de $y = e^{-2x}$ no ponto $x = 0$?", 
    answer: "-2" 
  },
  { 
    id: "m1_l10_q27", 
    type: "fill_gap", 
    text: "A Regra de L'Hôpital é usada para resolver limites de razões de funções que resultam em formas {{gap}}.", 
    answer: "indeterminadas" 
  },
  { 
    id: "m1_l10_q28", 
    type: "multiple_choice", 
    prompt: "Se a utilidade marginal é $U'(x) = 1/x$, a função utilidade total é do tipo:", 
    options: ["Exponencial", "Logarítmica", "Quadrática"], 
    answer: "Logarítmica" 
  },
  { 
    id: "m1_l10_q29", 
    type: "numeric", 
    prompt: "Usando a regra de L'Hôpital, qual o limite de $(e^x - 1)/x$ quando $x$ tende a $0$?", 
    answer: "1" 
  },
  { 
    id: "m1_l10_q30", 
    type: "multiple_choice", 
    prompt: "O 'Preço Sombra' em modelos de otimização dinâmica é frequentemente representado por qual variável no tempo contínuo?", 
    options: ["Vetor de estado", "Vetor de coestado ($\\lambda$)", "Variável de controle"], 
    answer: "Vetor de coestado (\\lambda)" 
  }
];
