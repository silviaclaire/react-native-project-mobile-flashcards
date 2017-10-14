import React from 'react'
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import { white, black } from '../utils/colors'
import Button from '../components/Button'
import * as API from '../utils/api'

export default class NewDeck extends React.Component {
  state = {
    title: ''
  }

  submit = () => {
    const { title } = this.state
    API.saveDeckTitle(title)

    Keyboard.dismiss()

    this.props.navigation.navigate(
      'IndividualDeck',
      { deckId: title }
    )
  }
  render() {
    const { title } = this.state

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(title) => this.setState({ title })}
          value={title}
          placeholder={'Deck Title'}
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
    padding: 30,
  },
  header: {
    fontSize: 30,
    textAlign: 'center'
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
