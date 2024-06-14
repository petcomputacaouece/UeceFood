import { TouchableOpacity } from "react-native";
import { Container, IconAdd, IconArrow, TextButton } from "./styles";

export function CriarCardapio(){
    return(
        <TouchableOpacity>
        <Container>
            <IconAdd/>
            <TextButton>Crie o cardápio do dia</TextButton>
            <IconArrow/>
        </Container>
        </TouchableOpacity>
    );
}