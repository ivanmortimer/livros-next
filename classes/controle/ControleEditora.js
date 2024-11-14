"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Editora_1 = __importDefault(require("../modelo/Editora"));
var editoras = [
    new Editora_1.default(0, "Novatec Editora"),
    new Editora_1.default(1, "Pearson"),
    new Editora_1.default(2, "Elsevier")
];
class ControleEditora {
    // Métodos de acesso
    getEditoras() {
        return editoras;
    }
    getNomeEditora(codigoEditora) {
        const novaListaEditoras = editoras.filter((editora) => editora.codEditora === codigoEditora);
        const nomeEditora = novaListaEditoras[0].nome;
        return nomeEditora;
    }
}
// console.log(editoras);
// console.log(ControleEditora.getNomeEditora(1));
exports.default = ControleEditora;
