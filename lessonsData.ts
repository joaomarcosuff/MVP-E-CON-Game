
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
              "cards": [
                {
                    "type": "story",
                    "title": "O Paradoxo da Água e do Diamante",
                    "html": "<p>Imagine que você está no deserto, morrendo de sede. O primeiro copo d'água tem valor infinito: ele salva sua vida. O segundo copo é ótimo, mas não vital. O terceiro é apenas refrescante.</p><p class='mt-4'>Agora imagine o 50º copo. Você provavelmente o usaria para lavar as mãos.</p><p class='mt-4 font-semibold'>Isso é pensar na margem.</p><p>Não importa o quanto a água é valiosa <i>no total</i> (média). O que define nossas decisões econômicas é o valor da <b>próxima unidade</b> (marginal).</p>"
                },
                {
                    "type": "concept",
                    "title": "Média vs. Instantânea",
                    "html": "<p>Se você viajou 200km em 4 horas, sua <b>Velocidade Média</b> foi de 50km/h. Isso é o histórico, o passado.</p><p class='mt-4'>Mas, ao passar por um radar, ele não quer saber sua média. Ele quer saber sua velocidade <b>naquele exato instante</b>.</p><p class='mt-4'>A <b>Margem</b> (ou Derivada) é o velocímetro da economia. Ela nos diz quão rápido o Custo (ou Lucro) está mudando <i>agora</i>, se produzirmos apenas mais uma unidade.</p>"
                },
                {
                    "type": "visual",
                    "title": "O Zoom Infinito",
                    "html": "<p>Geometricamente, a média é uma linha que conecta dois pontos distantes (Reta Secante).</p><p class='mt-4'>Para achar a marginal, aproximamos esses pontos até que se tornem um só. A linha que apenas 'resvala' na curva naquele ponto é a <b>Reta Tangente</b>.</p><p class='mt-4'>A inclinação dessa reta tangente é a Derivada.</p>",
                    "latex": "$$ \\text{Inclinação} = \\frac{\\Delta y}{\\Delta x} \\to \\text{Derivada} = \\frac{dy}{dx} $$"
                },
                {
                    "type": "formal",
                    "title": "A Definição Formal",
                    "html": "<p>Matematicamente, definimos a derivada como o limite da taxa de variação quando a mudança na entrada (h) tende a zero.</p>",
                    "latex": "$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$"
                },
                {
                    "type": "example",
                    "title": "Custo Marginal na Prática",
                    "html": "<p>Suponha que o Custo Total de uma fábrica seja dado por:</p><div class='bg-slate-100 p-2 rounded text-center font-mono my-2'>C(q) = 100 + 10q</div><p>O 100 é o aluguel (Custo Fixo). O 10q é a matéria-prima.</p><p class='mt-4'>Se derivarmos em relação a <i>q</i>:</p>",
                    "latex": "$$ C'(q) = \\frac{d}{dq}(100) + \\frac{d}{dq}(10q) = 0 + 10 = 10 $$"
                },
                {
                    "type": "economic_intuition",
                    "title": "A Regra de Ouro",
                    "html": "<p>Por que isso importa? Agentes racionais tomam decisões na margem.</p><p class='mt-4'>Você só deve produzir a próxima unidade se o dinheiro que ela traz (<b>Receita Marginal</b>) for maior que o custo para produzi-la (<b>Custo Marginal</b>).</p><div class='bg-emerald-100 border-l-4 border-emerald-500 p-4 mt-4 text-emerald-900'><b>Regra de Ouro:</b> O lucro é máximo quando RMg = CMg.</div>"
                }
              ],
              "questions": [
                {
                    "id": "m1_l1_q1",
                    "type": "numeric",
                    "latex": "$$ \\text{Custo Total } C(q) = 100 + 10q. \\\\ \\text{Qual o Custo Marginal?} $$",
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
              "cards": [],
              "questions": [
                {
                    "id": "m1_l2_q1",
                    "type": "numeric",
                    "latex": "$$ \\text{Se } f(x) = x^4. \\text{ Calcule } f'(2). $$",
                    "answer": "32",
                    "hint": "Use 4x^3.",
                    "explanation": "$f'(x) = 4x^3$. $4 \\cdot 2^3 = 4 \\cdot 8 = 32$."
                },
                {
                    "id": "m1_l2_q2",
                    "type": "multiple_choice",
                    "latex": "$$ \\text{O gráfico de } y=x^2 \\text{ fica mais ÍNGREME que } y=x \\text{? (Sim/Não)} $$",
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
              "cards": [],
              "questions": [
                 {
                    "id": "m1_l3_q1",
                    "type": "numeric",
                    "latex": "$$ \\frac{d}{dx}(1050) $$",
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
                    "latex": "$$ \\text{Se o Custo Fixo dobra, o Custo Marginal muda?} $$",
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
              "cards": [],
              "questions": [
                {
                    "id": "m1_l4_q1",
                    "type": "numeric",
                    "latex": "$$ f(x) = x^2 + 3x. \\text{ Calcule } f'(1). $$",
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
                    "latex": "$$ \\text{Custo } C(q) = q^3 - q^2. \\text{ CMg em } q=10? $$",
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
              "cards": [],
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
                    "latex": "$$ \\text{Se } RMg = 10 \\text{ e } CMg = 8. \\\\ \\text{ Lucro Marginal?} $$",
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
