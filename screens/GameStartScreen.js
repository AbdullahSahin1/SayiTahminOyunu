import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function GameStartScreen() {
  const [enteredNumber, setEenteredNumber] = useState("");

  function resetHandler() {
    setEenteredNumber("");
  }
  function confirmHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Geçersiz Sayı!", "Sayı 1 ile 99 arasında olmalıdır", [
        { text: "Tamam", style: "destructive", onPress: resetHandler },
      ]);
      return
    }
  }
  function numberHandler(text) {
    setEenteredNumber(text);
  }
  return (
    <View style={styles.container}>
      <Text>Sayı Tahmin Uygulaması</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberHandler}
          value={enteredNumber}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={resetHandler}>Temizle</CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={confirmHandler}>Onayla</CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fiex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  card: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    width: 50,
    height: 50,
    marginVertical: 10,
    fontSize: 35,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
