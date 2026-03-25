# Luis Mambo - Landing Page

Una landing page moderna, dinámica e interactiva para **Luis Nuñez**, Ingeniero de Software y Bailarín Especializado en Mambo. Diseñada para resaltar su perfil profesional, formación de élite certificada (NewyoRican Mambo) y sus servicios de clases personalizadas y talleres grupales.

El proyecto está construido con una pila tecnológica moderna (React 19 + Vite), prestando especial atención al detalle visual, animaciones fluidas, y rendimiento, ofreciendo una experiencia premium con una interfaz oscura (dark theme).

## 🚀 Tecnologías Principales

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Íconos:** [Lucide React](https://lucide.dev/)

## ✨ Características Destacadas

- **Diseño Premium:** Interfaz oscura, elegante, con acentos vibrantes (azul y neón) y efectos de desenfoque (glassmorphism/backdrop-blur).
- **Animaciones fluidas:** Uso de `framer-motion` para transiciones de los componentes, efectos hover atractivos y revelación progresiva del contenido visual al hacer scroll.
- **Slider Infinito:** Carrusel animado que presenta automáticamente las certificaciones en un bucle sin fin interactivo, pausándose sutilmente al pasar el ratón.
- **Modales Interactivos:** Modales fluidos para visualizar certificados en alta resolución y ventana emergente de contacto sin salir de la página, proporcionando una excelente experiencia de usuario.
- **Totalmente Responsivo:** Estructura adaptable (Mobile First) para verse de forma fenomenal tanto en dispositivos móviles, tablets, como en monitores grandes.

## 📦 Prerrequisitos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (v18 o superior)
- `npm` / `yarn` / `pnpm`

## 🛠 Instalación y Ejecución Local

1. **Navegar a la carpeta del proyecto:**
   ```bash
   cd mambo_landing_page
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```
   *(Si utilizas otro gestor de paquetes, usa el comando equivalente, por ejemplo: `yarn install` o `pnpm install`)*

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```

4. **Visualizar el resultado:**
   Abre inmediatamente el enlace generado en la terminal, típicamente [http://localhost:5173/](http://localhost:5173/).

## 📁 Estructura General del Proyecto

```text
mambo_landing_page/
├── public/                 # Assets estáticos (Videos, Imágenes, Certificados locales)
│   ├── newvideo.mp4        
│   └── cert_1.jpg ...      
├── src/                    # Código fuente
│   ├── App.tsx             # Componente central con toda la estructura de la Single Page Application (SPA)
│   ├── index.css           # Estilos base y directivas Tailwind CSS v4
│   ├── main.tsx            # Punto de entrada de la aplicación en React
│   └── vite-env.d.ts       # Tipos globales del ecosistema Vite
├── eslint.config.js        # Configuración del linter ESLint
├── package.json            # Dependencias y configuración de npm
└── vite.config.ts          # Configuración optimizada de Vite
```

## 📞 Integraciones

La landing page ofrece un enlace pre-llenado interactivo dirigido a WhatsApp (`523121016033` como número de contacto principal), facilitando que el usuario final reserve clases al instante, así como opciones directas hacia Instagram y correo electrónico.

## 📜 Licencia

Todos los derechos reservados. **Luis Nuñez** © 2026. Hecho con ritmo & React.
