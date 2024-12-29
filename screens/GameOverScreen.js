import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';
export default function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Title>Oyun Tamamlandı</Title>
      <View style={styles.imageView}>
        <Image style={styles.image} source={require('../assets/Success.jpg')}></Image>
      </View>
      <Text style={styles.result}>
        <Text style={styles.countAndNumber}>10</Text> denemeyle 
        <Text style={styles.countAndNumber}> 50</Text> sayısını buldun
      </Text>
      <CustomButton>Yeni Oyuna Başla</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    imageView: {
    width: 350,
    height: 350,
    overflow: "hidden",
    borderRadius: 175,
    borderWidth: 3,
    borderColor: "green",
    margin: 30,
  },
   image: {
    width: "100%",
    height: "100%",
  },
    result: {
    fontSize: 20,
    textAlign: "center",
  },
});
