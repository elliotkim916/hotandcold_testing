import {createStore} from 'redux';

import {gameReducer} from './reducers';

export default createStore(gameReducer);

// Here we are creating a store using the createStore method,
// telling it to use the gameReducer to handle any actions that are dispatched