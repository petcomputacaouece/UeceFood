import { HeaderHomeUser } from '@/src/componentes/HeaderHomeUser';
import { Container, ShadowBox } from './styles';
import {Text} from 'react-native';
import { CriarCardapio } from '@/src/componentes/CriarCardapio';
export  function HomeUser() {
  
    return (
        <Container>
            <HeaderHomeUser/>
            <CriarCardapio/>
            <ShadowBox></ShadowBox>
        </Container>
    );
  
  
  }
  