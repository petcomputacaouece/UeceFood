import styled from 'styled-components/native';
import {Storefront,PlusCircle} from 'phosphor-react-native';
import { Styled } from 'styled-components';
import { useFonts } from '@expo-google-fonts/roboto';

export const Container= styled.View`
    flex: 1;
    justify-content: flex-start;
`;
export const Content= styled.View `
    flex: 1;

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
    background-color: #ccc;
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
export const ImgAddLoja=styled.View `
    flex-direction:row;
    justify-content: center;
    
`;
export const IconLoja=styled(Storefront).attrs(({ 
    size:120,
    color: '#0B845C',
    weight:'fill'
  
})) ` `;
export const IconAdd=styled(PlusCircle).attrs(({ 
    size:36,
    color: '#0B845C',
    weight:'fill'
})) ` align-self:center`;
