import testFunction from './init';

describe('test index', () => {
    it('should multiplicate numbers ', () => {
        expect(testFunction(5, 4)).toBe(20);
    });
});
