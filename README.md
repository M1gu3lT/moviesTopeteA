# 🎬 MoviesTopete

## 📌 Descripción
**MoviesTopete** es una aplicación web diseñada para gestionar películas, con una interfaz intuitiva y eficiente. Permite a los usuarios:

- Iniciar sesión en la plataforma.
- Visualizar estrenos.
- Explorar películas por género.
- Administrar una lista de películas favoritas.

La app es **completamente responsiva**, optimizada para pantallas de todos los tamaños, garantizando una experiencia fluida tanto en dispositivos móviles como de escritorio.

## 🎯 Objetivo
Desarrollar una plataforma intuitiva que permita a los usuarios explorar contenido audiovisual y administrar su lista personalizada de películas favoritas.

---

## 👤 Nombre del desarrollador

**Miguel Topete**

---

## 📸 Captura de pantalla del proyecto

> ⚠️ *Pendiente de agregar una imagen del proyecto en funcionamiento. Puedes subir tu captura y reemplazar el ejemplo abajo cuando esté lista.*

```html
<!-- Ejemplo:
![Vista principal](./screenshots/home-page.png)
-->
🧪 Instrucciones de instalación y ejecución
Clona este repositorio:

bash
Copiar
Editar
git clone https://github.com/M1gu3lT/MoviesTopete.git
Accede a la carpeta del proyecto:

bash
Copiar
Editar
cd MoviesTopete
Instala las dependencias:

bash
Copiar
Editar
npm install
Inicia el servidor de desarrollo:

bash
Copiar
Editar
ng serve
Abre tu navegador y accede a: http://localhost:4200

📦 Dependencias y tecnologías utilizadas
La aplicación fue desarrollada utilizando las siguientes herramientas y bibliotecas:

Angular ^17.0.0 o superior (desarrollado en Angular 19)

Node.js >= 18.x

Bootstrap ^5.3.0

RxJS ^7.8.1

TypeScript >= 5.x

Asegúrate de tener instalada la última versión de Angular CLI:

bash
Copiar
Editar
npm install -g @angular/cli
⚙️ ¿Cómo se construyó?
El desarrollo de MoviesTopete partió como un proyecto hecho con JavaScript vanilla, el cual fue migrado de manera progresiva a Angular 19. Esta transición permitió estructurar mejor la aplicación, modularizar los componentes y aprovechar las ventajas del ecosistema moderno de Angular.

La migración se centró en:

Reorganizar el proyecto usando componentes standalone.

Integrar Bootstrap 5 para una interfaz responsiva desde el inicio.

Crear una arquitectura más limpia y mantenible para escalar fácilmente.

Actualmente, el proyecto se encuentra en proceso de:

Integración con una base de datos para manejar información dinámica.

Mejora del diseño visual con una estética más pulida y profesional.

Optimización del rendimiento y la experiencia de usuario (UX).

Todo el código está orientado a facilitar futuras mejoras y nuevas funcionalidades.

🐛 Problemas conocidos
Actualmente la aplicación presenta algunos detalles pendientes por solucionar:

❌ Navbar desestructurada: Los elementos dentro de la barra de navegación no están alineados correctamente, especialmente en pantallas pequeñas.

🖼️ Problemas con carga de imágenes: Las imágenes de las películas no se visualizan correctamente en las tarjetas.

📐 Cards desalineadas: Las tarjetas de películas no mantienen una estructura uniforme en la cuadrícula, lo que afecta la estética general de la interfaz.

Estos problemas están en proceso de revisión y forman parte del roadmap de mejoras para futuras versiones.

🔄 Retrospectiva
✅ ¿Qué hice bien?
Migré una app hecha en JavaScript vanilla a Angular 19, reorganizando la estructura y aprovechando el poder de los componentes standalone.

Se logró construir una interfaz funcional, responsiva y modularizada.

El proyecto se mantiene limpio, bien dividido y preparado para futuras integraciones como base de datos y mejoras visuales.

❌ ¿Qué no salió bien?
La alineación de los elementos (navbar y cards) aún presenta errores visuales importantes.

Las imágenes no se están cargando como se espera.

Algunos componentes clave no están funcionando al 100%, como los botones de las cards o el sistema de navegación.

💡 ¿Qué puedo hacer diferente?
Ajustar el uso de Bootstrap y Angular para garantizar un layout más consistente.

Validar rutas y paths de recursos como imágenes para evitar errores de carga.

Refinar la lógica de componentes para mejorar la experiencia de usuario (como ocultar cards o navegar correctamente).

Incluir pruebas visuales y de usabilidad desde etapas más tempranas del desarrollo.

📄 Licencia
Este proyecto está bajo la Licencia MIT.

go
Copiar
Editar

Puedes copiar y pegar este texto en un archivo llamado `README.md` para tu repositorio. Si necesitas alguna modificación, solo avísame. 😊



