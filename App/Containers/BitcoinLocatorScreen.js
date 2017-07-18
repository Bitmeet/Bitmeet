import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import MapView from 'react-native-maps'
import ActionButton from 'react-native-action-button';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../Themes'
import I18n from 'react-native-i18n'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BitcoinLocatorScreenStyle'

class BitcoinLocatorScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      initialPosition: {
        latitude: 37.78825,
        longitude: -122.4324
      }
    }
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
    (position) => {
      this.state.initialPosition.latitude = position.coords.latitude
      this.state.initialPosition.longitude = position.coords.longitude
      this.setState({initialPosition: this.state.initialPosition})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  )
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: this.state.initialPosition.latitude,
            longitude: this.state.initialPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          >

        </MapView>
        <ActionButton buttonColor={Colors.basicOrange} icon={<Icon name='more-vert' style={styles.actionButtonIcon} size={30}/>} >
          <ActionButton.Item buttonColor={Colors.liteRed} title={I18n.t('putAnOffer')} onPress={() => console.log('notes tapped!')}>
            <FontAwesomeIcon name='dollar' style={styles.actionButtonIcon} size={30} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={Colors.aqua} title={I18n.t('search')} onPress={() => {}}>
            <EvilIcon name='search' style={styles.actionButtonIcon} size={30} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor={Colors.liteBlue} title={I18n.t('showAsList')} onPress={() => {}}>
            <EntypoIcon name='list' style={styles.actionButtonIcon} size={30} />
          </ActionButton.Item>
        </ActionButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(BitcoinLocatorScreen)
