import React from 'react';
import {View,Text,FlatList, StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text>Patistore</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'wheat',
  },
})

export default App;