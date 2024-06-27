import styled from "styled-components/native";
import{Pizza} from 'phosphor-react-native';

export const Container= styled.View `
    flex: 1;
`;
export const Texto=styled.Text`
    font-family: 'Poppins_700Bold';
    margin-left: 35px;
    margin-top: 35px;
    font-size: 20px;
    color: #00214E;
`;
export const IconeFood=styled(Pizza).attrs({
    size: 90,
    weight:"duotone",
    color:'#CF7000'
}) 
    `align-self:center`;

export const BlocoQuantidade= styled.View `
    flex-direction: row;
    background-color: #fff;

    margin-top: 25px;
    margin-bottom: 25px;
    width: 345px;
    height: 65px;

    align-items: center;
    justify-content: center;
    align-self: center;
    border-radius: 15px;
    elevation: 4;

`;
export const TextoBloco=styled.Text`
    margin-right: 40px;
    font-family: 'Poppins_600SemiBold';
    font-size: 13px;
    color: #00214E;
`;
export const ContainerForms=  styled.View `
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

export const Input=styled.TextInput.attrs(({
    placeholderTextColor:'#777'
    
})) `
    min-width: 340px;
    min-height: 45px;
    padding: 13px;
    border-radius: 30px;
    font-size: 14px;
    background-color: #fff;
    margin-bottom: 15px; 
`;
export const ButtonCadastrar=styled.TouchableOpacity `
    background-color: #0B845C;
    align-items: center;
    padding: 10px;
    border-radius: 62px;
    width: 340px;
    `;
    export const TextBotao= styled.Text`
    color: #fff;
    font-size: 15px;
    font-family: 'Poppins_700Bold';
`;
//export const 