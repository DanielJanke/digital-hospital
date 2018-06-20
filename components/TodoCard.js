import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import extStyles from '../assets/styles';

type Props = {
  onPress: () => void
};

export default class TodoCard extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  render() {
    const { date, flagColor, title, description, time, onPress } = this.props;
    const { active } = this.state;
    let source = '';
    active
      ? (source = require('../assets/todo-circle-filled.png'))
      : (source = require('../assets/todo-circle-empty.png'));
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ active: !this.state.active });
        }}
        style={styles.container}
      >
        <Image style={styles.checkbox} source={source} />
        <View style={styles.divider} />
        <View style={styles.contentContainer}>
          <Text style={extStyles.text.title}>{title}</Text>
          <Text style={{ ...extStyles.text.description, fontSize: 14 }}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    flexDirection: 'row',
    paddingRight: 16,
    alignItems: 'center',
    // height: 90,
    paddingVertical: 16,
    // marginBottom: 32,
    paddingHorizontal: 16,
    borderTopColor: '#E3E3E3',
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginTop: -2
  },
  divider: {
    alignSelf: 'stretch',
    width: 1.5,
    backgroundColor: '#E3E3E3',
    marginRight: 16
  },
  checkbox: {
    marginRight: 18,
    width: 36,
    height: 36
  }
});
