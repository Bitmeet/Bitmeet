import {StyleSheet} from 'react-native'
import {Colors} from '../../Themes/'

export default {
  container: {
    flex: 1
  },
  actionImage: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  actionRow: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10
  },
  actionText: {
    color: Colors.snow
  },
  avatar: {
    alignSelf: 'center',
    left: 15
  },
  divider: {
    borderBottomColor: Colors.snow,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  userName: {
    flex: 1,
    alignSelf: 'center',
    left: 25,
    color: Colors.snow
  },
  drawerHeader: {
    flex: 1.3,
    flexDirection: 'row',
    backgroundColor: Colors.darkOrange
  },
  drawerBody: {
    flex: 7,
    backgroundColor: Colors.basicOrange,
    marginLeft: 50
  },
  logo: {
    alignSelf: 'center'
  }
}
