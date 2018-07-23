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
  TextInput,
  View,
  Dimensions,
  Animated,
  Easing,
  PushNotificationIOS,
  SafeAreaView
} from "react-native";
import call from "react-native-phone-call";
import getDirections from "react-native-google-maps-directions";

import Accordion from "react-native-collapsible/Accordion";

import { ProgressCircle } from "react-native-svg-charts";
import AnimatedPath from "react-native-svg-charts/src/animated-path";
import { connect } from "react-redux";

import { NAV_SCREENS } from "../screens";

import Appointment from "../components/AppointmentCard";
import MenuCell from "../components/MenuCell";
import TodoCard from "../components/TodoCard";
import ChatbotButton from "../components/ChatbotButton";
import MediCard from "../components/MediCard";

import extStyles from "../assets/styles";
import chatbotQuestion from "../assets/chatbotQuestions";

import { VORBEREITUNG, AUFENTHALT } from "../assets/checklists";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

type Props = { navigator: any };
export class Timeline extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: "light",
    navBarBackgroundColor: "#4F92DE",
    navBarButtonColor: "white"
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
      scrollY: new Animated.Value(0),
      scrollYTimelineBeforeSwipeToLeft: -167,
      appointmentProgress: 0,
      chatbotTextInput: "",
      chatbotQuestionOpenIndex: undefined
    };
  }

  componentDidMount() {
    this._segmentScrollView.getNode().scrollTo({
      x: 1 * Dimensions.get("window").width,
      animated: true
    });
  }

  _onTouchCard = (screen, props, style) => {
    let { title = "Checkliste Vorbereitung", backButtonTitle } = style;
    this.props.navigator.push({
      // title: Strings.camera.title,
      // screen: 'example.AppointmentDetail'
      title,
      screen: screen,
      passProps: props,
      backButtonTitle,
      buttonColor: "white"
    });
  };
  _onPressSegment = pageIndex => {
    this._segmentScrollView.getNode().scrollTo({
      x: pageIndex * Dimensions.get("window").width,
      y: 0,
      animated: true
    });
  };

  _computeChecklistProgress = checklist => {
    let amountOfAllItems = this.props.state.checklistReducer[checklist].length;
    let amountOfTrueItems = this.props.state.checklistReducer[checklist].filter(
      todoItem => todoItem.checked
    ).length;
    let progress = amountOfTrueItems / amountOfAllItems;
    return progress;
  };

  _handleDirections = () => {
    const data = {
      destination: {
        latitude: 52.5194497,
        longitude: 13.5656633
      },
      params: [
        {
          key: "travelmode",
          value: "driving" // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate" // this instantly initializes navigation using the given travel mode
        }
      ]
    };

    getDirections(data);
  };

  _renderSectionTitle = () => {
    <View style>
      {/* <Text>{section.content}</Text> */}
      <Text>Test</Text>
    </View>;
  };

  _renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Jklfjlasd jkldfs adckmlsdcmklsdmcc
        </Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  _openChatbotAnswer = index => {
    if (this.state.chatbotQuestionOpenIndex == index) {
      this.setState({
        chatbotQuestionOpenIndex: undefined
      });
    } else {
      this.setState({
        chatbotQuestionOpenIndex: index
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Animated.Image
          style={[styles.statusBar]}
          source={require("../assets/header/headerstatusbar.png")}
        />
        <Animated.View
          shouldRasterizeIOS={true}
          style={[
            styles.headerContainer,
            {
              transform: [
                {
                  translateY: this.state.scrollY.interpolate({
                    inputRange: [-168, -167, -40, -39],
                    outputRange: [0, 0, -80, -80]
                  })
                }
              ]
            }
          ]}
        >
          <Animated.Image
            resizeMode="cover"
            style={[styles.headerImage]}
            source={require("../assets/header/headernew.png")}
          />
          <Animated.View
            style={[
              styles.headerContent,
              {
                opacity: this.state.scrollX.interpolate({
                  inputRange: [0, 414, 828],
                  outputRange: [0, 1, 1]
                })
              }
            ]}
          >
            <Animated.View
              style={[
                styles.headerContent,
                {
                  opacity: this.state.scrollY.interpolate({
                    inputRange: [-168, -167, -166, -85, -84],
                    outputRange: [1, 1, 1, 0, 0]
                  })
                }
              ]}
            >
              <Text style={styles.headline}>Max Mustermann</Text>
              <Text style={styles.subheadline}>Zimmer 2.023</Text>
            </Animated.View>
          </Animated.View>

          <View style={styles.segmentContainer}>
            <TouchableOpacity
              hitSlop={{ top: 16, left: 24, bottom: 16, right: 16 }}
              onPress={() => {
                this._onPressSegment(0);
              }}
            >
              <Animated.Image
                style={styles.assistentSegment}
                source={require("../assets/ukb_logo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
              onPress={() => {
                this._onPressSegment(1);
              }}
            >
              <Animated.Text
                style={[
                  styles.segmentText,
                  {
                    color: this.state.scrollX.interpolate({
                      inputRange: [
                        0,
                        Dimensions.get("window").width,
                        Dimensions.get("window").width * 2
                      ],
                      outputRange: [
                        "rgba(255, 255, 255, 1)",
                        "rgba(97, 97, 97, 1)",
                        "rgba(255, 255, 255, 1)"
                      ]
                    })
                  },
                  {
                    opacity: this.state.scrollX.interpolate({
                      inputRange: [
                        0,
                        Dimensions.get("window").width,
                        Dimensions.get("window").width * 2
                      ],
                      outputRange: [0.5, 1, 1]
                    })
                  }
                ]}
              >
                Timeline
              </Animated.Text>
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
              onPress={() => {
                this._onPressSegment(2);
              }}
            >
              <Animated.Text
                style={[
                  styles.segmentText,
                  {
                    color: this.state.scrollX.interpolate({
                      inputRange: [
                        0,
                        Dimensions.get("window").width,
                        Dimensions.get("window").width * 2
                      ],
                      outputRange: [
                        "rgba(255, 255, 255, 1)",
                        "rgba(255, 255, 255, 1)",
                        "rgba(97, 97, 97, 1)"
                      ]
                    })
                  },
                  {
                    opacity: this.state.scrollX.interpolate({
                      inputRange: [
                        0,
                        Dimensions.get("window").width,
                        Dimensions.get("window").width * 2
                      ],
                      outputRange: [0.5, 1, 1]
                    })
                  }
                ]}
              >
                Einzelansicht
              </Animated.Text>
            </TouchableOpacity>
            <Animated.View
              shouldRasterizeIOS={true}
              style={[
                styles.indicator,
                {
                  transform: [
                    {
                      translateX: this.state.scrollX.interpolate({
                        inputRange: [
                          0,
                          Dimensions.get("window").width,
                          Dimensions.get("window").width * 2
                        ],
                        outputRange: [7, 78, 175]
                      })
                    },
                    {
                      translateY: this.state.scrollX.interpolate({
                        inputRange: [
                          0,
                          Dimensions.get("window").width,
                          Dimensions.get("window").width * 2
                        ],
                        outputRange: [-17, 0, 0]
                      })
                    }
                  ]
                },
                {
                  width: this.state.scrollX.interpolate({
                    inputRange: [
                      0,
                      Dimensions.get("window").width,
                      Dimensions.get("window").width * 2
                    ],
                    outputRange: [60, 90, 130]
                  })
                },
                {
                  height: this.state.scrollX.interpolate({
                    inputRange: [
                      0,
                      Dimensions.get("window").width,
                      Dimensions.get("window").width * 2
                    ],
                    outputRange: [60, 28, 28]
                  })
                }
              ]}
            />
          </View>
        </Animated.View>
        {/* HEADER */}

        {/* SCROLLVIEW HORIZONTAL */}
        <Animated.ScrollView
          contentContainerStyle={styles.container}
          ref={c => (this._segmentScrollView = c)}
          horizontal={true}
          pagingEnabled={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
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
                if (event.nativeEvent.contentOffset.x === 0) {
                  this.refs._textInput.focus();
                  this.setState({
                    scrollYTimelineBeforeSwipeToLeft: this.state.scrollY._value
                  });
                  this._timelineVerticalcrollView.getNode().scrollTo({
                    y: -167,
                    animated: true
                  });
                } else {
                  this.refs._textInput.blur();
                }
                if (event.nativeEvent.contentOffset.x === 414) {
                  this._timelineVerticalcrollView.getNode().scrollTo({
                    y: this.state.scrollYTimelineBeforeSwipeToLeft,
                    animated: true
                  });
                }
                if (event.nativeEvent.contentOffset.x === 828) {
                  this.setState({
                    scrollYTimelineBeforeSwipeToLeft: this.state.scrollY._value
                  });
                  // this._timelineVerticalcrollView.getNode().scrollTo({
                  //   y: this.state.scrollYTimelineBeforeSwipeToLeft,
                  //   animated: true
                  // });
                }
              }
            }
          )}
          scrollEventThrottle={16}
        >
          <Animated.View
            style={[
              styles.segmentViewx,

              {
                opacity: this.state.scrollX.interpolate({
                  inputRange: [
                    0,
                    Dimensions.get("window").width / 2,
                    Dimensions.get("window").width,
                    Dimensions.get("window").width * 2
                  ],
                  outputRange: [1, 0, 0, 0]
                })
              }
            ]}
          >
            <View style={styles.chatBotView}>
              <Text style={[extStyles.text.chatbotText, styles.chatBotText]}>
                Hallo Max
                {/* {"\n"} */}
                {/* wenn du eine Frage hast, stell sie. */}
              </Text>
              <TextInput
                style={[styles.textInput, styles.chatbotTextInput]}
                ref="_textInput"
                returnKeyType="search"
                placeholder="Gib deine Frage ein"
                onChangeText={text =>
                  this.setState({
                    chatbotTextInput: text
                  })
                }
              />
              <ScrollView showsVerticalScrollIndicator={false}>
                {chatbotQuestion.map((question, index) => {
                  if (
                    question.question
                      .toUpperCase()
                      .includes(this.state.chatbotTextInput.toUpperCase())
                  ) {
                    return (
                      <React.Fragment>
                        <TouchableOpacity
                          onPress={() => {
                            this._openChatbotAnswer(index);
                          }}
                        >
                          <Text
                            style={[
                              styles.chatbotQuestion,
                              this.state.chatbotQuestionOpenIndex == index
                                ? styles.chatBotQuestionActive
                                : null
                            ]}
                          >
                            {question.question}
                          </Text>
                        </TouchableOpacity>
                        {this.state.chatbotQuestionOpenIndex == index ? (
                          <React.Fragment>
                            <View style={styles.chatbotAnswer}>
                              <Text style={styles.chatbotAnswerText}>
                                {question.answer}
                              </Text>
                            </View>
                            <TouchableOpacity style={styles.redirect}>
                              <Text style={styles.redirectText}>
                                Diese Antwort hat mir nicht geholfen.
                              </Text>
                            </TouchableOpacity>
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    );
                  }
                })}
              </ScrollView>
            </View>
            <Animated.Image
              style={[styles.chatBotBackground]}
              source={require("../assets/chatbackground.png")}
            />
          </Animated.View>

          <Animated.ScrollView
            style={[styles.segmentViewx]}
            contentInset={{ top: 167, left: 0, bottom: 0, right: 0 }}
            contentOffset={{ x: 0, y: -167 }}
            scrollEventThrottle={16}
            ref={c => (this._timelineVerticalcrollView = c)}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.state.scrollY
                    }
                  }
                }
              ],
              {
                useNativeDriver: false
              }
            )}
          >
            <Text style={styles.sectionHeadline}>Vorbereitung</Text>
            <Appointment
              onPress={() => {
                const args = {
                  number: "+49 30 56812752", // String value with the number to call
                  prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
                };
                call(args).catch(console.error);
                this.setState({
                  appointmentProgress: 1
                });
              }}
              firstEntry={true}
              title="Termin vereinbaren"
              date="JETZT"
              flagColor="#55EBD9"
              progress={this.state.appointmentProgress}
              description="Rufen Sie uns an"
            />

            {/* <Appointment
              title="Voruntersuchung"
              date="BALD"
              flagColor="#B2EB55"
              time="12:00"
              description="Dr. Daniel Janke"
            /> */}
            <Appointment
              title="Fragebogen ausfüllen"
              flagColor="#B2EB55"
              progress={0}
              description="Anamnese"
              onPress={() => {
                this._onTouchCard(
                  NAV_SCREENS.FORM_DETAIL_VIEW,
                  {},
                  { title: "Anamesebogen", backButtonTitle: "" }
                );
              }}
            />
            <Appointment
              lastEntry={true}
              flagColor="#B2EB55"
              progress={this._computeChecklistProgress(VORBEREITUNG)}
              title="Sachen packen"
              description="Checklisten"
              onPress={() => {
                this._onTouchCard(
                  NAV_SCREENS.CHECKLIST_DETAIL_VIEW,
                  {
                    checklist: VORBEREITUNG
                  },
                  {
                    title: "Checkliste Vorbereitung",
                    backButtonTitle: " "
                  }
                );
              }}
            />

            {/* <Text style={styles.sectionHeadline}>Dev Menü</Text>
            <Appointment
              firstEntry={true}
              title="ChecklistDetailView"
              flagColor="#55EBD9"
              description="Checklisten"
              progress={this._computeChecklistProgress(AUFENTHALT)}
              onPress={() => {
                this._onTouchCard(
                  NAV_SCREENS.CHECKLIST_DETAIL_VIEW,
                  {
                    checklist: AUFENTHALT
                  },
                  {
                    title: "Checkliste Aufenthalt",
                    backButtonTitle: " "
                  }
                );
              }}
            />

            <Appointment
              lastEntry={true}
              title="ChatBotView"
              flagColor="#55EBD9"
              description="Chatbot"
              onPress={() => {
                this._onTouchCard(
                  NAV_SCREENS.CHATBOT_VIEW,
                  {},
                  {
                    title: "Chatbot",
                    backButtonTitle: " "
                  }
                );
              }}
            />
            <Appointment
              lastEntry={true}
              title="FormDetailView"
              flagColor="#55EBD9"
              description="Chatbot"
              onPress={() => {
                this._onTouchCard(NAV_SCREENS.FORM_DETAIL_VIEW, {}, { title: "Anamesebogen", backButtonTitle: "" });
              }}
            />
            <ChatbotButton
              text="Permission Abfrage"
              onPress={() => {
                PushNotificationIOS.requestPermissions();
              }}
            />
            <ChatbotButton
              text="Push in 3 Sekunden"
              onPress={() => {
                var t = new Date();
                t.setSeconds(t.getSeconds() + 3);

                PushNotificationIOS.scheduleLocalNotification({
                  alertBody: "Ab heute darfst du keine Medikamente mit ASS mehr zu dir nehmen.",
                  fireDate: t
                });
              }}
            />
            <ChatbotButton
              text="Schedule löschen"
              onPress={() => {
                PushNotificationIOS.cancelAllLocalNotifications();
              }}
            /> */}

            <Text style={styles.sectionHeadline}>
              Vorstationäre Untersuchung
            </Text>
            <Appointment
              title="Fahren Sie zu uns"
              date="12.03"
              flagColor="#FFCC01"
              time="06:00"
              description="Wegbeschreibung"
              firstEntry={true}
              onPress={() => {
                var t = new Date();
                t.setSeconds(t.getSeconds() + 5);

                PushNotificationIOS.scheduleLocalNotification({
                  alertBody:
                    "Fahren Sie jetzt zum ukb, um pünktlich zu Ihrer Voruntersuchung zu kommen.",
                  fireDate: t
                });
                this._handleDirections();
              }}
            />

            <Appointment
              title="Warten auf Aufnahme"
              date="12.03"
              flagColor="#FFCC01"
              time="36 min"
              description="Bitte Wartemarke ziehen"
            />
            <Appointment
              title="Aufnahme"
              date="12.03"
              flagColor="#B2EB55"
              description="Datenerfassung & Wahlleistungen"
            />
            <Appointment
              title="D-Arzt-Ambulanz"
              date="12.03"
              flagColor="#55EBD9"
              description="Aufklärung über OP & Narkose"
            />
            <Appointment
              title="Voruntersuchungen"
              date="12.03"
              flagColor="#55EBD9"
              time="max 15:30"
              lastEntry={true}
              description="Wenn nötig"
            />

            <ScrollView
              style={styles.infoCardScrollView}
              // pagingEnabled={true}
              decelerationRate={"fast"}
              snapToInterval={240}
              snapToAlignment={"start"}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <MediCard title="Was ist Röntgen?" />
              <MediCard
                imageSource={require("../assets/mrt.jpg")}
                title="Was ist ein MRT?"
              />
              <MediCard
                title="Was ist Sonografie?"
                imageSource={require("../assets/sonografie.jpg")}
              />
              <MediCard
                title="Was ist ein CT?"
                imageSource={require("../assets/ct.jpg")}
              />
              {/* <MediCard />
              <MediCard />
              <MediCard /> */}
            </ScrollView>

            <Text style={styles.sectionHeadline}>Vor der Operation</Text>
            <Appointment
              flagColor="#D40F14"
              title="ASS Medikamente absetzen"
              date="14.03"
              description="Medikamente mit ASS sollten Sie diese ab dem heutigen Tage nicht mehr zu sich nehmen. Klären Sie dies bitte vor mit Ihrem Arzt ab."
              firstEntry={true}
            />
            {/* <Appointment
              flagColor="#D40F14"
              title="BSS Medikamente absetzen"
              date="15.03"
              description="Medikamente mit BSS sollten Sie diese ab dem heutigen Tage nicht mehr zu sich nehmen. Klären Sie dies bitte vor mit Ihrem Arzt ab."
            /> */}
            <Appointment
              flagColor="#B2EB55"
              title="Sachen packen"
              description="Checklisten für Aufenth."
              lastEntry={true}
              progress={this._computeChecklistProgress(AUFENTHALT)}
              onPress={() => {
                this._onTouchCard(
                  NAV_SCREENS.CHECKLIST_DETAIL_VIEW,
                  {
                    checklist: AUFENTHALT
                  },
                  {
                    title: "Checkliste Aufenthalt",
                    backButtonTitle: " "
                  }
                );
              }}
            />

            <Text style={styles.sectionHeadline}>Ihr Aufenthalt</Text>
            <Appointment
              title="Fahren Sie zu uns"
              date="20.03"
              flagColor="#FFCC01"
              time="06:00"
              description="Wegbeschreibung"
              firstEntry={true}
            />
            <Appointment
              flagColor="#018C8E"
              title="Stationäre Aufnahme"
              description="Station C"
              date="20.03"
              time="07:00"
              lastEntry={true}
            />
            <Text style={styles.sectionHeadline}>Nach Ihrem Aufenthalt</Text>
            <Appointment
              flagColor="#B2EB55"
              title="Noch zu erledigen"
              description="Checklisten nach Aufenth."
              progress={0.0}
              firstEntry={true}
            />
            <Appointment
              flagColor="#B2EB55"
              title="Hausarztbesuch"
              description="Rezepte abholen"
            />
            <Appointment
              flagColor="#B2EB55"
              title="Apothekenbesuch"
              description="Rezepte einlösen"
            />
            <Appointment
              flagColor="#B2EB55"
              title="Paracetamol einnehmen"
              description="1 Tablette"
              date="27.03"
              time="12:00"
            />
            <Appointment
              flagColor="#B2EB55"
              title="Paracetamol einnehmen"
              description="1 Tablette"
              date="28.03"
              time="12:00"
            />
            <Appointment
              flagColor="#B2EB55"
              title="Videosprechstunde"
              description="Zur Kontrolle"
              date="29.03"
              time="12:00"
              lastEntry={true}
              onPress={() => {
                this._onTouchCard(NAV_SCREENS.CHATBOT_VIEW, {}, { title: "" });
              }}
            />
          </Animated.ScrollView>

          <Animated.ScrollView
            style={styles.segmentViewx}
            contentInset={{ top: 167, left: 0, bottom: 0, right: 0 }}
            contentOffset={{ x: 0, y: -167 }}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: this.state.scrollY
                    }
                  }
                }
              ],
              {
                useNativeDriver: false
              }
            )}
          >
            <Text style={styles.sectionHeadline}>Checklisten</Text>
            <MenuCell
              onPress={() => {
                this._onTouchCard(
                  NAV_SCREENS.CHECKLIST_DETAIL_VIEW,
                  {
                    checklist: VORBEREITUNG
                  },
                  {
                    title: "Checkliste Vorbereitung",
                    backButtonTitle: " "
                  }
                );
              }}
              title="Vorbereitung"
            />
            <MenuCell
              onPress={() => {
                this._onTouchCard(
                  NAV_SCREENS.CHECKLIST_DETAIL_VIEW,
                  {
                    checklist: AUFENTHALT
                  },
                  {
                    title: "Checkliste Aufenthalt",
                    backButtonTitle: " "
                  }
                );
              }}
              title="Aufenthalt"
            />
            <MenuCell title="Entlassung" />
            <Text style={styles.sectionHeadline}>Fragebögen</Text>
            <MenuCell
              onPress={() => {
                this._onTouchCard(
                  NAV_SCREENS.FORM_DETAIL_VIEW,
                  {},
                  { title: "Anamesebogen", backButtonTitle: "" }
                );
              }}
              title="Anamese"
            />
            />
            <MenuCell title="Aufenthalt" />
            <MenuCell title="App" />
            <Text style={styles.sectionHeadline}>Anderes</Text>
            <MenuCell
              onPress={() => {
                this._handleDirections();
              }}
              title="Wegbeschreibungen"
            />
            <MenuCell title="Medikationsplan" />
          </Animated.ScrollView>
        </Animated.ScrollView>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ state }),
  {}
)(Timeline);

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1
  },
  container: {
    // flex: 1,
    width: Dimensions.get("window").width * 3,
    backgroundColor: "#F0F3F6"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  chatBotBackground: {
    position: "absolute",
    width: Dimensions.get("window").width,
    zIndex: -10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  statusBar: {
    height: 20
  },
  headerContainer: {
    zIndex: 1,
    // display: 'none',
    position: "absolute",
    marginTop: 20,
    top: 0,
    paddingLeft: 32
  },
  headerImage: {
    width: Dimensions.get("window").width,
    height: 167,
    marginTop: 0,
    position: "absolute",
    zIndex: 1
  },
  textInput: {
    fontSize: 17
  },
  chatbotTextInput: {
    color: "#FFFFFF",
    marginBottom: 32
  },
  headerContent: {
    zIndex: 2
  },
  headline: {
    color: "white",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 24,
    marginBottom: 4
  },
  subheadline: {
    color: "white",
    fontSize: 17,
    marginBottom: 32
  },
  sectionHeadline: {
    fontSize: 17,
    fontWeight: "600",
    marginTop: 32,
    marginBottom: 16,
    textAlign: "center",
    color: "#4E4E4E"
  },
  segmentContainer: {
    flexDirection: "row",
    marginBottom: 32,
    zIndex: 2
    // left: '-100%'
  },
  segmentText: {
    fontSize: 17,
    fontWeight: "700",
    // color: 'white',
    marginRight: 32
  },
  assistentSegment: {
    marginRight: 32,
    marginTop: -2,
    height: 28,
    width: 41
  },
  chatBotView: {
    marginTop: 200,
    paddingHorizontal: 32,
    flex: 1
    // justifyContent: "center"
  },
  chatBotText: {
    marginBottom: 16,
    opacity: 0.9
  },
  chatbotQuestion: {
    opacity: 0.7,
    color: "#FFFFFF",
    marginBottom: 8,
    fontSize: 20
  },
  chatBotQuestionActive: {
    opacity: 1
  },
  segmentViewContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width * 3
  },
  segmentView: {
    // flex: 1,
    alignSelf: "stretch"
    // flexDirection: "column"
    // backgroundColor: "red"
  },
  segmentViewx: {
    flex: 1,
    alignSelf: "stretch"
  },
  indicator: {
    width: 100,
    height: 28,
    backgroundColor: "white",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 11,
    position: "absolute",
    zIndex: -1,
    marginLeft: -16,
    // marginLeft: 102,
    marginTop: -3.5
  },
  infoCardScrollView: {
    marginTop: 24,
    height: 240
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
  chatbotAnswer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 16
  },
  chatbotAnswerText: {
    color: "#FFFFFF",
    fontSize: 17,
    lineHeight: 24
  },
  redirect: {
    alignSelf: "stretch",
    marginBottom: 16
  },
  redirectText: {
    color: "#FFFFFF",
    opacity: 0.8,
    textAlign: "center"
  }
});
