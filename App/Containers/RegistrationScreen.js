import React from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Fumi from '../Components/FumiTextInput'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Avatar from 'react-native-interactive-avatar'
import RoundedButton from '../Components/RoundedButton'

// Localization
import I18n from 'react-native-i18n'

// Styles
import styles from './Styles/RegistrationScreenStyle'
import { Images } from '../Themes'

class RegistrationScreenScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerView}>
          <KeyboardAvoidingView behavior='position'>
            <Text style={styles.title}>{I18n.t('registration')}</Text>
            <Text style={styles.description}>{I18n.t('registrationDescripcion')}</Text>
            <Avatar
              uri={null}
              size={'medium'}
              placeholderSource={Images.placeHolder}
              resizeMode={'contain'}
              interactive
              onChange={this.handleImageChange}
              style={styles.avatar}
            />
            <Text style={styles.description}>{I18n.t('addPhoto')}</Text>
          </KeyboardAvoidingView>
          <View style={styles.inputsBox}>
            <Fumi
              height={35}
              label={I18n.t('username')}
              iconClass={FontAwesomeIcon}
              iconName={'user-circle-o'}
              iconColor={'#f95a25'}
              iconSize={20}
            />
            <Fumi
              height={35}
              label={I18n.t('password')}
              iconClass={FontAwesomeIcon}
              iconName={'key'}
              iconColor={'#f95a25'}
              iconSize={20}
            />
            <Fumi
              height={35}
              label={I18n.t('email')}
              iconClass={FontAwesomeIcon}
              iconName={'envelope-o'}
              iconColor={'#f95a25'}
              iconSize={20}
            />
            <Fumi
              height={35}
              label={I18n.t('name')}
              iconClass={EntypoIcon}
              iconName={'user'}
              iconColor={'#f95a25'}
              iconSize={20}
            />
            <Fumi
              height={35}
              label={I18n.t('phonenumber')}
              iconClass={EntypoIcon}
              iconName={'mobile'}
              iconColor={'#f95a25'}
              iconSize={20}
            />
          </View>
          <RoundedButton buttonStyle={styles.buttonStyle} text={I18n.t('signIn')} />
        </ScrollView>
        <View style={styles.footer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.footerText}>
              {I18n.t('alreadySignIn')}
            </Text>
            <TouchableOpacity onPress={() => NavigationActions.login({type: 'replace'})}>
              <Text style={[styles.footerText, {fontWeight: 'bold'}]}>{I18n.t('loginArrow')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreenScreen)
