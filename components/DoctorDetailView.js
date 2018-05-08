import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";

type Props = {};

export default class DoctorDetailView extends Component<Props> {
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
          <Text>Frau Dr. med</Text>
          <Text>Anna Borchert</Text>
          <Text style={styles.title}>Biografie</Text>
          <Text style={styles.body}>
            Frau Dr. med. Anna Borchert wurde 1980 in Berlin geboren und studierte Medizin an der Humboldtuniversität.
            Anschließend spezialisierte sie sich auf Neurologie an der Universität Köln. Seit 2015 praktiziert Frau
            Borchert im Unfallkrankenhaus Berlin.
          </Text>
          <Text style={styles.title}>Büroraum</Text>
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
