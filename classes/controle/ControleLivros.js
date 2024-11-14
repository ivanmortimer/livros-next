"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = __importDefault(require("../modelo/Livro"));
const resumo_1 = `Se você é um programador que ainda não tem experiência com expressões regulares, 
este guia de fácil compreensão é um ótimo ponto de partida. Você aprenderá os conceitos fundamentais, 
passo a passo, com o auxílio de inúmeros exemplos, descobrindo em primeira mão como associar, extrair e 
transformar textos ao fazer correspondências usando palavras, caracteres e padrões específicos.`;
const resumo_2 = `O livro Entendendo Algoritmos apresenta uma abordagem agradável para esse tópico essencial 
da ciência da computação. Nele, você aprenderá como aplicar algoritmos comuns nos problemas de programação 
enfrentados diariamente. Você começará com tarefas básicas como a ordenação e a pesquisa. Com a prática, 
você enfrentará problemas mais complexos, como a compressão de dados e a inteligência artificial.`;
const resumo_3 = `Livro que se caracteriza pela sua proposta singular: ensinar um assunto tão complexo 
como este por meio de uma abordagem de cima para baixo, em camadas. O texto parte da camada lógica, 
de aplicação, para a camada física, motivando os estudantes ao apresentar-lhes conceitos mais familiares 
logo no início do estudo de redes.`;
const resumo_4 = `De forma clara e divertida, os autores descrevem os conceitos que designers de sistema 
operacional precisam dominar, tais como processos, threads, gerenciamento de memória, sistemas de arquivos, 
E/S (entrada/saída), impasses, design de interface, multimídia, compensações de desempenho e tendências em 
design de sistema operacional.`;
const resumo_5 = `O objetivo deste livro é expor o funcionamento interno dos modernos computadores digitais 
em um nível que desmistifica o que acontece dentro da máquina. O escopo do material foi escolhido para 
cobrir normalmente encontrados em um primeiro curso em arquitetura de computadores ou organização de 
computadores.`;
var livros = [
    new Livro_1.default(0, 0, "Introdução às Expressões Regulares", resumo_1, ["Michael Fitzgerald"]),
    new Livro_1.default(1, 0, "Entendendo Algoritmos", resumo_2, ["Aditya Y. Bhargava"]),
    new Livro_1.default(2, 1, "Redes de computadores e a Internet", resumo_3, ["James F. Kurose", " Keith W. Ross"]),
    new Livro_1.default(3, 1, "Sistemas Operacionais Modernos", resumo_4, ["Andrew S. Tanenbaum ", "Herbert Bos"]),
    new Livro_1.default(4, 2, "Introdução À Arquitetura De Computadores", resumo_5, ["Miles J. Murdoca", "Vincent P. Heuring"])
];
let posicaoFinal = 4;
class ControleLivro {
    // Métodos de acesso
    obterLivros() {
        return livros;
    }
    incluir(livro) {
        posicaoFinal++;
        livro.codigo = posicaoFinal;
        livros.push(livro);
    }
    excluir(codigoLivro) {
        const posicaoDoLivro = livros.findIndex((livro) => livro.codigo === codigoLivro);
        livros.splice(posicaoDoLivro, 1);
    }
}
// console.log(livros);
// ControleLivro.incluir(new Livro(3, 3));
// console.log(livros);
// ControleLivro.excluir(1);
// console.log(livros);
exports.default = ControleLivro;
