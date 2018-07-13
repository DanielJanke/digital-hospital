import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

import TouchID from 'react-native-touch-id';
import {
  connect
} from 'react-redux';
import {
  signIn
} from '../redux/Auth';
import ChatbotButton from '../components/ChatbotButton';
import extStyles from '../assets/styles';

type Props = {};

class LoginView extends Component < Props > {
  constructor(props) {
    super(props);
  }

  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'light'
  };

  componentDidMount() {
    // this._handleLogin();
  }

  _handleLogin = touchIdOnError => {
    this.props.signIn(touchIdOnError);
  };

  _touchIdOnError = () => {
    this.ref._textInput.focus();
  };

  render() {
    if (this.props.state.error) {
      this.refs._textInput.focus();
    }
    return ( <
      View style = {
        styles.container
      } >
      <
      ImageBackground style = {
        styles.imageBackground
      }
      source = {
        require('../assets/chatbackground.png')
      } >
      <
      Image style = {
        styles.logo
      }
      source = {
        require('../assets/ukb_logo_white.png')
      }
      /> <
      Text style = {
        styles.loginText
      } > Herzlich Willkommen, {
        '\n'
      }
      Max < /Text> <
      TextInput style = {
        styles.passwordInput
      }
      ref = "_textInput"
      placeholder = "Passwort" /
      >
      <
      ChatbotButton onPress = {
        this._handleLogin
      }
      style = {
        styles.loginButton
      }
      text = "Einloggen mit TouchID"
      text = {
        this.props.state.error ? 'Einloggen' : 'Einloggen mit TouchID'
      }
      /> <
      /ImageBackground> <
      /View>
    );
  }
}

export default connect(
  state => ({
    state
  }), {
    signIn
  }
)(LoginView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    marginTop: 72,
    marginBottom: 104
  },
  loginButton: {
    alignSelf: 'flex-end',
    marginRight: 48
  },
  imageBackground: {
    width: 414,
    flex: 1,
    alignItems: 'center'
  },
  loginText: {
    alignSelf: 'flex-start',
    marginLeft: 48,
    ...extStyles.text.loginText,
    marginBottom: 40
  },
  passwordInput: {
    marginHorizontal: 48,
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff',
    marginBottom: 32,
    paddingBottom: 4
  }
});
