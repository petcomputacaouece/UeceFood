import { useState } from 'react';
import { Container, ImgAddLoja,IconAdd, IconLoja, Input, ContainerForms, ButtonCadastrar, TextBotao} from './styles';
import { HeaderInicial } from '@/src/componentes/HeaderInicial';
import { Platform, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { cadEmpresa } from '@/src/storage/empresa/cadEmpresa';


export function Cadastro() {
  const[nomeloja,setNomeLoja]= useState('');
  const[endereco,setEndereco]= useState('');
  const[tipo,setTipo]= useState('');
  const[CnpjCpf,setCnpjCpf]= useState('');
  const[email,setEmail]= useState('');
  const[senha,setSenha]= useState('');


   async function cadastrarUsuario(){
    try {
      console.log('entrou aqui');
      const response = await fetch('http://127.0.0.1:8081/register-estabelecimento',{
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content':'application/json',
        },
        body:JSON.stringify({nomeloja,endereco,tipo,CnpjCpf,email,senha})
        
      });
      const data= response.json();
      console.log(data);
      console.log({nomeloja,endereco,tipo,CnpjCpf,email,senha});

      //await cadEmpresa({nomeloja,endereco,tipo,CnpjCpf,email,senha})
    } catch (error) {
      console.log(error);
    }
    
 }
   return (
   <Container>
      <HeaderInicial showTextCabecalho={true} />
      <ImgAddLoja>
        <IconLoja/> 
        <IconAdd/>
      </ImgAddLoja>

      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraHeight={Platform.OS === 'ios' ? 150 : 200}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ContainerForms>
            <Input 
              placeholder="Nome do estabelecimento"
              onChangeText={setNomeLoja}
            />
            <Input 
              placeholder="Endereço"
              onChangeText={setEndereco}
            />
            <Input 
              placeholder="Tipo de Estabelecimento"
              onChangeText={setTipo}
            />
            <Input 
              placeholder="CNPJ ou CPF"
              onChangeText={setCnpjCpf}
              keyboardType="numeric"
              maxLength={14}
            />
            <Input 
              placeholder="Email"
              onChangeText={setEmail}
            />
            <Input 
              placeholder="Senha"
              onChangeText={setSenha}
              keyboardType="default"
              secureTextEntry={true}
              returnKeyType='send'
            />

            <ButtonCadastrar onPress={cadastrarUsuario}>
              <TextBotao> Cadastrar</TextBotao>
            </ButtonCadastrar>
        
          </ContainerForms>
        </ScrollView>    
      </KeyboardAwareScrollView>

   </Container>
  );
}

  