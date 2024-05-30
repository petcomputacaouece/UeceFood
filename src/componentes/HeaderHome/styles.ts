
import styled from "styled-components/native";
import{CaretLeft} from "phosphor-react-native";

export const BlocoCabecalho= styled.View `
 background-color: #0B845C;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height:120px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
`;
export const IconSeta=styled(CaretLeft).attrs({ 
    size:36,
    color: '#fff',
    weight: 'bold',
}) ` `;
export const ButtonSeta=styled.TouchableOpacity`
    align-self:flex-end;
    `;

export const TextoCabecalho=styled.Text `
    font-size: 20px;
    color: #fff;
    font-family:'Poppins_500Medium';
    text-align: center ;
    `;
