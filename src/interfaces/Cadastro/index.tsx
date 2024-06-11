import styled from  'styled-components';
import { Container, ImgAddLoja,IconAdd, IconLoja, Input, ContainerForms, ButtonCadastrar, TextBotao} from './styles';
import { HeaderHome } from '@/src/componentes/HeaderHome';
import { Platform, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export function Cadastro() {

  return (
   <Container>
      <HeaderHome showTextCabecalho={true} />
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
            <Input placeholder="Nome do estabelecimento"/>
            <Input placeholder="Endereço"/>
            <Input placeholder="Tipo de Estabelecimento"/>
            <Input placeholder="CNPJ ou CPF"/>
            <Input placeholder="Email"/>
            <Input placeholder="Senha"/>

            <ButtonCadastrar>
              <TextBotao> Cadastrar</TextBotao>
            </ButtonCadastrar>
        
          </ContainerForms>
        </ScrollView>    
      </KeyboardAwareScrollView>

   </Container>
  );
}

  