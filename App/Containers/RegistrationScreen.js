import React from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Fumi } from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import RoundedButton from '../Components/RoundedButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Localization
import I18n from 'react-native-i18n'

// Styles
import styles from './Styles/RegistrationScreenStyle'

class RegistrationScreenScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.containerView}>
          <KeyboardAvoidingView behavior='position'>
            <Text style={styles.title}>{I18n.t('registration')}</Text>
            <Text style={styles.description}>{I18n.t('registrationDescripcion')}</Text>
            <View style={styles.avatar} />
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
              label={I18n.t('phonenumber')}
              iconClass={FontAwesomeIcon}
              iconName={'mobile'}
              iconColor={'#f95a25'}
              iconSize={30}
            />
          </View>
          <RoundedButton text={I18n.t('signIn')} />
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {I18n.t('alreadySignIn')}
            <Text style={{fontWeight: 'bold'}}>{I18n.t('loginArrow')}</Text>

          </Text>
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
