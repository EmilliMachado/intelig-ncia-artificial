 const perguntas = [
    {
        enunciado: "Você encontra uma pessoa com deficiência fisíca, que está indo jogar basquete. Você acha que ele deve ser excluído de tal atividade por causa de suas limitações?",
        alternativas: [
            {
                texto: "Sim, acredito que ela não é capaz.",
                afirmacao: ["está sendo preconceituoso(a), por julgar ela de não ser capaz de tal atividade.",
                    "por julgar de forma errônea, está sendo preconceituoso(a), pois acha que ela não é capaz de tal atividade."
                ],
                proxima: 1
            },
            {
                texto: "Não, não acredito.",
                afirmacao: ["sem preconceitos, você entende que todos são capazes de praticar esportes.",
                    "com a mente aberta, você sabe que todos tem o direito de praticar esportes e sabe que apesar de algumas limitações ele pode sim jogar basquete."
                ],
                proxima: 2
            }
        ]
    },
    {
        enunciado:  "Você já testemunhou alguém sendo tratado de maneira injusta devido à sua deficiência física?",
        alternativas: [
            {
                texto: "Sim, infelizmente já vi isso acontecer.",
                afirmacao: [ "mesmo que houve varias mudanças, ainda há muito preconceito em nosso dia a dia.",
                    "mesmo com a evolução da sociedade, incluindo os que tem deficiência física em muitas atividades, ainda se vê muito preconceito em relação ao modo de ser tratados."
                ],
                proxima: 3
            },
            {
                texto: "Não, nunca presenciei algo assim.",
                afirmacao: ["muitas pessoas hoje em dia mudaram sua forma de pensar, incluindo todos sem nenhum tipo de preconceitos.",
                    "com a evolução da sociedade, podemos ver a inclusão dos deficientes físicos em muitas atividades, com tratamento igual para igual."
                ],
                proxima: 4
            }
        ]
    },
    {
        enunciado: "Você acredita que piadas sobre deficiência são inaceitáveis",
        alternativas: [
            {
                texto: "Sim, são ofensivas.",
                afirmacao: ["piadinhas não podem ser aceita, pois todos somos iguais.",
                    "fazer piadinhas é totalmente errado, pois todos somos iguais, vivemos em um mundo com os mesmos direitos."
                ],
                proxima: 5
            },
            {
                texto: "Não vejo problema nelas.",
                afirmacao: ["por se acharem melhor, fazem piadinhas ridicularizando o proximo, isso é totalmente errado.",
                    "por se julgarem melhor que as pessoas com deficiência, fazem piadinhas os ridicularizando, sem pensar nas consequências que isso vai ter."
                ],
                proxima: 6
            }
        ]
    },
    {
        enunciado: "Você acredita que pessoas com deficiência são uma 'carga' para a sociedade?",
        alternativas: [
            {
                texto: "Sim, acredito.",
                afirmacao: ["com pensamento errado, julgam as pessoas com deficiência como uma carga para a sociedade.",
                "A visão de pessoas com deficiência como uma 'carga' é baseada em estereótipos ultrapassados e não reconhece suas capacidades e potenciais contribuições."
                ],
                proxima: 7
            },
            {
                texto:  "Não, não acredito.",
                afirmacao: ["pessoas com deficiência não são de forma alguma uma carga para a sociedade.",
                    "Pessoas com deficiência possuem habilidades únicas e contribuem de maneira valiosa para a diversidade e inclusão na sociedade."
                ],
                proxima: 8
            }
        ]
    },
    {
        enunciado: "Você acha que todas as pessoas, independentemente de suas capacidades físicas, merecem oportunidades iguais?",
        alternativas: [
            {
                texto: "Sim, todos merecem as mesmas chances.",
                afirmacao: ["independente de suas capacidades físicas, devem ter várias oportunidades, pois os direitos são iguais para todos.",
                    "Todos os indivíduos merecem ter acesso igualitário a oportunidades, independentemente de suas capacidades físicas, para promover uma sociedade justa e inclusiva."
                ],
            },
            {
                texto: "Não acho que isso seja possível.",
                afirmacao: ["de forma errônea diminuem a capacidade das pessoas com deficiência, dizendo não ser possivel incluir na sociedade e dar oportunidades.",
                    "preconceituosamente, muitos dizem que pessoas com deficiência física não merecem oportunidades, pois são limitados."
                ],
            }
        ]
    },
];