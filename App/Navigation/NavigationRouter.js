import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegistrationScreen from '../Containers/RegistrationScreen'

import BitcoinLocatorScreen from '../Containers/BitcoinLocatorScreen'

// Localization
import I18n from 'react-native-i18n'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='launchScreen' component={LaunchScreen} title='LaunchScreen' hideNavBar />
            <Scene key='login' component={LoginScreen} title={I18n.t('backToMap')} />
            <Scene key='registration' component={RegistrationScreen} title={I18n.t('backToMap')} />
            <Scene initial key='locatorScreen' component={BitcoinLocatorScreen} title={I18n.t('home')} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
