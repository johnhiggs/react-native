import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NewMessageForm from './NewMessageForm';

export default class App extends Component {
  handleSave = (newMessage) => {
  };

  render() {
    return (
      <View>
        <NewMessageForm onSave={this.handleSave} />
      </View>
    );
  }
}
