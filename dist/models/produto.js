"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produtos_controller_1 = __importDefault(require("../controllers/produtos.controller"));
const router = express_1.default.Router();
router.get('/', produtos_controller_1.default.listarProdutos);
router.get('/:id', produtos_controller_1.default.buscarProdutoPorId);
router.post('/', produtos_controller_1.default.criarProduto);
router.put('/:id', produtos_controller_1.default.atualizarProduto);
router.patch('/:id', produtos_controller_1.default.atualizarParcialProduto);
router.delete('/:id', produtos_controller_1.default.deletarProduto);
exports.default = router;
//# sourceMappingURL=produto.js.map