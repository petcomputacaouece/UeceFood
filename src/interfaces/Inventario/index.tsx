import { CriarCardapio } from '@/src/componentes/CriarCardapio';
import { ButtonAdd, Container, IconPlus, ListBox } from './styles';
import { HeaderHomeUser } from '@/src/componentes/HeaderHomeUser';
import { FloatingBox } from '@/src/componentes/FloatingBox';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState,useCallback} from 'react';
import { FlatList } from 'react-native';
import { produtoGetAll } from '@/src/storage/produto/produtoGetAll';

export  function Inventario() {
    const [produtos, setProdutos]= useState<string[]>([]);
    
    const navigation=useNavigation();

    async function fetchProdutos() {
        try {
          const data= await produtoGetAll();
          setProdutos(data);
        } catch (error) {
          console.log(error)
        }
      }

      useFocusEffect(useCallback(() => {
        console.log("carregou use effect")
        fetchProdutos();
    }, []));
      
    function adicionarProduto(){
        navigation.navigate('cadastrarProd');

    }

    return (
        <Container>
        <HeaderHomeUser title={'user'}/>
        <CriarCardapio/>


        <FlatList 
            data={produtos} 
            keyExtractor={item => item}
            renderItem={({item}) => 
            (<FloatingBox 
            title={item}/>) }>

        </FlatList>
        
        <ButtonAdd onPress={adicionarProduto}>
            <IconPlus/>
        </ButtonAdd>
        </Container>
    );
  
  
  }
  