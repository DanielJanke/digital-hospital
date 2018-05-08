import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void
};

export default class DoctorCard extends Component<Props> {
  render() {
    const { date, flagColor, title, description, time, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text>Frau Dr. med.</Text>
        <Text>Anna Borchert</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#E6ECF2",
    flexDirection: "row",
    paddingRight: 16,
    alignItems: "center",
    height: 120,
    marginBottom: 32,
    paddingHorizontal: 16
  }
});
