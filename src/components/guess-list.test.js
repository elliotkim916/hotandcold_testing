import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {
   it('Renders without crashing', () => {
       shallow(<GuessList guesses={[]}/>);
   });

   it('Renders all guesses', () => {
       const TEST_GUESSES = [1, 2, 3, 4, 5];
       const wrapper = shallow(<GuessList guesses={TEST_GUESSES}/>);
       const listItems = wrapper.find('li');
       expect(listItems.length).toEqual(TEST_GUESSES.length);
       TEST_GUESSES.forEach((value, index) => {
           expect(listItems.at(index).text()).toEqual(value.toString());
       });
   });
});