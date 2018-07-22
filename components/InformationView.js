import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";

import MenuCell from "../components/MenuCell";
import MediCard from "../components/MediCard";

import extStyles from "../assets/styles";

type Props = {};

export default class InformationView extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: "light",
    navBarBackgroundColor: "#4F92DE",
    navBarButtonColor: "white"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          resizeMode="cover"
          style={[styles.headerImage]}
          source={require("../assets/header_informations.png")}
        />
        <View style={styles.headerBlocker} />
        <View style={styles.paddingContainer}>
          <Text style={[extStyles.text.title]}>Willkommen bei uns</Text>
        </View>
        <ScrollView
          style={styles.infoCardScrollView}
          // pagingEnabled={true}
          decelerationRate={"fast"}
          snapToInterval={240}
          snapToAlignment={"start"}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <MediCard
            imageSource={require("../assets/ukb.jpg")}
            title="Über das ukb"
          />
          <MediCard
            imageSource={require("../assets/coffee.jpg")}
            title="Speisekarte Cafeteria"
          />
          <MediCard
            imageSource={require("../assets/patient.jpg")}
            title="Patientenservice"
          />
        </ScrollView>
        <View style={styles.paddingContainer}>
          <Text style={[extStyles.text.title]}>Unsere Ärzte</Text>
        </View>
        <ScrollView
          style={styles.infoCardScrollView}
          // pagingEnabled={true}
          decelerationRate={"fast"}
          snapToInterval={240}
          snapToAlignment={"start"}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <MediCard
            imageSource={require("../assets/arzt_1.jpg")}
            supTitle="Prof. Dr. med."
            title="Axel Ekkernkamp"
            opacity={0.3}
          />
          <MediCard
            imageSource={require("../assets/arzt_2.jpg")}
            supTitle="Prof. Dr. med."
            title="Julia Seifert"
            opacity={0.2}
          />
          <MediCard
            imageSource={require("../assets/arzt_3.jpg")}
            opacity={0.2}
            supTitle="Dr. med."
            title="Henryk Thielemann"
          />
        </ScrollView>
        <View style={styles.paddingContainer}>
          <Text style={[extStyles.text.title, styles.text]}>
            Häufig gestellte Fragen
          </Text>
        </View>
        <MenuCell title="An wen muss ich mich bei organisatorischen Fragen wenden?" />
        <MenuCell title="Wo kann ich Lob und Kritik äußern und wer wird mir antworten?" />
        <MenuCell title="An wen muss ich mich bei organisatorischen Fragen wenden?" />
        <MenuCell title="Wo kann ich Lob und Kritik äußern und wer wird mir antworten?" />
        <View style={styles.paddingContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Empfang anrufen</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 16 }} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F3F6"
  },
  paddingContainer: {
    paddingHorizontal: 16
  },
  headerBlocker: {
    height: 167,
    marginBottom: 32
  },
  text: {
    marginBottom: 24
  },
  button: {
    backgroundColor: "#77B0E6",
    alignSelf: "stretch",
    padding: 19,
    marginTop: 32,
    marginBottom: 24,
    borderRadius: 4
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
    fontWeight: "700"
  },

  infoCardScrollView: {
    marginTop: 24,
    marginBottom: 24,
    height: 240
  },
  headerImage: {
    width: Dimensions.get("window").width,
    height: 167,
    marginTop: 0,
    position: "absolute",
    zIndex: 1
  }
});
