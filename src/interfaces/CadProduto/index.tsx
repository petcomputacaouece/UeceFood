import { AlterarFoto, BlocoQuantidade, ButtonCadastrar, Container, ContainerForms, IconeFood, Input, TextBotao, Texto, TextoBloco } from "./styles";
import { HeaderHomeUser } from "@/src/componentes/HeaderHomeUser";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Platform, ScrollView, Text, Image } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { cadProduto } from "@/src/storage/produto/cadProduto";
import { ProdutoStorageDTO } from "@/src/storage/produto/ProdutoStorageDTO";
import ContarNumero from "@/src/componentes/ContarNumero";

import * as ImagePicker from "expo-image-picker";

export function CadProduto() {

  const [foto, setFoto] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [custo, setCusto] = useState('');
  const [precoMaq, setPrecoMaq] = useState('');

  const [count, setCount] = useState(0); // Estado para a quantidade (count)

  const navigation = useNavigation();

  async function addfoto() {
    try {
      const fotoSelecionada = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      console.log(fotoSelecionada)
      //se o usuario cancelar a funcao nao continuara
      if (fotoSelecionada.canceled) {
        return;
      }

      setFoto(fotoSelecionada.assets[0].uri);
    }
    catch (error) {
      console.log(error);
    }
  }


  async function addProduto() {
    try {
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
    catch (error) {
      console.log(error);
    }
  }
  const resetForm = () => {
    setNome('');
    setPreco('');
    setCusto('');
    setPrecoMaq('');
    setCount(0);
  };

  useFocusEffect(
    useCallback(() => {
      resetForm();
    }, [])
  );


  return (

    <Container>
      <HeaderHomeUser title="user" showCabecalho={true} />

      <Texto>Novo Produto</Texto>

      <Image 
        source={{ uri: foto}}
        style={{width: 100, 
          height: 100, 
          alignSelf: 'center'}}
      />

      <AlterarFoto onPress={addfoto}>
        <Text style={{ color: '#00214E', fontWeight: 'bold' }}>Alterar foto</Text>
      </AlterarFoto>

      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraHeight={Platform.OS === 'ios' ? 150 : 200}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <BlocoQuantidade >
        <TextoBloco>Quantidade</TextoBloco>
        <ContarNumero initialValue={count} onChange={setCount} />
      </BlocoQuantidade>

          <ContainerForms>
            <Input
              value={nome} //garante que os valores sejam controlados pelos estados do componente
              placeholder="Nome"
              onChangeText={setNome}
            />
            <Input
              value={custo}
              placeholder="Custo"
              keyboardType="numeric"
              onChangeText={setCusto}
            />
            <Input
              value={preco}
              placeholder="Preço"
              keyboardType="numeric"
              onChangeText={setPreco}
            />
            <Input
              value={precoMaq}
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