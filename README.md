# Zero to Zero Knowledge Workshop

Este workshop está diseñado para introducirte al mundo de las pruebas de conocimiento cero (Zero Knowledge Proofs) utilizando Noir, un lenguaje de programación moderno y poderoso para desarrollar aplicaciones ZK.

## ¿Qué es Noir?

Noir es un lenguaje de programación diseñado específicamente para crear aplicaciones de conocimiento cero. Está inspirado en Rust y proporciona una sintaxis moderna y segura para desarrollar circuitos aritméticos que pueden ser compilados en pruebas de conocimiento cero.

## Instalación

### 1. Instalar Noir (Nargo)

La forma más sencilla de desarrollar con Noir es usando Nargo, la herramienta CLI. Nargo te permite crear nuevos proyectos, compilar, ejecutar y probar programas Noir desde la terminal.

Para instalar Nargo, puedes usar el script de instalación `noirup`:

```bash
curl -L https://raw.githubusercontent.com/noir-lang/noirup/refs/heads/main/install | bash
noirup
```

Una vez instalado, puedes configurar las autocompletaciones para el comando `nargo` en tu shell.

### 2. Instalar el Backend de Pruebas

Después de instalar Noir, necesitas instalar un backend de pruebas para trabajar con tus programas Noir. Los backends de pruebas te proporcionan la capacidad de:
- Generar pruebas
- Verificar pruebas
- Generar contratos inteligentes
- Y más...

En este workshop, utilizaremos Barretenberg, un backend de pruebas desarrollado por Aztec Labs. Para instalarlo:

```bash
curl -L https://raw.githubusercontent.com/AztecProtocol/aztec-packages/refs/heads/master/barretenberg/bbup/install | bash
bbup
```

## Recursos Adicionales

- [Documentación oficial de Noir](https://noir-lang.org/docs/)
- [Awesome Noir](https://github.com/noir-lang/awesome-noir) - Lista completa de backends de pruebas compatibles
- [Repositorio de Noir en GitHub](https://github.com/noir-lang/noir)
- [Comunidad de Noir en Discord](https://discord.gg/noir-lang)
- [Extensión de Noir para VS Code](https://marketplace.cursorapi.com/items?itemName=noir-lang.vscode-noir) - Noir Language Support (v0.0.16) para resaltado de sintaxis y autocompletado

## Estructura del Workshop

1. Introducción a las pruebas de conocimiento cero
2. Fundamentos de Noir
3. Desarrollo de circuitos básicos
4. Integración con contratos inteligentes
5. Proyectos prácticos

## Requisitos Previos

- Conocimientos básicos de programación
- Familiaridad con conceptos básicos de criptografía
- Git instalado en tu sistema
- Un editor de código (VS Code/Cursor recomendado)

## Contribuir

Si encuentras algún error o tienes sugerencias para mejorar este workshop, no dudes en abrir un issue o enviar un pull request.
