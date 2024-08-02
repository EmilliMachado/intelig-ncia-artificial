const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontra uma pessoa com deficiência fisíca, que está indo jogar basquete. Você acha que ele deve ser excluído de tal atividade por causa de suas limitações?",
        alternativas: [
            {
                texto: "Sim, acredito que ela não é capaz.",
                afirmacao: "está sendo preconceituoso(a), por julgar ela de não ser capaz de tal atividade"
            },
            {
                texto: "Não, não acredito.",
                afirmacao: "sem preconceitos, você entende que todos são capazes de praticar esportes"
            }
        ]
    },
    {
        enunciado: "Você já testemunhou alguém sendo tratado de maneira injusta devido à sua deficiência física?",
        alternativas: [
            {
                texto: "Sim, infelizmente já vi isso acontecer.",
                afirmacao: "mesmo que houve varias mudanças, ainda há muito preconceito em nosso dia a dia"
            },
            {
                texto: "Não, nunca presenciei algo assim.",
                afirmacao: "muitas pessoas hoje em dia mudaram sua forma de pensar, incluindo todos sem nenhum tipo de preconceitos."
            }
        ]
    },
    {
        enunciado: "Você acredita que piadas sobre deficiência são inaceitáveis",
        alternativas: [
            {
                texto: "Sim, são ofensivas.",
                afirmacao: "piadinhas não podem ser aceita, pois todos somos iguais."
            },
            {
                texto: "Não vejo problema nelas.",
                afirmacao: "por se acharem melhor, fazem piadinhas ridicularizando o proximo, isso é totalmente errado."
            }
        ]
    },
    {
        enunciado: "Você acredita que pessoas com deficiência são uma 'carga' para a sociedade?",
        alternativas: [
            {
                texto: "Sim, acredito.",
                afirmacao: "com pensamento errado, julgam as pessoas com deficiência como uma carga."
            },
            {
                texto: "Não, não acredito.",
                afirmacao: "pessoas com deficiência não são de forma alguma uma carga para a sociedade."
            }
        ]
    },
    {
        enunciado: "Você acha que todas as pessoas, independentemente de suas capacidades físicas, merecem oportunidades iguais?",
        alternativas: [
            {
                texto: "Sim, todos merecem as mesmas chances.",
                afirmacao: "independente de suas capacidades físicas, devem ter várias oportunidades, pois os direitos são iguais para todos."
            },
            {
                texto: "Não acho que isso seja possível.",
                afirmacao: "de forma errônea diminuem a capacidade das pessoas com deficiência, dizem não ser possivel incluir e dar oportunidades."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
