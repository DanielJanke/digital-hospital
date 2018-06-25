import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import DoctorCard from '../components/DoctorCard';
import TodoCard from '../components/TodoCard';

import NAV_SCREENS from '../screens';

type Props = {};

export default class AppointmentDetail extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  };

  _onPressDoctorCard = () => {
    console.log('doccard');

    this.props.navigator.push({
      screen: NAV_SCREENS.DOCTOR_DETAIL_VIEW
    });
  };

  render() {
    const { date, flagColor, title, description, time, onPress } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header} />
        <View style={styles.content}>
          <Text style={styles.title}> Beschreibung </Text>
          <Text style={styles.body}>
            Die Magnetresonanztomographie, abgekürzt MRT ist ein bildgebendes
            Verfahren, das vor allem in der medizinischen Diagnostik zur
            Darstellung von Struktur und Funktion der Gewebe und Organe im
            Körper eingesetzt wird.
          </Text>
          <Text style={styles.title}> Ihr Arzt </Text>
        </View>
        <DoctorCard onPress={this._onPressDoctorCard} />
        <View style={styles.content}>
          <Text style={styles.title}> Bitte mitbringen </Text>
        </View>
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <View style={styles.content}>
          <Text style={styles.title}> Standort </Text>
        </View>
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
