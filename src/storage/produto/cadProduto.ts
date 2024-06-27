import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProdutoStorageDTO } from './ProdutoStorageDTO';
import { PRODUTO_COLLECTION } from '../storageConfig';
import { produtoGetAll } from './produtoGetAll';

export async function cadProduto(newProduto: string){

try { 
    const storedProdutos= await produtoGetAll();
    const storage=JSON.stringify([storedProdutos,newProduto]) 
    //                             chave unica , oq sera guardado na chave                 
    await AsyncStorage.setItem(PRODUTO_COLLECTION,storage); //JSON.stringfy converte objeto em texto
}
 catch (error) {

    throw error;

}}
