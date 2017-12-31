/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';

export default class App extends Component {
  state = { messages: [] }

  handleSave(newMessage) {
    const { messages } = this.state;
    this.setState({ messages: [newMessage, ...messages] });
  }

  render() {
    const { messages } = this.state;
    return (
      <View>
        <NewMessageForm onSave={newMessage => this.handleSave(newMessage)} />
        <MessageList data={messages} />
      </View>
    );
  }
}
