import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { white, gray } from '../utils/colors'
import Button from '../components/Button'

export default class DeckList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Deck List View</Text>
        <Button
          onPress={() => this.props.navigation.navigate(
            'IndividualDeck',
            { deckId: 'React' }
          )}
        >
          Deck: React
        </Button>
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
