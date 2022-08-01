# Wholemeaning frontend challenge

Proyecto de solución al **Wholemeaning frontend challenge**.

* [URL de la aplicación](https://wholemeaning-frontend-challenge.vercel.app/)

## Requerimientos

### Tecnologías/frameworks

- ✅ React
- ✅ Typescript
- ✅ Redux

### Servicios/plataformas

- ✅ Vercel
- ✅ PokeApi
- ✅ Github

### Funcionales

- ✅ Visualizar una lista de los primeros 151 Pokémon.
- ✅ Permitir la búsqueda en la lista de Pokémon por nombre o número.
- ✅ Ver el detalle de cada Pokémon.
- ✅ Gestionar una lista de “Listos para el combate” de hasta 6 Pokémon que sea
visible todo el tiempo (Para más detalles: Ver documento de especificaciones).
- ✅ Debe ser responsive, la resolución más baja a soportar es 1024x768.

### Adicionales

- ❔Git Workflow: Master-only Flow.
    - Solo hay un desarrollador, por lo tanto de optó por Master-only Flow en el branch main.
- ❔Test unitarios: No fue un requerimiento de las especificaciones, sin embargo se podría implementar con `Jest` y `React Testing Library`.
- ❔CI: No fue un requerimiento de las especificaciones, sin embargo se podría implementar con `GitHub Actions` e integrarlo con Vercel. También se podría explorar con las `Integraciones` de vercel.

### Dependencias de entorno

- Node JS: v16.x
- npm: v8.x

### Ejecución local

Crear archivo de variables de entorno (**.env**). Ver el archivo de ejemplo (**.env.example**). 

Se puede copiar el ejemplo con:

```bash
    cp .env.example .env
```

Instalar dependencias:

```bash
    npm i
```

Ejecutar en modo de desarrollo:

```bash
    npm start
```

## Create React App

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts

### `npm start`

Ejecuta la aplicación en modo de desarrollo ([http://localhost:3000](http://localhost:3000)).

### `npm test`

[Ejecuta los test](https://facebook.github.io/create-react-app/docs/running-tests) en modo interactivo.

### `npm run lint`

Ejecuta el linter del proyecto.

### `npm run build`

Transpila la aplicación para [producción](https://facebook.github.io/create-react-app/docs/deployment) en la carpeta `build`.

### `npm run eject`

**Nota: Una vez que se ejecute `eject`, no se puede revertir!**

Extrae toda la configuración establecida por defecto.
