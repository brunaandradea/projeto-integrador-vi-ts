import { Request, Response } from 'express';
declare function listarProdutos(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function buscarProdutoPorId(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function criarProduto(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function atualizarProduto(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function atualizarParcialProduto(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare function deletarProduto(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
declare const _default: {
    listarProdutos: typeof listarProdutos;
    buscarProdutoPorId: typeof buscarProdutoPorId;
    criarProduto: typeof criarProduto;
    atualizarProduto: typeof atualizarProduto;
    atualizarParcialProduto: typeof atualizarParcialProduto;
    deletarProduto: typeof deletarProduto;
};
export default _default;
//# sourceMappingURL=produtos.controller.d.ts.map