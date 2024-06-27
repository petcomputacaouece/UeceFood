import React, { useState } from 'react';
import { ContarNum , Button, ButtonText, CounterDisplay, CounterText } from './styles'; // ajuste o caminho conforme necessário

const ContarN = () => {
  const [count, setCount] = useState(0); // estado inicial da conta

  const incrementa = () => {   //função para incrementar de 1 em 1
    setCount(count + 1);
  };

  const decrementa = () => { //função para diminuir de 1 em 1 e impedir que conte numeros negativos
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <ContarNum >
      <Button onPress={decrementa}>
        <ButtonText>-</ButtonText>
      </Button>
      <CounterDisplay>
        <CounterText>{count}</CounterText>
      </CounterDisplay>
      <Button onPress={incrementa}>
        <ButtonText>+</ButtonText>
      </Button>
    </ContarNum >
  );
}

export function ContarNumero() {
  return (
      <ContarN/>
  );
}
