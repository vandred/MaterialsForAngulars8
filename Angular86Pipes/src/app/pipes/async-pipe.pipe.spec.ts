import { AsyncPipePipe } from './async-pipe.pipe';

describe('AsyncPipePipe', () => {
  it('create an instance', () => {
    const pipe = new AsyncPipePipe();
    expect(pipe).toBeTruthy();
  });
});
