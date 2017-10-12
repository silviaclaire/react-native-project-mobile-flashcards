import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { white, gray, black, green } from '../utils/colors'
import Button from '../components/Button'

export default class IndividualDeck extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params
    return {
      title: `Deck: ${deckId}`
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Individual Deck View</Text>
        <Button style={{ backgroundColor: green}} onPress={() => this.props.navigation.navigate('NewQuestion')}>
          Add Card
        </Button>
        <Button onPress={() => this.props.navigation.navigate('Quiz')}>
          Start Quiz
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
