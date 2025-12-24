
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
              "title": "Média vs Marginal",
              "description": "Introdução ao conceito de taxa de variação (inclinação da reta tangente) e limite",
              "xp": 50,
              "cards": [
                {
                  "type": "story",
                  "title": "O Paradoxo da Água e do Diamante",
                  "html": "<p>Imagine que você está no deserto, morrendo de sede. O primeiro copo d'água tem valor infinito: ele salva sua vida. O segundo copo é ótimo, mas não vital. O terceiro é apenas refrescante.</p><p class='mt-4'>Agora imagine o 50º copo. Você provavelmente o usaria para lavar as mãos.</p><p class='mt-4 font-semibold'>Isso é pensar na margem.</p><p class='mt-4'>Não importa o quanto a água é valiosa <i>no total</i> (média). O que define nossas decisões econômicas é o valor da <b>próxima unidade</b> (marginal).</p>"
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
                  "latex": "$$\\text{Inclinação} = \\frac{\\Delta y}{\\Delta x} \\to \\text{Derivada} = \\frac{dy}{dx}$$"
                },
                {
                  "type": "formal",
                  "title": "A Definição Formal",
                  "html": "<p>Matematicamente, definimos a derivada como o limite da taxa de variação quando a mudança na entrada (h) tende a zero.</p><p class='mt-4'>Seja <i>f</i> uma função real de uma variável real e <i>a</i> ∈ ℝ. A derivada de <i>f</i> em <i>a</i>, denotada por <i>f'(a)</i>, é:</p>",
                  "latex": "$$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$$"
                },
                {
                  "type": "example",
                  "title": "Exemplo: Custo Total Simples",
                  "html": "<p>Suponha que o Custo Total de uma fábrica seja dado por:</p><p class='mt-2 font-mono text-center'>C(q) = 100 + 10q</p><p class='mt-4'>Onde 100 é o Custo Fixo (aluguel) e 10q representa o custo variável (matéria-prima).</p><p class='mt-4'><b>Pergunta:</b> Quanto custa produzir a próxima unidade?</p><p class='mt-4'><b>Solução:</b> Precisamos calcular a derivada de C(q) em relação a q:</p>",
                  "latex": "$$C'(q) = \\frac{d}{dq}(100 + 10q) = 0 + 10 = 10$$"
                },
                {
                  "type": "economic_intuition",
                  "title": "A Regra de Ouro da Produção",
                  "html": "<p>Por que isso importa? Agentes racionais tomam decisões na margem.</p><p class='mt-4'>Você só deve produzir a próxima unidade se o dinheiro que ela traz (<b>Receita Marginal</b>) for maior que o custo para produzi-la (<b>Custo Marginal</b>).</p><div class='bg-emerald-100 border-l-4 border-emerald-500 p-4 mt-4 text-emerald-900'><p class='font-semibold'>Regra de Ouro:</p><p>O lucro é máximo quando RMg = CMg.</p></div>"
                },
                {
                  "type": "example",
                  "title": "Exemplo: Taxa de Variação Média vs Instantânea",
                  "html": "<p>Considere a função de custo C(q) = q² + 4q + 100.</p><p class='mt-4'><b>Taxa de Variação Média</b> entre q = 2 e q = 5:</p>",
                  "latex": "$$\\frac{C(5) - C(2)}{5 - 2} = \\frac{(25+20+100) - (4+8+100)}{3} = \\frac{145 - 112}{3} = 11$$"
                },
                {
                  "type": "formal",
                  "title": "Calculando a Derivada em q = 2",
                  "html": "<p>Agora vamos calcular a taxa de variação <b>instantânea</b> (derivada) em q = 2:</p><p class='mt-4'>Primeiro, encontramos a fórmula geral da derivada:</p>",
                  "latex": "$$C'(q) = \\lim_{h \\to 0} \\frac{[(q+h)^2 + 4(q+h) + 100] - [q^2 + 4q + 100]}{h}$$<p class='mt-4'>Expandindo:</p>$$= \\lim_{h \\to 0} \\frac{q^2 + 2qh + h^2 + 4q + 4h + 100 - q^2 - 4q - 100}{h}$$<p class='mt-4'>Simplificando:</p>$$= \\lim_{h \\to 0} \\frac{2qh + h^2 + 4h}{h} = \\lim_{h \\to 0} (2q + h + 4) = 2q + 4$$<p class='mt-4'>Portanto, C'(2) = 2(2) + 4 = 8</p>"
                }
              ],
              "questions": [
                {
                  "id": "m1_l1_q1",
                  "type": "numeric",
                  "latex": "$$\\text{Custo Total } C(q) = 100 + 10q. \\text{ Qual o Custo Marginal?}$$",
                  "answer": "10",
                  "hint": "Derive em relação a q. Lembre-se: a derivada de uma constante é zero.",
                  "explanation": "A derivada de 10q é 10. O 100 (custo fixo) desaparece na derivada, pois d/dq(100) = 0. Logo, CMg = 10."
                },
                {
                  "id": "m1_l1_q2",
                  "type": "fill_gap",
                  "text": "A derivada é o limite da reta secante quando a distância entre os pontos tende a {{gap}}.",
                  "answer": "zero",
                  "hint": "Quando h → ?",
                  "explanation": "Quando a distância h tende a zero, a reta secante se torna tangente, e a taxa média se torna instantânea (derivada)."
                },
                {
                  "id": "m1_l1_q3",
                  "type": "multiple_choice",
                  "latex": "$$\\text{Se C(q) = q^2 + 4q + 100, qual é C'(q)?}$$",
                  "options": [
                    "$2q + 4$",
                    "$q + 4$",
                    "$2q$",
                    "$q^2 + 4$"
                  ],
                  "answer": "$2q + 4$",
                  "hint": "Use a definição do limite ou as regras de derivação que apareceram nos cards.",
                  "explanation": "Pela definição do limite (vista no card formal), obtemos C'(q) = 2q + 4. Cada termo foi derivado: d/dq(q²) = 2q, d/dq(4q) = 4, d/dq(100) = 0."
                },
                {
                  "id": "m1_l1_q4",
                  "type": "numeric",
                  "latex": "$$\\text{Para } C(q) = q^2 + 4q + 100, \\text{ calcule } C'(2).$$",
                  "answer": "8",
                  "hint": "Primeiro encontre C'(q) = 2q + 4, depois substitua q = 2.",
                  "explanation": "C'(q) = 2q + 4, logo C'(2) = 2(2) + 4 = 8. Isso significa que, em q = 2, o custo está aumentando à taxa de 8 unidades monetárias por unidade produzida."
                },
                {
                  "id": "m1_l1_q5",
                  "type": "multiple_choice",
                  "latex": "$$\\text{A taxa de variação MÉDIA entre q=2 e q=5 foi 11. A taxa INSTANTÂNEA em q=2 é 8.}$$\\text{O que isso significa?}",
                  "options": [
                    "A taxa está desacelerando",
                    "A taxa está acelerando",
                    "São a mesma coisa",
                    "Não tem relação"
                  ],
                  "answer": "A taxa está acelerando",
                  "hint": "Compare: a média no intervalo [2,5] é 11, mas em q=2 a instantânea é apenas 8.",
                  "explanation": "Em q=2, a taxa instantânea é 8. Mas a média até q=5 é 11, indicando que a taxa cresce ao longo do intervalo. Isso ocorre porque C(q) é quadrática (convexa)."
                },
                {
                  "id": "m1_l1_q6",
                  "type": "fill_gap",
                  "text": "O Custo Marginal mede quanto custa produzir a {{gap}} unidade.",
                  "answer": "próxima",
                  "hint": "Marginal olha para frente ou para trás?",
                  "explanation": "Marginal sempre se refere à próxima unidade (+1). É a variação instantânea ao aumentar q."
                },
                {
                  "id": "m1_l1_q7",
                  "type": "numeric",
                  "latex": "$$\\text{Se RMg} = 10 \\text{ e CMg} = 8, \\text{ qual é o Lucro Marginal?}$$",
                  "answer": "2",
                  "hint": "Lucro Marginal = Receita Marginal - Custo Marginal.",
                  "explanation": "LMg = RMg - CMg = 10 - 8 = 2. Como é positivo, vale a pena produzir essa unidade adicional."
                }
              ]
            },
            {
              "id": "MAT1-L02",
              "title": "Regra da Potência",
              "description": "Aplicação da regra da potência x^n → nx^(n-1)",
              "xp": 50,
              "cards": [
                {
                  "type": "story",
                  "title": "O Padrão Oculto",
                  "html": "<p>Um fabricante percebe algo estranho: quando dobra a produção de 10 para 20 unidades, o custo não dobra. Quando triplica de 10 para 30, o custo não triplica.</p><p class='mt-4'>Por quê? Porque o custo cresce como <i>q²</i>, não como <i>q</i>.</p><p class='mt-4'>Para entender quanto o custo muda ao produzir mais uma unidade, precisamos de uma ferramenta: <b>a Regra da Potência</b>.</p><p class='mt-4'>Essa regra nos permite derivar qualquer função do tipo x<sup>n</sup> de forma instantânea, sem precisar calcular limites toda vez.</p>"
                },
                {
                  "type": "concept",
                  "title": "A Regra do Tombo",
                  "html": "<p>Quando você tem uma função potência f(x) = x<sup>n</sup>, a derivada segue um padrão simples:</p><p class='mt-4'><b>1.</b> O expoente <i>n</i> 'tomba' para frente (vira coeficiente)</p><p class='mt-4'><b>2.</b> Subtraia 1 do expoente</p><p class='mt-4'>Exemplo visual:</p><p class='mt-2 text-center font-mono'>x<sup>5</sup> → 5·x<sup>4</sup></p><p class='mt-2 text-center font-mono'>x<sup>3</sup> → 3·x<sup>2</sup></p><p class='mt-2 text-center font-mono'>x<sup>2</sup> → 2·x<sup>1</sup> = 2x</p><p class='mt-4'>O número 'cai' da potência e o expoente diminui em 1.</p>"
                },
                {
                  "type": "visual",
                  "title": "Por Que Funciona?",
                  "html": "<p>Considere f(x) = x². Vamos calcular a derivada pela definição:</p><p class='mt-4'>Expandindo (x+h)²:</p>",
                  "latex": "$$f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h}$$<p class='mt-4'>Simplificando:</p>$$= \\lim_{h \\to 0} \\frac{2xh + h^2}{h} = \\lim_{h \\to 0} (2x + h) = 2x$$<p class='mt-4'>O expoente 2 virou coeficiente, e o novo expoente é 2-1=1. Exatamente como a regra prevê!</p>"
                },
                {
                  "type": "formal",
                  "title": "A Regra Geral da Potência",
                  "html": "<p>Para qualquer número real <i>n</i> (positivo, negativo ou fracionário), a regra da potência afirma:</p>",
                  "latex": "$$\\text{Se } f(x) = x^n, \\text{ então } f'(x) = n \\cdot x^{n-1}$$"
                },
                {
                  "type": "example",
                  "title": "Exemplo 1: Custo Quadrático",
                  "html": "<p>Suponha C(q) = q². Vamos calcular o Custo Marginal.</p><p class='mt-4'><b>Passo 1:</b> Identificar n = 2</p><p class='mt-4'><b>Passo 2:</b> Aplicar a regra: n·q<sup>n-1</sup></p>",
                  "latex": "$$C'(q) = 2 \\cdot q^{2-1} = 2q$$<p class='mt-4'>Isso significa: quando você está produzindo <i>q</i> unidades, o custo da próxima unidade é aproximadamente 2q.</p>"
                },
                {
                  "type": "example",
                  "title": "Exemplo 2: Potências Maiores",
                  "html": "<p>Agora considere R(q) = q⁴. Qual é a Receita Marginal?</p><p class='mt-4'><b>Aplicando a regra:</b></p>",
                  "latex": "$$R'(q) = 4 \\cdot q^{4-1} = 4q^3$$<p class='mt-4'>Note que a receita marginal cresce muito mais rápido (é cúbica), indicando economias de escala crescentes.</p>"
                },
                {
                  "type": "example",
                  "title": "Exemplo 3: Calculando em um Ponto",
                  "html": "<p>Se f(x) = x⁴, calcule f'(2).</p><p class='mt-4'><b>Passo 1:</b> Derive f(x)</p>",
                  "latex": "$$f'(x) = 4x^3$$<p class='mt-4'><b>Passo 2:</b> Substitua x = 2</p>$$f'(2) = 4 \\cdot 2^3 = 4 \\cdot 8 = 32$$<p class='mt-4'>Em x=2, a função está crescendo à taxa de 32 unidades por unidade de x.</p>"
                },
                {
                  "type": "economic_intuition",
                  "title": "Interpretação: Taxas de Crescimento",
                  "html": "<p>A regra da potência revela algo importante sobre custos e receitas:</p><p class='mt-4'><b>• Se C(q) = q² (quadrático):</b> CMg = 2q cresce linearmente</p><p class='mt-4'><b>• Se C(q) = q³ (cúbico):</b> CMg = 3q² cresce quadraticamente</p><p class='mt-4'>Quanto maior o expoente original, mais rápido o custo marginal aumenta. Isso explica deseconomias de escala: produzir muito fica progressivamente mais caro por unidade.</p><div class='bg-blue-100 border-l-4 border-blue-500 p-4 mt-4 text-blue-900'><p class='font-semibold'>Implicação Prática:</p><p>Firmas com custos quadráticos ou cúbicos enfrentam CMg crescente → há um limite ótimo de produção.</p></div>"
                }
              ],
              "questions": [
                {
                  "id": "m1_l2_q1",
                  "type": "numeric",
                  "latex": "$$\\text{Se } f(x) = x^4, \\text{ calcule } f'(2).$$",
                  "answer": "32",
                  "hint": "Primeiro encontre f'(x) usando a regra da potência, depois substitua x=2.",
                  "explanation": "f'(x) = 4x³. Substituindo x=2: f'(2) = 4·2³ = 4·8 = 32."
                },
                {
                  "id": "m1_l2_q2",
                  "type": "fill_gap",
                  "text": "Para derivar x^n, você tomba o n e subtrai {{gap}} do expoente.",
                  "answer": "um",
                  "hint": "O novo expoente é n - ?",
                  "explanation": "A regra é n·x^(n-1). Sempre subtraímos 1 do expoente original."
                },
                {
                  "id": "m1_l2_q3",
                  "type": "multiple_choice",
                  "latex": "$$\\text{Qual é a derivada de } g(x) = x^5?$$",
                  "options": [
                    "$5x^4$",
                    "$x^4$",
                    "$5x^5$",
                    "$4x^5$"
                  ],
                  "answer": "$5x^4$",
                  "hint": "Aplique a regra da potência: o expoente cai para frente.",
                  "explanation": "g'(x) = 5·x^(5-1) = 5x⁴. O 5 tomba e o expoente vira 4."
                },
                {
                  "id": "m1_l2_q4",
                  "type": "numeric",
                  "latex": "$$\\text{Se } C(q) = q^3, \\text{ qual é } C'(10)?$$",
                  "answer": "300",
                  "hint": "Primeiro derive: C'(q) = 3q². Depois substitua q=10.",
                  "explanation": "C'(q) = 3q². Logo C'(10) = 3·10² = 3·100 = 300. Quando produzindo 10 unidades, o custo marginal é 300."
                },
                {
                  "id": "m1_l2_q5",
                  "type": "multiple_choice",
                  "latex": "$$\\text{O gráfico de } y = x^2 \\text{ fica mais ÍNGREME que } y = x \\text{ conforme x cresce?}$$",
                  "options": [
                    "Sim",
                    "Não"
                  ],
                  "answer": "Sim",
                  "hint": "Compare as derivadas: y=x tem derivada constante. E y=x²?",
                  "explanation": "A derivada de y=x é 1 (inclinação constante). A de y=x² é 2x, que cresce com x. Logo y=x² fica cada vez mais íngreme."
                },
                {
                  "id": "m1_l2_q6",
                  "type": "numeric",
                  "latex": "$$\\text{Se } f(x) = x^6, \\text{ calcule } f'(1).$$",
                  "answer": "6",
                  "hint": "f'(x) = 6x⁵. Substitua x=1.",
                  "explanation": "f'(x) = 6x⁵. Em x=1: f'(1) = 6·1⁵ = 6·1 = 6."
                },
                {
                  "id": "m1_l2_q7",
                  "type": "fill_gap",
                  "text": "Se o Custo é C(q) = q³, o Custo Marginal CMg = 3q² cresce de forma {{gap}}.",
                  "answer": "quadrática",
                  "hint": "Qual é o formato de 3q²?",
                  "explanation": "CMg = 3q² é uma função quadrática em q. Isso significa que o custo marginal acelera rapidamente conforme q aumenta."
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
