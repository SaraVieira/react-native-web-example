import React, { Component } from 'react'
import {
  Alert,
  Platform,
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', password: '' }
  }
  onSubmit = () => {
    if (Platform.OS === 'web') {
      window.alert('Sup?')
    } else {
      Alert.alert('Submit!', 'Sup?')
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.main}>
        <View style={styles.modal}>
          <Text style={styles.text}>Login</Text>
          <TextInput
            style={styles.input}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder="Password"
          />
          <TouchableHighlight title="Login" style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default Login

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#2CC197',
    shadowColor: '#2CC197',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 7,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  modal: {
    padding: 20,
    width: 315,
    height: 320,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(86, 92, 100, 0.711164)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 6
  },
  text: {
    fontWeight: '600',
    lineHeight: 34,
    fontSize: 24,
    textAlign: 'center',
    color: '#353A41',
    marginBottom: 40
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#DCE6F0',
    borderBottomWidth: 1,
    width: 275,
    height: 40,
    marginBottom: 35
  }
})
