# RangeList

Implementation of RangeList class.

## Requirements

+ NodeJS v6+

## Usage

1. Install NodeJS dependencies with `npm install`;
2. Launch test suite to run test cases, described in requirements `npm test`;

## Implementation notes

I made this class perfectly compatible with provided requirements, still added constructor parameter `{ logger }` that provides result printer (default to native `console` object). 

This approach simplifies unit-testing of requested tool, as well as we can disable unwanted prints and just use function return value for assertions.

## Initial requirement text:

```
// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

/**
 * 
 * NOTE: Feel free to add any extra member variables/functions you like.
 */

class RangeList {
  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range) {
    // TODO: implement this
  }

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    // TODO: implement this
  }

  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    // TODO: implement this
  }
}

// Example run
const rl = new RangeList();

rl.add([1, 5]);
rl.print();
// Should display: [1, 5)

rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)

rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)

rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)
```
