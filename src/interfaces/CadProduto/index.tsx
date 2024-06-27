import { ContarNumero } from "@/src/componentes/ContarNumero";
import { BlocoQuantidade, ButtonCadastrar, Container, ContainerForms, IconeFood, Input, TextBotao, Texto, TextoBloco } from "./styles";
import { HeaderHomeUser } from "@/src/componentes/HeaderHomeUser";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { cadProduto } from "@/src/storage/produto/cadProduto";
import { produtoGetAll } from "@/src/storage/produto/produtoGetAll";
export function CadProduto(){

  const [produto, setProduto]= useState('');

  const navigation= useNavigation();

    async function addProduto(){
      console.log(produto);
      await cadProduto(produto);
      navigation.navigate("inventario",{name:produto});
    }

    return(

        <Container>
            <HeaderHomeUser title="user"/>

            <Texto>Novo Produto</Texto>
            <IconeFood/>

            <BlocoQuantidade>
                <TextoBloco>Quantidade</TextoBloco>
                <ContarNumero/>
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
              onChangeText={setProduto}
            />
          <Input 
              placeholder="Custo"
              keyboardType="numeric"
            />
            <Input 
              placeholder="Preço"
              keyboardType="numeric"
            />
            <Input 
              placeholder="Preço na maquininha"
              keyboardType="numeric"
            
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