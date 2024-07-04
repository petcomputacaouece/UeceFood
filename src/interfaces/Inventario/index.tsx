import { CriarCardapio } from '@/src/componentes/CriarCardapio';
import { ButtonAdd, Container, IconPlus, ListBox } from './styles';
import { HeaderHomeUser } from '@/src/componentes/HeaderHomeUser';
import { FloatingBox } from '@/src/componentes/FloatingBox';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState,useCallback} from 'react';
import { FlatList } from 'react-native';
import { produtoGetAll } from '@/src/storage/produto/produtoGetAll';
import { ProdutoStorageDTO } from '@/src/storage/produto/ProdutoStorageDTO';

export  function Inventario() {
  const [produtos, setProdutos] = useState<ProdutoStorageDTO[]>([]);
    
    const navigation=useNavigation();

    async function fetchProdutos() {
        try {
          const data= await produtoGetAll();
          setProdutos(data);
          console.log('dados vindo de cad:',data)
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
        <HeaderHomeUser title={'user'} showCabecalho={false}/>
        <CriarCardapio/>

        <FlatList style={{marginBottom:-60}}
                data={produtos} 
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={({ item }) => (
                    <FloatingBox nome={item.nome} custo={item.custo} preco={item.preco} precoMaq={item.precoMaq} quantidade={item.quantidade} />
                )}
            />
        <ButtonAdd onPress={adicionarProduto}>
            <IconPlus/>
        </ButtonAdd>
        </Container>
    );
  
  
  }
  