import {gameReducer} from './index';
import {restartGame, makeGuess, generateAuralUpdate} from '../actions';

describe('gameReducer', () => {
    // setup some dummy data
    const testData = {
        guesses: [0, 1, 2],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: 100
    };

    it('Should set the initial state when nothing is passed in', () => {
        const state = gameReducer(undefined, {type: '__UNKNOWN'});
        // when undefined, JS calls the initial state in the reducer
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = gameReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toEqual(currentState);
    });

    describe('restartGame', () => {
        it('should clear the state', () => {
            let state = testData;
            state = gameReducer(state, restartGame());
            expect(state).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: state.correctAnswer
            });
        });
    });

    describe('makeGuess', () => {
        it('should make a guess', () => {
            let state = testData;
            let testNumber = 10;
            state = gameReducer(state, makeGuess(testNumber));
            expect(state.guesses).toEqual([0, 1, 2, 10]);
            expect(state.feedback).toEqual('You\'re Ice Cold...');
            
            state = gameReducer(state, makeGuess(70));
            expect(state.guesses).toEqual([0, 1, 2, 10, 70]);
            expect(state.feedback).toEqual('You\'re Cold...');

            state = gameReducer(state, makeGuess(90));
            expect(state.guesses).toEqual([0, 1, 2, 10, 70, 90]);
            expect(state.feedback).toEqual('You\'re Warm...');

            state = gameReducer(state, makeGuess(99));
            expect(state.guesses).toEqual([0, 1, 2, 10, 70, 90, 99]);
            expect(state.feedback).toEqual('You\'re Hot!');

            state = gameReducer(state, makeGuess(100));
            expect(state.guesses).toEqual([0, 1, 2, 10, 70, 90, 99, 100]);
            expect(state.feedback).toEqual('You Got It!');
        });
    });

    describe('generateAuralUpdates', () => {
        it('can provide aural updates', () => {
            let state = {
                guesses: [0, 1, 2, 90],
                feedback: "You're Ice Cold...",
                auralStatus: '',
                correctAnswer: 10
            };
        
            state = gameReducer(state, generateAuralUpdate());
            expect(state.auralStatus).toEqual(
                "Here's the status of the game right now: You're Ice Cold... You've made 4 guesses. In order of most- to least-recent, they are: 90, 2, 1, 0"
            );
        });
    });
});

