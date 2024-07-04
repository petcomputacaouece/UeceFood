import { BlocoQuantidade, ButtonCadastrar, Container, ContainerForms, IconeFood, Input, TextBotao, Texto, TextoBloco } from "./styles";
import { HeaderHomeUser } from "@/src/componentes/HeaderHomeUser";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { cadProduto } from "@/src/storage/produto/cadProduto";
import { ProdutoStorageDTO } from "@/src/storage/produto/ProdutoStorageDTO";
import ContarNumero from "@/src/componentes/ContarNumero";


export function CadProduto(){

  const [nome, setNome]= useState('');
  const [preco, setPreco]= useState('');
  const [custo, setCusto]= useState('');
  const [precoMaq, setPrecoMaq]= useState('');

  const [count, setCount] = useState(0); // Estado para a quantidade (count)

  
  const navigation= useNavigation();

    async function addProduto(){
      const newProduto: ProdutoStorageDTO = { 
        nome, 
        preco: parseFloat(preco), 
        custo: parseFloat(custo), 
        precoMaq: parseFloat(precoMaq),
        quantidade: count 
    };
    await cadProduto(newProduto);
    console.log(newProduto);
    navigation.navigate('inventario', { newProduto });
    }

    return(

        <Container>
            <HeaderHomeUser title="user" showCabecalho={true}/>

            <Texto>Novo Produto</Texto>
            <IconeFood/>

            <BlocoQuantidade>
        <TextoBloco>Quantidade</TextoBloco>
        <ContarNumero initialValue={count} onChange={setCount} />
      </BlocoQuantidade>
      
            <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            extraHeight={Platform.OS === 'ios' ? 150 : 200}
        >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ContainerForms>
            <Input 
              placeholder="Nome"
              onChangeText={setNome}
            />
          <Input 
              placeholder="Custo"
              keyboardType="numeric"
              onChangeText={setCusto}
            />
            <Input 
              placeholder="Preço"
              keyboardType="numeric"
              onChangeText={setPreco}
            />
            <Input 
              placeholder="Preço na maquininha"
              keyboardType="numeric"
              onChangeText={setPrecoMaq}
            
            />
         

            <ButtonCadastrar onPress={addProduto} >
               <TextBotao>Adicionar</TextBotao>
            </ButtonCadastrar>
        
          </ContainerForms>
        </ScrollView>    
      </KeyboardAwareScrollView>
        </Container>
    );
}