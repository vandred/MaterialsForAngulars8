import { MyPipeAsyncPipe } from './my-pipe-async.pipe';

describe('MyPipeAsyncPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPipeAsyncPipe();
    expect(pipe).toBeTruthy();
  });
});
