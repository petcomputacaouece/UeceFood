import {Container} from './styles';
import { Button, Text } from 'react-native';

export function Login(props){
    function telaInicial(){
        props.navigation.navigate('inicial');

    }
    return(
        <Container>
            <Text>aaaaaaaaaa</Text>
            <Button title='Voltar' onPress={telaInicial}></Button>
        </Container>
    )
}