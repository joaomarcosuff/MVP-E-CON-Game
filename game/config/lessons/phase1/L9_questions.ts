
import { Question } from '../../../../types';

export const L9_QUESTIONS: Question[] = [
  // --- NÍVEL CONCRETO (FÁCEIS: 1-10) ---
  { 
    id: "m1_l9_q1", 
    type: "fill_gap", 
    text: "A Regra da Cadeia é usada para derivar funções {{gap}}, ou seja, uma função dentro de outra.", 
    answer: "compostas" 
  },
  { 
    id: "m1_l9_q2", 
    type: "multiple_choice", 
    prompt: "Na analogia da 'Cebola', qual parte da função derivamos primeiro?", 
    options: ["A camada de dentro", "A camada de fora", "As duas ao mesmo tempo"], 
    answer: "A camada de fora" 
  },
  { 
    id: "m1_l9_q3", 
    type: "multiple_choice", 
    prompt: "Dada a função $y = (5x + 2)^3$, qual é a função 'interna' ($u$)?", 
    options: ["u = x^3", "u = 5x + 2", "u = 15"], 
    answer: "u = 5x + 2" 
  },
  { 
    id: "m1_l9_q4", 
    type: "fill_gap", 
    text: "Se $y = f(u)$ e $u = g(x)$, a Regra da Cadeia diz que $dy/dx = (dy/du) {{gap}} (du/dx)$.", 
    answer: "vezes" 
  },
  { 
    id: "m1_l9_q5", 
    type: "numeric", 
    prompt: "Se a derivada da função de fora é 10 e a da interna é 3, qual a derivada total?", 
    answer: "30" 
  },
  { 
    id: "m1_l9_q6", 
    type: "multiple_choice", 
    prompt: "A expressão $[f(x)]^n$ é um caso comum da Regra da Cadeia. Qual o primeiro passo?", 
    options: ["Derivar f(x)", "Tombar o expoente n", "Multiplicar por x"], 
    answer: "Tombar o expoente n" 
  },
  { 
    id: "m1_l9_q7", 
    type: "fill_gap", 
    text: "No Produto Marginal da Receita ($MRPL$), a 'corrente' liga a Receita à Produção e a Produção ao {{gap}}.", 
    answer: "trabalho" 
  },
  { 
    id: "m1_l9_q8", 
    type: "numeric", 
    prompt: "Dada $y = u^2$ e $u = 3x$. Qual o valor de $du/dx$?", 
    answer: "3" 
  },
  { 
    id: "m1_l9_q9", 
    type: "fill_gap", 
    text: "A Regra da Cadeia permite calcular o efeito {{gap}} de uma variável sobre outra através de uma intermediária.", 
    answer: "indireto" 
  },
  { 
    id: "m1_l9_q10", 
    type: "multiple_choice", 
    prompt: "Se $y = f(g(x))$, $f$ é a função externa e $g$ é a interna. É correto dizer que $f(g(x)) = g(f(x))$?", 
    options: ["Sim, a ordem não importa", "Não, em geral são diferentes"], 
    answer: "Não, em geral são diferentes" 
  },

  // --- NÍVEL PICTÓRICO/ABSTRATO (MÉDIAS: 11-20) ---
  { 
    id: "m1_l9_q11", 
    type: "numeric", 
    prompt: "Calcule a derivada de $f(x) = (3x + 1)^2$. Em $x = 0$, qual o valor de $f'(0)$?", 
    answer: "6" 
  },
  { 
    id: "m1_l9_q12", 
    type: "fill_gap", 
    text: "Para derivar $(x^2 + 5)^{100}$, o resultado é $100(x^2 + 5)^{99}$ multiplicado por {{gap}}.", 
    answer: "2x" 
  },
  { 
    id: "m1_l9_q13", 
    type: "multiple_choice", 
    prompt: "Qual a derivada de $y = \\sqrt{x^2 + 1}$? (Dica: $u = x^2 + 1$, $n = 1/2$)", 
    options: ["(1/2)(x^2 + 1)^{-1/2} * 2x", "2x * (x^2 + 1)", "1 / (2x)"], 
    answer: "(1/2)(x^2 + 1)^{-1/2} * 2x" 
  },
  { 
    id: "m1_l9_q14", 
    type: "numeric", 
    prompt: "Dada $y = e^{3x}$. Pela regra da cadeia, qual o coeficiente que aparece na frente de $e^{3x}$ após derivar?", 
    answer: "3" 
  },
  { 
    id: "m1_l9_q15", 
    type: "fill_gap", 
    text: "A derivada de $\\ln(f(x))$ é $f'(x)$ dividida por {{gap}}.", 
    answer: "f(x)" 
  },
  { 
    id: "m1_l9_q16", 
    type: "numeric", 
    prompt: "Calcule $f'(1)$ para $f(x) = (x^3 + 1)^2$.", 
    answer: "12" 
  },
  { 
    id: "m1_l9_q17", 
    type: "multiple_choice", 
    prompt: "Para a função $f(x) = 1/(4x + x^2)$, podemos usar a regra do quociente ou tratar como $(4x + x^2)^{-1}$. Qual regra se aplica ao segundo caso?", 
    options: ["Regra da Soma", "Regra da Cadeia", "Regra da Constante"], 
    answer: "Regra da Cadeia" 
  },
  { 
    id: "m1_l9_q18", 
    type: "fill_gap", 
    text: "Se $h(x) = [f(x)]^p$, então $h'(x) = p[f(x)]^{p-1}$ multiplicado pela {{gap}} de $f(x)$.", 
    answer: "derivada" 
  },
  { 
    id: "m1_l9_q19", 
    type: "numeric", 
    prompt: "Calcule a derivada de $y = (2x)^4$ em $x = 1$.", 
    answer: "64" 
  },
  { 
    id: "m1_l9_q20", 
    type: "multiple_choice", 
    prompt: "Qual a derivada de $y = \\text{sen}(x^2)$?", 
    options: ["2x * cos(x^2)", "cos(x^2)", "2x * sen(x)"], 
    answer: "2x * cos(x^2)" 
  },

  // --- NÍVEL DIFÍCIL (APLICADAS: 21-30) ---
  { 
    id: "m1_l9_q21", 
    type: "numeric", 
    prompt: "Se a Receita Marginal ($MR$) é 5 e o Produto Marginal do Trabalho ($MPPL$) é 10, qual o Produto Marginal da Receita ($MRPL$)?", 
    answer: "50" 
  },
  { 
    id: "m1_l9_q22", 
    type: "multiple_choice", 
    prompt: "Uma empresa vê que o Lucro ($\\pi$) depende das Vendas ($Q$) e as Vendas dependem da Propaganda ($A$). Para achar $d\\pi/dA$, usamos:", 
    options: ["(d\\pi/dQ) + (dQ/dA)", "(d\\pi/dQ) * (dQ/dA)", "d\\pi - dQ"], 
    answer: "(d\\pi/dQ) * (dQ/dA)" 
  },
  { 
    id: "m1_l9_q23", 
    type: "numeric", 
    prompt: "Calcule a derivada de $f(x) = (x^2 + 1)^3$ em $x = 1$.", 
    answer: "24" 
  },
  { 
    id: "m1_l9_q24", 
    type: "fill_gap", 
    text: "Ao derivar $y = \\ln(x^2 + 3x + 5)$, o numerador do resultado será {{gap}}.", 
    answer: "2x + 3" 
  },
  { 
    id: "m1_l9_q25", 
    type: "multiple_choice", 
    prompt: "A função $g(x) = (2x^2 - 3x)^{10} * \\sqrt{-5 + x^3}$ exige quais regras combinadas?", 
    options: ["Soma e Produto", "Produto e Cadeia", "Quociente e Cadeia"], 
    answer: "Produto e Cadeia" 
  },
  { 
    id: "m1_l9_q26", 
    type: "numeric", 
    prompt: "Se $y = (u+1)^2$ e $u = \\sqrt{x}$, calcule $dy/dx$ em $x = 1$.", 
    answer: "2" 
  },
  { 
    id: "m1_l9_q27", 
    type: "fill_gap", 
    text: "A derivada de $f(x) = e^{x^2 + 3x}$ é $e^{x^2 + 3x}$ multiplicada por {{gap}}.", 
    answer: "2x + 3" 
  },
  { 
    id: "m1_l9_q28", 
    type: "multiple_choice", 
    prompt: "Qual o resultado de derivar $y = [(2x + 1)/(3x - 1)]^4$ no primeiro passo?", 
    options: ["4[(2x+1)/(3x-1)]^3 * derivada do quociente", "4(2x+1)^3 / (3x-1)^4", "12x"], 
    answer: "4[(2x+1)/(3x-1)]^3 * derivada do quociente" 
  },
  { 
    id: "m1_l9_q29", 
    type: "numeric", 
    prompt: "Se o valor de um ativo é $V = 100e^{0.1t}$, qual a taxa de variação ($dV/dt$) em $t=0$?", 
    answer: "10" 
  },
  { 
    id: "m1_l9_q30", 
    type: "multiple_choice", 
    prompt: "A Regra da Cadeia é fundamental para a Macroeconomia porque permite ligar variáveis através de:", 
    options: ["Identidades estáticas", "Cadeias de transmissão/ajuste", "Apenas custos fixos"], 
    answer: "Cadeias de transmissão/ajuste" 
  }
];
