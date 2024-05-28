import { Image, StatusBar, View,Text } from 'react-native';
import { Container ,ContainerLogo,Welcome,TitleMarca,Mensagem,LoadIndicator} from './styles';

export  function Inicial() {
  return (
    <Container>
    <ContainerLogo>
      <Image
        source={require('@assets/home.png')}
        style= {{}}
        resizeMode='contain'
      />
    </ContainerLogo>

    <Welcome>

        <TitleMarca>UECE Food</TitleMarca>
        <LoadIndicator/>
        <Mensagem>Aguarde para começar...</Mensagem>

    </Welcome>

    </Container>
  );
}

  