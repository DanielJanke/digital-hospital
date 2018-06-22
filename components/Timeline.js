/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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
  Easing
} from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import AnimatedPath from 'react-native-svg-charts/src/animated-path';

import Appointment from '../components/AppointmentCard';
import MenuCell from '../components/MenuCell';
import TodoCard from '../components/TodoCard';

import extStyles from '../assets/styles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = { navigator: any };
export default class Timeline extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'light'
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
      scrollY: new Animated.Value(-167),
      verticalScrollingEnabled: true
    };
  }

  componentDidMount() {
    this._segmentScrollView.getNode().scrollTo({
      x: 1 * Dimensions.get('window').width,
      animated: true
    });
  }

  _onTouchCard = screen => {
    this.props.navigator.push({
      // title: Strings.camera.title,
      // screen: 'example.AppointmentDetail'
      title: 'Checkliste Vorbereitung',
      screen: screen
    });
  };
  _onPressSegment = pageIndex => {
    this._segmentScrollView.getNode().scrollTo({
      x: pageIndex * Dimensions.get('window').width,
      y: 0,
      animated: true
    });
  };

  render() {
    let verticalScrollingEnabled = this.state.scrollX > 0 ? true : false;
    return (
      <React.Fragment>
        <Animated.Image
          style={[styles.statusBar]}
          source={require('../assets/header/headerstatusbar.png')}
        />

        {/* HEADER */}

        <Animated.View
          shouldRasterizeIOS={true}
          style={[
            styles.headerContainer,
            {
              transform: [
                {
                  translateY: this.state.scrollY.interpolate({
                    inputRange: [-168, -167, -166],
                    outputRange: [0, 0, -1]
                  })
                }
              ]
            }
          ]}
        >
          <Animated.Image
            resizeMode="cover"
            style={[
              styles.headerImage,
              // {
              //   opacity: this.state.scrollX.interpolate({
              //     inputRange: [0, 414, 828],
              //     outputRange: [0, 1, 1]
              //   })
              // },
              {
                // transform: [
                //   {
                //     translateY: this.state.scrollY.interpolate({
                //       inputRange: [-1, 0, 1],
                //       outputRange: [-1, 0, 1]
                //     })
                //   },
                //   {
                //     scale: this.state.scrollY.interpolate({
                //       inputRange: [-50, 0, 1],
                //       outputRange: [1.4, 1, 1]
                //     })
                //   }
                // ]
              }
            ]}
            source={require('../assets/header/headernew.png')}
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
            <Text style={styles.headline}>Max Mustermann</Text>
            <Text style={styles.subheadline}>Zimmer 2.023</Text>
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
                source={require('../assets/ukb_logo.png')}
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
                      inputRange: [0, 414, 828],
                      outputRange: [
                        'rgba(255, 255, 255, 1)',
                        'rgba(97, 97, 97, 1)',
                        'rgba(255, 255, 255, 1)'
                      ]
                    })
                  },
                  {
                    opacity: this.state.scrollX.interpolate({
                      inputRange: [0, 414, 828],
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
                      inputRange: [0, 414, 828],
                      outputRange: [
                        'rgba(255, 255, 255, 1)',
                        'rgba(255, 255, 255, 1)',
                        'rgba(97, 97, 97, 1)'
                      ]
                    })
                  },
                  {
                    opacity: this.state.scrollX.interpolate({
                      inputRange: [0, 414, 828],
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
                        inputRange: [0, 414, 828],
                        outputRange: [7, 78, 178]
                      })
                    },
                    {
                      translateY: this.state.scrollX.interpolate({
                        inputRange: [0, 414, 828],
                        outputRange: [-17, 0, 0]
                      })
                    }
                  ]
                },
                {
                  width: this.state.scrollX.interpolate({
                    inputRange: [0, 414, 828],
                    outputRange: [60, 90, 130]
                  })
                },
                {
                  height: this.state.scrollX.interpolate({
                    inputRange: [0, 414, 828],
                    outputRange: [60, 28, 28]
                  })
                }
              ]}
            />
          </View>
        </Animated.View>

        {/* SCROLLVIEW HORIZONTAL */}
        <Animated.ScrollView
          contentContainerStyle={styles.container}
          ref={c => (this._segmentScrollView = c)}
          scrollEnabled={this.state.verticalScrollingEnabled}
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
                } else {
                  this.refs._textInput.blur();
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
                  inputRange: [0, 212, 414, 828],
                  outputRange: [1, 0, 0, 0]
                })
              }
            ]}
          >
            <View style={styles.chatBotView}>
              <Text style={[extStyles.text.chatbotText, styles.chatBotText]}>
                Hallo Max,{'\n'}
                wenn du eine Frage hast, stell sie.
              </Text>
              <TextInput ref="_textInput" placeholder="Gib deine Frage ein" />
              <TouchableOpacity style={extStyles.text.chatbotButton}>
                <Text style={extStyles.text.chatbotButtonText}>Verstanden</Text>
              </TouchableOpacity>
            </View>
            <Animated.Image
              style={[styles.chatBotBackground]}
              source={require('../assets/chatbackground.png')}
            />
          </Animated.View>

          <Animated.ScrollView
            style={[styles.segmentViewx]}
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
                useNativeDriver: true
              }
            )}
          >
            <Text style={styles.sectionHeadline}>Vorbereitung</Text>
            <Appointment
              firstEntry={true}
              title="Termin vereinbaren"
              date="JETZT"
              flagColor="#55EBD9"
              progress={1}
              description="Rufen Sie uns an"
              onPress={() => {
                this._onTouchCard('example.ChecklistDetailView');
              }}
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
              flagColor="#FFCC01"
              progress={0.5}
              title="Sachen packen"
              description="Checklisten"
              onPress={() => {
                this._onTouchCard('example.ChecklistDetailView');
              }}
            />

            <Text style={styles.sectionHeadline}>Dev Menü</Text>
            <Appointment
              firstEntry={true}
              title="ChecklistDetailView"
              flagColor="#55EBD9"
              description="Checklisten"
              onPress={() => {
                this._onTouchCard('example.ChecklistDetailView');
              }}
            />

            <Appointment
              lastEntry={true}
              title="ChatBotView"
              flagColor="#55EBD9"
              description="Chatbot"
              onPress={() => {
                this._onTouchCard('example.ChatbotView');
              }}
            />
            <Appointment
              lastEntry={true}
              title="FormDetailView"
              flagColor="#55EBD9"
              description="Chatbot"
              onPress={() => {
                this._onTouchCard('example.FormDetailView');
              }}
            />

            <Text style={styles.sectionHeadline}>
              Vorstationäre Untersuchung
            </Text>
            <Appointment
              title="Fahren Sie zu uns"
              date="12.03"
              flagColor="#FFCC01"
              time="12:00"
              description="Wegbeschreibung"
              firstEntry={true}
            />

            <Appointment
              title="Wartezeit"
              date="12.03"
              flagColor="#B2EB55"
              time="36 min"
              description="Sie werden aufgerufen"
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
              flagColor="#D40F14"
              title="ASS Medikamente absetzen"
              date="14.03"
              description="Medikamente mit ASS sollten Sie diese ab dem heutigen Tage nicht mehr zu sich nehmen. Klären Sie dies bitte vor mit Ihrem Arzt ab."
              firstEntry={true}
            />
            <Appointment
              flagColor="#D40F14"
              title="BSS Medikamente absetzen"
              date="15.03"
              description="Medikamente mit BSS sollten Sie diese ab dem heutigen Tage nicht mehr zu sich nehmen. Klären Sie dies bitte vor mit Ihrem Arzt ab."
            />
            <Appointment
              flagColor="#B2EB55"
              title="Sachen packen"
              description="Checklisten für Aufenth."
              progress={0.0}
              lastEntry={true}
            />

            <Text style={styles.sectionHeadline}>Ihr Aufenthalt</Text>
            <Appointment
              onPress={this._onTouchCard}
              flagColor="#018C8E"
              title="Operation"
              description="Dr. Anna Borchert"
              date="13.03"
              time="12:00"
              firstEntry={true}
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
              title="Monoposol einnehmen"
              description="1 Tablette"
              date="17.03"
              time="12:00"
            />
            <Appointment
              flagColor="#B2EB55"
              title="Monoposol einnehmen"
              description="1 Tablette"
              date="18.03"
              time="12:00"
              lastEntry={true}
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
                useNativeDriver: true
              }
            )}
          >
            <Text style={styles.sectionHeadline}>Checklisten</Text>
            <MenuCell title="Vorbereitung" />
            <MenuCell title="Aufenthalt" />
            <MenuCell title="Entlassung" />
            <Text style={styles.sectionHeadline}>Fragebögen</Text>
            <MenuCell title="Anamese" />
            <MenuCell title="Aufenthalt" />
            <MenuCell title="App" />
            <Text style={styles.sectionHeadline}>Anderes</Text>
            <MenuCell title="Wegbeschreibungen" />
            <MenuCell title="Medikationsplan" />
          </Animated.ScrollView>
        </Animated.ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: Dimensions.get('window').width * 3,
    backgroundColor: '#F0F3F6'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  chatBotBackground: {
    position: 'absolute',
    zIndex: -10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  statusBar: {
    height: 20
  },
  headerContainer: {
    zIndex: 1,
    // display: 'none',
    position: 'absolute',
    marginTop: 20,
    top: 0
  },
  headerImage: {
    width: 414,
    height: 167,
    marginTop: 0,
    position: 'absolute',
    zIndex: 1
  },
  headerContent: {
    zIndex: 2
  },
  headline: {
    color: 'white',
    fontSize: 28,
    fontWeight: '800',
    marginLeft: 32,
    marginTop: 16
  },
  subheadline: {
    marginLeft: 32,
    color: 'white',
    fontSize: 17,
    marginBottom: 28
  },
  sectionHeadline: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 32,
    marginBottom: 16,
    textAlign: 'center',
    color: '#4E4E4E'
  },
  segmentContainer: {
    flexDirection: 'row',
    marginLeft: 32,
    marginBottom: 32,
    zIndex: 2
    // left: '-100%'
  },
  segmentText: {
    fontSize: 17,
    fontWeight: '700',
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
    marginTop: 64,
    paddingHorizontal: 32,
    flex: 1,
    justifyContent: 'center'
  },
  chatBotText: {
    marginBottom: 16
  },
  segmentViewContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 3
  },
  segmentView: {
    // flex: 1,
    alignSelf: 'stretch'
    // flexDirection: "column"
    // backgroundColor: "red"
  },
  segmentViewx: {
    flex: 1,
    alignSelf: 'stretch'
  },
  indicator: {
    width: 100,
    height: 28,
    backgroundColor: 'white',
    borderRadius: 100,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 11,
    position: 'absolute',
    zIndex: -1,
    marginLeft: -16,
    // marginLeft: 102,
    marginTop: -3.5
  }
});
