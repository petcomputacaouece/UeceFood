 import styled from 'styled-components/native';

export const Container= styled.View `
    background-color: #0B845C;
    flex:1;

    `;  
    
export const ContainerLogo= styled.View `
      flex:1;
      justify-content:left;
      align-items: left;
    `;
  
export const Welcome= styled.View `
  flex:1;
  background-color: #0B845C;  
  `;
export const TitleMarca= styled.Text`
    color: #fff;
    text-align: center;
    font-family: 'Poppins_900Black';
    font-size: 48px;
`;

export const Mensagem= styled.Text `
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-family: 'Poppins_600SemiBold';
    padding-top: 30px;
`;
export const LoadIndicator = styled.ActivityIndicator.attrs({
    color:'#fff',
    size: 50,}) ``;
export const Botao= styled.Button `
    background-color: #fff;
    `;

  
  

  