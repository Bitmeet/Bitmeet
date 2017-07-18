import React, { PropTypes } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import {Images, Metrics} from '../Themes'
import LoginActions, { isLoggedIn } from '../Redux/LoginRedux'
import { Actions as NavigationActions, ActionConst } from 'react-native-router-flux'
import { Fumi } from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import RoundedButton from '../Components/RoundedButton'

// Localization
import I18n from 'react-native-i18n'

// Styles
import styles from './Styles/LoginScreenStyles'

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      NavigationActions.pop()
    }

    if (newProps.isLoggedIn) {
      NavigationActions.locatorScreen({type: ActionConst.RESET})
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth}
    })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  render () {
    const { username, password } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? styles.textInput : styles.textInputReadonly
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerView}>
          {/* <Image source={Images.logo} style={[Styles.topLogo, this.state.topLogo]} /> */}
          <Text style={styles.title}>{I18n.t('signin')}</Text>
          <Text style={styles.description}>{I18n.t('signinDescription')}</Text>
          <View style={styles.space} />
          <View style={styles.inputsBox}>
            <Fumi
              height={35}
              label={I18n.t('username')}
              iconClass={FontAwesomeIcon}
              iconName={'user-circle-o'}
              iconColor={'#000'}
              iconSize={20}
              // TextInput props
              ref='username'
              value={username}
              editable={editable}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={this.handleChangeUsername}
              onSubmitEditing={() => this.refs.password.focus()}
              maxLength={40}
            />
            <Fumi
              height={35}
              label={I18n.t('password')}
              iconClass={FontAwesomeIcon}
              iconName={'key'}
              iconColor={'#000'}
              iconSize={20}
              // TextInput props
              ref='password'
              value={password}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangePassword}
              onSubmitEditing={this.handlePressLogin}
              maxLength={30}
            />
          </View>
          <RoundedButton buttonStyle={styles.buttonStyle} text={I18n.t('signIn')} onPress={this.handlePressLogin} />
          <Text style={styles.forgot}>{I18n.t('forgotPassword')}</Text>
          <Text style={styles.description}>{I18n.t('or')}</Text>
          <Text style={styles.description}>{I18n.t('loginWith')}</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.facebookButton} onPress={() => alert('Will be supported in near future')}>
              <Image style={styles.buttonImage} source={Images.facebook} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton} onPress={() => alert('Will be supported in near future')}>
              <Image style={styles.buttonImage} source={Images.googlePlus} />
            </TouchableOpacity>
          </View>
          {/*
              <TextInput
                ref='password'
                style={textInputStyle}
                value={password}
                editable={editable}
                keyboardType='default'
                returnKeyType='go'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
                onChangeText={this.handleChangePassword}
                underlineColorAndroid='transparent'
                onSubmitEditing={this.handlePressLogin}
                placeholder='Password' />
            </View>
 */}
        </ScrollView>
        <View style={styles.footer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.footerText}>
              {I18n.t('alreadySignedup')}
            </Text>
            <TouchableOpacity onPress={() => NavigationActions.registration({type: 'replace'})}>
              <Text style={[styles.footerText, {fontWeight: 'bold'}]}>{I18n.t('signupArrow')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching,
    isLoggedIn: isLoggedIn(state.login)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
