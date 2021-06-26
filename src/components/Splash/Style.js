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
    fontSize: 54,
    color: '#FFF',
    fontFamily: Fonts.Walk
  },
  subtitle: {
    fontSize: 28,
    color: '#FFF',
    fontFamily: Fonts.OptimusBold
  },
  logo: {
    height: 700 * 0.22,
    width: 350 * 0.34,
    position: 'absolute',
    top: 700 * 0.6,
  },
})
