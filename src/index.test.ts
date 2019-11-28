import { isNil, isEmpty } from './index';
import assert from  'assert';

describe('isNil', () => {
    const isNilTest = (arg: any, expected: boolean, given: string) => it(`it should return ${expected} given ${given}`, () => {
        assert.equal(isNil(arg), expected);
    });
    isNilTest(null, true, 'null');
    isNilTest(undefined, true, 'undefined');
    isNilTest('', false, 'empty string');
    isNilTest(0, false, '0');
    isNilTest([], false, 'empty array');
});

describe('isEmpty', () => {
    const isEmptyTest = (arg: any, expected: boolean, given: string) => it(`it should return ${expected} given ${given}`, () => {
        assert.equal(isEmpty(arg), expected);
    });
    isEmptyTest(null, true, 'null');
    isEmptyTest(undefined, true, 'undefined');
    isEmptyTest('', true, 'empty string');
    isEmptyTest(0, true, '0');
    isEmptyTest(1, false, '1');
    isEmptyTest([], false, 'empty array');
    isEmptyTest({}, false, 'empty object');
});