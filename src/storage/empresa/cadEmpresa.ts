import AsyncStorage from '@react-native-async-storage/async-storage';
import { EMPRESA_COLLECTION } from '@storage/storageConfig';
import { EmpresaStorageDTO } from './EmpresaStorageDTO';

export async function cadEmpresa(newEmpresa: EmpresaStorageDTO){

try { //                             chave unica , oq sera guardado na chave                 
    await AsyncStorage.setItem(EMPRESA_COLLECTION,JSON.stringify(newEmpresa) ); //JSON.stringfy converte objeto em texto
} catch (error) {

    throw error;

}}
