

import { GameData } from './types';

export const lessonsData: GameData = {
  "tracks": [
    {
      "id": "math",
      "title": "Matemática Aplicada",
      "icon": "📐",
      "description": "Domine o cálculo e a otimização econômica.",
      "modules": [
        {
          "id": "math_level_1",
          "title": "Nível I: O Microscópio",
          "description": "Derivadas Básicas e Margem",
          "lessons": [
            {
              "id": "MAT1-L01",
              "title": "1. Média vs Marginal",
              "description": "O Conceito de Margem",
              "xp": 50,
              "questions": [
                {
                    "id": "m1_l1_q1",
                    "type": "numeric",
                    "latex": "\\text{Custo Total } C(q) = 100 + 10q. \\text{ Qual o Custo Marginal?}",
                    "answer": "10",
                    "hint": "Derive em relação a q.",
                    "explanation": "A derivada de 10q é 10. O 100 (custo fixo) desaparece na derivada."
                },
                {
                    "id": "m1_l1_q2",
                    "type": "graph_point",
                    "instruction": "Clique onde a Reta Tangente (Marginal) seria horizontal.",
                    "svgPath": "M 10 250 Q 150 10 290 250", 
                    "target": { "x": 150, "y": 130, "tolerance": 50 },
                    "hint": "Onde a inclinação é zero?",
                    "answer": "Topo",
                    "explanation": "No topo da curva, a variação instantânea é nula (tangente horizontal)."
                },
                {
                    "id": "m1_l1_q3",
                    "type": "fill_gap",
                    "text": "A derivada é o limite da reta secante quando a distância entre os pontos tende a {{gap}}.",
                    "answer": "zero",
                    "hint": "h -> ?",
                    "explanation": "Quando a distância é zero, a média se torna instantânea."
                }
              ]
            },
            {
              "id": "MAT1-L02",
              "title": "2. Regra da Potência",
              "description": "A Regra do Tombo",
              "xp": 50,
              "questions": [
                {
                    "id": "m1_l2_q1",
                    "type": "numeric",
                    "latex": "\\text{Se } f(x) = x^4. \\text{ Calcule } f'(2).",
                    "answer": "32",
                    "hint": "Use 4x^3.",
                    "explanation": "$f'(x) = 4x^3$. $4 \\cdot 2^3 = 4 \\cdot 8 = 32$."
                },
                {
                    "id": "m1_l2_q2",
                    "latex": "\\text{O gráfico de } y=x^2 \\text{ fica mais ÍNGREME que } y=x \\text{? (Sim/Não)}",
                    "type": "multiple_choice", // Adapting to handled type
                    "options": ["Sim", "Não"],
                    "answer": "Sim",
                    "hint": "A inclinação aumenta?",
                    "explanation": "A derivada de x é 1 (constante). A de x^2 é 2x (cresce com x)."
                },
                {
                    "id": "m1_l2_q3",
                    "type": "fill_gap",
                    "text": "Para derivar $x^n$, você tomba o $n$ e subtrai {{gap}} do expoente.",
                    "answer": "um",
                    "hint": "n - 1",
                    "explanation": "A regra é $n \\cdot x^{n-1}$."
                }
              ]
            },
            {
              "id": "MAT1-L03",
              "title": "3. O Custo Fixo",
              "description": "Derivada de Constante",
              "xp": 50,
              "questions": [
                 {
                    "id": "m1_l3_q1",
                    "type": "numeric",
                    "latex": "\\frac{d}{dx}(1050)",
                    "answer": "0",
                    "hint": "Isso é um número fixo.",
                    "explanation": "A variação de algo parado é zero."
                },
                {
                    "id": "m1_l3_q2",
                    "type": "graph_point",
                    "instruction": "Clique em qualquer lugar da linha de Custo Fixo.",
                    "svgPath": "M 10 150 L 290 150",
                    "target": { "x": 150, "y": 150, "tolerance": 140 }, // High tolerance X to accept anywhere on line
                    "answer": "Linha",
                    "hint": "A linha que não sobe nem desce.",
                    "explanation": "Uma linha horizontal tem inclinação zero."
                },
                {
                    "id": "m1_l3_q3",
                    "type": "multiple_choice",
                    "latex": "\\text{Se o Custo Fixo dobra, o Custo Marginal muda?}",
                    "options": ["Sim", "Não"],
                    "answer": "Não",
                    "hint": "A derivada de 100 é 0. A de 200 também.",
                    "explanation": "Custos fixos não afetam a decisão na margem."
                }
              ]
            },
            {
              "id": "MAT1-L04",
              "title": "4. Polinômios",
              "description": "A Soma das Partes",
              "xp": 75,
              "questions": [
                {
                    "id": "m1_l4_q1",
                    "type": "numeric",
                    "latex": "f(x) = x^2 + 3x. \\text{ Calcule } f'(1).",
                    "answer": "5",
                    "hint": "2x + 3.",
                    "explanation": "$2(1) + 3 = 5$."
                },
                {
                    "id": "m1_l4_q2",
                    "type": "fill_gap",
                    "text": "A derivada de uma soma é a {{gap}} das derivadas.",
                    "answer": "soma",
                    "hint": "Você soma ou multiplica?",
                    "explanation": "A derivada é um operador linear: $(f+g)' = f' + g'$."
                },
                {
                    "id": "m1_l4_q3",
                    "type": "numeric",
                    "latex": "\\text{Custo } C(q) = q^3 - q^2. \\text{ CMg em } q=10?",
                    "answer": "280",
                    "hint": "3q^2 - 2q.",
                    "explanation": "$3(100) - 2(10) = 300 - 20 = 280$."
                }
              ]
            },
            {
              "id": "MAT1-L05",
              "title": "5. Traduzindo para Dinheiro",
              "description": "Interpretação Econômica",
              "xp": 100,
              "questions": [
                 {
                    "id": "m1_l5_q1",
                    "type": "fill_gap",
                    "text": "O Custo Marginal mede quanto custa produzir a {{gap}} unidade.",
                    "answer": "próxima",
                    "hint": "A anterior ou a próxima?",
                    "explanation": "Marginal olha para o futuro imediato (+1)."
                },
                {
                    "id": "m1_l5_q2",
                    "type": "numeric",
                    "latex": "\\text{Se } RMg = 10 \\text{ e } CMg = 8. \\text{ Lucro Marginal?}",
                    "answer": "2",
                    "hint": "Receita - Custo.",
                    "explanation": "Sim, pois o lucro marginal é positivo (2)."
                }
              ]
            }
          ]
        },
        {
            "id": "math_level_2",
            "title": "Nível II: A Forma",
            "description": "Gráficos e Comportamento",
            "lessons": [] // Placeholder for L06-L10
        },
        {
            "id": "math_level_3",
            "title": "Nível III: Otimização",
            "description": "O Topo da Montanha",
            "lessons": [] // Placeholder for L11-L15
        }
      ]
    },
    {
      "id": "micro",
      "title": "Microeconomia",
      "icon": "🍎",
      "description": "Oferta, Demanda e Teoria da Firma.",
      "modules": [
          { "id": "micro_l1", "title": "Nível I: Introdução", "lessons": [] }
      ]
    },
    {
      "id": "macro",
      "title": "Macroeconomia",
      "icon": "💰",
      "description": "Sistemas Econômicos e PIB.",
      "modules": [
          { "id": "macro_l1", "title": "Nível I: Contas Nacionais", "lessons": [] }
      ]
    }
  ]
};
