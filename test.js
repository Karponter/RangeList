'use strict';

const assert = require('assert');
const RangeList = require('./RangeList');

describe('RangeList class', () => {
  const rl = new RangeList({ logger: null });

  it('.add([1, 5]), should display: [1, 5)', () => {
    rl.add([1, 5]);
    const expectableText = '[1, 5)';
    const text = rl.print();
    assert.strictEqual(text, expectableText);
  });

  it('.add([10, 20]), should display: [1, 5) [10, 20)', () => {
    rl.add([10, 20]);
    const expectableText = '[1, 5) [10, 20)';
    const text = rl.print();
    assert.strictEqual(text, expectableText);
  });

  it('.add([20, 20]), should display: [1, 5) [10, 20)', () => {
    rl.add([20, 20]);
    const expectableText = '[1, 5) [10, 20)';
    const text = rl.print();
    assert.strictEqual(text, expectableText);
  });

  it('.add([20, 21]), should display: [1, 5) [10, 21)', () => {
    rl.add([20, 21]);
    const expectableText = '[1, 5) [10, 21)';
    const text = rl.print();
    assert.strictEqual(text, expectableText);
  });

  it('.add([2, 4]), should display: [1, 5) [10, 21)', () => {
    rl.add([2, 4]);
    const expectableText = '[1, 5) [10, 21)';
    const text = rl.print();
    assert.strictEqual(text, expectableText);
  });

  it('.add([3, 8]), should display: [1, 8) [10, 21)', () => {
    rl.add([3, 8]);
    const expectableText = '[1, 8) [10, 21)';
    const text = rl.print();
    assert.strictEqual(text, expectableText);
  });

  it('.remove([10, 10]), should display: [1, 8) [10, 21)', () => {
    rl.remove([10, 10]);
    const expectableText = '[1, 8) [10, 21)';
    const text = rl.print();
    assert.strictEqual(text, expectableText);
  });

  it('.remove([10, 11]), should display: [1, 8) [11, 21)', () => {
    rl.remove([10, 11]);
    const expectableText = '[1, 8) [11, 21)';
    const text = rl.print();
    assert.strictEqual(text, expectableText);
  });

  it('.remove([15, 17]), should display: [1, 8) [11, 15) [17, 21)', () => {
    rl.remove([15, 17]);
    const expectableText = '[1, 8) [11, 15) [17, 21)';
    const text = rl.print();
    assert.strictEqual(text, expectableText);
  });

  it('.remove([3, 19]), should display: [1, 3) [19, 21)', () => {
    rl.remove([3, 19]);
    const expectableText = '[1, 3) [19, 21)';
    const text = rl.print();
    assert.strictEqual(text, expectableText);
  });

});
