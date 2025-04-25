# Merkle Tree Verification

This workshop will guide you through implementing a Merkle tree verification system in Noir. You'll learn how to verify that a given entry belongs to a Merkle tree using a proof.

## Learning Objectives

- Understand how Merkle trees work
- Learn how to verify Merkle proofs
- Implement a binary Merkle tree verification system
- Use the Poseidon hash function for tree construction

## Exercise

Your task is to implement the `main` function in `src/main.nr` that verifies a Merkle proof. The function should:

1. Take an entry, proof length, proof indices, proof siblings, and expected root
2. Use the `binary_merkle_root` function to compute the actual root
3. Compare the computed root with the expected root
4. Return both the entry and the computed root if verification succeeds

## Implementation Details

- The Merkle tree has a fixed depth of 10
- Use the Poseidon hash function (poseidon2) for hashing
- Proof indices are binary (0 for left, 1 for right)
- The function should return both the entry and the computed root

## Testing

The test case in `src/main.nr` provides a complete example with:
- A sample entry
- Proof length of 10
- Proof indices
- Proof siblings
- Expected Merkle root

Run the tests to verify your implementation:
```bash
nargo test
```

## Solution

After you've completed the exercise, you can check the solution in `src/solution.nr`. 