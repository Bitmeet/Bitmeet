import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  containerView: {
    paddingTop: Metrics.navBarHeight,
    paddingHorizontal: 40
  },
  inputsBox: {
    elevation: 1,
    borderStyle: 'solid'
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
  space: {
    marginTop: 100
  },
  buttonStyle: {
    height: 45,
    borderRadius: 10,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.basicOrange,
    justifyContent: 'center'
  },
  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 30
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
  },
  buttonImage: {
    height: 30,
    width: 30,
    resizeMode: 'center',
    marginTop: 10
  },
  facebookButton: {
    height: 50,
    width: 50,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#3c63a4'
  },
  googleButton: {
    height: 50,
    width: 50,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#de5342'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  }
})
