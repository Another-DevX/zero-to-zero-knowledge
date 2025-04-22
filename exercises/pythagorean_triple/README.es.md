# Workshop: Verificación de Tripletas Pitagóricas

[English](README.md) | [Español](README.es.md)

## Objetivo
En este ejercicio, aprenderás a implementar una verificación de tripletes pitagóricos usando Noir, un lenguaje de programación para circuitos aritméticos de cero conocimiento.

## ¿Qué es un Triplete Pitagórico?
Un triplete pitagórico es un conjunto de tres números enteros positivos (a, b, c) que satisfacen la ecuación del teorema de Pitágoras:
```
a² + b² = c²
```

## Aspectos de Privacidad
En este ejercicio, implementamos una prueba de conocimiento cero donde:
- `a` y `b` son valores privados (solo conocidos por el prover)
- `c` es un valor público (conocido por el verifier)
- El verifier solo necesita saber que existe un par (a,b) que satisface la ecuación, sin conocer los valores específicos de a y b

## El Ejercicio
En este ejercicio, implementaremos una función que verifica si tres números forman un triplete pitagórico válido. La función:
- Toma tres números como entrada (a, b, c)
- Verifica si a² + b² = c²
- Devuelve un error si la ecuación no se cumple

## Código Base
El archivo `solution.nr` contiene una implementación básica que:
1. Toma tres parámetros: `a` y `b` (privados) y `c` (público)
2. Calcula a² + b² manteniendo la privacidad de a y b
3. Verifica que el resultado sea igual a c²
4. El verifier solo puede confirmar que existe un par (a,b) que satisface la ecuación, sin conocer los valores específicos

## Tareas
1. Intenta hacer tu propia implementación en `main.nr`
2. Comparalo con el codigo `solution.nr` ¿Llegaste a una respuesta correcta?
3. Entiende el código base en `solution.nr`
4. Ejecuta el test existente que verifica el triplete (3,4,5)
5. Intenta agregar más tests con otros tripletes pitagóricos conocidos
6. (Opcional) Modifica el código para manejar casos de error
7. Genera una prueba y verificala: https://noir-lang.org/docs/getting_started/quick_start

## Tripletes Pitagóricos Comunes
Algunos tripletes pitagóricos para probar:
- (3, 4, 5)
- (5, 12, 13)
- (6, 8, 10)
- (8, 15, 17)

## Pistas
- Recuerda que estamos trabajando con campos finitos en Noir
- Las operaciones aritméticas son módulo el tamaño del campo
- Considera cómo manejar casos donde los números son muy grandes

## Recursos Adicionales
- [Tripletes Pitagóricos](https://es.wikipedia.org/wiki/Terna_pitag%C3%B3rica)
- [Documentación de Noir](https://docs.noir-lang.org/) 