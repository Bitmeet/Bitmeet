import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Zocial'

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
          <MapView.Marker
            coordinate={this.state.initialPosition}
            title={'Some title'}
            description={'Some description'}
          >
            <Icon name='bitcoin' size={30} color='#900' />
          </MapView.Marker>
        </MapView>
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
