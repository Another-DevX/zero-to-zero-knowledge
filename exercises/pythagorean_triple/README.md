# Workshop: Pythagorean Triple Verification

[English](README.md) | [Español](README.es.md)

## Objective
In this exercise, you will learn to implement a verification of Pythagorean triples using Noir, a programming language for zero-knowledge arithmetic circuits.

## What is a Pythagorean Triple?
A Pythagorean triple is a set of three positive integers (a, b, c) that satisfy the Pythagorean theorem equation:
```
a² + b² = c²
```

## Privacy Aspects
In this exercise, we implement a zero-knowledge proof where:
- `a` and `b` are private values (known only to the prover)
- `c` is a public value (known to the verifier)
- The verifier only needs to know that there exists a pair (a,b) that satisfies the equation, without knowing the specific values of a and b

## The Exercise
In this exercise, we will implement a function that verifies if three numbers form a valid Pythagorean triple. The function:
- Takes three numbers as input (a, b, c)
- Verifies if a² + b² = c²
- Returns an error if the equation is not satisfied

## Base Code
The `solution.nr` file contains a basic implementation that:
1. Takes three parameters: `a` and `b` (private) and `c` (public)
2. Calculates a² + b² while maintaining the privacy of a and b
3. Verifies that the result equals c²
4. The verifier can only confirm that there exists a pair (a,b) that satisfies the equation, without knowing the specific values

## Tasks
1. Try to make your own implementation in `main.nr`
2. Compare it with the code in `solution.nr`. Did you arrive at a correct answer?
3. Understand the base code in `solution.nr`
4. Run the existing test that verifies the triple (3,4,5)
5. Try to add more tests with other known Pythagorean triples
6. (Optional) Modify the code to handle error cases
7. Generate a proof and verify it: https://noir-lang.org/docs/getting_started/quick_start

## Common Pythagorean Triples
Some Pythagorean triples to test:
- (3, 4, 5)
- (5, 12, 13)
- (6, 8, 10)
- (8, 15, 17)

## Hints
- Remember we're working with finite fields in Noir
- Arithmetic operations are modulo the field size
- Consider how to handle cases where numbers are very large

## Additional Resources
- [Pythagorean Triples](https://en.wikipedia.org/wiki/Pythagorean_triple)
- [Noir Documentation](https://docs.noir-lang.org/)
