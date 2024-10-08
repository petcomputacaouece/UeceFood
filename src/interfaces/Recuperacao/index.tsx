import { Image, StyleSheet, View,Text } from 'react-native';
import { Container,ButtonEnviar,TextBotao,Content ,Texto,Input, TextoInformativo } from './styles';
import { HeaderInicial } from '@/src/componentes/HeaderInicial';

export function Recuperacao() {
  return (
    <Container>
      <HeaderInicial showTextCabecalho={false}/> 
      <Content>
      <Texto> Informe seu E-mail cadastrado</Texto>

        <Input placeholder="Email"/>

      <TextoInformativo>Um Email será enviado para sua
         conta que levará a uma página no qual poderá fazer
          a mudança de senha
          </TextoInformativo>
          <ButtonEnviar>
        <TextBotao> Enviar</TextBotao>
      </ButtonEnviar>
      </Content>

    </Container>
  );
}

  