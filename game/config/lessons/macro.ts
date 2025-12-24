
import { Module } from '../../../types';

export const macroLevel1: Module = {
  id: "macro_level_1",
  title: "Nível I: Contas Nacionais",
  description: "Entendendo o PIB e as Identidades Macroeconômicas",
  lessons: [
    {
      id: "MAC1-L01",
      title: "O que é o PIB?",
      description: "A ótica da produção e da despesa.",
      xp: 50,
      cards: [
        {
          type: "concept",
          title: "Produto Interno Bruto",
          html: "<p>O PIB mede o valor de mercado de todos os bens e serviços <b>finais</b> produzidos em um país em um período.</p>",
          latex: "$$Y = C + I + G + NX$$"
        }
      ],
      questions: [
        { id: "mac1_l1_q1", type: "multiple_choice", prompt: "O PIB mede apenas bens:", options: ["Finais", "Intermediários", "Usados", "Importados"], answer: "Finais" },
        { id: "mac1_l1_q2", type: "multiple_choice", prompt: "O que representa o 'G' na identidade do PIB?", options: ["Gastos do Governo", "Ganhos de Capital", "Gasolina", "Gráficos"], answer: "Gastos do Governo" },
        { id: "mac1_l1_q3", type: "multiple_choice", prompt: "Exportações Líquidas (NX) é:", options: ["Exportações - Importações", "Exportações + Importações", "Apenas Exportações", "PIB / 2"], answer: "Exportações - Importações" },
        { id: "mac1_l1_q4", type: "fill_gap", text: "O PIB calculado pela ótica da {{gap}} soma salários, lucros e aluguéis.", answer: "renda" },
        { id: "mac1_l1_q5", type: "numeric", prompt: "Se C=100, I=20, G=30 e NX=10, qual o PIB?", answer: "160" },
        { id: "mac1_l1_q6", type: "multiple_choice", prompt: "Qual não entra no PIB?", options: ["Venda de carro usado", "Pão na padaria", "Aula de yoga", "Construção de casa nova"], answer: "Venda de carro usado" },
        { id: "mac1_l1_q7", type: "fill_gap", text: "Bens {{gap}} são aqueles que servem de insumo para outros.", answer: "intermediários" }
      ]
    },
    {
      id: "MAC1-L02",
      title: "Inflação e Índices",
      description: "O poder de compra ao longo do tempo.",
      xp: 50,
      cards: [
        {
          type: "concept",
          title: "Inflação e IPCA",
          html: "<p>A inflação é o aumento persistente e generalizado dos preços. No Brasil, o índice oficial é o IPCA.</p>",
          latex: "$$\\pi = \\frac{P_t - P_{t-1}}{P_{t-1}}$$"
        }
      ],
      questions: [
        { id: "mac1_l2_q1", type: "multiple_choice", prompt: "O índice oficial de inflação no Brasil é o:", options: ["IPCA", "IGP-M", "Selic", "Ibovespa"], answer: "IPCA" },
        { id: "mac1_l2_q2", type: "fill_gap", text: "Quando os preços caem de forma generalizada, temos {{gap}}.", answer: "deflação" },
        { id: "mac1_l2_q3", type: "numeric", prompt: "Se o índice era 100 e foi para 110, qual a inflação (%)?", answer: "10" },
        { id: "mac1_l2_q4", type: "multiple_choice", prompt: "O Deflator do PIB mede:", options: ["Preços de toda a economia", "Preços de uma cesta fixa", "Apenas alimentos", "Apenas importados"], answer: "Preços de toda a economia" },
        { id: "mac1_l2_q5", type: "multiple_choice", prompt: "A taxa real de juros é a nominal menos a:", options: ["Inflação", "Dívida", "Taxa Selic", "Poupança"], answer: "Inflação" },
        { id: "mac1_l2_q6", type: "fill_gap", text: "O {{gap}} é o índice conhecido como 'inflação do aluguel'.", answer: "IGP-M" },
        { id: "mac1_l2_q7", type: "numeric", prompt: "Inflação de 5% sobre 200 reais resulta em:", answer: "210" }
      ]
    }
  ]
};
