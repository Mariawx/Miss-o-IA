const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você quer fazer uma mudança estética na pele ou no corpo. O que mais pesa na hora de tomar essa decisão?
",
        alternativas: [
            {
                texto: "A consulta com um dermatologista para entender a saúde da pele e indicar apenas produtos e rotinas seguros.",
                afirmacao: "O Consumidor Consciente. Valoriza a saúde preventiva e compreende que intervenções visuais dependem do equilíbrio e bem-estar do organismo."
            },
            {
                texto:  "A avaliação de um biomédico estético ou cirurgião plástico focado no alinhamento de expectativas e resultados visuais específicos.",
                afirmacao: "O Especialista em Harmonização. Focado em simetria, técnicas avançadas e resultados práticos para a autoimagem."
            }    
           
        ]
    },
    {
       
            enunciado: "Diante de uma nova tendência de beleza que viralizou nas redes sociais, qual é a sua atitude?",
            alternativas: [
                {
                    texto: "Investir em Skincare, alimentação equilibrada e hábitos diários (Clean Beauty) para manter a aparência saudável naturalmente.",
                    afirmacao: "O Adepto do Cuidado Diário. Acredita na constância de rotinas não invasivas e na beleza como reflexo de hábitos saudáveis."
                },
                {
                    texto:  "Buscar procedimentos estéticos injetáveis ou tecnológicos de efeito imediato (como toxina botulínica ou lasers).",
                    afirmacao: "O Entusiasta da Alta Tecnologia. Prioriza a eficiência tecnológica, soluções diretas e a otimização de tempo."
                }    
               
            ]
        },
        {
            enunciado: "Qual critério você considera indiscutível antes de fechar qualquer protocolo de estética avançada?",

            alternativas: [
                {
                    texto: "Exigir a comprovação de registro profissional específico (CRM, CRBM, CFF) e a liberação de vigilância sanitária da clínica.",
                    afirmacao: "O Defensor da Biossegurança. Prioriza a segurança jurídica e sanitária para minimizar qualquer risco à integridade física"
                },
                {
                    texto:    "Analisar o portfólio de casos reais de "antes e depois" e as avaliações de outros clientes sobre o profissional.",
               
                    afirmacao: "O Avaliador de Resultados. Focado na reputação prática do profissional e na consistência visual dos trabalhos entregues."
                }    
               
            ]
        },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}