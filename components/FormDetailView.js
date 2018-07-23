import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Animated
} from "react-native";

import { connect } from "react-redux";

import PageControl from "react-native-page-control";
import QRCode from "react-native-qrcode";

import extStyles from "../assets/styles";

import { NAV_SCREENS } from "../screens";

type Props = {};

export class FormDetailView extends Component<Props> {
  static navigatorStyle = {
    // navBarHidden: true,
    navBarTranslucent: true,

    navBarBackgroundColor: "#4F92DE",
    tabBarHidden: true,
    statusBarTextColorScheme: "light",
    navBarLeftButtonColor: "white",
    navBarButtonColor: "white"
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0)
    };
  }

  _onPressItem = () => {};

  _onPress = () => {
    this.props.navigator.showModal({
      animated: true, // does the pop have transition animation or does it happen immediately (optional)
      animationType: "fade", // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
      screen: NAV_SCREENS.CHATBOT_VIEW_ANAMNESE
    });
  };

  render() {
    console.log(this.props.state.questionReducer.answersAnanmnese);
    const { date, flagColor, title, description, time, onPress } = this.props;

    const content = [
      {
        name: "Max Mustermann",
        birth: "23.10.1997",
        adress: "Hello Street 122a, 12345 Muter",
        phone: "030 1234567",
        insurance: "Barmer",
        relationship: "single",
        work: "student",
        height: "180",
        weight: "50",
        diabetis: false,
        smoking: false,
        sport: true,
        allergien: false
      },
      {
        medikamtente: [
          {
            name: "Asperin",
            morning: true,
            noon: false,
            evening: false
          }
        ],
        hospital: {
          hospital: true,
          reason: "Gebrochener Arm, 2017"
        }
      },
      {
        a: ""
      }
    ];

    return (
      <ScrollView
        contentOffset={{
          y: 100,
          x: 0
        }}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <View
          style={{
            flex: 1,
            marginTop: 32
          }}
        >
          <Text style={extStyles.text.title}> Fragebögen ausfüllen </Text>
          <Text style={extStyles.text.description}>
            Der Anamesebogen dient dazu alle für die Operation relevanten
            Informationen zu erfassen.Sie können den Fragebogen hier in der App
            oder während ihrer Wartezeit im Krankenhaus ausfüllen.
          </Text>
          <TouchableOpacity onPress={this._onPress} style={styles.button}>
            <Text style={styles.buttonText}> Fragebogen ausfüllen </Text>
          </TouchableOpacity>
          <Text style={extStyles.text.title}> QR Code </Text>
          <Animated.ScrollView
            horizontal={true}
            pagingEnabled={true}
            style={styles.qrCodeWrapper}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: this.state.scrollX
                    }
                  }
                }
              ],
              {
                useNativeDriver: false,
                listener: event => {
                  this.setState({
                    scrollX: event.nativeEvent.contentOffset.x
                  });
                }
              }
            )}
          >
            {/* {content.map((splittedContent, i) => {
              return ( */}
            <QRCode
              key={0}
              value={JSON.stringify(
                this.props.state.questionReducer.answersAnanmnese
              )}
              size={Dimensions.get("window").width - 32}
              bgColor="Black"
              fgColor="white"
            />
            {/*    ); */}
            {/*  })} */}
          </Animated.ScrollView>
          {/* <PageControl
            style={styles.pageIndicator}
            numberOfPages={content.length}
            currentPage={Math.round(this.state.scrollX / 382)}
            hidesForSinglePage
            pageIndicatorTintColor="gray"
            currentPageIndicatorTintColor="black"
            indicatorStyle={{
              borderRadius: 5
            }}
            currentIndicatorStyle={{
              borderRadius: 5
            }}
            indicatorSize={{
              width: 10,
              height: 10
            }}
          /> */}
          <Text style={extStyles.text.description}>
            Ihre Daten sind in der App sicher und werden nicht über das Internet
            übertragen.Stattdesssen zeigen Sie den folgenden QR Code wenn Sie
            darum gebeten werden oder drucken den Bogen vorher aus und bringen
            ihn mit.
          </Text>
        </View>
        <View
          style={{
            height: 100
          }}
        />
      </ScrollView>
    );
  }
}

export default connect(
  state => ({
    state
  }),
  {}
)(FormDetailView);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F3F6"
  },
  contentContainer: {
    backgroundColor: "#F0F3F6",
    alignItems: "center",
    paddingHorizontal: 16
  },
  pageIndicator: {
    marginBottom: 32
  },
  header: {
    height: 164,
    backgroundColor: "#aaa",
    marginBottom: 64
  },
  content: {
    marginTop: 32,
    paddingHorizontal: 16
  },
  qrCodeWrapper: {
    marginBottom: 24
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
  },
  button: {
    backgroundColor: "#77B0E6",
    alignSelf: "stretch",
    padding: 19,
    marginTop: 16,
    marginBottom: 24,
    borderRadius: 4
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 17,
    fontWeight: "700"
  }
});
