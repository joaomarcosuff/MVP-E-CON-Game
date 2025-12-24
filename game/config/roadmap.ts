
import { Track } from '../../types';
import { PHASE_1_LESSONS } from './lessons/phase1.lesson';
import { MATH_LV2_LESSONS } from './lessons/math_lv2.lesson';
import { MATH_LV3_LESSONS } from './lessons/math_lv3.lesson';
import { PHASE_2_LESSONS } from './lessons/phase2.lesson';
import { PHASE_3_LESSONS } from './lessons/phase3.lesson';

export const ROADMAP = [
  {
    id: "math-track",
    title: "Matemática Aplicada",
    icon: "📐",
    description: "Ferramentas essenciais para análise de equilíbrio e otimização.",
    modules: [
      {
        id: "math_level_1",
        title: "Nível I: O Microscópio",
        description: "Derivadas Básicas e Análise Marginal",
        lessons: PHASE_1_LESSONS as any
      },
      {
        id: "math_level_2",
        title: "Nível II: A Forma",
        description: "Gráficos e Comportamento",
        lessons: MATH_LV2_LESSONS as any
      },
      {
        id: "math_level_3",
        title: "Nível III: Otimização",
        description: "O Topo da Montanha",
        lessons: MATH_LV3_LESSONS as any
      }
    ]
  },
  {
    id: "macro-track",
    title: "Macroeconomia",
    icon: "🏦",
    description: "Sistemas Econômicos, PIB e Políticas Públicas.",
    modules: [
      {
        id: "macro_level_1",
        title: "Nível I: Contas Nacionais",
        description: "Entendendo o PIB e as Identidades Macroeconômicas",
        lessons: PHASE_2_LESSONS as any
      }
    ]
  },
  {
    id: "micro-track",
    title: "Microeconomia",
    icon: "🍎",
    description: "Agentes, Mercados e Equilíbrio.",
    modules: [
      {
        id: "micro_level_1",
        title: "Nível I: Introdução",
        description: "Oferta e Demanda",
        lessons: PHASE_3_LESSONS as any
      }
    ]
  }
] as const;

export const lessonsData = {
  tracks: ROADMAP as unknown as Track[]
};
