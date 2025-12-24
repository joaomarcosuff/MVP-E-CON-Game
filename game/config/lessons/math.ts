
import { Module } from '../../../types';

export const mathLevel1: Module = {
  id: "math_level_1",
  title: "Nível I: O Microscópio",
  description: "Derivadas Básicas e Análise Marginal",
  lessons: [
    {
      id: "MAT1-L01",
      title: "Média vs Marginal",
      description: "Entenda a diferença entre o histórico e a próxima unidade.",
      xp: 50,
      cards: [
        {
          type: "concept",
          title: "A Visão Marginal",
          html: "<p>Na economia, decisões racionais ocorrem na <b>margem</b>. Não importa quanto você já gastou, mas sim quanto custará a <b>próxima</b> unidade.</p>",
          latex: "$$\\text{Marginal} = \\frac{dy}{dx}$$"
        },
        {
          type: "visual",
          title: "A Reta Tangente",
          html: "<p>Geometricamente, a derivada representa a inclinação da reta que toca a curva em apenas um ponto.</p>",
          latex: "$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$"
        }
      ],
      questions: [
        { id: "m1_l1_q1", type: "numeric", prompt: "Se o Custo Total é $C(q) = 100 + 10q$, qual é o Custo Marginal?", answer: "10", explanation: "A derivada de $10q$ é 10. O custo fixo ($100$) é constante." },
        { id: "m1_l1_q2", type: "fill_gap", text: "A derivada representa a taxa de variação {{gap}} da função.", answer: "instantânea", explanation: "Diferente da média, a derivada olha para um instante específico." },
        { id: "m1_l1_q3", type: "numeric", prompt: "Qual o valor da derivada de uma constante?", answer: "0", explanation: "Constantes não variam, logo sua taxa é nula." },
        { id: "m1_l1_q4", type: "multiple_choice", prompt: "Se $L'(q) > 0$, o lucro está:", options: ["Aumentando", "Diminuindo", "No máximo", "Estacionário"], answer: "Aumentando" },
        { id: "m1_l1_q5", type: "numeric", prompt: "Para $f(x) = 5x + 20$, qual o valor de $f'(100)$?", answer: "5" },
        { id: "m1_l1_q6", type: "fill_gap", text: "O limite da reta secante quando a distância tende a {{gap}} é a derivada.", answer: "zero" },
        { id: "m1_l1_q7", type: "multiple_choice", prompt: "A Receita Marginal é a derivada da:", options: ["Receita Total", "Receita Média", "Custo Total", "Elasticidade"], answer: "Receita Total" }
      ]
    },
    {
      id: "MAT1-L02",
      title: "Regra da Potência",
      description: "A ferramenta fundamental do cálculo.",
      xp: 60,
      cards: [
        {
          type: "formal",
          title: "A Regra do Tombo",
          html: "<p>Para funções $x^n$, o expoente 'cai' multiplicando e subtraímos $1$.</p>",
          latex: "$$\\frac{d}{dx} x^n = n \\cdot x^{n-1}$$"
        }
      ],
      questions: [
        { id: "m1_l2_q1", type: "multiple_choice", prompt: "Derivada de $x^2$:", options: ["$2x$", "$x^2$", "$2$", "$x$"], answer: "$2x$" },
        { id: "m1_l2_q2", type: "numeric", prompt: "Se $f(x) = x^3$, quanto vale $f'(2)$?", answer: "12", explanation: "$3 \\cdot 2^2 = 12$" },
        { id: "m1_l2_q3", type: "multiple_choice", prompt: "Derive $5x^2$:", options: ["$10x$", "$5x$", "$10$", "$x$"], answer: "$10x$" },
        { id: "m1_l2_q4", type: "numeric", prompt: "Derivada de $x^4$ em $x=1$?", answer: "4" },
        { id: "m1_l2_q5", type: "multiple_choice", prompt: "Derivada de $1/x$:", options: ["$-x^{-2}$", "$x^{-2}$", "$\ln(x)$", "$1$"], answer: "$-x^{-2}$" },
        { id: "m1_l2_q6", type: "numeric", prompt: "Calcule $f'(1)$ para $10x^5$:", answer: "50" },
        { id: "m1_l2_q7", type: "multiple_choice", prompt: "Qual o novo expoente de $x^7$ após derivar?", options: ["6", "7", "8", "5"], answer: "6" }
      ]
    }
  ]
};
