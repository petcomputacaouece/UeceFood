import {Container, TitleMarca, ContainerLogin, MessagemLogin, ButtonVoltar, TextButtonVoltar,
TouchableOpacityEntrar, TextBotaoEntrar, TextInputEmail,TextInputSenha, TouchableOpacityEsqueciASenha, 
TextBotaoEsqueciASenha, ContainerCriarConta, TouchableOpacityCriarConta, TextCriarConta, TextBotaoCriarConta} from './styles';
import { Button, Text, TouchableOpacity, TextInput } from 'react-native';


export function Login(props){

    function telaInicial(){
        props.navigation.navigate('inicial');
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

                <TouchableOpacityEsqueciASenha>
                    <TextBotaoEsqueciASenha>
                        Esqueceu sua senha?
                    </TextBotaoEsqueciASenha>
                </TouchableOpacityEsqueciASenha>

                <ContainerCriarConta>

                    <TextCriarConta>
                        Ainda não tem conta?
                    </TextCriarConta>

                    <TouchableOpacityCriarConta>
                        <TextBotaoCriarConta>
                            Criar Conta!
                        </TextBotaoCriarConta>
                    </TouchableOpacityCriarConta>
                    
                </ContainerCriarConta>

            </ContainerLogin>
 
            <ButtonVoltar onPress={telaInicial}>
                <TextButtonVoltar>VOLTAR</TextButtonVoltar>
            </ButtonVoltar> 

        </Container>
    )
}