/* AI generated code */

/* -----------------------------------------------
   Merkle tree Poseidon‑2 (BN254) – MAX_DEPTH = 10
   -----------------------------------------------
   Usage:
     npx ts-node merkle.ts 0xAbc... 0x123... 0x456...
   --------------------------------------------- */

   import { buildPoseidon } from "circomlibjs";
   
   // ------- configuración -------
   const MAX_DEPTH = 10;                   
   const ZERO = 0n;                        
   // ------------------------------
   
   type Proof = {
     proofLen: number;     
     proofIndices: number[];   
     proofSiblings: bigint[];  
     address: string;      
   };
   
   type TreeBuild = {
     root: bigint;
     proofs: Proof[];      
   };
   
   (async () => {
     const addresses = [
       "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
       "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
       "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
     ];

   
     const leaves: bigint[] = addresses.map(hexToField);
     if (leaves.length > 1 << MAX_DEPTH)
       throw new Error(`Máx ${1 << MAX_DEPTH} hojas (profundidad ${MAX_DEPTH})`);
   
     while (leaves.length < 1 << MAX_DEPTH) leaves.push(ZERO);
   
     const poseidon = await buildPoseidon();
     const treeLevels: bigint[][] = [leaves];
     let level = leaves;
   
     for (let h = 0; h < MAX_DEPTH; h++) {
       const parent: bigint[] = [];
       for (let i = 0; i < level.length; i += 2) {
         parent.push(poseidon.F.toObject(poseidon([level[i], level[i + 1]])));
       }
       treeLevels.push(parent);
       level = parent;
     }
     const root = treeLevels.at(-1)![0];
   
     const proofs: Proof[] = addresses.map((addr, idx) =>
       makeProof(idx, treeLevels, addr)
     );
   
     const out: TreeBuild = { root, proofs };
     console.log(JSON.stringify(out, (_k, v) => bigintToHex(v), 2));
   })();
   
   function makeProof(
     idx: number,
     tree: bigint[][],
     address: string
   ): Proof {
     const proofLen = MAX_DEPTH;
     const proofIndices = Array(MAX_DEPTH).fill(0);
     const proofSiblings = Array<bigint>(MAX_DEPTH).fill(ZERO);
   
     let currentIdx = idx;
     for (let h = 0; h < MAX_DEPTH; h++) {
       proofIndices[h] = currentIdx & 1;
       proofSiblings[h] = tree[h][currentIdx ^ 1];
       currentIdx >>= 1;
     }
     return { proofLen, proofIndices, proofSiblings, address };
   }
   
   function hexToField(hex: string): bigint {
     if (!/^0x[0-9a-fA-F]+$/.test(hex))
       throw new Error(`Dirección inválida: ${hex}`);
     const bi = BigInt(hex);
     const p =
       21888242871839275222246405745257275088548364400416034343698204186575808495617n;
     if (bi >= p) throw new Error(`Valor fuera del rango del campo: ${hex}`);
     return bi;
   }
   
   function bigintToHex(v: any) {
     return typeof v === "bigint" ? "0x" + v.toString(16) : v;
   }
   
