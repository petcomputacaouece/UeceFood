import { useNavigation } from '@react-navigation/native';
import {ButtonSearch, Container, ContainerImage, NomeLoja, TextWelcome,IconSearch, ButtonSeta, IconSeta} from './styles';
import { Image,StatusBar, View ,Text} from 'react-native';
type Props = {
    title: string;
    showCabecalho: boolean
  }

export function HeaderHomeUser({title,showCabecalho}:Props){
    const navigation= useNavigation();

    function inventario(){
      navigation.navigate('inventario');
  }

  

    return(
        <Container>
              <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
              
              <ContainerImage>
            <Image source={require('@assets/logoLoja.png')}
                style= {{}}
                resizeMode='contain'
            />
            </ContainerImage>

            <View>
            <TextWelcome>Bem-Vindo</TextWelcome>
            <TextWelcome>{title}</TextWelcome>
            </View>
            {showCabecalho ? (  //se for verdadeiro mostrara o text de cadastrar
           <ButtonSeta onPress={inventario}>
           <IconSeta />
       </ButtonSeta>
        ) : (                      // se for falso mostrara o text de esqueci minha senha
            <ButtonSearch> 
            <IconSearch />
        </ButtonSearch>
        )}
           
        
        </Container>
    );
}