import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Title from '../components/Title';
import ComputerNumber from '../components/ComputerNumber';
import CustomButton from '../components/CustomButton';
import AntDesign from "@expo/vector-icons/AntDesign";
   let minNumber = 1;
  let maxNumber = 100;
export default function GameScreen({ userNumber,onGameOver }) {
   const initialGuess = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessCount, setGuessCount] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessCount.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    let minNumber = 1;
    let maxNumber = 100;
  }, []);

  function nextGuesssHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Hadi Oradan!", "Yanlış olduğunu bile bile basıyorsun!...", [
        { text: "Tamam", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessCount((prevGuess) => [newRandomNumber, ...prevGuess]);
  }

  function generateNumber(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
      return randomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  }
  return (
    <View style={styles.container}>
      <Title>Bilgisayar Tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Altında mı üstünde mi?</Text>
        <View style={styles.buttonsContainer}>
          <CustomButton onPress={nextGuesssHandler.bind(this, "lower")}>
            <AntDesign name="minus" size={24} color="white" />
          </CustomButton>
          <CustomButton onPress={nextGuesssHandler.bind(this, "greater")}>
            <AntDesign name="plus" size={24} color="white" />
          </CustomButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessCount}
          keyExtractor={(itemData)=>itemData}
          renderItem={(itemData) => (
            <ComputerGuess
              roundNumber={guessCount.length - itemData.index}
              guess={itemData.item}
              
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
     card: {
    backgroundColor: "orange",
    padding: 16,
    marginTop: 20,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
     title: {
    color: "white",
    fontSize: 24,
    marginBottom: 15,
  },
  listContainer:{
    marginTop: 10,
    flex: 1,
  },
});
