import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'


import MapView from 'react-native-maps'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BitcoinLocatorScreenStyle'


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class BitcoinLocatorScreen extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }


  render () {
    return (
        <View
          style={
            styles.container
          }>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
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
