import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import TodoCard from '../components/TodoCard';

import checklistdata from '../assets/checklists';

type Props = {};

export default class ChecklistDetailView extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true,
    tabBarHidden: true
  };

  _onPressItem = () => {};

  render() {
    const { date, flagColor, title, description, time, onPress } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header} />
        <View style={styles.content}>
          <Text style={styles.title}>Vorbeitung mitbringen</Text>
          <Text style={styles.body}>
            Hier finden Sie eine Liste von Dingen, die sie mitbringen sollten.
            Bitte beachten sie auch die Dinge, die ihr Arzt ihnen persönlich
            mitgeteilt hat.
          </Text>
        </View>

        {checklistdata.Vorbereitung.map((todoitem, i) => {
          return (
            <TodoCard
              title={todoitem.title}
              description={todoitem.description}
              key={i}
            />
          );
        })}
      </ScrollView>
    );
  }
}

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
