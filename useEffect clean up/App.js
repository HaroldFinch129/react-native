import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [helloFlag, setHelloFlag] = useState(true);

  function updateFlag() {
    setHelloFlag(!helloFlag);
  }

  return (
    <View>
      <Text>Hello Lifecycle</Text>

      <Button title="UP!" onPress={updateFlag} />
      {helloFlag && <Hello/>}
    </View>
  );
};

export default App;

function Hello(){
  useEffect(()=> {
      console.log('Mounting');
      return() => {
        console.log('clean up');
      }
  },[]);
  return (
    <View>
    <Text>I'm hello component</Text>
  </View>
)
}