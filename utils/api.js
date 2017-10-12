import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'MobileFlashcards:deck'

const defaultData = {
  React: {
    title: 'React',
    questions: {
      '287679d3a61d10b1b749eda6': {
        id: '287679d3a61d10b1b749eda6',
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      '0fb55230f9e8c80b03fe6f52': {
        id: '0fb55230f9e8c80b03fe6f52',
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    }
  },
  JavaScript: {
    title: 'JavaScript',
    questions: {
      '6f1293dbe9f53174b0cddec9': {
        id: '6f1293dbe9f53174b0cddec9',
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    }
  }
}

export function getDefaultDecks() {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(defaultData))
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      return decks = JSON.parse(results)
    })
}

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      return decks = JSON.parse(results)
    })
}

export function getDeck(title) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      return deck = JSON.parse(results)[title]
    })
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: {}
    }
  }))
}

export function addCardToDeck(title, card) {
  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      questions: {
        [card.id]: card
      }
    }
  }))
}