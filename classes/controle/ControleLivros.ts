import Livro from "../modelo/Livro"

class ControleLivro {
    resumo_1 = `Se você é um programador que ainda não tem experiência com expressões regulares, 
    este guia de fácil compreensão é um ótimo ponto de partida. Você aprenderá os conceitos fundamentais, 
    passo a passo, com o auxílio de inúmeros exemplos, descobrindo em primeira mão como associar, extrair e 
    transformar textos ao fazer correspondências usando palavras, caracteres e padrões específicos.`;

    resumo_2 = `O livro Entendendo Algoritmos apresenta uma abordagem agradável para esse tópico essencial 
    da ciência da computação. Nele, você aprenderá como aplicar algoritmos comuns nos problemas de programação 
    enfrentados diariamente. Você começará com tarefas básicas como a ordenação e a pesquisa. Com a prática, 
    você enfrentará problemas mais complexos, como a compressão de dados e a inteligência artificial.`;

    resumo_3 = `Livro que se caracteriza pela sua proposta singular: ensinar um assunto tão complexo 
    como este por meio de uma abordagem de cima para baixo, em camadas. O texto parte da camada lógica, 
    de aplicação, para a camada física, motivando os estudantes ao apresentar-lhes conceitos mais familiares 
    logo no início do estudo de redes.`;

    resumo_4 = `De forma clara e divertida, os autores descrevem os conceitos que designers de sistema 
    operacional precisam dominar, tais como processos, threads, gerenciamento de memória, sistemas de arquivos, 
    E/S (entrada/saída), impasses, design de interface, multimídia, compensações de desempenho e tendências em 
    design de sistema operacional.`;

    resumo_5 = `O objetivo deste livro é expor o funcionamento interno dos modernos computadores digitais 
    em um nível que desmistifica o que acontece dentro da máquina. O escopo do material foi escolhido para 
    cobrir normalmente encontrados em um primeiro curso em arquitetura de computadores ou organização de 
    computadores.`;

    livros: Array<Livro> = [
        new Livro(0, 0, "Introdução às Expressões Regulares", this.resumo_1, ["Michael Fitzgerald"]),
        new Livro(1, 0, "Entendendo Algoritmos", this.resumo_2, ["Aditya Y. Bhargava"]),
        new Livro(2, 1, "Redes de computadores e a Internet", this.resumo_3, ["James F. Kurose", " Keith W. Ross"]),
        new Livro(3, 1, "Sistemas Operacionais Modernos", this.resumo_4, ["Andrew S. Tanenbaum ", "Herbert Bos"]),
        new Livro(4, 2, "Introdução À Arquitetura De Computadores", this.resumo_5, ["Miles J. Murdoca", "Vincent P. Heuring"])
    ];

    posicaoFinal = 4;

    // Métodos de acesso

    public obterLivros(): Array<Livro> {
        return this.livros;
    }

    public incluir(livro: Livro): void {
        this.posicaoFinal++;
        console.log("livro =", livro);
        console.log("this.posicaoFinal =", this.posicaoFinal);
        livro.codigo = this.posicaoFinal;
        console.log("this.livros.length ANTES INCLUIR =", this.livros.length);
        this.livros.push(livro);
        console.log("this.livros.length DEPOIS INCLUIR =", this.livros.length);
        console.log("this.livros INCLUIR =", this.livros);
    }

    public excluir(codigoLivro: number): void {
        console.log("codigoLivro =", codigoLivro);
        console.log("this.livros.length ANTES EXCLUIR 1", this.livros.length);
        const posicaoDoLivro = this.livros.findIndex((livro) => livro.codigo === codigoLivro);
        console.log("posicaoDoLivro", posicaoDoLivro);
        if (posicaoDoLivro === -1) {
            throw new Error(`Não existe um livro cujo código seja ${posicaoDoLivro}.`);
        }
        console.log("this.livros.length ANTES EXCLUIR 2", this.livros.length);
        this.livros.splice(posicaoDoLivro, 1);
        console.log("this.livros.length DEPOIS EXCLUIR", this.livros.length);
        console.log("this.livros EXCLUIR =", this.livros);
    }
}

// console.log(livros);
// ControleLivro.incluir(new Livro(3, 3));
// console.log(livros);
// ControleLivro.excluir(1);
// console.log(livros);

export default ControleLivro
