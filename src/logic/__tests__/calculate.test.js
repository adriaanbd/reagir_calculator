import calculate from '../calculate';

describe('when a symbol is pressed', () => {
  describe('if it is the AC button', () => {
    it('returns a state with null values', () => {
      const state = { total: '10', next: '5', operator: 'X' };
      const newState = { total: null, next: null, operator: null };
      const result = calculate(state, 'AC');
      expect(result).toEqual(newState);
    });
  });

  describe('if it is the equal button', () => {
    describe('given next or operation is not null', () => {
      it('sets the result of the operate in total, resets next and operator and returns state', () => {
        const state = { total: '5', next: '5', operator: 'X' };
        const result = calculate(state, '=');
        const expected = { total: '25', next: null, operator: null };
        expect(result).toEqual(expected);
      });
    });

    describe('given next or operation is null', () => {
      it('returns en empty object literal', () => {
        const state = { total: '5', next: '5', operator: null };
        const result = calculate(state, '=');
        expect(result).toEqual({});
      });
    });
  });
});

describe('when a number is pressed', () => {
  describe('given there isn\'t an operation in state', () => {
    describe('and there is no next value in state', () => {
      it('sets next to number and returns state', () => {
        const state = { total: null, next: null, operator: null };
        const result = calculate(state, '5');
        const expected = { total: null, next: '5', operator: null };
        expect(result).toEqual(expected);
      });
    });

    describe('and there is a next value in state', () => {
      it('concatenates the value in next with number and returns state', () => {
        const state = { total: '10', next: '5', operator: null };
        const result = calculate(state, '5');
        const expected = { total: '10', next: '55', operator: null };
        expect(result).toEqual(expected);
      });
    });
  });

  describe('given there is an operation in state', () => {

    describe('and there is no next value in state', () => {
      it('sets value in next with number and returns state', () => {
        const state = { total: '5', next: null, operator: 'X' };
        const result = calculate(state, '5');
        expect(result).toEqual({ ...state, next: '5' });
      });
    });

    describe('and there is a next value in state', () => {
      it('sets value in next with number and returns state', () => {
        const state = { total: '5', next: '5', operator: 'X' };
        const result = calculate(state, '5');
        expect(result).toEqual({ ...state, next: '55' });
      });
    });
  });
});
