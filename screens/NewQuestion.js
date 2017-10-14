import React from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import { white, black } from '../utils/colors'
import Button from '../components/Button'
import * as API from '../utils/api'
import { guid } from '../utils/helpers'

export default class NewQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const title = this.props.navigation.state.params.title

    API.addCardToDeck(title, {
      id: guid(),
      question: this.state.question,
      answer: this.state.answer
    })

    this.props.navigation.navigate(
      'IndividualDeck',
      { deckId: title }
    )
  }

  render() {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <TextInput
          style={styles.textInput}
          onChangeText={(question) => this.setState({ question })}
          value={question}
          placeholder={'Question'}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(answer) => this.setState({ answer })}
          value={answer}
          placeholder={'Answer'}
        />
        <Button onPress={this.submit}>
          Submit
        </Button>
      </KeyboardAvoidingView>
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
  textInput: {
    height: 40,
    width: 300,
    marginVertical: 20,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
  }
})
