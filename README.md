# Fixture Liga 1 (Actualización al 2025)

Esta plantilla fue desarrollada para los especiales de **Depor - Grupo El Comercio**.

### Producción
El proyecto se encuentra desplegado en el siguiente enlace:  
[Fixture Liga 1 - 2025](https://especiales.depor.com/fixture-liga-1-2025-peru-calendario-descarga-programacion-torneo-apertura-torneo-clausura-alianza-lima-universitario-cristal-y-mas-multimedia/index.html)

---

## Tecnologías usadas
Este proyecto fue desarrollado con **React** usando **Vite** como herramienta de construcción. En materia de estilos se utilizó **Sass**

---

## Instrucciones para descargar y levantar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_PROYECTO>```
  
2. **Instalar dependencias:**
   ```bash
   npm install```
   
3. **Ejecutar el proyecto en desarrollo:**
   ```bash
   npm run dev```

4. **Construir el proyecto para producción:**
   ```bash
   npm run build```

5. **Previsualizar la versión construida**
   ```bash
   npm run preview```

## Configuraciones del proyecto

### Cambiar la base en `vite.config.ts`
Si necesitas actualizar la configuración de la base del proyecto (por ejemplo, para despliegues en rutas específicas), edita la propiedad `base` en el archivo `vite.config.ts`:
   ```js
export default defineConfig({
  base: '/<nueva_base>/', // Cambia aquí
  ...
});
```

### Cambiar los colores del diseño
Los colores base del proyecto se encuentran definidos en el archivo: `src/styles/base/_variables.scss`
Actualiza los valores de las variables de Sass según sea necesario.

### Modificar la información del fixture
Datos generales y constantes:
Archivo: `src/utils/constants.ts`
Modifica este archivo para actualizar textos, configuraciones generales o constantes del proyecto.

### Información de partidos:
Archivo: `src/utils/Matches.ts`
Aquí se encuentran los datos de los partidos organizados bajo slugs específicos. Actualiza este archivo para cambiar detalles del fixture.

### Configuraciones relacionadas con SEO
El archivo `index.html` contiene todas las configuraciones relacionadas con SEO, como títulos, descripciones meta, y etiquetas de redes sociales. Edita este archivo para ajustar cualquier detalle relacionado con la optimización de motores de búsqueda.
