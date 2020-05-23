import { sortBubble, sortBubbleOptimized } from '../../sort/bubble';

describe('Bubble Sort', () => {
    test('default', () => {
        const nums = [20, 40, 50, 10, 30];
        expect(sortBubble(nums)).toStrictEqual([10, 20, 30, 40, 50]);
    });

    test('optimization', () => {
        const nums = [20, 40, 50, 10, 30];
        expect(sortBubbleOptimized(nums)).toStrictEqual([10, 20, 30, 40, 50]);
    });
});