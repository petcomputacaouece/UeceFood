import styled from  'styled-components';
import { Container, ImgAddLoja,IconAdd, IconLoja, Input, ContainerForms, ButtonCadastrar, TextBotao } from './styles';
import { HeaderHome } from '@/src/componentes/HeaderHome';

export function Cadastro() {

  return (
   <Container>
      <HeaderHome showTextCabecalho={true} />
      <ImgAddLoja>
        <IconLoja/> 
        <IconAdd/>
      </ImgAddLoja>

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

   </Container>
  );
}

  