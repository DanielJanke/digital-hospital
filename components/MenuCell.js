import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import extStyles from '../assets/styles';

type Props = {
  title: string
};

export default class MenuCell extends Component<Props> {
  render() {
    const { title } = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={extStyles.text.title}>{title}</Text>
        <Image source={require('../assets/icons/rightArrow.png')} />
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
    marginTop: -2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  divider: {
    alignSelf: 'stretch',
    width: 1.5,
    backgroundColor: '#E3E3E3',
    marginRight: 16
  },
  checkbox: {
    marginRight: 18,
    width: 32,
    height: 32
  }
});
