'use strict';

// A class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)

class RangeList {
  static _validateRangeInput(range) {
    if (!Array.isArray(range))
      throw new TypeError(`Invalid input range: expected array, got ${typeof range}`)

    const [from = 0, to = 0] = range;
    if (to < from)
      throw new TypeError(`Invalid input range, ${range}`);
  }

  /**
   * Compare ranges A and B
   * Return:
   *    1 if B > A
   *    0 if B collides A
   *   -1 if B < A
   */
  static _compareRanges(rangeA, rangeB) {
    if (rangeA[1] < rangeB[0]) return 1;
    if (rangeA[0] > rangeB[1]) return -1;
    return 0;
  }

  static _mergeRanges(rangeA, rangeB) {
    return [Math.min(rangeA[0], rangeB[0]), Math.max(rangeA[1], rangeB[1])];
  }

  static _textualRelation(relation) {
    if (relation === -1) return '>';
    if (relation === 0) return 'X';
    if (relation === 1) return '<';
  }

  constructor({ logger = console } = {}) {
    this.logger = logger;
    this.ranges = [];
  }

  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range = []) {
    RangeList._validateRangeInput(range);
    const updatedRanges = [];
    let rest = [];
    let candidate = range;

    for (let i = 0; i < this.ranges.length; i++) {
      const targetRange = this.ranges[i];
      const rangesRelation = RangeList._compareRanges(candidate, targetRange);
      // console.log(`-- rangesRelation for ${targetRange} is ${RangeList._textualRelation(rangesRelation)}`);
      if (rangesRelation === -1) {
        updatedRanges.push(targetRange);
        continue;
      }
      if (rangesRelation === 0) {
        candidate = RangeList._mergeRanges(candidate, targetRange);
        continue;
      }
      if (rangesRelation === 1) {
        rest = this.ranges.slice(i);
        break;
      }
    }

    updatedRanges.push(candidate);
    this.ranges = updatedRanges.concat(rest);
  }

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    RangeList._validateRangeInput(range);
    // TODO: implement this
  }

  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    const textualRanges = this.ranges.map(([a, b]) => `[${a}, ${b})`);
    const message = textualRanges.join(' ');
    this.logger && this.logger.info(message);

    return message;
  }
}

module.exports = RangeList;
