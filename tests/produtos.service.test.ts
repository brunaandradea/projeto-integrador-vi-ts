import Produto from '../src/models/produto.model';
import produtosService from '../src/services/produtos.service';

jest.mock('../src/models/produto.model', () => ({
    findAll: jest.fn(),
    findByPk: jest.fn(),
    create: jest.fn()
}));

type ProdutoMock = {
    update: jest.Mock;
    destroy: jest.Mock;
};

const produtoModel = Produto as unknown as {
    findAll: jest.Mock;
    findByPk: jest.Mock;
    create: jest.Mock;
};

describe('produtosService', () => {
    const produto = { id: 1, nome: 'Caderno', preco: 19.9 };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('lista todos os produtos', async () => {
        produtoModel.findAll.mockResolvedValue([produto]);

        await expect(produtosService.listarProdutos()).resolves.toEqual([produto]);
        expect(produtoModel.findAll).toHaveBeenCalledTimes(1);
    });

    it('busca um produto pelo id', async () => {
        produtoModel.findByPk.mockResolvedValue(produto);

        await expect(produtosService.buscarProdutoPorId(1)).resolves.toEqual(produto);
        expect(produtoModel.findByPk).toHaveBeenCalledWith(1);
    });

    it('cria um produto com nome e preco', async () => {
        produtoModel.create.mockResolvedValue(produto);

        await expect(
            produtosService.criarProduto({ nome: 'Caderno', preco: 19.9 })
        ).resolves.toEqual(produto);
        expect(produtoModel.create).toHaveBeenCalledWith({
            nome: 'Caderno',
            preco: 19.9
        });
    });

    it('atualiza um produto existente', async () => {
        const produtoAtualizavel: ProdutoMock = {
            update: jest.fn().mockResolvedValue(undefined),
            destroy: jest.fn()
        };
        produtoModel.findByPk.mockResolvedValue(produtoAtualizavel);
        const dados = { nome: 'Caderno grande', preco: 24.9 };

        await expect(produtosService.atualizarProduto(1, dados)).resolves.toBe(produtoAtualizavel);
        expect(produtoAtualizavel.update).toHaveBeenCalledWith(dados);
    });

    it('retorna null ao atualizar um produto inexistente', async () => {
        produtoModel.findByPk.mockResolvedValue(null);

        await expect(produtosService.atualizarProduto(99, produto)).resolves.toBeNull();
    });

    it('atualiza parcialmente um produto existente', async () => {
        const produtoAtualizavel: ProdutoMock = {
            update: jest.fn().mockResolvedValue(undefined),
            destroy: jest.fn()
        };
        produtoModel.findByPk.mockResolvedValue(produtoAtualizavel);

        await expect(
            produtosService.atualizarParcialProduto(1, { preco: 21.5 })
        ).resolves.toBe(produtoAtualizavel);
        expect(produtoAtualizavel.update).toHaveBeenCalledWith({ preco: 21.5 });
    });

    it('retorna null ao atualizar parcialmente um produto inexistente', async () => {
        produtoModel.findByPk.mockResolvedValue(null);

        await expect(
            produtosService.atualizarParcialProduto(99, { preco: 21.5 })
        ).resolves.toBeNull();
    });

    it('exclui um produto existente', async () => {
        const produtoExcluivel: ProdutoMock = {
            update: jest.fn(),
            destroy: jest.fn().mockResolvedValue(undefined)
        };
        produtoModel.findByPk.mockResolvedValue(produtoExcluivel);

        await expect(produtosService.deletarProduto(1)).resolves.toBe(produtoExcluivel);
        expect(produtoExcluivel.destroy).toHaveBeenCalledTimes(1);
    });

    it('retorna null ao excluir um produto inexistente', async () => {
        produtoModel.findByPk.mockResolvedValue(null);

        await expect(produtosService.deletarProduto(99)).resolves.toBeNull();
    });
});
