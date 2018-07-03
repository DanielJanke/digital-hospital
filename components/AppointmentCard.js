import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
import extStyles from "../assets/styles";

type Props = {
  date: string,
  flagColor: string,
  title: string,
  description: string,
  time: string,
  onPress: () => void,
  progress?: number,
  firstEntry: boolean,
  lastEntry: boolean
};

export default class AppointmentCard extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0.2
    };
  }

  render() {
    const { date, flagColor, title, description, time, onPress, progress, firstEntry, lastEntry } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.dateContainer}>
          <View style={[styles.topLine, firstEntry ? {} : styles.lineVisible]} />
          {date == undefined ? (
            <View style={styles.dot} />
          ) : (
            <Text style={[styles.date, date == "JETZT" ? { color: "#316597" } : {}]}>{date}</Text>
          )}

          <View style={[styles.bottomLine, lastEntry ? {} : styles.lineVisible]} />
        </View>
        <TouchableOpacity onPress={onPress} style={styles.card}>
          <View style={[styles.flag, { backgroundColor: flagColor }]} />
          <View style={styles.contentContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.timeContainer}>
              {progress != undefined ? (
                <ProgressCircle
                  style={{ height: 40, width: 40 }}
                  strokeWidth={7}
                  animate={true}
                  progress={progress}
                  progressColor={this.props.progress < 1 ? "rgba(49,155,255, 0.75)" : "#63F2C0"}
                  backgroundColor={"rgba(0,50,97,0.15)"}
                />
              ) : (
                <Text style={extStyles.text.title}>{time}</Text>
              )}
              } */}
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
    // flex: 1,
    paddingRight: 16,

    alignItems: "stretch"
  },
  dateContainer: {
    width: 82,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  },
  topLine: {
    flex: 1,
    width: 2
  },
  lineVisible: {
    backgroundColor: "#CACACA"
  },
  bottomLine: {
    flex: 1,
    width: 2
  },
  date: {
    textAlign: "center",
    marginVertical: 16,
    fontWeight: "bold",
    color: "#737373"
  },
  dot: {
    width: 12,
    height: 12,
    marginVertical: 16,
    borderRadius: 12 / 2,
    // backgroundColor: "#4D4D4D",
    backgroundColor: "#CACACA"
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
    // width: 54,
    width: 18,
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
  time: {
    fontWeight: "bold"
  },
  title: {
    color: "#4E4E4E",
    fontWeight: "bold",
    marginBottom: 4,
    fontSize: 17
  },
  description: {
    color: "#737373",
    fontSize: 17,
    maxWidth: 270
  }
});
