# Workshop: Validación de Firmas ECDSA

## Objetivo
En este ejercicio, aprenderás a implementar una verificación de firmas ECDSA (Elliptic Curve Digital Signature Algorithm) usando Noir, un lenguaje de programación para circuitos aritméticos de cero conocimiento.

## ¿Qué es una Firma Digital ECDSA?
Una firma digital ECDSA es un esquema criptográfico que permite:
- Verificar la autenticidad de un mensaje
- Asegurar que el mensaje no ha sido modificado
- Confirmar que el firmante es quien dice ser

## Aspectos de Privacidad
En este ejercicio, implementamos una prueba de conocimiento cero donde:
- El mensaje hasheado es privado
- La clave pública (x,y) es pública
- La firma es pública

> **Nota importante sobre el manejo del mensaje hasheado:**
> En este ejercicio simplificado, tomamos el mensaje hasheado como entrada privada. En un escenario real de producción:
> 1. El mensaje original sería privado (para proteger su contenido)
> 2. El hash del mensaje sería público (como compromiso del mensaje)
> 3. El prover demostraría que conoce un mensaje que:
>    - Al hashearlo produce el hash público
>    - Fue firmado por el poseedor de la clave pública
>
> Esto permitiría realizar validaciones adicionales sobre el contenido del mensaje de forma privada, como:
> - Verificar permisos específicos en un token
> - Validar órdenes de compra/venta
> - Comprobar límites de transacciones
> - Verificar timestamps o condiciones temporales
>
> Estas validaciones adicionales no se implementan en este workshop por simplicidad, pero son fundamentales en aplicaciones reales de zero-knowledge.

## El Ejercicio
En este ejercicio, implementaremos una función que verifica si una firma ECDSA es válida. La función:
- Toma un mensaje hasheado, una clave pública y una firma como entrada
- Verifica si la firma es válida para el mensaje usando la clave pública
- Devuelve un error si la firma no es válida

## Código Base
El archivo `solution.nr` contiene una implementación básica que:
1. Toma cuatro parámetros: `hashed_message`, `pub_key_x`, `pub_key_y`, y `signature`
2. Utiliza la función `verify_signature` de la biblioteca estándar de Noir
3. Verifica que la firma sea válida para el mensaje hasheado usando la clave pública
4. El verifier puede confirmar que la firma es válida sin conocer la clave privada

## Tareas
1. Intenta hacer tu propia implementación en `main.nr`
   - Crea una función que verifique firmas ECDSA
   - Asegúrate de definir correctamente los parámetros públicos y privados
   - Piensa en cómo estructurar la verificación

2. Entiende el código base en `solution.nr`
   - Analiza cómo se verifica la firma usando la función `verify_signature`
   - Comprende el papel de cada parámetro en la verificación
   - Identifica qué valores son públicos y cuáles privados

3. Ejecuta el test existente
   - Verifica que la firma de ejemplo es válida
   - Entiende por qué los valores del test funcionan
   - Experimenta modificando los valores para ver cómo falla la verificación

4. Compara tu implementación con la solución
   - Identifica similitudes y diferencias
   - Reflexiona sobre la eficiencia y seguridad de ambos enfoques
   - Mejora tu implementación si es necesario

5. Extiende la funcionalidad (Opcional)
   - Agrega validaciones adicionales sobre el mensaje hasheado
   - Implementa manejo de errores para firmas inválidas
   - Crea tests adicionales con diferentes mensajes y firmas

6. Genera y verifica una prueba
   - Sigue el proceso de compilación y prueba de Noir
   - Verifica que tu circuito genera pruebas válidas
   - Experimenta con diferentes inputs para entender los límites del circuito
   - Recursos: https://noir-lang.org/docs/getting_started/quick_start

## Ejemplo de Firma
El test incluye un ejemplo con:
- Mensaje hasheado: `0x3a73f4123a5cd2121f21cd7e8d358835476949d035d9c2da6806b4633ac8c1e2`
- Clave pública X: `0xa0434d9e47f3c86235477c7b1ae6ae5d3442d49b1943c2b752a68e2a47e247c7`
- Clave pública Y: `0x893aba425419bc27a3b6c7e693a24c696f794c2ed877a1593cbee53b037368d7`
- Firma: `0xe5081c80ab427dc370346f4a0e31aa2bad8d9798c38061db9ae55a4e8df454fd28119894344e71b78770cc931d61f480ecbb0b89d6eb69690161e49a715fcd55`

## Pistas
- Recuerda que estamos trabajando con la curva elíptica secp256k1
- Las operaciones de verificación de firma son complejas y están implementadas en la biblioteca estándar
- Considera cómo manejar casos donde los valores de entrada son inválidos

## Recursos Adicionales
- [ECDSA](https://es.wikipedia.org/wiki/ECDSA)
- [Curva secp256k1](https://en.bitcoin.it/wiki/Secp256k1)
- [Documentación de Noir](https://docs.noir-lang.org/)

## Utilidad Front-end para Generar Firmas
Para facilitar la generación de firmas y obtener los valores necesarios en el formato correcto, hemos incluido una utilidad web en el directorio `utils`. Esta aplicación te permite:

1. Generar una wallet aleatoria con su clave pública y privada
2. Firmar mensajes y obtener:
   - El hash del mensaje en formato de 32 bytes
   - Las coordenadas X e Y de la clave pública
   - La firma en formato de 64 bytes (r,s)

### Pasos para usar la utilidad:

1. Navega al directorio de la utilidad:
   ```bash
   cd utils
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en la URL indicada (generalmente http://localhost:5173)

5. En la interfaz web:
   - Haz clic en "Generar Wallet Aleatoria" para crear una nueva wallet
   - Ingresa un mensaje en el campo de texto
   - Haz clic en "Firmar Mensaje" para generar la firma
   - Copia los valores generados (hash, coordenadas X/Y, firma) haciendo clic en ellos
   - Los valores se copiarán en el formato correcto para usar en tu implementación Noir

### Nota sobre los valores generados:
- El hash del mensaje se genera usando keccak256
- Las coordenadas de la clave pública están en formato de 32 bytes
- La firma está en formato de 64 bytes (32 bytes para r + 32 bytes para s)
- Todos los valores se pueden copiar directamente al hacer clic en ellos
