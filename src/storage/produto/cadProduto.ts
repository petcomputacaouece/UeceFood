import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProdutoStorageDTO } from './ProdutoStorageDTO';
import { PRODUTO_COLLECTION } from '../storageConfig';
import { produtoGetAll } from './produtoGetAll';

export async function cadProduto(newProduto: ProdutoStorageDTO): Promise<void> {
    try {
        const storedProdutos = await produtoGetAll();
        const updatedProdutos = [...storedProdutos, newProduto];
        const storage = JSON.stringify(updatedProdutos); // Converte a coleção atualizada em string JSON
        await AsyncStorage.setItem(PRODUTO_COLLECTION, storage); // Salva a coleção atualizada
    } catch (error) {
        throw error;
    }
}
