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
  View,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

import Appointment from '../components/AppointmentCard';
import TodoCard from '../components/TodoCard';

import AnimatedPath from 'react-native-svg-charts/src/animated-path';

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
      indicatorPosition: new Animated.Value(0),
      scrollX: new Animated.Value(0),
      scrollY: new Animated.Value(0),
      indicatorWidth: new Animated.Value(100),
      indicatorColor: [
        new Animated.Value('rgb(97,97,97)'),
        new Animated.Value('rgb(255,255,255)')
      ]
    };
  }

  componentDidMount() {
    // this._segmentScrollView.getNode().scrollTo({
    //   x: 1 * Dimensions.get('window').width,
    //   animated: true
    // });
  }

  _onTouchCard = () => {
    console.log('on');

    this.props.navigator.push({
      // title: Strings.camera.title,
      // screen: 'example.AppointmentDetail'
      title: 'Checkliste Vorbereitung',
      screen: 'example.ChecklistDetailView'
    });
  };

  _onTouchCardChat = () => {
    console.log('on');

    this.props.navigator.push({
      // title: Strings.camera.title,
      // screen: 'example.AppointmentDetail'
      screen: 'example.ChatbotView'
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
    return (
      <React.Fragment>
        <Animated.Image
          style={[styles.statusBar]}
          source={require('../assets/header/headerstatusbar.png')}
        />
        <Animated.ScrollView
          style={styles.container}
          // ref="_verticalScrollView"
          ref={c => (this._verticalScrollView = c)}
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
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
        >
          <Animated.Image
            resizeMode="cover"
            style={[
              styles.headerImage,
              {
                transform: [
                  {
                    translateY: this.state.scrollY.interpolate({
                      inputRange: [-1, 0, 1],
                      outputRange: [-1, 0, 0]
                    })
                  },
                  {
                    scale: this.state.scrollY.interpolate({
                      inputRange: [-50, 0, 1],
                      outputRange: [1.4, 1, 1]
                    })
                  }
                ]
              }
            ]}
            source={require('../assets/header/Gradient.png')}
          />
          <Animated.View
          // style={{
          //   transform: [
          //     {
          //       translateY: this.state.scrollY.interpolate({
          //         inputRange: [-1, 0, 1],
          //         outputRange: [-1, 0, 0]
          //       })
          //     }
          //   ]
          // }}
          >
            <Text style={styles.headline}>Max Mustermann</Text>
            <Text style={styles.subheadline}>Zimmer 2.023</Text>

            <View style={styles.segmentContainerOverlay}>
              <TouchableOpacity
                onPress={() => {
                  this._onPressSegment(0);
                }}
              >
                <Animated.Text
                  style={[
                    styles.segmentText,
                    {
                      color: this.state.scrollX.interpolate({
                        inputRange: [0, 414, 828],
                        outputRange: [
                          'rgba(97, 97, 97, 1)',
                          'rgba(255, 255, 255, 1)',
                          'rgba(255, 255, 255, 1)'
                        ]
                      })
                    }
                  ]}
                >
                  Assistent
                </Animated.Text>
              </TouchableOpacity>
              <TouchableOpacity
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
                    }
                  ]}
                >
                  Timeline
                </Animated.Text>
              </TouchableOpacity>
              <TouchableOpacity
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
                    }
                  ]}
                >
                  Einzelansicht
                </Animated.Text>
              </TouchableOpacity>
              <Animated.View
                style={[
                  styles.indicator,
                  {
                    transform: [
                      {
                        translateX: this.state.scrollX.interpolate({
                          inputRange: [0, 414, 828],
                          outputRange: [4, 110, 210]
                        })
                      }
                    ]
                  },
                  {
                    width: this.state.scrollX.interpolate({
                      inputRange: [0, 414, 828],
                      outputRange: [100, 90, 130]
                    })
                  }
                ]}
              />
            </View>
          </Animated.View>
          <Animated.ScrollView
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            contentContainerStyle={styles.segmentViewContainer}
            horizontal={true}
            // onScroll={this._onScrollSegmentViewNew}
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
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
            ref={c => (this._segmentScrollView = c)}
          >
            <View style={styles.segmentViewx}>
              <Text style={styles.sectionHeadline}>Chatbot</Text>
              <Appointment
                firstEntry={true}
                lastEntry={true}
                title="Chatbot aufufen"
                date="JETZT"
                flagColor="#55EBD9"
                progress={1}
                description="Rufen Sie uns an"
                onPress={this._onTouchCardChat}
              />
              <TodoCard title="Später Menü" description="Platzhalter" />
              <TodoCard title="Später Menü" description="Platzhalter" />
              <TodoCard title="Später Menü" description="Platzhalter" />
              <TodoCard title="Später Menü" description="Platzhalter" />
              <TodoCard title="Später Menü" description="Platzhalter" />
            </View>
            <View style={styles.segmentViewx}>
              <Text style={styles.sectionHeadline}>Vorbereitung</Text>
              <Appointment
                firstEntry={true}
                title="Termin vereinbaren"
                date="JETZT"
                flagColor="#55EBD9"
                progress={1}
                description="Rufen Sie uns an"
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
            </View>

            <View style={styles.segmentViewx}>
              <Text style={styles.sectionHeadline}>Vorbereitung</Text>
              <TodoCard title="Später Menü" description="Platzhalter" />
              <TodoCard title="Später Menü" description="Platzhalter" />
              <TodoCard title="Später Menü" description="Platzhalter" />
              <TodoCard title="Später Menü" description="Platzhalter" />
              <TodoCard title="Später Menü" description="Platzhalter" />
            </View>
          </Animated.ScrollView>
        </Animated.ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F3F6'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  statusBar: {
    height: 20
  },
  headerImage: {
    width: 414,
    height: 167,
    marginTop: 0,
    position: 'absolute'
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
    marginLeft: 32
  },
  segmentContainerOverlay: {
    flexDirection: 'row',
    marginLeft: 32,
    marginBottom: 32
    // left: '-100%'
  },
  segmentText: {
    fontSize: 17,
    fontWeight: '700',
    // color: 'white',
    marginRight: 32
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
    flex: 1
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
