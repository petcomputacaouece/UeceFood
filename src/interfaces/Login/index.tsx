import {Container, TitleMarca, ContainerLogin, MessagemLogin, ButtonVoltar, TextButtonVoltar,
TouchableOpacityEntrar, TextBotaoEntrar, TextInputEmail,TextInputSenha, TouchableOpacityEsqueciASenha, 
TextBotaoEsqueciASenha, ContainerCriarConta, TouchableOpacityCriarConta, TextCriarConta, TextBotaoCriarConta} from './styles';
import { Platform, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

export function Login(){
const [email, setEmail] =useState('');
const [senha, setSenha] =useState('');

    const navigation= useNavigation();
 
    async function entrar(){
        try {
            const response = await axios.post('http://192.168.0.6:3000/api/login', {
                
                Email:email, 
                Senha:senha
          });
          console.log('Response:', response.data);
          navigation.navigate('appRoutes');

          } catch (error) {
            if (axios.isAxiosError(error)) {
                
                console.log("Erro ao fazer login:", error);
                console.log("Detalhes do erro:", error.response?.data);

                if (error.response && error.response.status === 400) {
                  Alert.alert(
                    "Erro ao fazer login",
                    "Verifique suas credenciais e tente novamente."
                  );
                }
              } else {
                // Se não for um AxiosError, lide com o erro de outra maneira
                console.log("Erro desconhecido:", error);
              }}
    }
    function telaRecuperarSenha(){
        navigation.navigate('recuperacao');
    }
    function telaCadastrarLoja(){
        navigation.navigate('cadastroLoja');
    }
    return(
        <Container>
            <TitleMarca>UECE Food</TitleMarca>

            <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            extraHeight={Platform.OS === 'ios' ? 150 : 200}
        >
            <ContainerLogin>
                <MessagemLogin>
                    Olá, faça login na sua conta 
                </MessagemLogin>

                
                <TextInputEmail
                    placeholder="Email"
                    onChangeText={setEmail}
                />

                <TextInputSenha
                    placeholder="Senha"
                    keyboardType="default"
                    secureTextEntry={true}
                    onChangeText={setSenha}
                    />
                
                <TouchableOpacityEntrar  onPress={entrar}>
                    <TextBotaoEntrar>
                        Entrar
                    </TextBotaoEntrar>
                </TouchableOpacityEntrar>

                <TouchableOpacityEsqueciASenha onPress={telaRecuperarSenha}>
                    <TextBotaoEsqueciASenha>
                        Esqueceu sua senha?
                    </TextBotaoEsqueciASenha>
                </TouchableOpacityEsqueciASenha>

                <ContainerCriarConta>

                    <TextCriarConta>
                        Ainda não tem conta?
                    </TextCriarConta>

                    <TouchableOpacityCriarConta onPress={telaCadastrarLoja}>
                        <TextBotaoCriarConta>
                            Criar Conta!
                        </TextBotaoCriarConta>
                    </TouchableOpacityCriarConta>
                    
                </ContainerCriarConta>

            </ContainerLogin>
            </KeyboardAwareScrollView>
      

        </Container>
    )
}