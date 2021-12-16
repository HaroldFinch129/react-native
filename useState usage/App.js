import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }
  function decreaseCounter() {
    setCounter(counter - 1);
  }
  return (
    <View>
      <Text>Counter : {counter} </Text>
      <Button title="Increase" onPress={increaseCounter}></Button>
      <Button title="Decrease" onPress={decreaseCounter}></Button>
    </View>
  );
};

export default App;
