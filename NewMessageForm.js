import React, { Component } from 'react';
import {
  Button,
  TextInput,
  View,
} from 'react-native';

export default class NewMessageForm extends Component {
  state = { inputText: '' }

  handleChangeText(text) {
    this.setState({ inputText: text });
  }

  handleSave() {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);

    this.setState({ inputText: '' });
  }

  render() {
    const { inputText } = this.state;
    return (
      <View>
        <TextInput
          value={inputText}
          testID="messageText"
          onChangeText={text => this.handleChangeText(text)}
        />
        <Button
          title="Save"
          testID="saveButton"
          onPress={() => this.handleSave()}
        />
      </View>
    );
  }
}
