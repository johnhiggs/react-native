import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

import NewMessageForm from '../../NewMessageForm';

describe('NewMessageForm', () => {
  function testID(id) {
    return cmp => cmp.props().testID === id;
  }

  describe('clicking send', () => {
    const messageText = 'Hello world';

    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<NewMessageForm />);

      wrapper.findWhere(testID('messageText'))
        .simulate('changeText', messageText);
      wrapper.findWhere(testID('sendButton'))
        .simulate('press');
    });

    it('clears the message field', () => {
      expect(wrapper.findWhere(testID('messageText')).props().value)
        .to.equal('');
    });
  });
});
