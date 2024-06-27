import AsyncStorage from '@react-native-async-storage/async-storage';
import { PRODUTO_COLLECTION } from '@storage/storageConfig';

export async function produtoGetAll(): Promise<string[]> {
    try {
        const storage = await AsyncStorage.getItem(PRODUTO_COLLECTION);
        const produtos: string[] = storage ? JSON.parse(storage) : [];
        return produtos;
    } catch (error) {
        console.log(error);
        return []; 
    }
}
