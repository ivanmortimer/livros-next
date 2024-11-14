"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    codigo;
    codEditora;
    titulo;
    resumo;
    autores;
    constructor(codigo, codEditora, titulo, resumo, autores) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}
exports.default = Livro;
