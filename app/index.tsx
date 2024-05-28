import { Inicial } from '@interfaces/Inicial';
import { Loading } from '@/componentes/Loading';
import { useFonts, Poppins_600SemiBold,Poppins_900Black } from '@expo-google-fonts/poppins';
import { StatusBar } from 'react-native';


export default function App() {
  const [carregarFonts] =  useFonts({Poppins_600SemiBold,Poppins_900Black}); // carregando as fontes

  
  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
    {carregarFonts ? <Inicial /> : <Loading/ >}  
    </>
    
  );
}

