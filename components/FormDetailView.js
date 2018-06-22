import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import QRCode from 'react-native-qrcode';

import extStyles from '../assets/styles';

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

    const content = {
      name: 'Max Mustermann',
      birth: '23.10.1997',
      adress: 'Hello Street 122a, 12345 Muter',
      phone: '030 1234567',
      insurance: 'Barmer',
      relationship: 'single',
      work: 'student',
      height: '180',
      weight: '50',
      diabetis: false,
      smoking: false,
      sport: true,
      allergien: false,
      medikamtente: [
        { name: 'Asperin', morning: true, noon: false, evening: false }
      ]
    };

    return (
      <ScrollView
        contentOffset={{ y: 100, x: 0 }}
        contentContainerStyle={styles.container}
        style={{}}
      >
        <View style={{ flex: 1, marginTop: 32 }}>
          <Text style={extStyles.text.title}>Fragebögen ausfüllen</Text>
          <Text style={extStyles.text.description}>
            Der Anamesefragebogen dient dazu alle für die Operation relevanten
            Informationen zu erfassen. Sie können den Fragebogen hier in der App
            oder während ihrer Wartezeit im Krankenhaus ausfüllen.
          </Text>
          <Text style={extStyles.text.title}>QR Code</Text>
          <View style={styles.qrCodeWrapper}>
            <QRCode
              value={JSON.stringify(content)}
              size={Dimensions.get('window').width - 32}
              bgColor="Black"
              fgColor="white"
            />
          </View>
          <Text style={extStyles.text.description}>
            Ihre Daten sind in der App sicher und werden nicht über das Internet
            übertragen. Stattdesssen zeigen Sie den folgenden QR Code wenn Sie
            darum gebeten werden oder drucken den Bogen vorher aus und bringen
            ihn mit.
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>Fragebogen ausfüllen</Text>
        </TouchableOpacity>
        <View style={{ height: 100 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F3F6',
    alignItems: 'center',
    paddingHorizontal: 16
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
  qrCodeWrapper: {
    marginBottom: 24
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
  },
  button: {}
});
