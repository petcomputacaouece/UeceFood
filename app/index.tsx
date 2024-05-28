import { Image, StyleSheet, View,Text } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  
  
  return (

    
  <View style = {styles.container}>

    <View style= {styles.containerLogo}>

      <Image
        source={require('../assets/images/logo.png')}
        style= {{width: '100%'}}
        resizeMode="contain"
      />
    </View>

    <View style ={styles.welcome}>

        <Text style={styles.titleMarca}>UECE Food</Text>

        <Image />

        <Text style={styles.mensagem}>Aguarde para começar...</Text>

    </View>

  </View>
      
  );
}

const styles = StyleSheet.create({

  container:{

    backgroundColor: "#0B845C",
    flex:1
  },

  containerLogo:{

    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  welcome: {

    backgroundColor: "#0B845C",
    flex:1,
  },
  
  titleMarca: {
    
    //backgroundColor:"#EB38",
    color: "#fff",
    fontFamily: 'Poppins_400Regular',  
    //lineHeight: 700, 
    letterSpacing: -0.3333, 
    textAlign: 'center', 
    fontSize: 40, 
    fontWeight: 'bold'
  },

  mensagem:{
    
    color: "#fff",
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',

  }



});
