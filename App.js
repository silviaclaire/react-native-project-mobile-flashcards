import React from 'react'
import { View, StatusBar } from 'react-native'
import MainNavigator from './utils/routes'
import { black } from './utils/colors'
import { Constants } from 'expo'
import { setLocalNotification } from './utils/helpers'

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{ backgroundColor: black, height: Constants.statusBarHeight }} >
          <StatusBar translucent backgroundColor={black} barStyle='light-content' />
        </View>
        <MainNavigator />
      </View>
    )
  }
}
