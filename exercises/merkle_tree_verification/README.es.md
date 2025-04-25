# Verificación de Árbol de Merkle

Este taller te guiará a través de la implementación de un sistema de verificación de árbol de Merkle en Noir. Aprenderás cómo verificar que una entrada dada pertenece a un árbol de Merkle usando una prueba.

## Objetivos de Aprendizaje

- Entender cómo funcionan los árboles de Merkle
- Aprender a verificar pruebas de Merkle
- Implementar un sistema de verificación de árbol de Merkle binario
- Usar la función hash Poseidon para la construcción del árbol

## Ejercicio

Tu tarea es implementar la función `main` en `src/main.nr` que verifica una prueba de Merkle. La función debe:

1. Tomar una entrada, longitud de la prueba, índices de la prueba, nodos hermanos de la prueba y la raíz esperada
2. Usar la función `binary_merkle_root` para calcular la raíz real
3. Comparar la raíz calculada con la raíz esperada
4. Devolver tanto la entrada como la raíz calculada si la verificación es exitosa

## Detalles de Implementación

- El árbol de Merkle tiene una profundidad fija de 10
- Usar la función hash Poseidon (poseidon2) para el hashing
- Los índices de la prueba son binarios (0 para izquierda, 1 para derecha)
- La función debe devolver tanto la entrada como la raíz calculada

## Pruebas

El caso de prueba en `src/main.nr` proporciona un ejemplo completo con:
- Una entrada de ejemplo
- Longitud de prueba de 10
- Índices de la prueba
- Nodos hermanos de la prueba
- Raíz de Merkle esperada

Ejecuta las pruebas para verificar tu implementación:
```bash
nargo test
```

## Solución

Después de completar el ejercicio, puedes verificar la solución en `src/solution.nr`. 