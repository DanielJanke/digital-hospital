import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

type Props = {
  onPress: () => void
};

export default class TodoCard extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    const { date, flagColor, title, description, time, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ active: !active });
        }}
        style={styles.container}
      >
        <Image source={require("../assets/todo-circle-empty.png")} />
        <View style={styles.divider} />
        <Text>Medizinische Unterlagen</Text>
        <Text>Letzte Befunde</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    flexDirection: "row",
    paddingRight: 16,
    alignItems: "center",
    height: 90,
    marginBottom: 32,
    paddingHorizontal: 16
  },
  divider: {}
});
