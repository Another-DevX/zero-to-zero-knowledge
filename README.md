# Zero to Zero Knowledge Workshop

[English](README.md) | [Español](README.es.md)

This workshop is designed to introduce you to the world of Zero Knowledge Proofs using Noir, a modern and powerful programming language for developing ZK applications.

## What is Noir?

Noir is a programming language specifically designed for creating zero knowledge applications. It is inspired by Rust and provides a modern and secure syntax for developing arithmetic circuits that can be compiled into zero knowledge proofs.

## Installation

### 1. Install Noir (Nargo)

The easiest way to develop with Noir is using Nargo, the CLI tool. Nargo allows you to create new projects, compile, run, and test Noir programs from the terminal.

To install Nargo, you can use the `noirup` installation script:

```bash
curl -L https://raw.githubusercontent.com/noir-lang/noirup/refs/heads/main/install | bash
noirup
```

Once installed, you can set up command completions for `nargo` in your shell.

### 2. Install the Proof Backend

After installing Noir, you need to install a proof backend to work with your Noir programs. Proof backends provide you with the ability to:
- Generate proofs
- Verify proofs
- Generate smart contracts
- And more...

In this workshop, we will use Barretenberg, a proof backend developed by Aztec Labs. To install it:

```bash
curl -L https://raw.githubusercontent.com/AztecProtocol/aztec-packages/refs/heads/master/barretenberg/bbup/install | bash
bbup
```

## Creating and Verifying Proofs

### Compiling and Executing

After writing your Noir program, you need to compile it and generate a witness. Here's how the process works:

1. First, use `nargo check` to generate a `Prover.toml` file where you'll specify your input values:

```bash
nargo check
```

2. Edit the `Prover.toml` file with your input values:

```toml
x = "1"
y = "2"
```

3. Compile and execute your Noir program with `nargo execute`:

```bash
nargo execute
```

This command will:
- Compile your Noir program (if not already compiled or if edited)
- Generate a witness file at `./target/witness-name.gz`
- Create compiled artifacts at `./target/your_project.json`

### Proving and Verifying

With your circuit compiled and witness generated, you can now generate and verify proofs using Barretenberg (BB):

1. Generate a proof:

```bash
bb prove -b ./target/your_project.json -w ./target/your_project.gz -o ./target
```

2. Generate a verification key:

```bash
bb write_vk -b ./target/your_project.json -o ./target
```

3. Verify the proof:

```bash
bb verify -k ./target/vk -p ./target/proof
```

For more advanced verification options, including generating Solidity verifiers for blockchain deployment, check out the [Noir documentation on Solidity verifiers](https://noir-lang.org/docs/how_to/how-to-solidity-verifier).

## Additional Resources

- [Official Noir Documentation](https://noir-lang.org/docs/)
- [Awesome Noir](https://github.com/noir-lang/awesome-noir) - Complete list of compatible proof backends
- [Noir GitHub Repository](https://github.com/noir-lang/noir)
- [Noir Discord Community](https://discord.gg/noir-lang)
- [Noir VS Code Extension](https://marketplace.cursorapi.com/items?itemName=noir-lang.vscode-noir) - Noir Language Support (v0.0.16) for syntax highlighting and autocompletion

## Workshop Structure

1. Introduction to Zero Knowledge Proofs
2. Noir Fundamentals
3. Basic Circuit Development
4. Smart Contract Integration
5. Practical Projects

## Prerequisites

- Basic programming knowledge
- Familiarity with basic cryptography concepts
- Git installed on your system
- A code editor (VS Code/Cursor recommended)

## Contributing

If you find any errors or have suggestions to improve this workshop, feel free to open an issue or submit a pull request.
