
import { Question } from '../../../../types';

export const L8_QUESTIONS: Question[] = [
  // --- NÍVEL CONCRETO (FÁCEIS: 1-10) ---
  { 
    id: "m1_l8_q1", 
    type: "fill_gap", 
    text: "O Custo Médio ($AC$) é calculado dividindo o Custo Total pela {{gap}}.", 
    answer: "quantidade" 
  },
  { 
    id: "m1_l8_q2", 
    type: "multiple_choice", 
    prompt: "Para derivar uma função na forma $f(x)/g(x)$, usamos a Regra do:", 
    options: ["Produto", "Quociente", "Soma"], 
    answer: "Quociente" 
  },
  { 
    id: "m1_l8_q3", 
    type: "fill_gap", 
    text: "Na Regra do Quociente, o denominador final é sempre o quadrado do denominador {{gap}}.", 
    answer: "original" 
  },
  { 
    id: "m1_l8_q4", 
    type: "multiple_choice", 
    prompt: "Se o Custo Marginal é MENOR que o Custo Médio, o Custo Médio está:", 
    options: ["Subindo", "Caindo", "Parado"], 
    answer: "Caindo" 
  },
  { 
    id: "m1_l8_q5", 
    type: "numeric", 
    prompt: "Se $f(x) = 10x$ e $g(x) = 2$, qual a derivada de $f(x)/g(x)$?", 
    answer: "5" 
  },
  { 
    id: "m1_l8_q6", 
    type: "fill_gap", 
    text: "No ponto mínimo da curva de Custo Médio, a sua inclinação é {{gap}}.", 
    answer: "zero" 
  },
  { 
    id: "m1_l8_q7", 
    type: "multiple_choice", 
    prompt: "A fórmula da regra envolve: $(f'g - fg') / g^2$. Qual sinal separa os termos no numerador?", 
    options: ["Mais (+)", "Menos (-)"], 
    answer: "Menos (-)" 
  },
  { 
    id: "m1_l8_q8", 
    type: "fill_gap", 
    text: "Se $f(x) = x$, sua derivada $f'(x)$ é igual a {{gap}}.", 
    answer: "1" 
  },
  { 
    id: "m1_l8_q9", 
    type: "multiple_choice", 
    prompt: "Quando o Custo Marginal ($MC$) é igual ao Custo Médio ($AC$), a curva $AC$ atinge seu:", 
    options: ["Máximo", "Mínimo", "Início"], 
    answer: "Mínimo" 
  },
  { 
    id: "m1_l8_q10", 
    type: "fill_gap", 
    text: "Para a função $y = 5/x$, podemos usar a Regra do Quociente ou a Regra da {{gap}} com expoente $-1$.", 
    answer: "Potência" 
  },

  // --- NÍVEL PICTÓRICO/ABSTRATO (MÉDIAS: 11-20) ---
  { 
    id: "m1_l8_q11", 
    type: "fill_gap", 
    text: "Dada $y = x / (x+1)$, $f(x)$ é $x$ e $g(x)$ é {{gap}}.", 
    answer: "x+1" 
  },
  { 
    id: "m1_l8_q12", 
    type: "numeric", 
    prompt: "Calcule o denominador final da derivada de $y = 3x / (x^2)$.", 
    answer: "x^4" 
  },
  { 
    id: "m1_l8_q13", 
    type: "multiple_choice", 
    prompt: "Qual o numerador correto para a derivada de $x/e^x$? (Dica: $f=x, g=e^x$)", 
    options: ["e^x - xe^x", "e^x + xe^x", "1 - e^x"], 
    answer: "e^x - xe^x" 
  },
  { 
    id: "m1_l8_q14", 
    type: "fill_gap", 
    text: "Na derivada de $f/g$, o primeiro termo do numerador é a derivada de {{gap}} vezes a função $g$.", 
    answer: "f" 
  },
  { 
    id: "m1_l8_q15", 
    type: "numeric", 
    prompt: "Dada $y = 2/x$. Usando a regra: $f=2$ ($f'=0$), $g=x$ ($g'=1$). O numerador ($f'g - fg'$) resulta em:", 
    answer: "-2" 
  },
  { 
    id: "m1_l8_q16", 
    type: "multiple_choice", 
    prompt: "A derivada de $f(x)/k$, onde $k$ é constante, precisa obrigatoriamente da Regra do Quociente?", 
    options: ["Sim", "Não, pode-se usar 1/k como coeficiente"], 
    answer: "Não, pode-se usar 1/k como coeficiente" 
  },
  { 
    id: "m1_l8_q17", 
    type: "fill_gap", 
    text: "Ao derivar $y = (x+2)/x$, o termo $fg'$ da fórmula resulta em {{gap}}.", 
    answer: "x+2" 
  },
  { 
    id: "m1_l8_q18", 
    type: "numeric", 
    prompt: "Calcule a derivada de $f(x) = x/x$ em $x=5$ (Dica: simplifique antes!).", 
    answer: "0" 
  },
  { 
    id: "m1_l8_q19", 
    type: "multiple_choice", 
    prompt: "A regra $(f/g)' = (f'g - fg')/g^2$ é válida se $g(x)$ for:", 
    options: ["Zero", "Diferente de zero", "Igual a f(x)"], 
    answer: "Diferente de zero" 
  },
  { 
    id: "m1_l8_q20", 
    type: "fill_gap", 
    text: "Dada a função $f(x) = (ax^2 + b) / (cx + d)$, o seu hessiano aumentado será usado para testar {{gap}} restrita.", 
    answer: "otimização" 
  },

  // --- NÍVEL DIFÍCIL (APLICADAS: 21-30) ---
  { 
    id: "m1_l8_q21", 
    type: "numeric", 
    prompt: "Custo Total $C = Q^2 + 100$. Encontre a derivada do Custo Médio ($C/Q$) quando $Q = 10$.", 
    answer: "0" 
  },
  { 
    id: "m1_l8_q22", 
    type: "multiple_choice", 
    prompt: "Dada a função $y = 3x / (x^2 + 1)$. Onde a inclinação desta função é zero?", 
    options: ["x = 1 e x = -1", "x = 0", "x = 3"], 
    answer: "x = 1 e x = -1" 
  },
  { 
    id: "m1_l8_q23", 
    type: "fill_gap", 
    text: "Se $d(AC)/dQ > 0$, então o Custo Marginal deve estar {{gap}} do Custo Médio.", 
    answer: "acima" 
  },
  { 
    id: "m1_l8_q24", 
    type: "numeric", 
    prompt: "Calcule $f'(0)$ para $f(x) = (2x + 1) / (x + 2)$.", 
    answer: "0.75" 
  },
  { 
    id: "m1_l8_q25", 
    type: "multiple_choice", 
    prompt: "Qual a derivada de $\\ln(x) / x$?", 
    options: ["(1 - ln x) / x^2", "(1 + ln x) / x^2", "1 / x^2"], 
    answer: "(1 - ln x) / x^2" 
  },
  { 
    id: "m1_l8_q26", 
    type: "numeric", 
    prompt: "Se o Custo Médio é $AC = Q + 25/Q$, qual o valor de $Q$ que minimiza o custo (onde $d(AC)/dQ = 0$)?", 
    answer: "5" 
  },
  { 
    id: "m1_l8_q27", 
    type: "fill_gap", 
    text: "A derivada da função $y = 1/g(x)$ é sempre $-g'(x)$ dividido por {{gap}}.", 
    answer: "g(x)^2" 
  },
  { 
    id: "m1_l8_q28", 
    type: "multiple_choice", 
    prompt: "A inclinação da curva de Custo Médio é negativa quando:", 
    options: ["MC < AC", "MC > AC", "MC = AC"], 
    answer: "MC < AC" 
  },
  { 
    id: "m1_l8_q29", 
    type: "numeric", 
    prompt: "Derive $f(x) = x^2 / (x - 1)$. Qual o valor do numerador quando $x = 2$?", 
    answer: "0" 
  },
  { 
    id: "m1_l8_q30", 
    type: "multiple_choice", 
    prompt: "A Regra do Quociente aplicada a $C(Q)/Q$ prova que o $MC$ intercepta o $AC$ em seu ponto de:", 
    options: ["Máximo", "Mínimo", "Inflexão"], 
    answer: "Mínimo" 
  }
];
