import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Title from '../components/Title';
import ComputerNumber from '../components/ComputerNumber';
import CustomButton from '../components/CustomButton';
   let minNumber = 1;
  let maxNumber = 100;
export default function GameScreen({ userNumber,onGameOver }) {
  const initialGuess = generateNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
     useEffect(() => {
       if (currentGuess === userNumber) {
         onGameOver();
       }
     }, [currentGuess, userNumber, onGameOver]);


  function nextGuesssHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Hadi Oradan!', 'Yanlış olduğunu bile bile basıyorsun!...', [
        { text: 'Tamam', style: 'cancel' },
      ]);
      return;
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
      <View>
        <Text>Altında mı üstünde mi?</Text>
         <View>
          <CustomButton onPress={nextGuesssHandler.bind(this, 'lower')}>
            -
          </CustomButton>
          <CustomButton onPress={nextGuesssHandler.bind(this, 'greater')}>
            +
          </CustomButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
