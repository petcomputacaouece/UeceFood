import styled from 'styled-components/native';
import {Plus} from 'phosphor-react-native'

export const Container= styled.View `
    background-color: #E7E7E7;
    flex:1;
    `;
export const ButtonAdd=styled.TouchableOpacity`
    background-color: #1BBF8D;

    width: 63px;
    height: 60px;
    border-radius: 30px;
    align-self: flex-end;
    justify-content: center;

    position: fixed; 
    bottom:35px; 
    right: 20px; 
`;
export const IconPlus= styled(Plus).attrs(
    {color:"#FFF",
    weight:'bold',
    size: 35
        
    })  `align-self:center;`
    ;
export const ListBox= styled.FlatList `
    margin-top: 15px;
    margin-bottom: -60px;
`;