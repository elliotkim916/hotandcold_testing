import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
    it('renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('renders number of guesses', () => {
        const TEST_GUESSCOUNT = 10;
        const wrapper = shallow(<GuessCount guessCount={TEST_GUESSCOUNT} />);
        expect(wrapper.text()).toEqual(`You've made ${TEST_GUESSCOUNT} guesses!`);
    });
});