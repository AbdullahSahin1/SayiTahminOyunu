import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ImageBackground } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { useEffect, useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";
export default function App() {
  const [gameIsOver, setGameIsOver] = useState(true);
  const [userNumber, setUserNumber] = useState(null);
  const [guessCount, setGuessCount] = useState(0);

  function sendedNumberHandler(sendedNumber) {
    setUserNumber(sendedNumber);
    setGameIsOver(false);
  }

    function startNewGameHandler() {
    setUserNumber(null);
    setGuessCount(0);
  }

  let screen = <GameStartScreen onSendNumber={sendedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  function gameOverHandler(numberOfGuess) {
    setGameIsOver(true);
    setGuessCount(numberOfGuess)
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessCount} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>;
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,0,0,0.8)", "transparent"]}
    >
      <ImageBackground
        style={styles.container}
        source={require("./assets/back.jpg")}
        imageStyle={styles.backImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    opacity: 0.5,
  },
});
