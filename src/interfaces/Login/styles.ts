import Styled, { styled } from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background-color: #0B845C;
 `;

export const ContainerLogin = styled.View `
    flex:1;
    background-color: #fff;
    width: 400px;
    height: 772px;
    top: 120px;
    border-radius: 62px;
    align-items: center;
`;

export const ContainerCriarConta = styled.View `
    align-items: center;
    top: 1px;
`;
export const MessagemLogin = styled.Text`
    font-family: 'Poppins_900Black';
    font-size: 20px;
    font-weight: 1000;
    line-height: 200px;
    text-align: center;
`;

export const TitleMarca = styled.Text`
    color: #fff;
    text-align: center;
    font-family: 'Poppins_900Black';
    font-size: 48px;
    top: 77px;
`;


export const TextInputEmail = styled.TextInput`
    width: 340px;
    height: 50px;
    padding: 10px;
    border-width: 1px;
    border-color: #ccc;
    border-radius: 62px;
    font-size: 16px;
    background-color: #F5F5F5;
    margin-bottom: 25px; 
    top: -50px;
`;

export const TextInputSenha = styled.TextInput`
    width: 340px;
    height: 50px;
    padding: 10px;
    border-width: 1px;
    border-color: #ccc;
    border-radius: 62px;
    font-size: 16px;
    background-color: #F5F5F5;
    margin-bottom: 25px; 
    top: -50px;
`;


export const TouchableOpacityEntrar= styled.TouchableOpacity`
    background-color: #0B845C;
    align-items: center;
    padding: 10px;
    border-radius: 62px;
    width: 340px;
    top: -40px;
`;

export const TextBotaoEntrar= styled.Text`
    padding: 5px;
    color: #fff;
    font-size: 15px;
    font-family: 'Poppins_900Black';
`;

export const TouchableOpacityEsqueciASenha= styled.TouchableOpacity`
    align-items: left;
    padding: 10px;
    width: 160px;
    height: 50px;
    top: -40px;
    align-self: flex-start;
    margin-left: 25px;
`;

export const TextBotaoEsqueciASenha= styled.Text`
    padding: 5px;
    color: #34495E;
    font-size: 13px;
    font-family: 'Roboto';
    text-decoration-line: underline;
`;

export const TextCriarConta= styled.Text`
    align-items: center;
    padding: 5px;
    color: #34495E;
    font-size: 13px;
    font-family: 'Roboto';
`;

export const TouchableOpacityCriarConta= styled.TouchableOpacity`
    align-items: center;
    padding: 5px;
    width: 100px;
    height: 45px;
`;


export const TextBotaoCriarConta= styled.Text`
    align-items: center;
    padding: 5px;
    color: #0D986A;
    font-size: 13px;
    font-family: 'Roboto';
`;
export const ButtonVoltar= styled.TouchableOpacity`
    background-color: #0B845C;
    align-items: center;
    padding: 10px;
`;

export const TextButtonVoltar= styled.Text`
    color: #fff;
    font-size: 20px;
`;