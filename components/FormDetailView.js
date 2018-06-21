import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import QRCode from 'react-native-qrcode';

type Props = {};

export default class FormDetailView extends Component<Props> {
  static navigatorStyle = {
    // navBarHidden: true,
    navBarTranslucent: true,

    navBarBackgroundColor: '#4F92DE',
    tabBarHidden: true,
    statusBarTextColorScheme: 'light',
    navBarLeftButtonColor: 'white'
  };

  _onPressItem = () => {};

  render() {
    const { date, flagColor, title, description, time, onPress } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Fragebögen ausfüllen</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F3F6'
  },
  header: {
    height: 164,
    backgroundColor: '#aaa',
    marginBottom: 64
  },
  content: {
    marginTop: 32,
    paddingHorizontal: 16
  },
  title: {
    color: '#2F2F2F',
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 17
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 32
  }
});
