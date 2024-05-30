import styled from 'styled-components/native';

export const Container= styled.View`
    flex:1;
    justify-content: center;
`;
export const Content= styled.View`
    flex: 1;
    align-items: center;
    padding-top:50px ;

`;

export const Texto= styled.Text `
    font-size: 18px;
    font-family: 'Poppins_700Bold';
    color: #00214E;
`;
export const Input=styled.TextInput.attrs(({
    placeholderTextColor:'#777'
    
})) `
    min-width: 320px;
    min-height: 45px;
    padding: 13px;
    border-radius: 20px;
    font-size: 14px;
    background-color: #ccc;
    margin-bottom: 15px; 
    margin-top:30px;
`;
export const ButtonEnviar=styled.TouchableOpacity `
    background-color: #0B845C;
    align-items: center;
    padding: 10px;
    border-radius: 20px;
    width: 250px;
    margin-top: 50px;
    `;
export const TextBotao= styled.Text`
    color: #fff;
    font-size: 15px;
    font-family: 'Poppins_700Bold';
`;
export const TextoInformativo= styled.Text `
    font-size: 12;
    font-family: 'Poppins_400Regular';
    width: 300px;
    text-align: justify;
    padding-top:30px ;

`;