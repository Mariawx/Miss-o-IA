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
            enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

            alternativas: [
                {
                    texto: "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.",
                    afirmacao: "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo."
                },
                {
                    texto:    "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões.",
               
                    afirmacao: "Você demomostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional."
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