import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { white, gray, black, green } from '../utils/colors'
import Button from '../components/Button'
import * as API from '../utils/api'
import _ from 'lodash'

class IndividualDeck extends Component {
  state = {
    deck: {},
    count: 0,
  }

  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params

    return {
      title: `Deck: ${deckId}`
    }
  }

  componentDidMount() {
    API.getDeck(this.props.navigation.state.params.deckId)
      .then((deck) => {
        const questions = _.values(deck['questions'])
        this.setState({
          deck: deck,
          count: questions.length
        })
      })
  }

  render() {
    const { navigation } = this.props
    const { deck, count } = this.state

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>{deck.title}</Text>
        <View style={{ height: 10 }}></View>
          <Text style={{ color: gray }}>
            {count === 1 ? `${count} Card` : `${count} Cards`}
          </Text>

        <Button
          style={{ backgroundColor: green, marginTop: 50 }}
          onPress={() => navigation.navigate(
            'NewQuestion',
            { title: deck.title }
          )}
        >
          Add Card
        </Button>
        {count !== 0  &&
          <Button
            style={{ backgroundColor: green }}
            onPress={() => navigation.navigate(
              'Quiz',
              { title: deck.title }
            )}
          >
            Start Quiz
          </Button>
        }
        <Button onPress={() => navigation.navigate('DeckList')}>
          Back to Decks
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

export default IndividualDeck