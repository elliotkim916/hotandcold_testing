import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const gameReducer = (state=initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: Math.round(Math.random() * 100) + 1
        });
    } 
    
    if (action.type === MAKE_GUESS) {
        let guess, feedback;
        
        guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            feedback = 'Please enter a valid number.';
            
            return Object.assign({}, state, {
                feedback,
                guesses: [...state.guesses, guess]
            });
        }


        const difference = Math.abs(guess - state.correctAnswer);
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
            feedback = 'You\'re Warm...';
        } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        } else {
            feedback = 'You Got It!';
        }

        return Object.assign({}, state, {
            feedback,
            guesses: [...state.guesses, guess]
        })
    } 
    
    if (action.type === GENERATE_AURAL_UPDATE) {
        const pluralize = state.guesses.length !== 1;
        let  auralStatus = `Here's the status of the game right now: ${state.feedback} You've made ${state.guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
        if (state.guesses.length > 0) {
            auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${state.guesses.reverse().join(', ')}`;
            return Object.assign({}, state, {
            auralStatus: auralStatus
            });
        }
    }
    return state;
};

// export const gameReducer = (state=initialState, action) => {
//     if (action.type === RESTART_GAME) {
//         return Object.assign({}, state, {
//             guesses: state.guesses,
//             feedback: state.feedback,
//             auralStatus: state.auralStatus,
//             correctAnswer: state.correctAnswer
//         });
//     } else if (action.type === MAKE_GUESS) {
//         action.guess = parseInt(action.guess, 10);
//         return Object.assign({}, state, {
//             guesses: [...state.guesses, action.guess] 
//         });
//         if (isNaN(action.guess)) {
//             return Object.assign({}, state, {
//                 feedback: 'Please enter a valid number'
//             });
//         }
//         const difference = Math.abs(action.guess - state.correctAnswer);
//         if (difference >= 50) {
//             return Object.assign({}, state, {
//                 feedback: 'You\'re Ice Cold...'
//             });
//         } else if (difference >= 30) {
//             return Object.assign({}, state, {
//                 feedback: 'You\'re Cold...'
//             });
//         } else if (difference >= 10) {
//             return Object.assign({}, state, {
//                 feedback: 'You\'re Warm...'
//             });
//         } else if (difference >= 1) {
//             return Object.assign({}, state, {
//                 feedback: 'You\'re Hot!'
//             });
//         } else {
//             return Object.assign({}, state, {
//                 feedback: 'You got it!'
//             });
//         }
//     } else if (action.type === GENERATE_AURAL_UPDATE) {
//         const pluralize = state.guesses.length !== 1;
//         let  auralStatus = `Here's the status of the game right now: ${state.feedback} You've made ${state.guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
//         if (state.guesses.length > 0) {
//             auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${state.guesses.reverse().join(', ')}`;
//             return Object.assign({}, state, {
//             auralStatus: auralStatus
//             });
//         }
//     }