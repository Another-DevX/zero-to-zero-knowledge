# Sudoku Verification Exercise

[English](README.md) | [Español](README.es.md)

## Overview
This exercise implements a zero-knowledge proof for Sudoku puzzle verification. The goal is to verify that a given solution is valid for a Sudoku puzzle without revealing the solution itself.

## Privacy Aspects
In this exercise, we implement a zero-knowledge proof where:
- The initial puzzle is public (known cells)
- The proposed solution is private (known only to the prover)
- The verifier only needs to confirm that the solution is valid, without knowing the specific cell values

## Problem Statement
Given a Sudoku puzzle (with some cells filled and others empty) and a proposed solution, verify that:
1. The solution matches the puzzle where cells are already filled
2. Each row contains all numbers from 1 to 9 without repetition
3. Each column contains all numbers from 1 to 9 without repetition
4. Each 3x3 subgrid contains all numbers from 1 to 9 without repetition

## Implementation Details
- The Sudoku board is represented as an array of 81 elements (9x9 grid)
- Empty cells in the puzzle are represented by 0
- The solution must be a complete board with all cells filled (1-9)
- The verification should return `Field::from(1)` for valid solutions and `Field::from(0)` for invalid ones

## Tasks
1. Implement your own solution in `main.nr`
   - Create a function that verifies the validity of a Sudoku solution
   - Make sure to correctly define public and private parameters
   - Think about how to structure the verification

2. Understand the base code in `solution.nr`
   - Analyze how the solution is verified
   - Understand the role of each parameter in the verification
   - Identify which values are public and which are private

3. Run the existing tests
   - Verify that the example solution is valid
   - Understand why the test values work
   - Experiment by modifying the values to see how verification fails

4. Compare your implementation with the solution
   - Identify similarities and differences
   - Reflect on the efficiency and security of both approaches
   - Improve your implementation if necessary

5. Extend functionality (Optional)
   - Add additional validations
   - Implement error handling for invalid solutions
   - Create additional tests with different puzzles and solutions

6. Generate and verify a proof
   - Follow Noir's compilation and testing process
   - Verify that your circuit generates valid proofs
   - Experiment with different inputs to understand the circuit's limits
   - Resources: https://noir-lang.org/docs/getting_started/quick_start

## Testing
The exercise includes test cases for:
- A valid Sudoku solution
- An invalid solution with a duplicate row
- A puzzle with empty cells

## Hints
- Remember we're working with finite fields in Noir
- Arithmetic operations are modulo the field size
- Consider how to handle cases where numbers are very large

## Additional Resources
- [Sudoku](https://en.wikipedia.org/wiki/Sudoku)
- [Noir Documentation](https://docs.noir-lang.org/)

## Learning Objectives
- Understand how to implement zero-knowledge proofs for puzzle verification
- Learn to work with arrays and field elements in Noir
- Practice implementing complex verification logic in a privacy-preserving way 