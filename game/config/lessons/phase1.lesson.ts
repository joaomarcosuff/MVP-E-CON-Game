
import { Lesson } from '../../../types';
import { L1_MASTERY_CARDS } from './phase1/L1_cards';
import { L1_QUESTIONS } from './phase1/L1_questions';
import { L2_MASTERY_CARDS } from './phase1/L2_cards';
import { L2_QUESTIONS } from './phase1/L2_questions';
import { L3_MASTERY_CARDS } from './phase1/L3_cards';
import { L3_QUESTIONS } from './phase1/L3_questions';
import { L4_MASTERY_CARDS } from './phase1/L4_cards';
import { L4_QUESTIONS } from './phase1/L4_questions';
import { L5_MASTERY_CARDS } from './phase1/L5_cards';
import { L5_QUESTIONS } from './phase1/L5_questions';
import { L6_MASTERY_CARDS } from './phase1/L6_cards';
import { L6_QUESTIONS } from './phase1/L6_questions';
import { L7_MASTERY_CARDS } from './phase1/L7_cards';
import { L7_QUESTIONS } from './phase1/L7_questions';
import { L8_MASTERY_CARDS } from './phase1/L8_cards';
import { L8_QUESTIONS } from './phase1/L8_questions';
import { L9_MASTERY_CARDS } from './phase1/L9_cards';
import { L9_QUESTIONS } from './phase1/L9_questions';
import { L10_MASTERY_CARDS } from './phase1/L10_cards';
import { L10_QUESTIONS } from './phase1/L10_questions';

export const PHASE_1_LESSONS: Lesson[] = [
  {
    id: "MAT1-L01",
    title: "1. Média vs Marginal",
    description: "Introdução ao conceito de taxa de variação e limite.",
    xp: 50,
    cards: [], 
    masteryCards: L1_MASTERY_CARDS,
    questions: L1_QUESTIONS
  },
  {
    id: "MAT1-L02",
    title: "2. Regra da Potência",
    description: "A ferramenta fundamental do cálculo econômico.",
    xp: 60,
    cards: [],
    masteryCards: L2_MASTERY_CARDS,
    questions: L2_QUESTIONS
  },
  {
    id: "MAT1-L03",
    title: "3. O Custo Fixo",
    description: "Por que constantes têm variação nula.",
    xp: 50,
    cards: [],
    masteryCards: L3_MASTERY_CARDS,
    questions: L3_QUESTIONS
  },
  {
    id: "MAT1-L04",
    title: "4. Polinômios",
    description: "A soma das partes.",
    xp: 75,
    cards: [],
    masteryCards: L4_MASTERY_CARDS,
    questions: L4_QUESTIONS
  },
  {
    id: "MAT1-L05",
    title: "5. Traduzindo para Dinheiro",
    description: "Interpretação Econômica Real e Tomada de Decisão.",
    xp: 100,
    cards: [],
    masteryCards: L5_MASTERY_CARDS,
    questions: L5_QUESTIONS
  },
  {
    id: "MAT1-L06",
    title: "6. Inverso e Raiz",
    description: "Diferenciação de expoentes negativos e fracionários.",
    xp: 80,
    cards: [],
    masteryCards: L6_MASTERY_CARDS,
    questions: L6_QUESTIONS
  },
  {
    id: "MAT1-L07",
    title: "7. Regra do Produto",
    description: "Derivada de produtos (ex: Receita Total R = PQ).",
    xp: 90,
    cards: [],
    masteryCards: L7_MASTERY_CARDS,
    questions: L7_QUESTIONS
  },
  {
    id: "MAT1-L08",
    title: "8. Regra do Quociente",
    description: "Derivada de quocientes (ex: Custo Médio).",
    xp: 90,
    cards: [],
    masteryCards: L8_MASTERY_CARDS,
    questions: L8_QUESTIONS
  },
  {
    id: "MAT1-L09",
    title: "9. Regra da Cadeia",
    description: "Diferenciação de funções compostas (função de função).",
    xp: 100,
    cards: [],
    masteryCards: L9_MASTERY_CARDS,
    questions: L9_QUESTIONS
  },
  {
    id: "MAT1-L10",
    title: "10. Log & Exp",
    description: "Derivadas de e^x e ln(x) (funções não-algébricas).",
    xp: 110,
    cards: [],
    masteryCards: L10_MASTERY_CARDS,
    questions: L10_QUESTIONS
  }
];
