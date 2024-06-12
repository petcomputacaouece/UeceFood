import {ButtonSearch, Container, ContainerImage, NomeLoja, TextWelcome,IconSearch} from './styles';
import { Image,StatusBar, View } from 'react-native';


export function HeaderHomeUser(){
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
            <NomeLoja>UECEANA</NomeLoja>
            </View>

            <ButtonSearch> 
                <IconSearch />
            </ButtonSearch>
        </Container>
    );
}