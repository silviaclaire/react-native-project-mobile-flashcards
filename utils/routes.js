import React from 'react'
import { Platform } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from '../screens/DeckList'
import IndividualDeck from '../screens/IndividualDeck'
import Quiz from '../screens/Quiz'
import NewDeck from '../screens/NewDeck'
import NewQuestion from '../screens/NewQuestion'
import { white, black, red } from './colors'
import { FontAwesome } from '@expo/vector-icons'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='pencil-square' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null,
  },
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? red : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : black,
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  IndividualDeck: {
    screen: IndividualDeck,
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'Add Card',
    }
  }
}, {
  navigationOptions: {
    headerTintColor: white,
    headerStyle: {
      backgroundColor: black,
    },
  },
})

export default MainNavigator