import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";

type Props = {
  date: string,
  flagColor: string,
  title: string,
  description: string,
  time: string
};

export default class Appointment extends Component<Props> {
  render() {
    const { date, flagColor, title, description, time } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <View style={styles.topLine} />
          <Text style={[styles.date, date == "JETZT" ? { color: "#316597" } : {}]}>{date}</Text>
          <View style={styles.bottomLine} />
        </View>
        <TouchableOpacity style={styles.card}>
          <View style={[styles.flag, { backgroundColor: flagColor }]} />
          <View style={styles.contentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text>{time}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#F0F3F6",
    flexDirection: "row",
    paddingRight: 16,
    alignItems: "center"
  },
  dateContainer: {
    width: 82,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  },
  topLine: {
    flex: 1,
    width: 2,
    backgroundColor: "#CACACA"
  },
  bottomLine: {
    flex: 1,
    width: 2,
    backgroundColor: "#CACACA"
  },
  date: {
    textAlign: "center",
    marginVertical: 16,
    fontWeight: "bold",
    color: "#737373"
  },
  card: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 1,
    marginVertical: 8,
    borderRadius: 4,
    shadowColor: "#CBCBCB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4
  },
  flag: {
    backgroundColor: "#B2EB55",
    width: 54,
    alignSelf: "stretch",
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4
  },
  contentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  titleContainer: {},
  timeContainer: {
    justifyContent: "center"
  },
  title: {
    color: "#4E4E4E",
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 15
  },
  description: {
    color: "#737373"
  }
});
