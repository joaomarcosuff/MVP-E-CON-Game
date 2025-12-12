import { Question, SimulationStep } from "./types";

export const phase1Questions: Question[] = [
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
    },
    {
        topic: "1. Abordagem da Absorção",
        question: "Se a Absorção Interna (Consumo + Investimento + Gastos) cair enquanto o Produto (Y) permanece constante, o que acontece com a Balança Comercial?",
        hint: "Y - A = NX. Se A cai e Y é fixo, o saldo NX aumenta ou diminui?",
        options: [
            { text: "A Balança Comercial melhora (tende ao superávit).", correct: true },
            { text: "A Balança Comercial piora.", correct: false },
            { text: "A taxa de juros aumenta.", correct: false }
        ],
        explanation: "Reduzir a absorção interna (menos gastos domésticos) libera produção para o mercado externo ou reduz importações, melhorando o saldo comercial (NX)."
    },
    {
        topic: "2. Agregados Monetários",
        question: "Qual agregado monetário inclui títulos públicos de alta liquidez e depósitos de poupança, sendo mais amplo que o M1?",
        hint: "M1 é só dinheiro vivo e conta corrente. M2, M3 e M4 vão adicionando ativos menos líquidos.",
        options: [
            { text: "M2, M3 ou M4 (dependendo da definição exata do país, mas é mais amplo que M1).", correct: true },
            { text: "Base Monetária (B).", correct: false },
            { text: "Papel-Moeda em Poder do Público (PMPP).", correct: false }
        ],
        explanation: "M1 é o mais restrito. M2, M3 e M4 (Meios de Pagamento Ampliados) incluem ativos que rendem juros e têm liquidez quase imediata, como poupança e títulos."
    },
    {
        topic: "2. Criação de Moeda",
        question: "Como os bancos comerciais criam moeda escritural?",
        hint: "Eles não imprimem notas. Eles fazem algo com os depósitos que recebem.",
        options: [
            { text: "Emprestando uma parte dos depósitos à vista que recebem (Reserva Fracionária).", correct: true },
            { text: "Imprimindo cédulas com autorização do BC.", correct: false },
            { text: "Apenas guardando o dinheiro em cofres.", correct: false }
        ],
        explanation: "Ao emprestar parte do dinheiro depositado (mantendo apenas o compulsório), o banco coloca dinheiro de volta na economia, multiplicando a oferta monetária."
    },
    {
        topic: "1. PIB Real vs Nominal",
        question: "Se o PIB Nominal cresceu 10% mas a inflação foi de 10% no mesmo período, o que aconteceu com o PIB Real?",
        hint: "PIB Real desconta a inflação.",
        options: [
            { text: "O PIB Real permaneceu estagnado (Crescimento zero).", correct: true },
            { text: "O PIB Real cresceu 20%.", correct: false },
            { text: "O PIB Real cresceu 10%.", correct: false }
        ],
        explanation: "O crescimento nominal foi puramente aumento de preços. Em termos de volume de bens produzidos (Real), a economia não cresceu."
    },
    {
        topic: "2. Equação de Fisher",
        question: "Segundo a Equação de Fisher, se a taxa de juros nominal é 15% e a inflação esperada é 5%, qual é a taxa de juros real aproximada?",
        hint: "Juro Real = Juro Nominal - Inflação.",
        options: [
            { text: "10%", correct: true },
            { text: "20%", correct: false },
            { text: "75% (15 x 5)", correct: false }
                ],
        explanation: "A taxa real é o ganho de poder de compra. 15% (Nominal) - 5% (Inflação) = 10% (Real)."
    },
    {
        topic: "2. Taxa de Câmbio",
        question: "O que é a Taxa de Câmbio Real?",
        hint: "Não é apenas o preço da moeda, mas o preço relativo dos PRODUTOS entre dois países.",
        options: [
            { text: "A taxa nominal ajustada pela relação de preços (inflação) interna e externa.", correct: true },
            { text: "O valor do dólar turismo.", correct: false },
            { text: "A taxa de juros internacional.", correct: false }
        ],
        explanation: "Câmbio Real mede a competitividade. É a taxa nominal multiplicada pela razão entre preços externos e internos (e = E * P*/P)."
    },
    {
        topic: "2. Funções da Moeda",
        question: "Quando precificamos uma mercadoria em Reais (R$), qual função da moeda estamos utilizando?",
        hint: "Estamos usando a moeda para medir valor, como uma régua.",
        options: [
            { text: "Unidade de Conta.", correct: true },
            { text: "Reserva de Valor.", correct: false },
            { text: "Meio de Troca.", correct: false }
        ],
        explanation: "Unidade de Conta é a função de servir como medida comum de valor para bens e serviços."
    }
];

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