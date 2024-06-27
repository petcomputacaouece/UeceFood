import { HeaderHomeUser } from '@/src/componentes/HeaderHomeUser';
import { Container } from './styles';
import {Text} from 'react-native';
import { CriarCardapio } from '@/src/componentes/CriarCardapio';
import { FloatingBox } from '@/src/componentes/FloatingBox';
export  function HomeUser() {
  
    return (
        <Container>
            <HeaderHomeUser/>
            <CriarCardapio/>
            <FloatingBox/>
        </Container>
    );
  
  
  }
  