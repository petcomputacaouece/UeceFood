import styled from "styled-components/native";
import {Pizza} from "phosphor-react-native"

export const Container=styled.View `
    align-self: center;
    align-items: center;
    flex-direction: row;

    margin-top: 30px;
    width: 340px;
    height: 170px;
    padding: 12px;

    border-radius: 30px;
    background-color: #FDFDFD;
    elevation: 5;
`;
export const IconPizza= styled(Pizza).attrs({
    size: 90,
    weight:"duotone",
    color:'#CF7000'
        
    })`margin-right:10px`;
export const Content=styled.View `
    flex-direction: column;
`;
export const Text= styled.Text `
    font-family: "Poppins_600SemiBold";
    font-size: 13px;
    color: #00214E;
    margin-top: 10px;
    flex-wrap: wrap;
`;
export const TextPreco= styled.Text `
    font-family: "Poppins_600SemiBold";
    font-size: 14px;
    color: #00214E;
    align-self: flex-end;
    margin-right: 20px;
`;
export const TextQuant= styled.Text `
    font-family: "Poppins_600SemiBold";
    font-size: 32px;
    color: #00214E;

`;
export const TextButton= styled.Text `
    font-family: "Poppins_600SemiBold";
    font-size: 14px;
    color: #00214E;

`;
export const ButtonEditar=styled.TouchableOpacity`
    background-color: #FFF494;
    border-radius: 16px;

    width: 63px;
    height: 60px;

    align-self: center;
    justify-content: center;
    align-items: center;

`;