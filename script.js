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
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você acredita que piadas sobre deficiência são inaceitáveis",
        alternativas: [
            {
                texto: "Sim, são ofensivas.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não vejo problema nelas.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você acredita que pessoas com deficiência são uma 'carga' para a sociedade?",
        alternativas: [
            {
                texto: "Sim, acredito.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não, não acredito.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você acha que todas as pessoas, independentemente de suas capacidades físicas, merecem oportunidades iguais?",
        alternativas: [
            {
                texto: "Sim, todos merecem as mesmas chances.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não acho que isso seja possível.",
                afirmacao: "afirmação"
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
