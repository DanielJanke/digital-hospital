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
    tabBarHidden: true
  };

  _onPressItem = () => {};

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={image}>
          <Image style={styles.logo} source={logo} />
          <Text style={[extStyles.text.chatbotText, styles.text]}>
            Willkommen in der App des Unfallkrankenhauses Berlin (ukb). Um Ihren
            Aufenthalt so angenehm wie möglich zu machen würden wir Ihnen gerne
            vorab ein paar Fragen stellen.
          </Text>
          <TouchableOpacity style={extStyles.text.chatbotButton}>
            <Text style={extStyles.text.chatbotButtonText}>Verstanden</Text>
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
    marginBottom: 32
  },
  text: {
    width: '80%',
    marginLeft: 16,
    marginBottom: 32
  },
  button: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    paddingVertical: 11,
    paddingHorizontal: 21,
    borderRadius: 22,
    shadowColor: '#004B93',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6
  }
});
