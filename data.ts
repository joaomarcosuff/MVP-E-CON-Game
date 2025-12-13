
import { Lessons, SimulationStep } from "./types";

export const lessons: Lessons = {
    applied_math: {
        id: "MAT",
        title: "Matemática Aplicada",
        subtitle: "Métodos Quantitativos",
        icon: "📐",
        description: "Fundamentos matemáticos para análise econômica: Cálculo Univariado, Multivariado e Dinâmica.",
        modules: [
            // --- MATEMÁTICA I (Atualizada com Slides e Fases) ---
            {
                id: "MAT1-P1",
                title: "Fase 1: O Radar de Velocidade",
                description: "Entendendo a variação instantânea.",
                status: "unlocked",
                type: "quiz",
                xpReward: 150,
                nextModule: "MAT1-P2",
                slides: [
                    {
                        title: "Do Médio para o Instantâneo (Concreto)",
                        html: `<p>Imagine que você dirigiu 100km em 2 horas. Sua velocidade <b>média</b> foi 50km/h.</p>
                               <p class="mt-4">Mas o radar te multou! Por quê? Porque ele mediu sua velocidade <b>instantânea</b> num ponto específico.</p>`,
                        interactiveType: "speedometer_analogy"
                    },
                    {
                        title: "O Zoom Infinito (Pictórico)",
                        html: `<p>Matematicamente, transformar média em instantânea é "diminuir o tempo" até zero.</p>
                               <p class="mt-4">Mova o slider abaixo para ver a <b>Reta Secante</b> (média) virar <b>Reta Tangente</b> (instantânea).</p>`,
                        interactiveType: "derivative_slider"
                    },
                    {
                        title: "A Fórmula (Abstrato)",
                        html: `<p>O que você acabou de fazer (zerar a distância) é o <b>Limite</b>.</p>
                               <div class="bg-indigo-50 p-4 rounded-lg my-4 text-center font-serif text-lg">
                               $$ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $$
                               </div>
                               <p>Essa é a definição formal de Derivada.</p>`
                    }
                ],
                questions: [
                    {
                        topic: "Limites (Definição)",
                        question: "Calcule o limite: lim(x→2) (x² + 3x - 1)",
                        hint: "Substitua x por 2 na expressão.",
                        type: "multiple_choice",
                        options: [
                            { text: "9", correct: true },
                            { text: "7", correct: false },
                            { text: "11", correct: false }
                        ],
                        explanation: "2² + 3(2) - 1 = 4 + 6 - 1 = 9."
                    },
                    {
                        topic: "Derivada Visual",
                        question: "Clique no Ponto de Máximo Global da função.",
                        type: "graph_point",
                        svgPath: "M 10 250 Q 150 50 290 250", 
                        target: { x: 150, y: 50, tolerance: 30 },
                        hint: "Procure o topo da montanha, onde a inclinação é zero.",
                        explanation: "No topo da parábola, a reta tangente é horizontal (derivada = 0)."
                    },
                    {
                        topic: "Choque de Oferta",
                        question: "Houve um choque tecnológico positivo. Mova a curva de Oferta.",
                        type: "graph_shift",
                        curveType: "supply",
                        correctDirection: "right", 
                        hint: "Tecnologia aumenta a produção pelo mesmo custo (expansão).",
                        explanation: "Choque positivo de oferta desloca a curva para a direita (para baixo)."
                    }
                ]
            },
            {
                id: "MAT1-P2",
                title: "Fase 2: O Formato da Economia",
                description: "Crescimento, Decrescimento e Concavidade.",
                status: "unlocked",
                type: "quiz",
                xpReward: 200,
                nextModule: "MAT1-P3",
                slides: [
                    {
                        title: "Acelerando ou Freiando? (Concreto)",
                        html: `<p>Uma economia pode estar crescendo, mas perdendo força (desacelerando). Como distinguimos isso?</p>
                               <p class="mt-4">Olhando a <b>Segunda Derivada</b> ($f''$).</p>`
                    },
                    {
                        title: "Sorriso ou Tristeza? (Pictórico)",
                        html: `<p>Toque nos botões para mudar a concavidade:</p>
                               <ul class="list-disc pl-5 mt-4 space-y-2">
                                <li><b>Sorriso (U):</b> $f'' > 0$ (Mínimo)</li>
                                <li><b>Triste (∩):</b> $f'' < 0$ (Máximo)</li>
                               </ul>`,
                        interactiveType: "concavity_toggle"
                    },
                    {
                        title: "Regra da Cadeia (Mecânica)",
                        html: `<p>A economia é um sistema de engrenagens.</p>
                               <p class="mt-2">Juros ($x$) afetam Investimento ($u$), que afeta o PIB ($y$).</p>
                               <div class="bg-indigo-50 p-4 rounded-lg my-4 text-center font-serif text-lg">
                               $$ \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} $$
                               </div>
                               <p>Multiplicamos os efeitos.</p>`
                    }
                ],
                questions: [
                    {
                        topic: "Concavidade",
                        question: "Complete a frase sobre a segunda derivada.",
                        type: "fill_gap",
                        gapText: "Se a derivada segunda é negativa (f'' < 0), a concavidade é para {{gap}}.",
                        correctAnswer: "baixo",
                        hint: "Pense no formato de um rosto triste ☹️.",
                        explanation: "f'' < 0 indica que a inclinação está diminuindo, logo a 'boca' da curva aponta para baixo."
                    },
                    {
                        topic: "Regra da Cadeia",
                        question: "Se y = (2x + 1)³. Calcule y' em x=0.",
                        hint: "Use a regra da cadeia: deriva fora x deriva dentro.",
                        type: "multiple_choice",
                        options: [
                            { text: "6", correct: true },
                            { text: "3", correct: false },
                            { text: "12", correct: false }
                        ],
                        explanation: "y' = 3(2x+1)² · 2. Em x=0: 3(1)² · 2 = 6."
                    }
                ]
            },
            {
                id: "MAT1-P3",
                title: "Fase 3: O Ponto Ótimo",
                description: "Como fazer o melhor com o que se tem.",
                status: "unlocked",
                type: "quiz",
                slides: [
                    {
                        title: "O Topo da Montanha (Concreto)",
                        html: `<p>Para maximizar o lucro, você deve subir até não conseguir mais.</p>
                               <p class="mt-2">O topo é plano. A inclinação é zero.</p>
                               <div class="bg-green-100 text-green-800 font-bold p-2 rounded mt-2 text-center">Derivada = 0</div>`
                    },
                    {
                        title: "Restrição Orçamentária (Visual)",
                        html: `<p>Você quer subir a montanha (Utilidade), mas tem uma cerca (Orçamento) te impedindo.</p>
                               <p class="mt-4">O melhor ponto é onde você <b>encosta</b> na cerca sem cruzá-la.</p>`,
                        interactiveType: "lagrange_visualizer"
                    },
                    {
                        title: "Multiplicador de Lagrange (Abstrato)",
                        html: `<p>O método de Lagrange encontra esse ponto de toque.</p>
                               <div class="bg-indigo-50 p-4 rounded-lg my-4 text-center font-serif text-sm">
                               $$ \\mathcal{L} = f(x,y) - \\lambda (g(x,y) - c) $$
                               </div>
                               <p>$\\lambda$ é o "preço sombra": quanto você ganharia se a cerca mudasse de lugar.</p>`
                    }
                ],
                questions: [
                    {
                        topic: "Maximização de Lucro",
                        question: "Lucro L(q) = -q² + 10q - 5. Qual q maximiza o lucro?",
                        hint: "Derive e iguale a zero para achar o topo.",
                        type: "multiple_choice",
                        options: [
                            { text: "5", correct: true },
                            { text: "10", correct: false },
                            { text: "-5", correct: false }
                        ],
                        explanation: "L' = -2q + 10 = 0 → 2q = 10 → q=5."
                    },
                    {
                        topic: "Otimização Visual",
                        question: "Clique onde o Lucro é Máximo nesta função.",
                        type: "graph_point",
                        svgPath: "M 10 280 C 80 280, 100 20, 150 20 S 220 280, 290 280", 
                        target: { x: 150, y: 20, tolerance: 30 },
                        hint: "O ponto mais alto da curva.",
                        explanation: "O máximo global ocorre no pico da curva."
                    }
                ]
            },
            
            // --- MATEMÁTICA II ---
            {
                id: "MAT2-01",
                title: "II. Derivadas Parciais",
                status: "unlocked",
                type: "quiz",
                questions: [
                    {
                        topic: "Conceito (Ceteris Paribus)",
                        question: "Sua felicidade (U) depende de Café (x) e Pão de Queijo (y). O que significa a Derivada Parcial em relação ao Café (∂U/∂x)?",
                        hint: "Imagine que a quantidade de Pão de Queijo está travada/fixa.",
                        type: "multiple_choice",
                        options: [
                            { text: "Como a felicidade muda se eu aumentar o Café, mantendo o Pão de Queijo constante.", correct: true },
                            { text: "Como a felicidade muda se eu aumentar os dois ao mesmo tempo.", correct: false },
                            { text: "A quantidade total de felicidade que tenho.", correct: false }
                        ],
                        explanation: "GASING (Concreto): É a análise 'Ceteris Paribus'. Analisamos o impacto marginal de uma variável 'congelando' as outras."
                    }
                ]
            },

            // --- MATEMÁTICA III ---
            {
                id: "MAT3-01",
                title: "III. Dinâmica",
                status: "unlocked",
                type: "quiz",
                questions: [
                    {
                        topic: "Conceito (Juros)",
                        question: "Você tem uma poupança (y) que rende 10% ao ano. Como escrevemos o valor do ano seguinte (t+1) baseada no ano atual (t)?",
                        hint: "O novo valor é o valor antigo + 10% do antigo.",
                        type: "multiple_choice",
                        options: [
                            { text: "y(t+1) = 1,10 · y(t)", correct: true },
                            { text: "y(t+1) = y(t) + 10", correct: false },
                            { text: "y(t+1) = 0,10 · y(t)", correct: false }
                        ],
                        explanation: "GASING (Concreto): Esta é uma Equação de Diferenças de 1ª ordem. O estado futuro depende do estado atual multiplicado por um fator de crescimento."
                    }
                ]
            }
        ]
    },
    micro: {
        id: "MIC",
        title: "Microeconomia",
        subtitle: "Agentes e Escolhas",
        icon: "🛒",
        description: "Teoria do Consumidor, Firma e Estruturas de Mercado.",
        modules: [
            {
                id: "MIC-01",
                title: "Teoria do Consumidor",
                status: "unlocked",
                type: "quiz",
                questions: [
                    {
                        topic: "1. Preferências (Concreto)",
                        question: "Imagine que você está na cantina. Você gosta tanto de Café (X) quanto de Pão de Queijo (Y). Se eu tirar 1 Pão de Queijo seu, quantos Cafés eu preciso te dar para você ficar IGUALMENTE feliz?",
                        hint: "Estamos buscando uma troca que mantenha sua satisfação constante. Isso é a base da 'Indiferença'.",
                        type: "multiple_choice",
                        options: [
                            { text: "A quantidade exata que compensa a perda, mantendo a Utilidade constante.", correct: true },
                            { text: "O máximo de cafés que eu puder comprar com meu dinheiro.", correct: false },
                            { text: "Sempre 1 café por 1 pão de queijo, independente de quantos eu já tenho.", correct: false }
                        ],
                        explanation: "GASING (Story): Isso define a Taxa Marginal de Substituição (TMS). Se você troca X por Y e continua com a mesma 'felicidade', você está andando sobre uma Curva de Indiferença."
                    }
                ]
            }
        ]
    },
    macro: {
        id: "MAC",
        title: "Macroeconomia",
        subtitle: "Sistemas Econômicos",
        icon: "🏦",
        description: "PIB, Inflação, Câmbio e Modelos IS-LM-BP.",
        modules: [
            {
                id: "MAC-01",
                title: "Contabilidade Nacional",
                status: "unlocked",
                type: "quiz",
                questions: [
                    {
                        topic: "1. Identidades Contábeis",
                        question: "Em uma economia aberta, se a Poupança Nacional (Privada + Pública) for menor que o Investimento (S < I), o que deve ocorrer com o setor externo?",
                        hint: "Lembre-se da identidade S = I + CC. Se S é pouco para cobrir I, precisamos de poupança de quem?",
                        type: "multiple_choice",
                        options: [
                            { text: "Haverá um Déficit em Transações Correntes (Poupança Externa positiva).", correct: true },
                            { text: "Haverá um Superávit em Transações Correntes.", correct: false },
                            { text: "O Governo deve necessariamente aumentar impostos.", correct: false }
                        ],
                        explanation: "Se S < I, o país precisa captar recursos externos para financiar o investimento, o que contabilmente aparece como um Déficit em Transações Correntes (CC < 0) ou Poupança Externa positiva."
                    }
                ]
            },
            {
                id: "MAC-02",
                title: "Simulador Mundell-Fleming",
                status: "unlocked",
                type: "simulation",
                questions: []
            }
        ]
    }
};

export function generateMundellFlemingLogic(regime: string, mobility: string, policy: string): SimulationStep[] {
    let isFiscal = policy.includes('fiscal');
    let isExp = policy.includes('exp');
    
    let s1: SimulationStep = {
        question: `Política ${isFiscal?'Fiscal':'Monetária'} ${isExp?'Expansionista':'Contracionista'}. Qual curva se desloca inicialmente?`,
        hint: "Política Fiscal afeta o mercado de bens (IS). Política Monetária afeta o mercado monetário (LM).",
        options: [
            {text: isFiscal?(isExp?"IS p/ Direita":"IS p/ Esquerda"):(isExp?"LM p/ Direita":"LM p/ Esquerda"), correct:true},
            {text: isFiscal?"LM se move":"IS se move", correct:false}
        ],
        targetState: { 
            isShift: isFiscal?(isExp?1:-1):0, 
            lmShift: !isFiscal?(isExp?1:-1):0 
        }
    };

    let balance = 'neutral';
    
    if(isFiscal) {
        if(isExp) balance = (mobility === 'perfeita' || mobility === 'imperfeita_alta') ? 'superavit' : 'deficit';
        else balance = (mobility === 'perfeita' || mobility === 'imperfeita_alta') ? 'deficit' : 'superavit';
    } else {
        if(isExp) balance = 'deficit'; // i down (outflow) + Y up (import)
        else balance = 'superavit';
    }

    let s2: SimulationStep = {
        question: "Analisando o novo ponto de equilíbrio interno, qual é a situação do Balanço de Pagamentos?",
        hint: "Compare o novo ponto com a curva BP. Acima dela = Superávit (Entrada Líquida). Abaixo = Déficit.",
        options: [
            {text: balance === 'superavit' ? "Superávit (Entrada de Dólares)" : "Déficit (Saída de Dólares)", correct: true},
            {text: balance === 'superavit' ? "Déficit" : "Superávit", correct: false}
        ],
        targetState: s1.targetState 
    };

    let s3: SimulationStep = { question: '', hint: '', options: [], targetState: {...s1.targetState!} };
    
    if(regime === 'fixo') {
        if(balance === 'superavit') {
            s3.question = "Superávit pressiona Dólar a cair (Apreciar). Como o BC mantém o Câmbio Fixo?";
            s3.hint = "Para evitar a queda do dólar, o BC precisa comprar o excesso de oferta. O que isso faz com a Base Monetária?";
            s3.options = [
                {text: "Compra Dólares -> Aumenta Reservas -> Expande Moeda (LM Direita)", correct: true},
                {text: "Vende Dólares -> Contrai Moeda", correct: false}
            ];
            s3.targetState!.lmShift += 1;
        } else { 
            s3.question = "Déficit pressiona Dólar a subir (Depreciar). Como o BC mantém o Câmbio Fixo?";
            s3.hint = "Para evitar a subida do dólar, o BC precisa vender reservas para suprir a falta. O que acontece com os Reais em circulação?";
            s3.options = [
                {text: "Vende Dólares -> Perde Reservas -> Contrai Moeda (LM Esquerda)", correct: true},
                {text: "Compra Dólares -> Expande Moeda", correct: false}
            ];
            s3.targetState!.lmShift -= 1;
        }
    } else { 
        if(balance === 'superavit') {
            s3.question = "Superávit faz Dólar cair (Apreciação). Qual o efeito real?";
            s3.hint = "Dólar barato torna produtos nacionais caros para estrangeiros. O que acontece com as Exportações Líquidas (NX)?";
            s3.options = [
                {text: "Exportações Caem (Competitividade cai) -> IS volta p/ Esquerda", correct: true},
                {text: "Exportações Sobem -> IS vai p/ Direita", correct: false}
            ];
            s3.targetState!.isShift -= 1;
        } else { 
            s3.question = "Déficit faz Dólar subir (Depreciação). Qual o efeito real?";
            s3.hint = "Dólar caro torna produtos nacionais baratos lá fora. Isso estimula as vendas externas (NX)?";
            s3.options = [
                {text: "Exportações Sobem (Competitividade sobe) -> IS avança p/ Direita", correct: true},
                {text: "Exportações Caem -> IS volta", correct: false}
            ];
            s3.targetState!.isShift += 1;
            
            if(isFiscal && isExp && mobility === 'imperfeita_baixa') {
                s3.targetState!.isShift += 0.5; 
            }
        }
    }

    return [s1, s2, s3];
}

export function getBpType(mob: string): 'horizontal' | 'vertical' | 'flat' | 'steep' {
    if(mob === 'perfeita') return 'horizontal';
    if(mob === 'nula') return 'vertical';
    if(mob === 'imperfeita_alta') return 'flat';
    return 'steep';
}