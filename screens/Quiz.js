import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { white, black, red, green } from '../utils/colors'
import Button from '../components/Button'
import * as API from '../utils/api'
import _ from 'lodash'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

export default class Quiz extends React.Component {
  state = {
    questions: [],
    index: 0,
    sumCorrect: 0,
    showing: 'Question',
  }

  componentDidMount() {
    API.getDeck(this.props.navigation.state.params.title)
      .then((deck) => {
        const questions = _.values(deck['questions'])
        this.setState({ questions })
      })
  }

  toggleText = () => {
    this.setState({
      showing: this.state.showing === 'Question'
        ? 'Answer'
        : 'Question'
    })
  }

  onCorrect = () => {
    this.setState({
      index: this.state.index+1,
      sumCorrect: this.state.sumCorrect+1
    })
  }

  onIncorrect = () => {
    this.setState({ index: this.state.index+1 })
  }

  restartQuiz = () => {
    this.setState({
      index: 0,
      sumCorrect: 0,
      showing: 'Question'
    })
  }

  render() {
    const { questions, index, sumCorrect, showing } = this.state
    const { navigation } = this.props

    if (index+1 > questions.length) {
      const perfect = sumCorrect === questions.length
      perfect && clearLocalNotification().then(setLocalNotification)

      return (
        <View style={[styles.container, styles.center]}>
          <Text style={styles.text}>
            {perfect ? 'You make it!' : 'Try again :)'}
          </Text>
          <Text style={styles.text}>
            Correct: {Math.round(sumCorrect/questions.length*100)} %
          </Text>
          <Button style={{ backgroundColor: green }} onPress={this.restartQuiz}>
            Restart Quiz
          </Button>
          <Button
            onPress={() => navigation.navigate(
              'IndividualDeck',
              { deckId: navigation.state.params.title }
            )}
          >
            Back to Deck
          </Button>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text>
          {index+1} / {questions.length}
        </Text>

        <View style={[styles.center, { flex: 2 }]}>
          {questions[index] &&
            <Text style={styles.text}>
              {showing === 'Question'
                ? questions[index]['question']
                : questions[index]['answer']
              }
            </Text>
          }
          <TouchableOpacity onPress={this.toggleText}>
            <Text style={styles.btnText}>
              {showing === 'Question' ? 'Answer' : 'Question'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.center, { flex: 1 }]}>
          <Button style={{ backgroundColor: green }} onPress={this.onCorrect}>
            Correct
          </Button>
          <Button style={{ backgroundColor: red }} onPress={this.onIncorrect}>
            Incorrect
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    padding: 30,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: black,
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
  },
  btnText: {
    color: red,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
