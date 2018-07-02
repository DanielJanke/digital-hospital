import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Animated,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import { answer, ANSWER } from "../redux/Questions";

import extStyles from "../assets/styles";
import questions from "../assets/questions";

import ChatbotButton from "../components/ChatbotButton";

const image = require("../assets/chatbackground.png");
const logo = require("../assets/ukb_logo.png");

type Props = {};

export class ChatbotView extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true,
    statusBarTextColorScheme: "light"
  };

  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1)
    };
  }

  _onPressItem = () => {};

  componentDidMount() {
    // console.log(this.props.state);
  }

  _startFade = () => {
    Animated.sequence([
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 300
      })
    ]).start();
  };

  render() {
    let index = this.props.state.questionReducer[0].currentQuestion;
    let questionReducer = this.props.state.questionReducer;
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={image}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
            <View style={styles.indicator} />
          </View>

          <Animated.View style={{ opacity: this.state.opacity }}>
            <Text style={[extStyles.text.chatbotText, styles.text]}>
              {questionReducer[index].question}
            </Text>
            <View style={styles.buttonContainer}>
              {questionReducer[index].answers.map(answer => {
                return (
                  <ChatbotButton
                    onPress={() => {
                      setTimeout(() => {
                        if (answer.onPressFunction) {
                          answer.onPressFunction.forEach(func => {
                            this.props.dispatch(func);
                          });
                        } else {
                          this.props.answer(answer.nextQuestion);
                        }
                      }, 300);
                      this._startFade();
                    }}
                    style={styles.button}
                    text={answer.text}
                  />
                );
              })}
            </View>
          </Animated.View>
        </ImageBackground>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    answer: id => {
      dispatch(answer(id));
    }
  };
};

export default connect(
  state => ({ state }),
  // { dispatch => {dispatch(answer)} }
  mapDispatchToProps
)(ChatbotView);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 200
    // justifyContent: 'center'
  },
  logo: {
    marginBottom: 32,
    height: 28,
    width: 41
  },
  text: {
    width: "80%",
    marginLeft: 16,
    marginBottom: 32
  },
  logoContainer: {},
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    width: Dimensions.get("window").width * 0.75
  },
  indicator: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 11,
    borderRadius: 100,
    position: "absolute",
    zIndex: -1,
    transform: [{ translateY: -20 }, { translateX: -9 }]
  },
  button: {
    alignSelf: "flex-end",
    marginBottom: 16,
    marginLeft: 16
  }
});
