import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    // flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumb: {
    marginTop: 100,
    marginLeft: 10
  },
  text: {
    textAlign: 'center',
    borderWidth: 1,
    marginTop: -10
  }
  // img1: {
  //   width: 10
  // }
});
