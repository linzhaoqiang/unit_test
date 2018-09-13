import {reverseString} from '../../src/utils';

describe('first test', function() {
  it('test string reverse => true', function() {
    expect(reverseString('abc')).toBe('cba');
  });

  it('test string reverse => false', function() {
    expect(reverseString('abc')).not.toBe('dcba');
  });
});
  