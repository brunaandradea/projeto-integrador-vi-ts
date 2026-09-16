const express = require('express');
const produtoRoutes = require('./routes/produto.routes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso!');
});

app.use('/produtos', produtoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});

module.exports = app;