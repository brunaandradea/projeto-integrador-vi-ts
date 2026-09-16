const service = require("../services/produto.service");

exports.listar = (req, res) => {
  const produtos = service.listar();
  res.status(200).json(produtos);
};

exports.buscarPorId = (req, res) => {
  const produto = service.buscarPorId(req.params.id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  res.status(200).json(produto);
};

exports.criar = (req, res) => {
  try {
    const produto = service.criar(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
};

exports.atualizar = (req, res) => {
  const produto = service.atualizar(req.params.id, req.body);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  res.status(200).json(produto);
};

exports.atualizarParcial = (req, res) => {
  const produto = service.atualizarParcial(req.params.id, req.body);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  res.status(200).json(produto);
};

exports.deletar = (req, res) => {
  const deletado = service.deletar(req.params.id);

  if (!deletado) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  res.status(200).json({ mensagem: "Produto removido com sucesso!" });
};