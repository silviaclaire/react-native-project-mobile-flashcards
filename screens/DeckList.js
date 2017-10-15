import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native'
import { white, gray } from '../utils/colors'
import Button from '../components/Button'
import * as API from '../utils/api'
import _ from 'lodash'

export default class DeckList extends React.Component {
  state = {
    decks: {},
    count: {},
  }

  componentDidMount() {
    API.getDecks().then((decks) => {
      Object.keys(decks).map((deck) => {
        const questions = _.values(decks[deck]['questions'])
        this.setState({
          decks: decks,
          count: {
            ...this.state.count,
            [deck]: questions.length
          }
        })
      })
    })
  }

  render() {
    const { decks, count } = this.state

    return (
      <ScrollView style={styles.container}>
        {decks && Object.keys(decks).map((deck) => (
          <TouchableOpacity
            key={deck}
            style={styles.deck}
            onPress={() => this.props.navigation.navigate(
              'IndividualDeck',
              { deckId: deck }
            )}
          >
            <Text style={{ fontSize: 20 }}>{deck}</Text>
            <View style={{ height: 10 }}></View>
            <Text style={{ color: gray }}>
              {count[deck] === 1 ? `${count[deck]} Card` : `${count[deck]} Cards`}
            </Text>
          </TouchableOpacity>
        ))}
        <View style={{ height: 50 }}></View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 30,
  },
  deck: {
    height: 150,
    backgroundColor: white,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: gray,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 10,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 1
    },
  }
})
