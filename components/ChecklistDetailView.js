import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import TodoCard from '../components/TodoCard';
import checklistdata from '../assets/checklists';
import { check, uncheck } from '../redux/Checklists';

type Props = {};

export class ChecklistDetailView extends Component<Props> {
  constructor(props) {
    super(props);
    // console.log(this.props.state.checklistReducer.Vorbereitung);
  }

  static navigatorStyle = {
    // navBarHidden: true,
    navBarTranslucent: true,
    // navBarBackgroundColor: '#F9F8F5',
    navBarBackgroundColor: '#4F92DE',
    tabBarHidden: true,
    statusBarTextColorScheme: 'light',
    navBarLeftButtonColor: 'white'
  };

  _onPressItem = () => {};

  render() {
    const { date, flagColor, title, description, time, onPress } = this.props;
    return (
      <ScrollView style={styles.container}>
        {/* <View style={styles.header} /> */}
        <View style={styles.content}>
          <Text style={styles.title}>Vorbeitung mitbringen</Text>
          <Text style={styles.body}>
            Hier finden Sie eine Liste von Dingen, die sie mitbringen sollten.
            Bitte beachten sie auch die Dinge, die ihr Arzt ihnen persönlich
            mitgeteilt hat.
          </Text>
        </View>

        {this.props.state.checklistReducer.Vorbereitung.map((todoItem, i) => {
          return (
            <TodoCard
              onPress={() => {
                this.props.check(i);
              }}
              checked={todoItem.checked}
              title={todoItem.title}
              description={todoItem.description}
              key={i}
            />
          );
        })}
      </ScrollView>
    );
  }
}

export default connect(
  state => ({ state }),
  {
    check,
    uncheck
  }
)(ChecklistDetailView);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F3F6'
  },
  header: {
    height: 164,
    backgroundColor: '#aaa',
    marginBottom: 64
  },
  content: {
    marginTop: 32,
    paddingHorizontal: 16
  },
  title: {
    color: '#2F2F2F',
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 17
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 32
  }
});
