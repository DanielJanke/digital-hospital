/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { ProgressCircle } from "react-native-svg-charts";

import Appointment from "../components/AppointmentCard";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
});

type Props = { navigator: any };
export default class Timeline extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: "light"
  };

  _onTouchCard = () => {
    console.log("on");

    this.props.navigator.push({
      // title: Strings.camera.title,
      screen: "example.AppointmentDetail"
    });
  };

  render() {
    return (
      <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
        <Image style={styles.statusBar} source={require("../assets/header/headerstatusbar.png")} />
        <ImageBackground
          resizeMode="cover"
          style={styles.headerImage}
          source={require("../assets/header/Gradient.png")}
        >
          <Text>Zimmer 2.023</Text>
          <Text style={styles.headline}>Max Mustermann</Text>
          <Text style={styles.subheadline}>Zimmer 2.023</Text>
          <View style={styles.segmentContainer}>
            <TouchableOpacity>
              <Text style={styles.segmentText}>Timeline</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.segmentText}>Einzelansicht</Text>
            </TouchableOpacity>
            <View style={styles.indicator} />
          </View>
        </ImageBackground>
        <ScrollView pagingEnabled={true} contentContainerStyle={styles.segmentViewContainer} horizontal={true}>
          <View style={styles.segmentViewx}>
            <Text style={styles.sectionHeadline}>Vorbereitung</Text>
            <Appointment
              firstEntry={true}
              title="Termin vereinbaren"
              date="JETZT"
              flagColor="#55EBD9"
              progress={1}
              description="Dr. Daniel Janke | 286"
              onPress={this._onTouchCard}
            />
            <Appointment
              title="Voruntersuchung"
              date="BALD"
              flagColor="#B2EB55"
              time="12:00"
              description="Dr. Daniel Janke | 286"
            />
            <Appointment
              title="Fragebögen ausfüllen"
              flagColor="#FFCC01"
              progress={0.3}
              description="Dr. Daniel Janke | 286"
            />
            <Appointment
              lastEntry={true}
              title="Sachen packen"
              flagColor="#FFCC01"
              progress={0.5}
              description="Checklisten"
            />

            <Text style={styles.sectionHeadline}>Vorstationäre Untersuchung</Text>
            <Appointment
              title="ASS Medikamente absetzen"
              flagColor="#D40F14"
              firstEntry={true}
              description="Medikamente mit ASS sollten Sie diese ab dem heutigen Tage nicht mehr zu sich nehmen. Klären Sie dies bitte vor mit Ihrem Arzt ab."
            />
            <Appointment
              title="Voruntersuchung"
              date="12.03"
              flagColor="#FFCC01"
              time="12:00"
              description="Dr. Daniel Janke | 286"
            />

            <Appointment
              firstEntry={true}
              title="Voruntersuchung"
              date="12.03"
              flagColor="#B2EB55"
              time="12:00"
              description="Dr. Daniel Janke | 286"
            />
            <Appointment
              title="Voruntersuchung"
              date="12.03"
              flagColor="#55EBD9"
              time="12:00"
              lastEntry={true}
              description="Dr. Daniel Janke | 286"
            />
            <Text style={styles.sectionHeadline}>Vor der Operation</Text>
            <Appointment
              title="Voruntersuchung"
              date="13.03"
              flagColor="#B2EB55"
              time="12:00"
              description="Dr. Daniel Janke | 286"
              firstEntry={true}
            />

            <Appointment
              title="Voruntersuchung"
              date="13.03"
              flagColor="#D40F14"
              time="12:00"
              description="Dr. Daniel Janke | 286"
              lastEntry={true}
            />
            <Text style={styles.sectionHeadline}>Ihr Aufenthalt</Text>
            <Appointment
              title="Voruntersuchung"
              date="13.03"
              flagColor="#018C8E"
              time="12:00"
              description="Dr. Daniel Janke | 286"
              lastEntry={true}
            />
            <Text style={styles.sectionHeadline}>Nach Ihrem Aufenthalt</Text>
          </View>
          <View style={styles.segmentViewx}>
            <Text style={styles.sectionHeadline}>Vorbereitung</Text>
            <Appointment
              firstEntry={true}
              title="Termin vereinbaren"
              date="JETZT"
              flagColor="#55EBD9"
              progress={1}
              description="Dr. Daniel Janke | 286"
              onPress={this._onTouchCard}
            />
            <Appointment
              title="Voruntersuchung"
              date="BALD"
              flagColor="#B2EB55"
              time="12:00"
              description="Dr. Daniel Janke | 286"
            />
            <Appointment
              title="Fragebögen ausfüllen"
              flagColor="#FFCC01"
              progress={0.3}
              description="Dr. Daniel Janke | 286"
            />
            <Appointment
              lastEntry={true}
              title="Sachen packen"
              flagColor="#FFCC01"
              progress={0.5}
              description="Checklisten"
            />
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F3F6"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  statusBar: {
    height: 20
  },
  headerImage: {
    width: 414,
    height: 167,
    marginTop: -20
  },
  headline: {
    color: "white",
    fontSize: 28,
    fontWeight: "800",
    marginLeft: 32,
    marginTop: 24
  },
  subheadline: {
    marginLeft: 32,
    color: "white",
    fontSize: 17,
    marginBottom: 18
  },
  sectionHeadline: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 32,
    marginBottom: 24,
    textAlign: "center",
    color: "#4E4E4E"
  },
  segmentContainer: {
    flexDirection: "row",
    marginLeft: 32
  },
  segmentText: {
    fontSize: 17,
    fontWeight: "700",
    color: "white",
    marginRight: 32
  },
  segmentViewContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width * 2
  },
  segmentView: {
    // flex: 1,
    alignSelf: "stretch"
    // flexDirection: "column"
    // backgroundColor: "red"
  },
  segmentViewx: {
    flex: 1
  },
  indicator: {
    width: 100,
    height: 28,
    backgroundColor: "black",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 11,
    position: "absolute",
    zIndex: -1
  }
});
