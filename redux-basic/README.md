# ¿Qué es Redux?

- Es un patrón para el manejo de la información.

## ¿Para qué sirve?

- Saber el estado de la aplicación en un momento determinado.
- Conocer el estado de sus variables.
- Cuando y quién modifico una variable.
- Como cambió la información.

## IDEAS PRINCIPALES

- Toda la data de la aplicación se encuentra en una estructura previamente DEFINIDA.
- Toda la información se encontrará almacenada en un único lugar llamado 'STORE'.
- El 'STORE' jamás se modifica de forma directa.
- Todas las interacciones del usuario y/o código, dispara acciones que describen qué sucedió.
- El valor actual de la información de la aplicación se llama estado - 'STATE'.
- Un nuevo estado es creado, en base a la combinación del viejo estado y la de una acción por una función llamada 'REDUCER'.

## CUATRO ESTRUCTURAS

### ACTION - REDUCER - STATE - STORE

### ACTION

- Es la única fuente de información que se envía por interacciones de usuario o programa.
- Por lo general, se busca que las acciones sean lo más simples posibles.
- UNA ACCIÓN TIENE ÚNICAMENTE 2 PROPIEDADES:
  - type --> describe que es lo que se quiere hacer o cual es la acción a realizar, descriptiva. (ejemplo: COMPLETAR_TAREA).
  - payload --> (es opcional) --> es la menor cantidad posible de información para realizar dicha tarea.

### REDUCER

- No es más que una simple función que únicamente recibe 2 argumentos. Siempre retorna un estado.

  - oldState: Es el estado actual de la aplicación.
  - action: Es un objeto plano que indica que hay que hacer.

### STATE

- Es de sólo lectura.
- Nunca se mutará el state de forma directa.
- Hay funciones prohíbidas de JS. (push o manipulación directa del objeto oldState)
- El estado es inmutable, solo crear nuevos estados.

### STORE

- Es un objeto que tiene las siguientes responsabilidades:

  - Contiene el estado actual de la aplicación.
  - Permite la lectura del estado vía: getState()
  - Permite crear un nuevo estado utilizando: dispatch(ACTION)
  - Permite notificar los cambios de estado vía: subscribe()

## Teoría adicional

Redux:
Página oficial en inglés:

Redux - English
https://redux.js.org/

Traducción bastante buena

https://es.redux.js.org/

---

To execute project and testing code

´´´typescript
npm i

````

from terminal:

```typescript
tx-node app-{number}.ts
````
