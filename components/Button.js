import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { white, black } from '../utils/colors'

export default function Button ({ children, onPress, style={} }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 40,
    margin: 10,
    padding: 10,
    backgroundColor: black,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: white,
    fontSize: 14,
  }
})
