import { HeaderHomeUser } from '@/src/componentes/HeaderHomeUser';
import { Container } from './styles';
import { CriarCardapio } from '@/src/componentes/CriarCardapio';
import { FloatingBoxInicial } from '@/src/componentes/FloatingBoxInicial';
export  function HomeUser() {
  
    return (
        <Container>
            <HeaderHomeUser title={'User'} showCabecalho={false}/>
            <CriarCardapio/>
            <FloatingBoxInicial/>
        </Container>
    );
  
  
  }
  