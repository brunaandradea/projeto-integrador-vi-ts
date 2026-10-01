"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produto_routes_1 = __importDefault(require("./routes/produto.routes"));
const database_1 = __importDefault(require("./database/database"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.use('/produtos', produto_routes_1.default);
const PORT = 3000;
database_1.default.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor ativo na porta ${PORT}`);
    });
}).catch((error) => {
    console.error('Erro ao inicializar o banco de dados:', error);
});
exports.default = app;
//# sourceMappingURL=app.js.map