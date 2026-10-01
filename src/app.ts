import express from 'express';
import produtoRoutes from './routes/produto.routes';
import sequelize from './database/database';

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use('/produtos', produtoRoutes);

const PORT = 3000;

sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log(`Servidor ativo na porta ${PORT}`);
	});
}).catch((error) => {
	console.error('Erro ao inicializar o banco de dados:', error);
});

export default app;