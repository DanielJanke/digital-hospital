import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

import DoctorCard from "../components/DoctorCard";

type Props = {};

export default class AppointmentDetail extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarHidden: true
  };
  render() {
    const { date, flagColor, title, description, time, onPress } = this.props;
    return (
      <ScrollView>
        <View style={styles.header} />
        <View style={styles.content}>
          <Text style={styles.title}>Beschreibung</Text>
          <Text style={styles.body}>
            Die Magnetresonanztomographie, abgekürzt MRT ist ein bildgebendes Verfahren, das vor allem in der
            medizinischen Diagnostik zur Darstellung von Struktur und Funktion der Gewebe und Organe im Körper
            eingesetzt wird.
          </Text>
          <Text style={styles.title}>Ihr Arzt</Text>
        </View>
        <DoctorCard />
        <View style={styles.content}>
          <Text style={styles.title}>Bitte mitbringen</Text>
          <Text style={styles.title}>Standort</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 164,
    backgroundColor: "#aaa",
    marginBottom: 64
  },
  content: {
    paddingHorizontal: 16
  },
  title: {
    color: "#2F2F2F",
    marginBottom: 16,
    fontWeight: "bold",
    fontSize: 17
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 32
  }
});
