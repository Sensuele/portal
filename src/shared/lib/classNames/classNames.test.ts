import { classNames } from "./classNames"

describe('classNames', () => {
    test('only first class', () => {
        expect(classNames('someClass')).toBe('someClass')
    });

    test('WITH ADDITIONAL CLASS', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })
})