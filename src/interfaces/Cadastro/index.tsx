import { useState } from 'react';
import { Container, ImgAddLoja,IconAdd, IconLoja, Input, ContainerForms, ButtonCadastrar, TextBotao} from './styles';
import { HeaderInicial } from '@/src/componentes/HeaderInicial';
import { Alert, Platform, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import axios, {Axios} from 'axios'

export function Cadastro() {
  const[nomeloja,setNomeLoja]= useState('');
  const[endereco,setEndereco]= useState('');
  const[tipo,setTipo]= useState('');
  const[CnpjCpf,setCnpjCpf]= useState('');
  const[email,setEmail]= useState('');
  const[senha,setSenha]= useState('');

  const navigation= useNavigation();

   async function cadastrarUsuario(){
    try {
      //                             colocar a url do emulador e a porta 3000   
      const response = await axios.post('http://192.168.0.6:3000/api/register-estabelecimento', {
        Nome: nomeloja,
        CNPJ_CPF: CnpjCpf, // Substitua pelo CNPJ ou CPF válido
        TipoEstabelecimento: tipo,
        Email: email,
        Senha: senha
    });
    console.log('Response:', response.data);
      Alert.alert(
        "Sucesso",
        "Cadastro realizado com sucesso!",
        [{ text: "Voltar para login", onPress: () => navigation.navigate('login') }]
      );
    } catch (error) {
      console.log("erro: ",error);
      
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

  