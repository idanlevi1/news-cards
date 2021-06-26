import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  title: {
    fontSize: 50,
    color: '#FFF',
    fontFamily: Fonts.Walk
  },
  subtitle: {
    marginTop: 20,
    fontSize: 28,
    color: '#FFF',
    fontFamily: Fonts.OptimusBold
  },
})
