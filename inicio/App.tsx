import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./appStyles";
import { useState } from "react";
export default function App() {
  //View = Equivalente a div
  // Text = equivalente a h1

  const [isActive, setIsActive] = useState(true);

  function handleClick() {
    setIsActive((oldValue: boolean) => {
      return !oldValue;
    }); //sempre vai retornar um valor diferente do valor anterior
  }

  //ou posso fazer

  const activate = () => setIsActive(!isActive);

  return (
    <View style={isActive ? styles.lightMode : styles.darkMode}>
      {/*<TouchableOpacity onPress={handleClick}>
        <Text>Oi</Text>
      </TouchableOpacity>*/}
      <TouchableOpacity onPress={activate}>
        <Text>Oiii</Text>
      </TouchableOpacity>
    </View>
  );
}
