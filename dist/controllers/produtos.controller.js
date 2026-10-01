"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtos_service_1 = __importDefault(require("../services/produtos.service"));
async function listarProdutos(req, res) {
    const produtos = await produtos_service_1.default.listarProdutos();
    return res.status(200).json(produtos);
}
async function buscarProdutoPorId(req, res) {
    const id = Number(req.params.id);
    const produto = await produtos_service_1.default.buscarProdutoPorId(id);
    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }
    return res.status(200).json(produto);
}
async function criarProduto(req, res) {
    const produto = await produtos_service_1.default.criarProduto(req.body);
    return res.status(201).json(produto);
}
async function atualizarProduto(req, res) {
    const id = Number(req.params.id);
    const produto = await produtos_service_1.default.atualizarProduto(id, req.body);
    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }
    return res.status(200).json(produto);
}
async function atualizarParcialProduto(req, res) {
    const id = Number(req.params.id);
    const produto = await produtos_service_1.default.atualizarParcialProduto(id, req.body);
    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }
    return res.status(200).json(produto);
}
async function deletarProduto(req, res) {
    const id = Number(req.params.id);
    const produto = await produtos_service_1.default.deletarProduto(id);
    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }
    return res.status(200).json(produto);
}
exports.default = {
    listarProdutos,
    buscarProdutoPorId,
    criarProduto,
    atualizarProduto,
    atualizarParcialProduto,
    deletarProduto
};
//# sourceMappingURL=produtos.controller.js.map