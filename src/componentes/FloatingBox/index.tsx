import { ButtonEditar, Container, Content, IconPizza,Text, TextButton, TextPreco, TextQuant} from "./styles";
type Props = {
    nome: string;
    custo: number;
    preco: number;
    precoMaq: number;
    quantidade: number;
  }

export function FloatingBox({nome,custo,preco,precoMaq,quantidade}:Props){
    return(
       
        <Container>
            <IconPizza/>

            <Content>
                <Text>Em estoque</Text>
                <TextQuant>{quantidade}</TextQuant>
                <Text>{nome}</Text>
            </Content>

            <TextPreco>R${preco}</TextPreco>

            <ButtonEditar><TextButton>Editar</TextButton></ButtonEditar>
        </Container>
       
    );
}