import { useNavigation } from '@react-navigation/native';
import {ButtonSearch, Container, ContainerImage, NomeLoja, TextWelcome,IconSearch, ButtonSeta, IconSeta} from './styles';
import { Image,StatusBar, View ,Text} from 'react-native';
type Props = {
    title: string;
  }

export function HeaderHomeUser({title}:Props){
    const navigation= useNavigation();

    function inventario(){
      navigation.navigate('inventario',{name:''});
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
            <ButtonSeta onPress={inventario}>
                    <IconSeta />
                </ButtonSeta>
            <ButtonSearch> 
                <IconSearch />
            </ButtonSearch>
        </Container>
    );
}