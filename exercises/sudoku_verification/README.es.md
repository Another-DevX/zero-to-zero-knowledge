# Ejercicio: Verificación de Sudoku

[English](README.md) | [Español](README.es.md)

## Objetivo
Este ejercicio implementa una prueba de conocimiento cero para la verificación de rompecabezas de Sudoku. El objetivo es verificar que una solución propuesta es válida para un rompecabezas de Sudoku sin revelar la solución en sí.

## Aspectos de Privacidad
En este ejercicio, implementamos una prueba de conocimiento cero donde:
- El rompecabezas inicial es público (celdas conocidas)
- La solución propuesta es privada (conocida solo por el probador)
- El verificador solo necesita confirmar que la solución es válida, sin conocer los valores específicos de las celdas

## Enunciado del Problema
Dado un rompecabezas de Sudoku (con algunas celdas llenas y otras vacías) y una solución propuesta, verificar que:
1. La solución coincide con el rompecabezas donde las celdas ya están llenas
2. Cada fila contiene todos los números del 1 al 9 sin repetición
3. Cada columna contiene todos los números del 1 al 9 sin repetición
4. Cada subcuadrícula 3x3 contiene todos los números del 1 al 9 sin repetición

## Detalles de Implementación
- El tablero de Sudoku se representa como un array de 81 elementos (cuadrícula 9x9)
- Las celdas vacías en el rompecabezas se representan con 0
- La solución debe ser un tablero completo con todas las celdas llenas (1-9)
- La verificación debe devolver `Field::from(1)` para soluciones válidas y `Field::from(0)` para las inválidas

## Tareas
1. Implementa tu propia solución en `main.nr`
   - Crea una función que verifique la validez de una solución de Sudoku
   - Asegúrate de definir correctamente los parámetros públicos y privados
   - Piensa en cómo estructurar la verificación

2. Comprende el código base en `solution.nr`
   - Analiza cómo se verifica la solución
   - Entiende el papel de cada parámetro en la verificación
   - Identifica qué valores son públicos y cuáles son privados

3. Ejecuta las pruebas existentes
   - Verifica que la solución de ejemplo es válida
   - Comprende por qué funcionan los valores de prueba
   - Experimenta modificando los valores para ver cómo falla la verificación

4. Compara tu implementación con la solución
   - Identifica similitudes y diferencias
   - Reflexiona sobre la eficiencia y seguridad de ambos enfoques
   - Mejora tu implementación si es necesario

5. Extiende la funcionalidad (Opcional)
   - Agrega validaciones adicionales
   - Implementa manejo de errores para soluciones inválidas
   - Crea pruebas adicionales con diferentes rompecabezas y soluciones

6. Genera y verifica una prueba
   - Sigue el proceso de compilación y prueba de Noir
   - Verifica que tu circuito genera pruebas válidas
   - Experimenta con diferentes entradas para entender los límites del circuito
   - Recursos: https://noir-lang.org/docs/getting_started/quick_start

## Pruebas
El ejercicio incluye casos de prueba para:
- Una solución válida de Sudoku
- Una solución inválida con una fila duplicada
- Un rompecabezas con celdas vacías

## Pistas
- Recuerda que estamos trabajando con campos finitos en Noir
- Las operaciones aritméticas son módulo el tamaño del campo
- Considera cómo manejar casos donde los números son muy grandes

## Recursos Adicionales
- [Sudoku](https://es.wikipedia.org/wiki/Sudoku)
- [Documentación de Noir](https://docs.noir-lang.org/)

## Objetivos de Aprendizaje
- Comprender cómo implementar pruebas de conocimiento cero para la verificación de rompecabezas
- Aprender a trabajar con arrays y elementos de campo en Noir
- Practicar la implementación de lógica de verificación compleja de manera que preserve la privacidad 