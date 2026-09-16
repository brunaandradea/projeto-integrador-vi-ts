const Produto = require("../models/produto.model");

const produtos = [];

function listar() {
  return produtos;
}

function buscarPorId(id) {
  return produtos.find(p => p.id === Number(id));
}

function criar(dados) {
  if (!dados.nome || dados.preco == null) {
    throw new Error("nome e preco são obrigatórios");
  }

  const produto = new Produto({
    id: produtos.length + 1,
    nome: dados.nome,
    preco: dados.preco
  });

  produtos.push(produto);
  return produto;
}

function atualizar(id, dados) {
  const produto = buscarPorId(id);
  if (!produto) return null;

  produto.nome = dados.nome;
  produto.preco = dados.preco;

  return produto;
}

function atualizarParcial(id, dados) {
  const produto = buscarPorId(id);
  if (!produto) return null;

  if (dados.nome !== undefined) produto.nome = dados.nome;
  if (dados.preco !== undefined) produto.preco = dados.preco;

  return produto;
}

function deletar(id) {
  const index = produtos.findIndex(p => p.id === Number(id));
  if (index === -1) return false;

  produtos.splice(index, 1);
  return true;
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  atualizarParcial,
  deletar
};