import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NewMessageForm from './NewMessageForm';

export default class App extends Component {
  handleSend = (newMessage) => {
  }

  render() {
    return (
      <View>
        <NewMessageForm onSend={this.handleSend} />
      </View>
    );
  }
}
