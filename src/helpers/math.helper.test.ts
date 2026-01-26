import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

// test realiza una prueba individual
test('should run a test', () => {
    console.log('Hola mundo');
});

// describe permite agrupar varias pruebas relacionadas
describe('add', () => {

    test('should add two positive numbers', () => {
        // Arrange
        const a = 1;
        const b = 2;

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(a + b);

    });

    test('should add two negative numbers', () => {
        // Arrange
        const a = -2;
        const b = -4;

        // Act
        const result = add(a, b);

        // Assert
        expect(result).toBe(a + b);
    });

});

describe('subtract', () => {

    test('should subtract two positive numbers', () => {
        // Arrange
        const a = 2;
        const b = 4;

        // Act
        const result = subtract(a, b);

        // Assert
        expect(result).toBe(a - b);
    });

    test('should subtract two negative numbers', () => {
        // Arrange
        const a = -2;
        const b = -4;

        // Act
        const result = subtract(a, b);

        // Assert
        expect(result).toBe(a - b);
    });
});

describe('multiply', () => {

    test('should multiply two positive numbers', () => {
        // Arrange
        const a = 2;
        const b = 4;

        // Act
        const result = multiply(a, b);

        // Assert
        expect(result).toBe(a * b);
    });

    test('should multiply two negative numbers', () => {
        // Arrange
        const a = -2;
        const b = -4;

        // Act
        const result = multiply(a, b);

        // Assert
        expect(result).toBe(a * b);
    });
});