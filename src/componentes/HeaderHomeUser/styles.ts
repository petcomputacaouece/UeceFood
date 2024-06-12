import styled from 'styled-components/native';
import { MagnifyingGlass } from "phosphor-react-native";

export const Container =  styled.View `
    background-color: #fff;
    height:70px;
    align-items: center;
    flex-direction: row;
    
    `;
    export const ContainerImage= styled.View `
        background-color:#FDFDFD;
        border-radius:80px;
        padding: 8px;
        align-items: center;
        justify-content: flex-start;
        margin-right: 20px;
        margin-left: 40px;
    `;

export const TextWelcome= styled.Text `
    color:#00214E;
    font-size: 11px;
    font-family: 'Poppins_400Regular';

`;
export const NomeLoja= styled.Text `
    color:#00214E;
    font-size: 16px;
    font-family: 'Poppins_400Regular';
`;
export const ButtonSearch= styled.TouchableOpacity `
    margin-left: auto;
    padding: 20px;
    `;
export const IconSearch= styled(MagnifyingGlass).attrs({
    size:28,
    color: '#00214E',
    weight: 'bold',
})  `align-self:flex-end`;
