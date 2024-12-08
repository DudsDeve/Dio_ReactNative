import { StyleSheet } from "react-native";

//Podemos stilizar assim a tela, POR MEIO DE OBJETOS

export const styles = StyleSheet.create({
  lightMode: {
    flex: 1, //ocupa TODO tamanho da tela
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  darkMode: {
    flex: 1,
    backgroundColor: "#e90808",
    color: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
