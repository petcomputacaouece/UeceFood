import styled from "styled-components/native";
import{CallBell, ArrowSquareRight} from "phosphor-react-native";

export const Container= styled.View `
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    align-self: center;
    margin-top: 12px;
    border-radius: 15px;
    width: 345px;
    height: 42px;

`;

export const IconAdd = styled(CallBell).attrs({
    weight: 'duotone',
    color: '#00214E',
    size: 27,
    
}) ` 
    margin-left: 25px;
    margin-right:8px
    `;

export const TextButton= styled.Text `
    color: #00214E;
    font-family: 'Poppins_400Regular';
    size: 14px;
`;
export const IconArrow = styled(ArrowSquareRight).attrs({
    weight: 'light',
    color: '#00214E',
    size: 27,
}) ` 
    margin-left:auto;
    margin-right:8px
`;