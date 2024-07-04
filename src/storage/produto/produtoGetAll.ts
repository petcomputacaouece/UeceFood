import AsyncStorage from '@react-native-async-storage/async-storage';
import { PRODUTO_COLLECTION } from '@storage/storageConfig';
import { ProdutoStorageDTO } from './ProdutoStorageDTO';

export async function produtoGetAll():  Promise<ProdutoStorageDTO[]> {
    try {
        const storage = await AsyncStorage.getItem(PRODUTO_COLLECTION);
        const produtos: ProdutoStorageDTO[]= storage ? JSON.parse(storage) : [];
        return produtos;
    } catch (error) {
        console.log(error);
        return []; 
    }
}
