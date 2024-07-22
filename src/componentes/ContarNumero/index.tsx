import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import { ContarNum, Button, ButtonText, CounterDisplay, CounterText } from './styles'; // Ajuste o caminho conforme necessário

const ContarNumero = ({ initialValue, onChange }) => {
  const [count, setCount] = useState(initialValue || 0); // Estado Loading do contador

  const incrementa = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount); // Chamada da função onChange para passar o novo valor
  };

  const decrementa = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onChange(newCount); // Chamada da função onChange para passar o novo valor
    }
  };

  const handleInputChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    const newCount = numericValue ? parseInt(numericValue, 10) : 0;
    setCount(newCount);
    onChange(newCount); // Chamada da função onChange para passar o novo valor
  };

  useEffect(() => {
    setCount(initialValue || 0); // Atualiza o contador sempre que o initialValue mudar
  }, [initialValue]);


  return (
    <ContarNum>
      <Button onPress={decrementa}>
        <ButtonText>-</ButtonText>
      </Button>
      <CounterDisplay>
      <TextInput 
          keyboardType="numeric"
          value={String(count)}
          onChangeText={handleInputChange}
        />      
        </CounterDisplay>
      <Button onPress={incrementa}>
        <ButtonText>+</ButtonText>
      </Button>
    </ContarNum>
  );
};

export default ContarNumero;
