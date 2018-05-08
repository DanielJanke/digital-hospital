/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, ScrollView } from "react-native";

import Appointment from "./components/AppointmentCard";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
});

type Props = {
  navigator: any
};

export default class App extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true
  };

  _open = () => {
    console.log("hello");
    // this.props.navigator.showModal({
    //   // title: Strings.camera.title,
    //   screen: "example.AppointmentDetail"
    // });
  };

  hello = () => {
    console.log("xx");
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Appointment
          title="Voruntersuchung"
          date="JETZT"
          flagColor="#55EBD9"
          time="10:00"
          description="Dr. Daniel Janke | 286"
          open={this.hello}
        />
        {/* <Appointment
          title="Voruntersuchung"
          date="BALD"
          flagColor="#B2EB55"
          time="12:00"
          description="Dr. Daniel Janke | 286"
        />
        <Appointment
          title="Voruntersuchung"
          date="HEUTE"
          flagColor="#FFCC01"
          time="12:00"
          description="Dr. Daniel Janke | 286"
        />
        <Appointment
          title="Voruntersuchung"
          date="HEUTE"
          flagColor="#FFCC01"
          time="12:00"
          description="Dr. Daniel Janke | 286"
        />
        <Appointment
          title="Voruntersuchung"
          date="12.03"
          flagColor="#D40F14"
          time="12:00"
          description="Dr. Daniel Janke | 286"
        />
        <Appointment
          title="Voruntersuchung"
          date="12.03"
          flagColor="#FFCC01"
          time="12:00"
          description="Dr. Daniel Janke | 286"
        />
        <Appointment
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
          description="Dr. Daniel Janke | 286"
        />
        <Appointment
          title="Voruntersuchung"
          date="13.03"
          flagColor="#B2EB55"
          time="12:00"
          description="Dr. Daniel Janke | 286"
        />
        <Appointment
          title="Voruntersuchung"
          date="13.03"
          flagColor="#D40F14"
          time="12:00"
          description="Dr. Daniel Janke | 286"
        />
        <Appointment
          title="Voruntersuchung"
          date="13.03"
          flagColor="#018C8E"
          time="12:00"
          description="Dr. Daniel Janke | 286"
        /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"x^^
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
  }
});
