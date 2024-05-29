import { Loading } from '@/componentes/Loading';
import { useFonts, Poppins_600SemiBold,Poppins_900Black } from '@expo-google-fonts/poppins';
import { StatusBar } from 'react-native';
import { Routes } from '@/src/routes';


export default function App() {
  const [carregarFonts] =  useFonts({Poppins_600SemiBold,Poppins_900Black}); // carregando as fontes

  
  return (
    <>
    
    {carregarFonts ? <Routes /> : <Loading/ >}  
    </>
    
  );
}

