// tipando o que sera guardado em empresa    DTO= Data Transfer Object -- conveção para levar dados de um lugar pro outro

export type EmpresaStorageDTO ={
    nomeloja: string
    endereco:string
    tipo:string
    CnpjCpf: string
    email: string
    senha: string
}