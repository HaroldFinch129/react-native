import React from "react";
import { SafeAreaView, TextInput } from "react-native";
import styles from './PatikastoreCard.style';
const SearchBar = () => {
  const [text, onChangeText] = React.useState("");
 

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Ara..."
      />
      
    </SafeAreaView>
  );
};

export default SearchBar;