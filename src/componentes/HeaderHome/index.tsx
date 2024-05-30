import { BlocoCabecalho,TextoCabecalho, IconSeta, ButtonSeta } from './styles';
import{CaretLeft} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';


type Props={
    showTextCabecalho?: boolean; // ? diz q ela é opcional e : diz o tipo
}

export function HeaderHome({showTextCabecalho }:Props){

  const navigation= useNavigation();

  function telaLogin(){
    navigation.navigate('login');
}
    return(
            <BlocoCabecalho>
              <ButtonSeta onPress={telaLogin}>
                    <IconSeta />
                </ButtonSeta>
            {showTextCabecalho ? (  //se for verdadeiro mostrara o text de cadastrar
          <TextoCabecalho>
            Cadastre sua empresa
          </TextoCabecalho>
        ) : (                      // se for falso mostrara o text de esqueci minha senha
          <TextoCabecalho>
            Recuperação de senha
          </TextoCabecalho>
        )}
                
            </BlocoCabecalho>
            
    );
}