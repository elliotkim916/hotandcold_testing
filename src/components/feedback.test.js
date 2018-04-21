import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        // shallow function renders Feedback component
        shallow(<Feedback />);
    });

    it('Renders test feedback', () => {
        const TEST_FEEDBACK = "foo";
        const wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
        expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
    });
});