import { addRandomNulls } from './addRandomNulls';

describe('addRandomNulls', () => {
    it('return arr', () => {
        const res = addRandomNulls([]);

        expect(res).toBe([]);
    });
});
