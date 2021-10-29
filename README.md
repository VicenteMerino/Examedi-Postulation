# Pokédex

## Descripción

Este proyecto corresponde a la Pokédex creada por Vicente Merino para la postulación a [Examedi](https://www.examedi.com). La aplicación se encuentra hosteada en heroku y se puede acceder a través del siguiente [link](https://examedi-postulation.herokuapp.com/). El código también se puede encontrar en el siguiente link de [Github](https://github.com/VicenteMerino/Examedi-Postulation).

## Setup

En primer lugar es necesario tener `Node`, `npm` y `npx` instalados, luego es necesario instalar las dependencias con el comando:

```npm install```

Luego, se puede ejecutar un entorno local de la aplicación usando el comando

```npm start```

Con ello, se puede ver desde el navegador en la dirección `localhost:3000` por defecto.

## Dependencias

El proyecto utiliza las siguientes dependencias/librerías:

- `React` como framework de frontend.
- `styled-components` como framework de CSS.
- `axios` para hacer las requests de la API.
- `Chart.js` para crear el Spider Chart.

## Otros

Algo interesante que hice es que si hago varios fetchs de Pokémon y luego veo el detalle de uno, al volver atrás puedo ver los Pokémon que ya había hecho fetch, esto queda así hasta colapsar los datos, con lo que se entregan los 12 primeros. Esto lo logré, guardando el resultado en localStorage. Pensé en aprender a usar Redux, pero creo que era demasiado overkill para lo que quería hacer.
