
import { Lesson } from '../../../types';

export const PHASE_3_LESSONS: Lesson[] = [
  {
    id: "MIC1-L01",
    title: "1. Curva de Procura",
    description: "O desejo, o preço e a Lei da Procura.",
    xp: 50,
    cards: [
      {
        type: "concept",
        title: "Lei da Procura",
        html: "<p>Mantendo tudo o mais constante (<i>ceteris paribus</i>), quando o preço de um bem aumenta, a quantidade procurada diminui.</p>",
        latex: "$$Q_d = a - bP$$"
      }
    ],
    masteryCards: {
      0: [
        {
          type: "story",
          title: "Por que compramos menos?",
          html: "<p>O efeito preço ocorre por dois motivos: o <b>Efeito Substituição</b> (trocamos por algo mais barato) e o <b>Efeito Renda</b> (nos sentimos mais 'pobres' quando o preço sobe).</p>"
        }
      ]
    },
    questions: [
      { id: "mic1_l1_q1", type: "multiple_choice", prompt: "A inclinação da curva de demanda é geralmente:", options: ["Negativa", "Positiva", "Vertical", "Horizontal"], answer: "Negativa" },
      { id: "mic1_l1_q2", type: "fill_gap", text: "A condição de manter tudo constante é chamada em economia de {{gap}}.", answer: "ceteris paribus" },
      { id: "mic1_l1_q3", type: "multiple_choice", prompt: "Se o preço de um bem sobe, a quantidade demandada:", options: ["Cai", "Sobe", "Fica igual"], answer: "Cai" },
      { id: "mic1_l1_q4", type: "numeric", prompt: "Dada Qd = 100 - 2P. Se P = 10, qual a quantidade Qd?", answer: "80" },
      { id: "mic1_l1_q5", type: "multiple_choice", prompt: "Bens que compramos mais quando nossa renda aumenta são bens:", options: ["Normais", "Inferiores", "Inexistentes"], answer: "Normais" },
      { id: "mic1_l1_q6", type: "fill_gap", text: "Bens que compramos MENOS quando a renda aumenta são chamados bens {{gap}}.", answer: "inferiores" },
      { id: "mic1_l1_q7", type: "numeric", prompt: "Se Qd = 50 - P. Qual o preço (P) que zera a demanda?", answer: "50" },
      { id: "mic1_l1_q8", type: "multiple_choice", prompt: "Um deslocamento da curva de demanda para a direita indica:", options: ["Aumento da demanda", "Queda da demanda", "Aumento do preço"], answer: "Aumento da demanda" },
      { id: "mic1_l1_q9", type: "fill_gap", text: "A soma das demandas individuais de todos os consumidores resulta na demanda de {{gap}}.", answer: "market" },
      { id: "mic1_l1_q10", type: "numeric", prompt: "Se Qd = 20 - 2P. Qual a quantidade se o preço for zero?", answer: "20" }
    ]
  },
  {
    id: "MIC1-L02",
    title: "2. Curva de Oferta",
    description: "O comportamento dos produtores.",
    xp: 50,
    cards: [
      {
        type: "concept",
        title: "Lei da Oferta",
        html: "<p>Quanto maior o preço de um bem, maior o estímulo para o produtor ofertar mais unidades no mercado.</p>",
        latex: "$$Q_s = c + dP$$"
      }
    ],
    questions: [
      { id: "mic1_l2_q1", type: "multiple_choice", prompt: "A inclinação da curva de oferta é:", options: ["Positiva", "Negativa", "Nula"], answer: "Positiva" },
      { id: "mic1_l2_q2", type: "fill_gap", text: "Um aumento nos custos de produção desloca a curva de oferta para a {{gap}}.", answer: "esquerda" },
      { id: "mic1_l2_q3", type: "numeric", prompt: "Se Qs = 20 + 2P. Se P = 5, qual a quantidade Qs?", answer: "30" },
      { id: "mic1_l2_q4", type: "multiple_choice", prompt: "Melhoria tecnológica geralmente faz a curva de oferta:", options: ["Deslocar para a direita", "Deslocar para a esquerda", "Ficar vertical"], answer: "Deslocar para a direita" },
      { id: "mic1_l2_q5", type: "fill_gap", text: "O ponto onde Qd = Qs é chamado de ponto de {{gap}}.", answer: "equilíbrio" }
    ]
  }
] as const;
