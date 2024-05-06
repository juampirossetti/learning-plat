import { someFunction } from './test-lib';

describe('someFunction', () => {
  it('should work', () => {
    expect(someFunction()).toEqual('some function');
  });
});
