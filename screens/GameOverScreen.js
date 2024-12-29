import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

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

const styles = StyleSheet.create({});
