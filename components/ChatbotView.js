import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import extStyles from '../assets/styles';

const image = require('../assets/chatbackground.png');
const logo = require('../assets/ukb_logo.png');

type Props = {};

export default class ChecklistDetailView extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true,
    statusBarTextColorScheme: 'light'
  };

  _onPressItem = () => {};

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={image}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.indicator} />
          </View>
          <Text style={[extStyles.text.chatbotText, styles.text]}>
            Willkommen in der App des Unfallkrankenhauses Berlin (ukb). Um Ihren
            Aufenthalt so angenehm wie möglich zu machen würden wir Ihnen gerne
            vorab ein paar Fragen stellen.
          </Text>
          <TouchableOpacity
            style={[extStyles.text.chatbotButton, styles.button]}
          >
            <Text style={[extStyles.text.chatbotButtonText]}>Verstanden</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1
  },
  background: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  },
  logo: {
    marginBottom: 32,
    height: 28,
    width: 41
  },
  text: {
    width: '80%',
    marginLeft: 16,
    marginBottom: 32
  },
  logoContainer: {},
  indicator: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 11,
    borderRadius: 100,
    position: 'absolute',
    zIndex: -1,
    transform: [{ translateY: -20 }, { translateX: -9 }]
  },
  button: {
    alignSelf: 'flex-end'
  }
});
