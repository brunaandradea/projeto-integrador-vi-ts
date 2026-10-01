"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_model_1 = __importDefault(require("../models/produto.model"));
async function listarProdutos() {
    return await produto_model_1.default.findAll();
}
async function buscarProdutoPorId(id) {
    return await produto_model_1.default.findByPk(id);
}
async function criarProduto(produto) {
    return await produto_model_1.default.create({
        nome: produto.nome,
        preco: produto.preco
    });
}
async function atualizarProduto(id, dados) {
    const produto = await produto_model_1.default.findByPk(id);
    if (!produto) {
        return null;
    }
    await produto.update(dados);
    return produto;
}
async function atualizarParcialProduto(id, dados) {
    const produto = await produto_model_1.default.findByPk(id);
    if (!produto) {
        return null;
    }
    await produto.update(dados);
    return produto;
}
async function deletarProduto(id) {
    const produto = await produto_model_1.default.findByPk(id);
    if (!produto) {
        return null;
    }
    await produto.destroy();
    return produto;
}
exports.default = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    atualizarParcialProduto,
    deletarProduto
};
//# sourceMappingURL=produtos.service.js.map