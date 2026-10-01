import { ProdutoInterface } from '../interface/produto.interface';
declare function listarProdutos(): Promise<import("sequelize").Model<any, any>[]>;
declare function buscarProdutoPorId(id: number): Promise<import("sequelize").Model<any, any> | null>;
declare function criarProduto(produto: ProdutoInterface): Promise<import("sequelize").Model<any, any>>;
declare function atualizarProduto(id: number, dados: ProdutoInterface): Promise<import("sequelize").Model<any, any> | null>;
declare function atualizarParcialProduto(id: number, dados: Partial<ProdutoInterface>): Promise<import("sequelize").Model<any, any> | null>;
declare function deletarProduto(id: number): Promise<import("sequelize").Model<any, any> | null>;
declare const _default: {
    listarProdutos: typeof listarProdutos;
    buscarProdutoPorId: typeof buscarProdutoPorId;
    criarProduto: typeof criarProduto;
    atualizarProduto: typeof atualizarProduto;
    atualizarParcialProduto: typeof atualizarParcialProduto;
    deletarProduto: typeof deletarProduto;
};
export default _default;
//# sourceMappingURL=produtos.service.d.ts.map