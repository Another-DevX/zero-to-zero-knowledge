# Workshop: ECDSA Signature Validation

[English](README.md) | [Español](README.es.md)

## Objective
In this exercise, you will learn to implement ECDSA (Elliptic Curve Digital Signature Algorithm) signature verification using Noir, a programming language for zero-knowledge arithmetic circuits.

## What is an ECDSA Digital Signature?
An ECDSA digital signature is a cryptographic scheme that allows:
- Verifying the authenticity of a message
- Ensuring the message hasn't been modified
- Confirming the signer's identity

## Privacy Aspects
In this exercise, we implement a zero-knowledge proof where:
- The hashed message is private
- The public key (x,y) is public
- The signature is public

> **Important note about hashed message handling:**
> In this simplified exercise, we take the hashed message as a private input. In a real production scenario:
> 1. The original message would be private (to protect its content)
> 2. The message hash would be public (as a commitment to the message)
> 3. The prover would demonstrate knowledge of a message that:
>    - When hashed produces the public hash
>    - Was signed by the holder of the public key
>
> This would allow performing additional validations on the message content privately, such as:
> - Verifying specific token permissions
> - Validating buy/sell orders
> - Checking transaction limits
> - Verifying timestamps or temporal conditions
>
> These additional validations are not implemented in this workshop for simplicity, but they are fundamental in real zero-knowledge applications.

## The Exercise
In this exercise, we will implement a function that verifies if an ECDSA signature is valid. The function:
- Takes a hashed message, public key, and signature as input
- Verifies if the signature is valid for the message using the public key
- Returns an error if the signature is invalid

## Base Code
The `solution.nr` file contains a basic implementation that:
1. Takes four parameters: `hashed_message`, `pub_key_x`, `pub_key_y`, and `signature`
2. Uses the `verify_signature` function from Noir's standard library
3. Verifies that the signature is valid for the hashed message using the public key
4. The verifier can confirm the signature is valid without knowing the private key

## Tasks
1. Try to make your own implementation in `main.nr`
   - Create a function that verifies ECDSA signatures
   - Make sure to correctly define public and private parameters
   - Think about how to structure the verification

2. Understand the base code in `solution.nr`
   - Analyze how the signature is verified using the `verify_signature` function
   - Understand the role of each parameter in the verification
   - Identify which values are public and which are private

3. Run the existing test
   - Verify that the example signature is valid
   - Understand why the test values work
   - Experiment by modifying the values to see how verification fails

4. Compare your implementation with the solution
   - Identify similarities and differences
   - Reflect on the efficiency and security of both approaches
   - Improve your implementation if necessary

5. Extend functionality (Optional)
   - Add additional validations on the hashed message
   - Implement error handling for invalid signatures
   - Create additional tests with different messages and signatures

6. Generate and verify a proof
   - Follow Noir's compilation and testing process
   - Verify that your circuit generates valid proofs
   - Experiment with different inputs to understand the circuit's limits
   - Resources: https://noir-lang.org/docs/getting_started/quick_start

## Signature Example
The test includes an example with:
- Hashed message: `0x3a73f4123a5cd2121f21cd7e8d358835476949d035d9c2da6806b4633ac8c1e2`
- Public key X: `0xa0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7`
- Public key Y: `0x893aba425419bc27a3b6c7e693a24c696f794c2ed877a1593cbee53b037368d7`
- Signature: `0xe5081c80ab427dc370346f4a0e31aa2bad8d9798c38061db9ae55a4e8df454fd28119894344e71b78770cc931d61f480ecbb0b89d6eb69690161e49a715fcd55`

## Hints
- Remember we're working with the secp256k1 elliptic curve
- Signature verification operations are complex and implemented in the standard library
- Consider how to handle cases where input values are invalid

## Additional Resources
- [ECDSA](https://en.wikipedia.org/wiki/ECDSA)
- [Secp256k1 curve](https://en.bitcoin.it/wiki/Secp256k1)
- [Noir Documentation](https://docs.noir-lang.org/)

## Front-end Utility for Signature Generation
To facilitate signature generation and obtain the necessary values in the correct format, we've included a web utility in the `utils` directory. This application allows you to:

1. Generate a random wallet with its public and private key
2. Sign messages and obtain:
   - The message hash in 32-byte format
   - The X and Y coordinates of the public key
   - The signature in 64-byte format (r,s)

### Steps to use the utility:

1. Navigate to the utility directory:
   ```bash
   cd utils
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at the indicated URL (usually http://localhost:5173)

5. In the web interface:
   - Click "Generate Random Wallet" to create a new wallet
   - Enter a message in the text field
   - Click "Sign Message" to generate the signature
   - Copy the generated values (hash, X/Y coordinates, signature) by clicking on them
   - The values will be copied in the correct format for use in your Noir implementation

### Note about generated values:
- The message hash is generated using keccak256
- Public key coordinates are in 32-byte format
- The signature is in 64-byte format (32 bytes for r + 32 bytes for s)
- All values can be copied directly by clicking on them
