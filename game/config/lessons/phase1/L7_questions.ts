
import { Question } from '../../../../types';

export const L7_QUESTIONS: Question[] = [
  // --- NÍVEL CONCRETO (FÁCEIS: 1-10) ---
  { 
    id: "m1_l7_q1", 
    type: "multiple_choice", 
    prompt: "A Receita Total ($R$) é o produto do Preço ($P$) pela Quantidade ($Q$). Se o Preço muda quando você vende mais, qual regra devemos usar para achar a Receita Marginal?", 
    options: ["Regra da Soma", "Regra do Produto", "Regra da Constante"], 
    answer: "Regra do Produto" 
  },
  { 
    id: "m1_l7_q2", 
    type: "fill_gap", 
    text: "A Regra do Produto diz que a derivada de ($f \\cdot g$) é: $f' \\cdot g$ {{gap}} $f \\cdot g'$.", 
    answer: "+" 
  },
  { 
    id: "m1_l7_q3", 
    type: "multiple_choice", 
    prompt: "Na Regra do Produto, derivamos as duas funções ao mesmo tempo? ($f' \\cdot g'$)", 
    options: ["Sim", "Não, derivamos uma de cada vez e somamos"], 
    answer: "Não, derivamos uma de cada vez e somamos" 
  },
  { 
    id: "m1_l7_q4", 
    type: "fill_gap", 
    text: "Se a Receita é $R = P \\cdot Q$, o termo $P \\cdot (dQ/dQ)$ representa manter o preço constante e variar a {{gap}}.", 
    answer: "quantidade" 
  },
  { 
    id: "m1_l7_q5", 
    type: "numeric", 
    prompt: "Se $f(x) = 5$ e $g(x) = x$, a derivada do produto $f(x)g(x)$ é:", 
    answer: "5" 
  },
  { 
    id: "m1_l7_q6", 
    type: "multiple_choice", 
    prompt: "A Regra do Produto é essencial para calcular o MRPL, que é o produto entre a Receita Marginal e o:", 
    options: ["Custo Fixo", "Produto Marginal Físico", "Preço Médio"], 
    answer: "Produto Marginal Físico" 
  },
  { 
    id: "m1_l7_q7", 
    type: "fill_gap", 
    text: "Ao derivar o produto de duas funções, o resultado é a {{gap}} ponderada das derivadas individuais.", 
    answer: "soma" 
  },
  { 
    id: "m1_l7_q8", 
    type: "numeric", 
    prompt: "Dada a função $y = x \\cdot x$. Usando a regra do produto ($x'\\cdot x + x\\cdot x'$), o resultado é $1x + 1x$, que simplifica para:", 
    answer: "2x" 
  },
  { 
    id: "m1_l7_q9", 
    type: "multiple_choice", 
    prompt: "Para a função $f(x) = (x+1)(x+2)$, quem seriam as funções $u$ e $v$?", 
    options: ["u = (x+1), v = (x+2)", "u = x, v = 1", "u = (x+1), v = x"], 
    answer: "u = (x+1), v = (x+2)" 
  },
  { 
    id: "m1_l7_q10", 
    type: "fill_gap", 
    text: "A derivada de um produto NÃO é simplesmente o produto das {{gap}}.", 
    answer: "derivadas" 
  },

  // --- NÍVEL PICTÓRICO/ABSTRATO (MÉDIAS: 11-20) ---
  { 
    id: "m1_l7_q11", 
    type: "fill_gap", 
    text: "Para derivar $h(x) = x \\cdot e^x$, fazemos $(1 \\cdot e^x) + (x \\cdot {{gap}})$. ", 
    answer: "e^x" 
  },
  { 
    id: "m1_l7_q12", 
    type: "numeric", 
    prompt: "Calcule a derivada de $f(x) = x \\cdot \\ln(x)$ em $x = e$. (Dica: $\\ln(e)=1$ e $d/dx \\ln(x)=1/x$)", 
    answer: "2" 
  },
  { 
    id: "m1_l7_q13", 
    type: "multiple_choice", 
    prompt: "Qual a derivada de $y = (3x^2) \\cdot (x)$?", 
    options: ["3x²", "9x²", "6x²"], 
    answer: "9x²" 
  },
  { 
    id: "m1_l7_q14", 
    type: "fill_gap", 
    text: "Na regra $(fg)' = f'g + fg'$, se $f(x)$ for uma constante $k$, a fórmula se reduz a $k \\cdot {{gap}}$.", 
    answer: "g'" 
  },
  { 
    id: "m1_l7_q15", 
    type: "numeric", 
    prompt: "Se $f(x) = x^2$ e $g(x) = 3x$, qual o valor de $f'(x)g(x)$?", 
    answer: "6x^2" 
  },
  { 
    id: "m1_l7_q16", 
    type: "multiple_choice", 
    prompt: "Ao derivar $y = x(x+5)$, obtemos $(1)(x+5) + (x)(1)$. Isso simplifica para:", 
    options: ["2x + 5", "x + 5", "2x"], 
    answer: "2x + 5" 
  },
  { 
    id: "m1_l7_q17", 
    type: "fill_gap", 
    text: "O Teorema de Leibniz é outro nome para a Regra do {{gap}}.", 
    answer: "Produto" 
  },
  { 
    id: "m1_l7_q18", 
    type: "numeric", 
    prompt: "Calcule $f'(1)$ para $f(x) = (x^2 + 1)(x)$.", 
    answer: "4" 
  },
  { 
    id: "m1_l7_q19", 
    type: "multiple_choice", 
    prompt: "A derivada de $f(x) = 1/x \\cdot x$ é zero. Isso é consistente com a Regra do Produto?", 
    options: ["Sim, pois 1/x · x = 1 (constante)", "Não, a regra falha para frações"], 
    answer: "Sim, pois 1/x · x = 1 (constante)" 
  },
  { 
    id: "m1_l7_q20", 
    type: "fill_gap", 
    text: "Na economia, a Receita Marginal (MR) é $P + Q \\cdot (dP/dQ)$. O termo $(dP/dQ)$ é a {{gap}} da curva de demanda.", 
    answer: "inclinação" 
  },

  // --- NÍVEL DIFÍCIL (APLICADAS/COMPLEXAS: 21-30) ---
  { 
    id: "m1_l7_q21", 
    type: "numeric", 
    prompt: "Dada a função demanda $P = 100 - Q$. A Receita é $R = (100-Q)Q$. Use a regra do produto para achar a Receita Marginal em $Q = 10$.", 
    answer: "80" 
  },
  { 
    id: "m1_l7_q22", 
    type: "multiple_choice", 
    prompt: "Se a Receita é $R = f(Q)\\cdot Q$, onde $f(Q)$ é a Receita Média (AR), a Receita Marginal (MR) será:", 
    options: ["AR + Q · AR'", "AR - Q · AR'", "AR · Q'"], 
    answer: "AR + Q · AR'" 
  },
  { 
    id: "m1_l7_q23", 
    type: "fill_gap", 
    text: "Para derivar o produto de três funções ($fgh$), a regra expandida é: $f'gh + fg'h + {{gap}}$.", 
    answer: "fgh'" 
  },
  { 
    id: "m1_l7_q24", 
    type: "numeric", 
    prompt: "Se a produtividade é $MPPL = 10$ e a Receita Marginal é $MR = 5$, qual o valor do Produto Marginal da Receita (MRPL)?", 
    answer: "50" 
  },
  { 
    id: "m1_l7_q25", 
    type: "multiple_choice", 
    prompt: "Uma empresa competitiva tem Preço ($P$) constante. Qual o resultado da Regra do Produto para $R = P \\cdot Q$?", 
    options: ["P", "Q", "P + Q"], 
    answer: "P" 
  },
  { 
    id: "m1_l7_q26", 
    type: "numeric", 
    prompt: "Calcule a derivada de $y = (x+1)e^x$ em $x = 0$.", 
    answer: "2" 
  },
  { 
    id: "m1_l7_q27", 
    type: "fill_gap", 
    text: "Se $f(x)$ e $g(x)$ são crescentes (derivadas positivas), o produto $f(x)g(x)$ será sempre {{gap}} para $x > 0$.", 
    answer: "crescente" 
  },
  { 
    id: "m1_l7_q28", 
    type: "multiple_choice", 
    prompt: "A derivada de $f(x) = x^2(x^3+1)$ pode ser feita por regra do produto ou expansão. Qual o resultado final?", 
    options: ["5x⁴ + 2x", "6x⁴ + 2x", "5x⁴ + x"], 
    answer: "5x⁴ + 2x" 
  },
  { 
    id: "m1_l7_q29", 
    type: "numeric", 
    prompt: "Se a elasticidade da demanda é unitária ($|Ed|=1$), a Receita Marginal ($MR = P(1 - 1/|Ed|)$) é:", 
    answer: "0" 
  },
  { 
    id: "m1_l7_q30", 
    type: "multiple_choice", 
    prompt: "A regra do produto $(uv)' = u'v + uv'$ exige que ambas as funções sejam:", 
    options: ["Diferenciáveis", "Lineares", "Positivas"], 
    answer: "Diferenciáveis" 
  }
];
