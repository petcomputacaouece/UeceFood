import { TouchableOpacity,Text } from "react-native";
import { Container } from "./styles";
type Props = {
    title: string;
  }

export function FloatingBox({title}:Props){
    return(
       
        <Container>
            <Text>{title}</Text>
        </Container>
       
    );
}