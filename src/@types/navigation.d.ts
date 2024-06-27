import { Inventario } from "../interfaces/Inventario";
import { EmpresaStorageDTO } from "../storage/empresa/EmpresaStorageDTO";

export declare global{
    namespace ReactNavigation{
        interface RootParamList {
            login:undefined;      //coloca algum parametro se tiver
            inicial:undefined;
            recuperacao: undefined;
            cadastroLoja:undefined;

            homeUser:undefined;
            vendas:undefined;
            inventario:{
                name:string;
            };
            analytics:undefined;
            configuracoes:undefined;
            cadastrarProd:undefined;

            appRoutes:undefined;
        }
    }
}