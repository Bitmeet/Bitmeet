import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  containerView: {
    paddingTop: Metrics.navBarHeight
  },
  title: {
    ...Fonts.style.h5,
    color: Colors.ink,
    alignSelf: 'center'
  },
  description: {
    ...Fonts.style.regular,
    color: Colors.ink,
    alignSelf: 'center',
    marginHorizontal: 50
  },
  avatar: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    backgroundColor: '#FF2'
  },
  inputsBox: {
    marginHorizontal: 40,
    elevation: 1,
    borderStyle: 'solid'
  },
  footer: {
    height: 20,
    backgroundColor: Colors.basicOrange
  },
  footerText: {
    ...Fonts.style.footer,
    alignSelf: 'center',
    color: Colors.snow
  }
})
