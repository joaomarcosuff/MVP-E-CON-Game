import { Lessons, SimulationStep } from "./types";

export const lessons: Lessons = {
    math: {
        id: "MAT",
        title: "Matemática Aplicada",
        subtitle: "O Ferramental",
        icon: "📐",
        description: "Domine o cálculo necessário para entender os modelos econômicos.",
        modules: [
            {
                id: "1-00",
                title: "Pré-Cálculo: Funções",
                status: "unlocked",
                type: "quiz",
                questions: [
                    {
                        topic: "Funções Lineares",
                        question: "Uma firma tem custo fixo de R$ 100 e custo variável de R$ 5 por unidade. Qual a função Custo Total C(q)?",
                        hint: "Pense na estrutura: Custo Total = Parte Fixa + (Custo Unitário × Quantidade).",
                        options: [
                            { text: "C(q) = 100 + 5q", correct: true },
                            { text: "C(q) = 5 + 100q", correct: false },
                            { text: "C(q) = 105q", correct: false }
                        ],
                        explanation: "Em C(q) = a + bq, 'a' é o intercepto (custo fixo, não depende de q) e 'b' é a inclinação (custo marginal/variável)."
                    }
                ]
            },
            {
                id: "1-0",
                title: "Derivadas Básicas",
                status: "locked",
                type: "quiz",
                questions: []
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