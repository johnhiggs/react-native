import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';

import NewMessageForm from '../../NewMessageForm';

describe('NewMessageForm', () => {
  function testID(id) {
    return cmp => cmp.props().testID === id;
  }

  describe('clicking send', () => {
    const messageText = 'Hello world';

    let sendHandler;
    let wrapper;

    beforeEach(() => {
      sendHandler = stub();
      wrapper = shallow(<NewMessageForm onSend={sendHandler} />);

      wrapper.findWhere(testID('messageText'))
        .simulate('changeText', messageText);
      wrapper.findWhere(testID('sendButton'))
        .simulate('press');
    });

    it('clears the message field', () => {
      expect(wrapper.findWhere(testID('messageText')).props().value)
        .to.equal('');
    });

    it('calls the send handler', () => {
      expect(sendHandler).to.have.been.calledWith(messageText);
    });
  });
});
