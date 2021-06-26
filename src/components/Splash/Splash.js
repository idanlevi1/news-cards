import React from 'react';
import { Animated, Easing, Text } from 'react-native';
import { createAnimation, createInterpolate } from '../../utils/Animation';
import styles from './Style';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../utils/Colors';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0.1),
      yValueTitle: new Animated.Value(0),
      xValueSubtitle: new Animated.Value(0),
      spinAnim: new Animated.Value(0.65),
    };
    this.playAnimations();
  }

  playAnimations = () => {
    Animated.parallel([
      createAnimation(this.state.opacity, 1, 1200, Easing.ease),
      createAnimation(this.state.spinAnim, 1, 750, Easing.ease, 300, false),
      createAnimation(this.state.yValueTitle, 1, 900, Easing.cubic, 150, false),
      createAnimation(this.state.xValueSubtitle, 1, 700, Easing.linear, 150, false),
    ]).start();
  };

  render() {
    const { spinAnim, yValueTitle, xValueSubtitle } = this.state;
    const spinSubtitle = createInterpolate(
      spinAnim,
      [0, 1],
      ['540deg', '360deg']
    );
    const spinTitle = createInterpolate(spinAnim, [0, 1], ['0deg', '352deg']);
    const yTitleFall = createInterpolate(yValueTitle, [0, 1], ['-65%', '0%']);
    const xSubtitleFall = createInterpolate(
      xValueSubtitle,
      [0, 1],
      ['65%', '0%']
    );
    return (
      <LinearGradient start={{ x: 0, y: .01 }} end={{ x: .35, y: .37 }} colors={[Colors.off_white, Colors.orange]} style={styles.linearGradient}>
        <Animated.View style={[styles.container, { opacity: this.state.opacity }]} >
          <Animated.View style={[{ top: yTitleFall, transform: [{ rotate: spinTitle }] }, { zIndex: 2 }]} >
            <Text style={styles.title}>News Cards</Text>
          </Animated.View>
          <Animated.View style={[{ left: xSubtitleFall, transform: [{ rotate: spinSubtitle }] }, { zIndex: 2 }]} >
            <Text style={[styles.subtitle]}>Top Stories</Text>
          </Animated.View>
        </Animated.View>
      </LinearGradient>
    );
  }
}
