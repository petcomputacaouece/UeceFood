import { Image, StatusBar, View,Text } from 'react-native';
import { Container ,ContainerLogo,Welcome,TitleMarca,Mensagem,LoadIndicator, Botao} from './styles';
import {useNavigation} from '@react-navigation/native';
import { useEffect } from 'react';

export  function Inicial(props) {

  useEffect( ()=> {
    const timer = setTimeout(()=> {   //função que carregar por um tempo e faz algo
      props.navigation.navigate('login'); //chamando a tela de login atraves de props

    },3000);    //ira pra tela de login apos 3 segundo

  })

  return (
    
    <Container>
      <StatusBar 
    barStyle='dark-content' backgroundColor='transparent' translucent />
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

  