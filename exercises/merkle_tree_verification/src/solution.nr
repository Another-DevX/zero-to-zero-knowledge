use binary_merkle_root::binary_merkle_root;
use std::hash::poseidon::bn254::hash_2 as poseidon2;
// Maximum depth of the Merkle Tree.
pub global MAX_DEPTH: u32 = 10;

fn main(
    entry: Field,
    merkle_proof_length: pub u32,
    merkle_proof_indices: [u1; MAX_DEPTH],
    merkle_proof_siblings: [Field; MAX_DEPTH],
    expected_merkle_root: pub Field,
) -> pub (Field, Field) {
    let merkle_root = binary_merkle_root(
        poseidon2,
        entry,
        merkle_proof_length,
        merkle_proof_indices,
        merkle_proof_siblings,
    );


    assert(merkle_root == expected_merkle_root);

    (entry, merkle_root)
}


