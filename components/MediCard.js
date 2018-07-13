import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";

type Props = {
  title: string,

  onPress: () => void
};

export default class MediCard extends Component<Props> {
  render() {
    const { title = "Was ist ein MRT?", imageSource = require("../assets/xray.jpg"), onPress } = this.props;
    return (
      <TouchableOpacity style={styles.infoCard}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.overlay} />
        <ImageBackground imageStyle={styles.cardBackgroundImage} style={styles.cardBackground} source={imageSource} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    position: "absolute",
    bottom: 0,
    marginBottom: 16,
    marginLeft: 16,
    fontSize: 20,
    zIndex: 1
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    borderRadius: 4,
    opacity: 0.4
  },
  infoCard: {
    width: 224,
    height: 224,
    shadowColor: "#CBCBCB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 8
  },
  cardBackground: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -1
  },
  cardBackgroundImage: {
    borderRadius: 4
  }
});
