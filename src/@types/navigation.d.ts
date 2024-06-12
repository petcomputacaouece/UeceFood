import { Inventario } from "../interfaces/Inventario";

export declare global{
    namespace ReactNavigation{
        interface RootParamList {
            login:undefined;      //coloca algum parametro se tiver
            inicial:undefined;
            recuperacao: undefined;
            cadastroLoja:undefined;
            homeUser:undefined;
            vendas:undefined;
            inventario:undefined;
            analytics:undefined;
            configuracoes:undefined;
        }
    }
}