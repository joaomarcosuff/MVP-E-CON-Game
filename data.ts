
import { Lessons, SimulationStep } from "./types";

export const lessons: Lessons = {
    applied_math: {
        id: "MAT",
        title: "Matemática Aplicada",
        subtitle: "Métodos Quantitativos",
        icon: "📐",
        description: "Fundamentos matemáticos para análise econômica: Cálculo Univariado, Multivariado e Dinâmica.",
        modules: [
            // --- MATEMÁTICA I (Atualizada com Fases) ---
            {
                id: "MAT1-P1",
                title: "I. Mecanismo da Mudança",
                status: "unlocked",
                type: "quiz",
                questions: [
                    {
                        topic: "Limites (Definição)",
                        question: "Calcule o limite: lim(x→2) (x² + 3x - 1)",
                        hint: "Substitua x por 2 na expressão.",
                        options: [
                            { text: "9", correct: true },
                            { text: "7", correct: false },
                            { text: "11", correct: false }
                        ],
                        explanation: "2² + 3(2) - 1 = 4 + 6 - 1 = 9."
                    },
                    {
                        topic: "Limites (Fatoração)",
                        question: "Calcule o limite: lim(x→3) (x² - 9)/(x - 3)",
                        hint: "Fatore o numerador como (x-3)(x+3).",
                        options: [
                            { text: "6", correct: true },
                            { text: "0", correct: false },
                            { text: "Indeterminado", correct: false }
                        ],
                        explanation: "Cortando (x-3), sobra x+3. Para x=3, temos 3+3=6."
                    },
                    {
                        topic: "Derivada (Polinômio)",
                        question: "Se f(x) = 4x³ - 2x, calcule f'(1).",
                        hint: "Regra do tombo: Derivada de xⁿ é n·xⁿ⁻¹.",
                        options: [
                            { text: "10", correct: true },
                            { text: "12", correct: false },
                            { text: "2", correct: false }
                        ],
                        explanation: "f'(x) = 12x² - 2. Em x=1: 12(1)² - 2 = 10."
                    },
                    {
                        topic: "Custo Marginal",
                        question: "Custo Total: C(q) = 100 + 50q - 2q². Qual o Custo Marginal (CMg) quando q=10?",
                        hint: "Derive C(q) para achar o CMg e substitua q=10.",
                        options: [
                            { text: "10", correct: true },
                            { text: "30", correct: false },
                            { text: "50", correct: false }
                        ],
                        explanation: "CMg = 50 - 4q. Substituindo q=10: 50 - 4(10) = 10."
                    },
                    {
                        topic: "Conceito Visual",
                        question: "A derivada f'(a) representa a inclinação de qual reta?",
                        hint: "Aquela que toca a curva em apenas um ponto localmente.",
                        options: [
                            { text: "Reta Tangente", correct: true },
                            { text: "Reta Secante", correct: false },
                            { text: "Reta Normal", correct: false }
                        ],
                        explanation: "A derivada é o coeficiente angular da reta tangente à curva no ponto a."
                    },
                    {
                        topic: "Derivada de Constante",
                        question: "Qual é o valor de d/dx(500π)?",
                        hint: "500π é um número fixo, não tem x.",
                        options: [
                            { text: "0", correct: true },
                            { text: "500", correct: false },
                            { text: "500π", correct: false }
                        ],
                        explanation: "A derivada de uma constante é sempre zero, pois não há variação."
                    }
                ]
            },
            {
                id: "MAT1-P2",
                title: "I. Análise de Comportamento",
                status: "unlocked",
                type: "quiz",
                questions: [
                    {
                        topic: "Regra da Cadeia",
                        question: "Se y = (2x + 1)³. Calcule y' em x=0.",
                        hint: "Use a regra da cadeia: deriva fora x deriva dentro.",
                        options: [
                            { text: "6", correct: true },
                            { text: "3", correct: false },
                            { text: "12", correct: false }
                        ],
                        explanation: "y' = 3(2x+1)² · 2. Em x=0: 3(1)² · 2 = 6."
                    },
                    {
                        topic: "L'Hopital",
                        question: "Limite x→1 de (x⁵ - 1)/(x - 1). Use L'Hopital.",
                        hint: "Derive o numerador e o denominador separadamente.",
                        options: [
                            { text: "5", correct: true },
                            { text: "1", correct: false },
                            { text: "0", correct: false }
                        ],
                        explanation: "Derivada de x⁵ é 5x⁴. Derivada de x é 1. Resultado: 5(1)⁴/1 = 5."
                    },
                    {
                        topic: "Função Exponencial",
                        question: "Qual a derivada de f(x) = eˣ?",
                        hint: "É a única função cuja derivada é ela mesma.",
                        options: [
                            { text: "eˣ", correct: true },
                            { text: "x·eˣ⁻¹", correct: false },
                            { text: "x", correct: false }
                        ],
                        explanation: "A função exponencial natural é imune à derivada."
                    },
                    {
                        topic: "Crescimento",
                        question: "Se f'(x) = 2x - 4. Em que x a função para de decrescer e começa a crescer?",
                        hint: "Encontre onde a derivada é zero (ponto crítico).",
                        options: [
                            { text: "2", correct: true },
                            { text: "4", correct: false },
                            { text: "0", correct: false }
                        ],
                        explanation: "2x - 4 = 0 → 2x = 4 → x = 2. Antes de 2 ela desce, depois sobe."
                    },
                    {
                        topic: "Concavidade",
                        question: "Se a segunda derivada f''(x) < 0, a concavidade é para...?",
                        hint: "Imagine um rosto triste.",
                        options: [
                            { text: "Baixo (Côncava)", correct: true },
                            { text: "Cima (Convexa)", correct: false },
                            { text: "Nula", correct: false }
                        ],
                        explanation: "Derivada segunda negativa indica concavidade para baixo (formato de U invertido)."
                    },
                    {
                        topic: "Inflexão",
                        question: "Se f(x) = x³, onde é o ponto de inflexão?",
                        hint: "Onde a segunda derivada zera?",
                        options: [
                            { text: "x = 0", correct: true },
                            { text: "x = 1", correct: false },
                            { text: "x = 3", correct: false }
                        ],
                        explanation: "f' = 3x², f'' = 6x. Igualando a zero: 6x=0 → x=0."
                    }
                ]
            },
            {
                id: "MAT1-P3",
                title: "I. Otimização Econômica",
                status: "unlocked",
                type: "quiz",
                questions: [
                    {
                        topic: "Maximização de Lucro",
                        question: "Lucro L(q) = -q² + 10q - 5. Qual q maximiza o lucro?",
                        hint: "Derive e iguale a zero para achar o topo.",
                        options: [
                            { text: "5", correct: true },
                            { text: "10", correct: false },
                            { text: "-5", correct: false }
                        ],
                        explanation: "L' = -2q + 10 = 0 → 2q = 10 → q=5."
                    },
                    {
                        topic: "Teste da 2ª Derivada",
                        question: "Num ponto crítico, se f''(c) > 0 (sorriso), temos um...?",
                        hint: "Se a concavidade é para cima, estamos no fundo do vale.",
                        options: [
                            { text: "Mínimo Relativo", correct: true },
                            { text: "Máximo Relativo", correct: false },
                            { text: "Ponto de Sela", correct: false }
                        ],
                        explanation: "Concavidade para cima (positiva) indica um Mínimo."
                    },
                    {
                        topic: "Cobb-Douglas",
                        question: "Produção P = 10 · L⁰'⁵ · K⁰'⁵. Se L=4 e K=9, qual é o valor de P?",
                        hint: "Lembre-se que elevar a 0,5 é o mesmo que tirar a raiz quadrada.",
                        options: [
                            { text: "60", correct: true },
                            { text: "30", correct: false },
                            { text: "100", correct: false }
                        ],
                        explanation: "Raiz de 4 é 2. Raiz de 9 é 3. P = 10 · 2 · 3 = 60."
                    },
                    {
                        topic: "Derivada Parcial",
                        question: "Se f(x,y) = x² + y². Qual o valor de ∂f/∂x no ponto (1, 3)?",
                        hint: "Derive em relação a x e trate y como constante.",
                        options: [
                            { text: "2", correct: true },
                            { text: "1", correct: false },
                            { text: "4", correct: false }
                        ],
                        explanation: "A derivada parcial em x é 2x. Substituindo x=1, temos 2(1) = 2."
                    },
                    {
                        topic: "Lagrange (Conceito)",
                        question: "No ponto ótimo de Lagrange, as curvas de nível da função objetivo tangenciam a...?",
                        hint: "É a linha que define o que você PODE gastar.",
                        options: [
                            { text: "Restrição (Orçamentária)", correct: true },
                            { text: "Origem dos eixos", correct: false },
                            { text: "Eixo X", correct: false }
                        ],
                        explanation: "A otimização ocorre onde a inclinação da função objetivo iguala a inclinação da restrição."
                    }
                ]
            },
            
            // --- MATEMÁTICA II (Restaurada) ---
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
                        options: [
                            { text: "Como a felicidade muda se eu aumentar o Café, mantendo o Pão de Queijo constante.", correct: true },
                            { text: "Como a felicidade muda se eu aumentar os dois ao mesmo tempo.", correct: false },
                            { text: "A quantidade total de felicidade que tenho.", correct: false }
                        ],
                        explanation: "GASING (Concreto): É a análise 'Ceteris Paribus'. Analisamos o impacto marginal de uma variável 'congelando' as outras."
                    },
                    {
                        topic: "Visualização (3D)",
                        question: "Imagine o gráfico da Utilidade como uma montanha. O que é ∂U/∂x geometricamente?",
                        hint: "Se cortarmos a montanha com uma faca paralela ao eixo X...",
                        options: [
                            { text: "A inclinação da subida na direção do eixo X (Leste-Oeste).", correct: true },
                            { text: "A altura total da montanha.", correct: false },
                            { text: "A área da base da montanha.", correct: false }
                        ],
                        explanation: "GASING (Visual): É a inclinação da reta tangente à curva formada quando cortamos a superfície 3D mantendo Y constante."
                    },
                    {
                        topic: "Cálculo (Cobb-Douglas)",
                        question: "Seja U(x, y) = x²y. Calcule ∂U/∂x (derivada parcial em relação a x).",
                        hint: "Trate 'y' como se fosse um número constante (tipo 5). Deriva apenas o x².",
                        options: [
                            { text: "2xy", correct: true },
                            { text: "x²", correct: false },
                            { text: "2x", correct: false }
                        ],
                        explanation: "Regra do tombo no x² vira 2x. O y é constante multiplicativa, então ele acompanha. Resultado: 2xy."
                    },
                    {
                        topic: "Cálculo (Polinômio)",
                        question: "Seja f(x, y) = 3x² + 5y³ + 10. Qual é a derivada parcial em relação a y (fy)?",
                        hint: "Agora x é constante. A derivada de constante é zero.",
                        options: [
                            { text: "15y²", correct: true },
                            { text: "6x + 15y²", correct: false },
                            { text: "6x", correct: false }
                        ],
                        explanation: "Derivada de 3x² em relação a y é 0. Derivada de 10 é 0. Derivada de 5y³ é 15y²."
                    }
                ]
            },

            // --- MATEMÁTICA III (Restaurada) ---
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
                        options: [
                            { text: "y(t+1) = 1,10 · y(t)", correct: true },
                            { text: "y(t+1) = y(t) + 10", correct: false },
                            { text: "y(t+1) = 0,10 · y(t)", correct: false }
                        ],
                        explanation: "GASING (Concreto): Esta é uma Equação de Diferenças de 1ª ordem. O estado futuro depende do estado atual multiplicado por um fator de crescimento."
                    },
                    {
                        topic: "Visualização (Trajetória)",
                        question: "Se a equação é y(t+1) = 1,10 · y(t) e começamos com R$ 100. Como será o gráfico ao longo do tempo?",
                        hint: "A cada ano multiplica por 1,10. Isso cresce rápido ou devagar?",
                        options: [
                            { text: "Crescimento Exponencial (explosivo).", correct: true },
                            { text: "Linha reta constante.", correct: false },
                            { text: "Decaimento convergindo para zero.", correct: false }
                        ],
                        explanation: "GASING (Visual): Como a base (1,10) é maior que 1, a trajetória diverge de zero, crescendo exponencialmente."
                    },
                    {
                        topic: "Cálculo (Iteração)",
                        question: "Dada a equação y(t+1) = 0,5 · y(t) + 10. Se y(0) = 40, qual é o valor de y(1)?",
                        hint: "Substitua t=0 na equação.",
                        options: [
                            { text: "30", correct: true },
                            { text: "20", correct: false },
                            { text: "50", correct: false }
                        ],
                        explanation: "y(1) = 0,5 * 40 + 10 = 20 + 10 = 30."
                    },
                    {
                        topic: "Estado Estacionário",
                        question: "Na equação y(t+1) = 0,5y(t) + 10, o sistema para de mudar quando y(t+1) = y(t) = y*. Qual é esse valor y*?",
                        hint: "Substitua y(t+1) e y(t) por y* e resolva a álgebra.",
                        options: [
                            { text: "20", correct: true },
                            { text: "10", correct: false },
                            { text: "100", correct: false }
                        ],
                        explanation: "y* = 0,5y* + 10 -> 0,5y* = 10 -> y* = 20. Neste ponto, a poupança estabiliza."
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
                        options: [
                            { text: "A quantidade exata que compensa a perda, mantendo a Utilidade constante.", correct: true },
                            { text: "O máximo de cafés que eu puder comprar com meu dinheiro.", correct: false },
                            { text: "Sempre 1 café por 1 pão de queijo, independente de quantos eu já tenho.", correct: false }
                        ],
                        explanation: "GASING (Story): Isso define a Taxa Marginal de Substituição (TMS). Se você troca X por Y e continua com a mesma 'felicidade', você está andando sobre uma Curva de Indiferença."
                    },
                    {
                        topic: "2. Curvas de Indiferença (Visual)",
                        question: "Pense em uma Montanha (O Morro da Utilidade). A altura da montanha representa sua felicidade. O que representa uma Curva de Indiferença nesse mapa?",
                        hint: "Se você caminhar ao redor da montanha sem subir nem descer, você mantém a mesma altura.",
                        options: [
                            { text: "É como uma curva de nível no mapa: todos os pontos na linha têm a mesma altura (utilidade).", correct: true },
                            { text: "É o caminho mais rápido para chegar ao topo da montanha.", correct: false },
                            { text: "É a inclinação da subida em um ponto específico.", correct: false }
                        ],
                        explanation: "GASING (Analogy): Assim como em um mapa topográfico, onde linhas conectam pontos de mesma altitude, a Curva de Indiferença conecta cestas de bens (X, Y) que dão o mesmo nível de satisfação."
                    },
                    {
                        topic: "3. Função Utilidade (Abstrato)",
                        question: "Vamos formalizar. Seja U(x, y) = x · y (Cobb-Douglas). A Cesta A tem (x=2, y=8) e a Cesta B tem (x=4, y=4). Qual cesta o consumidor prefere?",
                        hint: "Calcule U para os dois casos multiplicando x por y.",
                        options: [
                            { text: "O consumidor é Indiferente (ambas geram U = 16).", correct: true },
                            { text: "Prefere a Cesta A porque tem mais Y.", correct: false },
                            { text: "Prefere a Cesta B porque é mais equilibrada.", correct: false }
                        ],
                        explanation: "CPA (Abstract): U(A) = 2*8 = 16. U(B) = 4*4 = 16. Como U(A) = U(B), ambas as cestas estão na mesma Curva de Indiferença (U=16)."
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
                        options: [
                            { text: "Haverá um Déficit em Transações Correntes (Poupança Externa positiva).", correct: true },
                            { text: "Haverá um Superávit em Transações Correntes.", correct: false },
                            { text: "O Governo deve necessariamente aumentar impostos.", correct: false }
                        ],
                        explanation: "Se S < I, o país precisa captar recursos externos para financiar o investimento, o que contabilmente aparece como um Déficit em Transações Correntes (CC < 0) ou Poupança Externa positiva."
                    },
                    {
                        topic: "1. PIB vs PNB",
                        question: "O Brasil historicamente possui um PNB menor que o PIB (PNB < PIB). Qual a razão estrutural para isso?",
                        hint: "PIB mede o produzido NO território. PNB mede a renda dos nacionais. O que sai do país?",
                        options: [
                            { text: "O país envia mais Renda Líquida ao Exterior (RLEE) do que recebe.", correct: true },
                            { text: "O país tem uma balança comercial deficitária.", correct: false },
                            { text: "O país não tem empresas multinacionais.", correct: false }
                        ],
                        explanation: "Como muitas multinacionais operam no Brasil e enviam lucros para fora, a Renda Líquida Enviada ao Exterior é alta, fazendo com que a renda dos nacionais (PNB) seja menor que a produção interna (PIB)."
                    },
                    {
                        topic: "1. Balanço de Pagamentos",
                        question: "O que significa dizer que o Balanço de Pagamentos (BP) é contabilmente igual a zero?",
                        hint: "O BP é um método de partidas dobradas. Todo débito tem um crédito.",
                        options: [
                            { text: "Que a soma de Transações Correntes, Conta Capital/Financeira e Erros e Omissões deve ser nula.", correct: true },
                            { text: "Que o país não pode ter dívida externa.", correct: false },
                            { text: "Que exportações devem ser iguais a importações.", correct: false }
                        ],
                        explanation: "O BP é uma identidade contábil. Um déficit em uma conta (ex: Comercial) deve ser necessariamente financiado por superávit em outra (ex: Financeira) ou variação de reservas."
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
