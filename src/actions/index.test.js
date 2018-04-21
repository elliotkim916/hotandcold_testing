import {RESTART_GAME, restartGame, MAKE_GUESS, makeGuess, GENERATE_AURAL_UPDATE, generateAuralUpdate} from './index';

describe('restartGame', () => {
    it('should restart the game', () => {
        const action = restartGame();
        expect(action.type).toEqual(RESTART_GAME);
    });
});

describe('makeGuess', () => {
    it('should make a guess', () => {
        const guess = 10;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});

describe('generateAuralUpdate', () => {
    it('should provide aural update', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});