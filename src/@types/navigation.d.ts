import { Inventario } from "../interfaces/Inventario";
import { EmpresaStorageDTO } from "../storage/empresa/EmpresaStorageDTO";
import { ProdutoStorageDTO } from "../storage/produto/ProdutoStorageDTO";

export declare global{
    namespace ReactNavigation{
        interface RootParamList {
            login:undefined;      //coloca algum parametro se tiver
            Loading:undefined;
            recuperacao: undefined;
            cadastroLoja:undefined;

            homeUser:undefined;
            vendas:undefined;
            inventario:{
                newProduto: ProdutoStorageDTO;
            };
            analytics:undefined;
            configuracoes:undefined;
            cadastrarProd:undefined;

            appRoutes:undefined;
        }
    }
}