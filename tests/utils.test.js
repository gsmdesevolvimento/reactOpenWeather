import { getLabelsByLanguage } from '../src/js/utils';

describe('Utils', () => {
  describe('getLabelsByLanguage', () => {
    test('return the labels object corresponding to the language', () => {
      const labels = getLabelsByLanguage('es');
      expect(labels).toEqual({ wind: 'Vento', humidity: 'Uminidade' });
    });
  });
});
