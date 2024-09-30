# Mi Libro Favorito

_**Mi Libro Favorito**_ es un aplicativo web interactivo para descubrir, reseñar y comprar libros en línea. La plataforma permite a los usuarios explorar una amplia colección de libros, obtener recomendaciones personalizadas y gestionar su propia experiencia de lectura.

# Interfaces

Aquí hay algunas imágenes de las interfaces de nuestro aplicativo web "Tu Libro Favorito":

## Interfaz 1: Página Principal de la Tienda de Libros Online

![Interfaz 1](img-readme/Captura%20de%20pantalla%202024-09-30%20024417.png)

La página principal de la tienda de libros online presenta un diseño limpio y atractivo, con un enfoque claro en la promoción de sus productos. Los elementos más destacados son:

### Barra de búsqueda
Ubicada en la parte superior, permite a los usuarios buscar libros por título, autor o cualquier otra palabra clave.

### Categorías de libros
Se muestran de forma visible las principales categorías en las que se clasifican los libros, como:
- Ficción
- No Ficción
- Juvenil
- Bienestar
- Aventura
- Negocios
- Economía
- Educación

### Libro destacado
En la parte central de la página, se presenta un libro destacado, en este caso **"Cien años de soledad"** de Gabriel García Márquez, con una imagen llamativa y una breve descripción. Se incluye un botón para comprarlo directamente.

### Sección de "Los más vendidos"
Debajo del libro destacado, se muestra una sección con los libros más populares de la tienda, incluyendo títulos clásicos como:
- **Don Quijote de la Mancha**
- **Los Miserables**

Cada libro cuenta con su imagen, título, autor y precio.

### Botones de navegación
En la parte superior derecha, se encuentran botones para acceder al carrito de compras, al perfil del usuario y a otras secciones del sitio.


## Interfaz 2: Filtros de búsqueda
![Interfaz 2](img-readme/Captura%20de%20pantalla%202024-09-30%20025125.png)

Esta nueva interfaz proporciona una experiencia de usuario más rica y personalizada, al permitir a los usuarios filtrar los resultados de búsqueda de manera más precisa. Esto, a su vez, puede aumentar las posibilidades de que

## Interfaz 3: Detalles del Libro
![Interfaz 3](img-readme/Captura%20de%20pantalla%202024-09-30%20030915.png)

Esta página ofrece una experiencia de compra satisfactoria al proporcionar información relevante, opiniones de otros lectores y una interfaz fácil de usar.


## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **React**: Biblioteca de JavaScript para construir interfaces de usuario dinámicas y modulares.
- **Tailwind CSS**: Framework de utilidades para crear diseños responsivos y personalizados con facilidad.
- **Vite**: Herramienta de desarrollo rápida para proyectos basados en frontend moderno.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Git](https://git-scm.com/)

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el repositorio**:
```bash
git clone https://github.com/usuario/mi-libro-favorito.git
```
2. **Accede al directorio del proyecto:**
```bash
cd mi-libro-favorito
```
3. **Instala las dependencias**
```bash
npm install
```
## Uso

Después de haber instalado las dependencias, puedes iniciar el servidor de desarrollo con el siguiente comando:
```bash
npm run dev
``` 

## Estructura del Proyecto
El proyecto sigue la siguiente estructura básica:
```bash
mi-libro-favorito/
├── public/                # Archivos estáticos
├── src/
│   ├── assets/            # Imágenes y otros recursos
│   ├── components/        # Componentes React reutilizables
│   ├── pages/             # Páginas principales de la aplicación
│   ├── styles/            # Estilos globales con Tailwind
│   ├── App.jsx            # Componente principal de la aplicación
│   └── main.jsx           # Punto de entrada de la aplicación
├── index.html             # Archivo HTML principal
├── package.json           # Configuración del proyecto y dependencias
└── vite.config.js         # Configuración de Vite
```
## Funcionalidades Principales

- **Sistema de reseñas**: Los usuarios pueden escribir y ver reseñas de libros.
- **Recomendaciones personalizadas**: Basado en el historial de lectura y preferencias del usuario.
- **Gestión de inventario**: El sistema permite gestionar libros en tiempo real.
- **Diseño responsivo**: Interfaz amigable y adaptable a diferentes tamaños de pantalla.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run preview`: Previsualiza la versión de producción.

## Contribuir

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un *fork* del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz *commit* (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios al repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Abre una *Pull Request*.