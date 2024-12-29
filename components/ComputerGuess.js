import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerGuess({roundNumber,guess}) {
  return (
    <View style={styles.listItem}>
      <Text>{roundNumber}*</Text>
      <Text>{guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#eee",
    marginVertical: 10,
     borderRadius: 30,
    padding: 15,
          elevation: 4,
    shadowColor: "#eee",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})
