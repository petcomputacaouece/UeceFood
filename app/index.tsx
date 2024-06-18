import { Loading } from '@/src/componentes/Loading';
import { useFonts,Poppins_700Bold,Poppins_500Medium,Poppins_400Regular, Poppins_600SemiBold,Poppins_900Black } from '@expo-google-fonts/poppins';
import {Roboto_400Regular} from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { Routes } from '@/src/routes';


export default function App() {
  const [carregarFonts] =  useFonts({Roboto_400Regular,Poppins_700Bold,Poppins_500Medium,Poppins_400Regular,Poppins_600SemiBold,Poppins_900Black}); // carregando as fontes

  
  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
    {carregarFonts ? <Routes /> : <Loading/ >}  
    </>
    
  );
}

