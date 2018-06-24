import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import extStyles from '../assets/styles';

export default class ChatbotButton extends Component<Props> {
  render() {
    const { text, onPress, style } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[extStyles.text.chatbotButton, style]}
      >
        <Text style={extStyles.text.chatbotButtonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
