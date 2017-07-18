import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ScrollView, Image, BackAndroid, View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerContentStyles'
import { Images, Colors } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import LoginActions from '../Redux/LoginRedux'
import I18n from 'react-native-i18n'

// third party libs imports
import Avatar from 'react-native-interactive-avatar'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }
  /**
   * When the user taps Exit in the Navigation Drawer
   */
  handlePressExit = () => {
    this.toggleDrawer()
    // TODO: Handle logout
  }

  handleLogin = () => {
    this.toggleDrawer()
    NavigationActions.login()
  }

  handleLogout = () => {
    this.toggleDrawer()
    this.props.LoginActions.logout()
  }

  handleRegistration = () => {
    this.toggleDrawer()
    NavigationActions.registration()
  }

  render () {
    return (
      <View style={styles.container}>
        <DrawerHeader
          userName={this.props.userName} />
        <DrawerBody
          onExit={this.handlePressExit}
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
          onRegister={this.handleRegistration}
          isLoggedIn={this.props.isLoggedIn} />

      </View>
    )
  }

}

/** Drawer Header View  */
const DrawerHeader = (props) => {
  return (
    <View style={styles.drawerHeader}>
      <Avatar
        uri={null}
        size={'medium'}
        placeholderSource={Images.placeHolder}
        interactive
        onChange={this.handleImageChange}
        overlayColor={Colors.darkOrange}
        style={styles.avatar}
            />
      <Text style={styles.userName}>{props.userName}</Text>
    </View>
  )
}

const Divider = () => {
  return (
    <View style={styles.divider} />
  )
}
/** Drawer Footer View  */
const DrawerBody = (props) => {
  return (
    <View style={styles.drawerBody}>
      {
            !props.isLoggedIn ? <View>
              <DrawerAction action={I18n.t('signin')} uri={Images.login} onPress={props.onLogin} />
              <Divider />
              <DrawerAction action={I18n.t('signup')} uri={Images.register} onPress={props.onRegister} />
              <Divider />
              <DrawerAction action={I18n.t('exit')} uri={Images.exit} onPress={props.onExit} />
              <Divider />
            </View> : <View>
              <DrawerAction action={I18n.t('editDetails')} uri={Images.edit} onPress={props.onLogin} />
              <Divider />
              <DrawerAction action={I18n.t('myOffers')} uri={Images.offer} onPress={props.onRegister} />
              <Divider />
              <DrawerAction action={I18n.t('signout')} uri={Images.login} onPress={props.onLogout} />
              <Divider />
            </View>
          }

    </View>
  )
}

const DrawerAction = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={styles.actionRow}>
        <Image resizeMode={Image.resizeMode.contain} style={styles.actionImage} source={props.uri} />
        <Text style={styles.actionText}>{props.action}</Text>
      </View>
    </TouchableOpacity>
  )
}

DrawerBody.contextTypes = {
  isLoggedIn: React.PropTypes.bool
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}
// DrawerHeader props
DrawerHeader.contextTypes = {
  userName: React.PropTypes.string
}

// DrawerAction props
DrawerAction.contextTypes = {
  action: React.PropTypes.string,
  uri: React.PropTypes.number,
  onPress: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    LoginActions: bindActionCreators(LoginActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)
