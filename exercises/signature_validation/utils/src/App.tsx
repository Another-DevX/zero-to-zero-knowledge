import { useState } from 'react';
import { ethers, getBytes, hexlify, keccak256, toUtf8Bytes } from 'ethers';
import './App.css';
import { SigningKey } from 'ethers';
import { Signature } from 'ethers';

function App() {
  const [message, setMessage] = useState('');
  const [hash, setHash] = useState('');
  const [signature, setSignature] = useState('');
  const [publicKeyX, setPublicKeyX] = useState<number[]>([]);
  const [publicKeyY, setPublicKeyY] = useState<number[]>([]);
  const [privateKey, setPrivateKey] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  function bytesToHex(bytes: number[]): string {
    return bytes.map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  function hexToBytesArray(hex: string, size = 32): number[] {
    hex = hex.replace(/^0x/, '').padStart(size * 2, '0');
    return Array.from({ length: size }, (_, i) =>
      parseInt(hex.slice(i * 2, i * 2 + 2), 16)
    );
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const formatArrayAsString = (arr: number[]): string => {
    const hexValues = arr.map(
      (num) => `0x${num.toString(16).padStart(2, '0')}`
    );
    return `[${hexValues.join(', ')}]`;
  };

  const formatHexAsString = (hex: string): string => {
    const pairs = hex.match(/.{1,2}/g) || [];
    const hexValues = pairs.map((pair) => `0x${pair}`);
    return `[${hexValues.join(', ')}]`;
  };

  const generateRandomWallet = () => {
    try {
      // Generar una nueva wallet aleatoria
      const wallet = ethers.Wallet.createRandom();
      const signingKey = new SigningKey(wallet.privateKey);
      const fullPubHex = signingKey.publicKey; // "0x04 + X + Y"
      const pubBytes = getBytes(fullPubHex);

      const xBytes = pubBytes.slice(1, 33);
      const yBytes = pubBytes.slice(33, 65);

      const xArr = Array.from(xBytes);
      const yArr = Array.from(yBytes);

      setPublicKeyX(xArr as number[]);
      setPublicKeyY(yArr as number[]);
      setPrivateKey(wallet.privateKey);
      setWalletAddress(wallet.address);

      console.log('Nueva wallet generada:', wallet.privateKey);
      console.log('Dirección de la wallet:', wallet.address);
    } catch (error) {
      console.error('Error al generar wallet:', error);
    }
  };

  const handleSign = async () => {
    try {
      if (!privateKey) {
        alert('Primero debes generar una wallet');
        return;
      }

      // Generar el digest a partir del mensaje ingresado
      const messageBytes = toUtf8Bytes(message);
      const digest = keccak256(messageBytes);
      const signingKey = new SigningKey(privateKey);
      const { r, s } = signingKey.sign(digest);
      const rBytes = hexToBytesArray(r);
      const sBytes = hexToBytesArray(s);
      const signatureBytes = [...rBytes, ...sBytes];

      console.log('r:', r);
      console.log('s:', s);
      console.log('sig:', bytesToHex(signatureBytes));

      setSignature(bytesToHex(signatureBytes));
      setHash(digest);
    } catch (error) {
      console.error('Error al firmar:', error);
    }
  };

  return (
    <div className='container'>
      <h1>Firma ECDSA secp256k1</h1>

      <div className='input-group'>
        <button onClick={generateRandomWallet} className='generate-button'>
          Generar Wallet Aleatoria
        </button>
      </div>

      {walletAddress && (
        <div className='wallet-info'>
          <h2>Wallet Generada</h2>
          <div className='wallet-details'>
            <div className='wallet-field'>
              <h3>Dirección Ethereum:</h3>
              <div
                className='copyable-array'
                onClick={() => copyToClipboard(walletAddress, 'walletAddress')}
              >
                {walletAddress}
                {copied === 'walletAddress' && (
                  <span className='copied-tooltip'>¡Copiado!</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='input-group'>
        <label>Mensaje:</label>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Ingresa un mensaje para firmar'
        />
        <button onClick={handleSign} disabled={!privateKey}>
          Firmar Mensaje
        </button>
      </div>

      {hash && (
        <div className='result-group'>
          <h3>Hash del mensaje (32 bytes):</h3>
          <div
            className='copyable-array'
            onClick={() =>
              copyToClipboard(formatHexAsString(hash.replace('0x', '')), 'hash')
            }
          >
            {formatHexAsString(hash.replace('0x', ''))}
            {copied === 'hash' && (
              <span className='copied-tooltip'>¡Copiado!</span>
            )}
          </div>
        </div>
      )}

      {publicKeyX.length > 0 && (
        <div className='result-group'>
          <h3>Coordenada X de la Clave Pública (32 bytes):</h3>
          <div
            className='copyable-array'
            onClick={() =>
              copyToClipboard(formatArrayAsString(publicKeyX), 'pubKeyX')
            }
          >
            {formatArrayAsString(publicKeyX)}
            {copied === 'pubKeyX' && (
              <span className='copied-tooltip'>¡Copiado!</span>
            )}
          </div>
        </div>
      )}

      {publicKeyY.length > 0 && (
        <div className='result-group'>
          <h3>Coordenada Y de la Clave Pública (32 bytes):</h3>
          <div
            className='copyable-array'
            onClick={() =>
              copyToClipboard(formatArrayAsString(publicKeyY), 'pubKeyY')
            }
          >
            {formatArrayAsString(publicKeyY)}
            {copied === 'pubKeyY' && (
              <span className='copied-tooltip'>¡Copiado!</span>
            )}
          </div>
        </div>
      )}

      {signature && (
        <div className='result-group'>
          <h3>Firma (64 bytes - r,s):</h3>
          <div
            className='copyable-array'
            onClick={() =>
              copyToClipboard(formatHexAsString(signature), 'signature')
            }
          >
            {formatHexAsString(signature)}
            {copied === 'signature' && (
              <span className='copied-tooltip'>¡Copiado!</span>
            )}
          </div>
        </div>
      )}

      {privateKey && (
        <div className='result-group'>
          <h3>Clave Privada:</h3>
          <div
            className='copyable-array'
            onClick={() => copyToClipboard(privateKey, 'privateKey')}
          >
            {privateKey}
            {copied === 'privateKey' && (
              <span className='copied-tooltip'>¡Copiado!</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
