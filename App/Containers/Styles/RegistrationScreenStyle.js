import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  containerView: {
    paddingTop: Metrics.navBarHeight,
    paddingHorizontal: 40
  },
  title: {
    ...Fonts.style.h5,
    color: Colors.ink,
    alignSelf: 'center'
  },
  description: {
    ...Fonts.style.regular,
    color: Colors.ink,
    alignSelf: 'center'
  },
  avatar: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    backgroundColor: Colors.snow
  },
  inputsBox: {
    elevation: 1,
    borderStyle: 'solid'
  },
  buttonStyle: {
    height: 45,
    borderRadius: 10,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.basicOrange,
    justifyContent: 'center'
  },
  footer: {
    height: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.basicOrange
  },
  footerText: {
    ...Fonts.style.footer,
    color: Colors.snow
  }
})
