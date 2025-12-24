
import { Lesson } from '../../../types';

export const PHASE_2_LESSONS: Lesson[] = [
  {
    id: "MAC1-L01",
    title: "1. O que é o PIB?",
    description: "A ótica da produção e da despesa nas Contas Nacionais.",
    xp: 50,
    cards: [
      {
        type: "concept",
        title: "Produto Interno Bruto",
        html: "<p>O PIB mede o valor de mercado de todos os bens e serviços <b>finais</b> produzidos em um país em um período.</p>",
        latex: "$$Y = C + I + G + NX$$"
      }
    ],
    masteryCards: {
      0: [
        {
          type: "story",
          title: "A Ótica da Despesa",
          html: "<p>Pense no PIB como a soma de tudo o que foi gasto na economia: Consumo das famílias, Investimento das empresas, Gastos do Governo e o que sobrou das trocas com o exterior.</p>"
        }
      ]
    },
    questions: [
      { id: "mac1_l1_q1", type: "multiple_choice", prompt: "O PIB mede apenas bens:", options: ["Finais", "Intermediários", "Usados", "Importados"], answer: "Finais" },
      { id: "mac1_l1_q2", type: "multiple_choice", prompt: "O que representa o 'G' na identidade do PIB?", options: ["Gastos do Governo", "Ganhos de Capital", "Geração de Emprego"], answer: "Gastos do Governo" },
      { id: "mac1_l1_q3", type: "multiple_choice", prompt: "Exportações Líquidas (NX) é calculado como:", options: ["Exportações - Importações", "Exportações + Importações", "PIB / 2"], answer: "Exportações - Importações" },
      { id: "mac1_l1_q4", type: "fill_gap", text: "O PIB calculado pela ótica da {{gap}} soma salários, lucros e aluguéis.", answer: "renda" },
      { id: "mac1_l1_q5", type: "numeric", prompt: "Se C=100, I=20, G=30 e NX=10, qual o PIB?", answer: "160" },
      { id: "mac1_l1_q6", type: "multiple_choice", prompt: "Qual desses NÃO entra no cálculo do PIB?", options: ["Venda de carro usado", "Pão na padaria", "Construção de casa nova"], answer: "Venda de carro usado" },
      { id: "mac1_l1_q7", type: "fill_gap", text: "Bens {{gap}} são aqueles que servem de insumo para outros e não entram no PIB para evitar dupla contagem.", answer: "intermediários" },
      { id: "mac1_l1_q8", type: "numeric", prompt: "Se o Consumo é 200, Investimento 50 e o PIB é 300 (com G e NX = 0), qual o valor do Consumo?", answer: "200" },
      { id: "mac1_l1_q9", type: "multiple_choice", prompt: "O PIB Nominal é medido a preços:", options: ["Correntes", "Constantes", "Históricos"], answer: "Correntes" },
      { id: "mac1_l1_q10", type: "fill_gap", text: "O PIB {{gap}} ajusta o valor total pela inflação para medir o volume real de produção.", answer: "Real" }
    ]
  },
  {
    id: "MAC1-L02",
    title: "2. Inflação e Índices",
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
      { id: "mac1_l2_q2", type: "fill_gap", text: "Quando os preços caem de forma generalizada, temos uma {{gap}}.", answer: "deflação" },
      { id: "mac1_l2_q3", type: "numeric", prompt: "Se o índice de preços era 100 e foi para 110, qual a inflação em %?", answer: "10" },
      { id: "mac1_l2_q4", type: "multiple_choice", prompt: "O Deflator do PIB mede a evolução de preços de:", options: ["Toda a economia", "Uma cesta básica", "Apenas alimentos"], answer: "Toda a economia" },
      { id: "mac1_l2_q5", type: "multiple_choice", prompt: "A taxa real de juros é a taxa nominal menos a:", options: ["Inflação", "Dívida", "Selic"], answer: "Inflação" },
      { id: "mac1_l2_q6", type: "fill_gap", text: "O {{gap}} é o índice conhecido como 'inflação do aluguel'.", answer: "IGP-M" },
      { id: "mac1_l2_q7", type: "numeric", prompt: "Se a inflação foi de 5% sobre um produto de 200 reais, qual o novo preço?", answer: "210" },
      { id: "mac1_l2_q8", type: "multiple_choice", prompt: "Quem é responsável pelo controle da inflação no Brasil via metas?", options: ["Banco Central", "Ministério da Justiça", "B3"], answer: "Banco Central" },
      { id: "mac1_l2_q9", type: "fill_gap", text: "A {{gap}} ocorre quando a inflação sai de controle e atinge níveis mensais altíssimos.", answer: "hiperinflação" },
      { id: "mac1_l2_q10", type: "multiple_choice", prompt: "Se o IPCA sobe, o poder de compra da moeda:", options: ["Cai", "Sobe", "Mantém-se"], answer: "Cai" }
    ]
  }
] as const;
