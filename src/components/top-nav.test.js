import React from 'react';
import {shallow} from 'enzyme';
// enzyme uses Jest
import {TopNav} from './top-nav';
import {restartGame, generateAuralUpdate} from '../actions';
// import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    // it('Should call onRestartGame when new game is clicked', () => {
    //     const callback = jest.fn();
    //     const wrapper = shallow(<TopNav onRestartGame={callback} />);
    //     const link = wrapper.find('.new');
    //     link.simulate('click', {preventDefault() {} } );
    //     // everything after the click event handler is syntax that enzyme uses
    //     // we are passing data through an event
    //     expect(callback).toHaveBeenCalled();
    // });

    it('Dispatches restartGame', () => {
        const dispatch = jest.fn();
// jest.fn() is used to make a spy, spies are small functions that keep a record of each time they have been called. 
// They are useful for testing callback functions
        const wrapper = shallow(<TopNav dispatch={dispatch}/>);
        const link = wrapper.find('.new');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(restartGame());
    });

    // it('Should call onGenerateAuralUpdate when Hear state of game is clicked', () => {
    //     const callback = jest.fn();
    //     const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    //     const link = wrapper.find('.status-link');
    //     link.simulate('click', {preventDefault() {} });
    //     expect(callback).toHaveBeenCalled();
    // });

    it('Dispatches generateAuralUpdate', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch}/>);
        const link = wrapper.find('.status-link');
        link.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(generateAuralUpdate());
    });
});