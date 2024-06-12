import { Recuperacao } from '../Recuperacao';
import {Container, TitleMarca, ContainerLogin, MessagemLogin, ButtonVoltar, TextButtonVoltar,
TouchableOpacityEntrar, TextBotaoEntrar, TextInputEmail,TextInputSenha, TouchableOpacityEsqueciASenha, 
TextBotaoEsqueciASenha, ContainerCriarConta, TouchableOpacityCriarConta, TextCriarConta, TextBotaoCriarConta} from './styles';
import { Button, Text, TouchableOpacity, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function Login(){
    const navigation= useNavigation();
    function telaInicial(){
        navigation.navigate('inicial');
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

            <ContainerLogin>
                <MessagemLogin>
                    Olá, faça login na sua conta 
                </MessagemLogin>

                
                <TextInputEmail
                    placeholder="Email"
                />

                <TextInputSenha
                    placeholder="Senha"
                />
                
                <TouchableOpacityEntrar>
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
 
      

        </Container>
    )
}