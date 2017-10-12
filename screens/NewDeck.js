import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { white, black } from '../utils/colors'

export default class NewDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>New Deck View</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
