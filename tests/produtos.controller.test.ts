import produtosController from '../src/controllers/produtos.controller';
import produtosService from '../src/services/produtos.service';

jest.mock('../src/services/produtos.service', () => ({
    listarProdutos: jest.fn(),
    buscarProdutoPorId: jest.fn(),
    criarProduto: jest.fn(),
    atualizarProduto: jest.fn(),
    atualizarParcialProduto: jest.fn(),
    deletarProduto: jest.fn()
}));

const service = produtosService as jest.Mocked<typeof produtosService>;

type RequestMock = {
    params: Record<string, string>;
    body: Record<string, unknown>;
};

const criarResponse = () => {
    const response = {
        status: jest.fn(),
        json: jest.fn()
    };
    response.status.mockReturnValue(response);
    return response;
};

describe('produtosController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('lista produtos com status 200', async () => {
        const response = criarResponse();
        service.listarProdutos.mockResolvedValue([{ id: 1, nome: 'Caderno', preco: 19.9 }] as never);

        await produtosController.listarProdutos({} as RequestMock as never, response as never);

        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledWith([{ id: 1, nome: 'Caderno', preco: 19.9 }]);
    });

    it('retorna produto encontrado', async () => {
        const response = criarResponse();
        service.buscarProdutoPorId.mockResolvedValue({ id: 1, nome: 'Caderno', preco: 19.9 } as never);

        await produtosController.buscarProdutoPorId(
            { params: { id: '1' } } as RequestMock as never,
            response as never
        );

        expect(service.buscarProdutoPorId).toHaveBeenCalledWith(1);
        expect(response.status).toHaveBeenCalledWith(200);
    });

    it('retorna 404 para produto inexistente na busca', async () => {
        const response = criarResponse();
        service.buscarProdutoPorId.mockResolvedValue(null);

        await produtosController.buscarProdutoPorId(
            { params: { id: '99' } } as RequestMock as never,
            response as never
        );

        expect(response.status).toHaveBeenCalledWith(404);
        expect(response.json).toHaveBeenCalledWith({ mensagem: 'Produto não encontrado' });
    });

    it('cria produto com status 201', async () => {
        const response = criarResponse();
        const body = { nome: 'Caderno', preco: 19.9 };
        service.criarProduto.mockResolvedValue({ id: 1, ...body } as never);

        await produtosController.criarProduto({ body } as RequestMock as never, response as never);

        expect(service.criarProduto).toHaveBeenCalledWith(body);
        expect(response.status).toHaveBeenCalledWith(201);
    });

    it('atualiza produto encontrado', async () => {
        const response = criarResponse();
        const body = { nome: 'Caderno grande', preco: 24.9 };
        service.atualizarProduto.mockResolvedValue({ id: 1, ...body } as never);

        await produtosController.atualizarProduto(
            { params: { id: '1' }, body } as RequestMock as never,
            response as never
        );

        expect(service.atualizarProduto).toHaveBeenCalledWith(1, body);
        expect(response.status).toHaveBeenCalledWith(200);
    });

    it('retorna 404 ao atualizar produto inexistente', async () => {
        const response = criarResponse();
        service.atualizarProduto.mockResolvedValue(null);

        await produtosController.atualizarProduto(
            { params: { id: '99' }, body: {} } as RequestMock as never,
            response as never
        );

        expect(response.status).toHaveBeenCalledWith(404);
    });

    it('atualiza parcialmente produto encontrado', async () => {
        const response = criarResponse();
        const body = { preco: 21.5 };
        service.atualizarParcialProduto.mockResolvedValue({ id: 1, nome: 'Caderno', ...body } as never);

        await produtosController.atualizarParcialProduto(
            { params: { id: '1' }, body } as RequestMock as never,
            response as never
        );

        expect(service.atualizarParcialProduto).toHaveBeenCalledWith(1, body);
        expect(response.status).toHaveBeenCalledWith(200);
    });

    it('retorna 404 ao atualizar parcialmente produto inexistente', async () => {
        const response = criarResponse();
        service.atualizarParcialProduto.mockResolvedValue(null);

        await produtosController.atualizarParcialProduto(
            { params: { id: '99' }, body: {} } as RequestMock as never,
            response as never
        );

        expect(response.status).toHaveBeenCalledWith(404);
    });

    it('exclui produto encontrado', async () => {
        const response = criarResponse();
        service.deletarProduto.mockResolvedValue({ id: 1, nome: 'Caderno', preco: 19.9 } as never);

        await produtosController.deletarProduto(
            { params: { id: '1' } } as RequestMock as never,
            response as never
        );

        expect(service.deletarProduto).toHaveBeenCalledWith(1);
        expect(response.status).toHaveBeenCalledWith(200);
    });

    it('retorna 404 ao excluir produto inexistente', async () => {
        const response = criarResponse();
        service.deletarProduto.mockResolvedValue(null);

        await produtosController.deletarProduto(
            { params: { id: '99' } } as RequestMock as never,
            response as never
        );

        expect(response.status).toHaveBeenCalledWith(404);
    });
});
