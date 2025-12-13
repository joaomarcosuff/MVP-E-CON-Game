import { GameData } from './types';

export const lessonsData: GameData = {
  "tracks": [
    {
      "id": "math",
      "title": "Matemática Aplicada",
      "icon": "📐",
      "description": "Ferramentas quantitativas para análise econômica.",
      "modules": [
        {
          "id": "math_calc1",
          "title": "Cálculo Univariado",
          "lessons": [
            {
              "id": "math_deriv_concept",
              "title": "O Conceito de Derivada",
              "description": "Taxas de variação e a inclinação da tangente.",
              "xp": 100,
              "questions": [
                {
                  "id": "q_m1_1",
                  "type": "multiple_choice",
                  "prompt": "Se a função de posição de um carro é $s(t) = t^2$, qual é a velocidade instantânea em $t=3$?",
                  "options": ["3", "6", "9", "5"],
                  "answer": "6",
                  "hint": "A velocidade é a derivada da posição ($2t$).",
                  "feedback": "Correto! $s'(t) = 2t$. Em $t=3$, $2(3) = 6$."
                },
                {
                  "id": "q_m1_2",
                  "type": "multiple_choice",
                  "prompt": "Economicamente, a derivada da função de Custo Total $C(q)$ representa:",
                  "options": ["Custo Médio", "Custo Marginal", "Custo Fixo", "Lucro"],
                  "answer": "Custo Marginal",
                  "hint": "Pense na variação do custo ao produzir uma unidade extra.",
                  "feedback": "Exato! O Custo Marginal é a taxa de variação do custo total."
                }
              ]
            },
            {
              "id": "math_opt_basic",
              "title": "Otimização Livre",
              "description": "Encontrando máximos e mínimos.",
              "xp": 120,
              "questions": [
                {
                  "id": "q_m2_1",
                  "type": "input",
                  "prompt": "Para maximizar o lucro $L(q) = -q^2 + 10q - 5$, qual deve ser o valor de $q$?",
                  "answer": "5",
                  "hint": "Derive e iguale a zero (CPO).",
                  "feedback": "Certo! $L' = -2q + 10 = 0 \\Rightarrow 2q = 10 \\Rightarrow q=5$."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "micro",
      "title": "Microeconomia",
      "icon": "🛒",
      "description": "Teoria do Consumidor e da Firma.",
      "modules": [
        {
          "id": "micro_consumer",
          "title": "Teoria do Consumidor",
          "lessons": [
            {
              "id": "micro_pref",
              "title": "Preferências e Utilidade",
              "description": "Curvas de indiferença e axiomas.",
              "xp": 100,
              "questions": [
                {
                  "id": "q_mi1_1",
                  "type": "multiple_choice",
                  "prompt": "Se João gosta de café e pão de queijo igualmente, suas curvas de indiferença são:",
                  "options": ["L-Shaped (Complementares)", "Linhas Retas (Substitutos Perfeitos)", "Convexas (Cobb-Douglas)"],
                  "answer": "Convexas (Cobb-Douglas)",
                  "hint": "Ele gosta de variedade, não apenas de um ou outro.",
                  "feedback": "Geralmente assumimos preferências convexas (média preferível aos extremos)."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "macro",
      "title": "Macroeconomia",
      "icon": "🏦",
      "description": "PIB, Inflação e Modelos IS-LM.",
      "modules": [
        {
          "id": "macro_accounts",
          "title": "Contabilidade Nacional",
          "lessons": [
            {
              "id": "macro_gdp",
              "title": "O PIB",
              "description": "Definição e óticas de mensuração.",
              "xp": 100,
              "questions": [
                {
                  "id": "q_ma1_1",
                  "type": "multiple_choice",
                  "prompt": "Qual das opções NÃO entra no cálculo do PIB via despesa?",
                  "options": ["Consumo das Famílias", "Investimento Privado", "Transferências do Governo (Bolsa Família)", "Exportações Líquidas"],
                  "answer": "Transferências do Governo (Bolsa Família)",
                  "hint": "O PIB mede produção. Transferência é apenas redistribuição de renda.",
                  "feedback": "Exato. Transferências não correspondem a uma contrapartida em bens ou serviços produzidos no ano."
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};