# MindPocket - Presentación Hack112025

Página web de presentación para MindPocket, creada con Vite+React y hosteada en AWS Amplify.

## 🚀 Características

- **12 slides interactivas** con el pitch completo de MindPocket
- **Diseño dark mode** inspirado en Raycast
- **Navegación con teclado** usando flechas ← →
- **Interfaz limpia** sin distracciones, solo contador de slides
- **Responsive** y optimizado para presentaciones
- **Embed de la app** en https://mindpocket.lolorein.com

## 🛠️ Tecnologías

- **Vite** - Build tool ultrarrápido
- **React 18** - Framework UI
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Lucide React** - Iconos
- **AWS Amplify** - Hosting
- **Pulumi (YAML)** - Infrastructure as Code

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🌐 Deployment

El proyecto se despliega automáticamente en AWS Amplify usando Pulumi.

### Configuración de Pulumi

```bash
cd Infraestructura
pulumi stack init pocketMind-slides
pulumi config set aws:region us-east-1
pulumi up
```

## 📋 Contenido de las Slides

1. **Hero** - De scroll infinito a progreso real
2. **Problema** - Motivación que se pierde en el scroll
3. **Audiencia** - Jóvenes motivados pero saturados
4. **Solución** - MindPocket como puente TikTok → vida real
5. **Flujo** - De un link a una acción en 4 pasos
6. **Arquitectura** - Serverless en AWS
7. **Stack** - Tecnología moderna y escalable
8. **Demo** - Un día con MindPocket
9. **Beneficios** - Del hype a hábitos
10. **Modelo de negocio** - Freemium B2C y B2B2C
11. **Roadmap** - Futuro del producto
12. **Cierre** - Call to action

## 🎨 Estilo

El diseño sigue el estilo de MindPocket:
- Dark theme con colores OKLCH
- Glass morphism effects
- Animaciones suaves
- Tipografía Geist

## 🔗 Links

- **App en producción**: https://mindpocket.lolorein.com
- **Repositorio MindPocket**: /Users/lorenzoreinoso/Desktop/MindPocket

## 📝 Notas

- Los errores de lint antes de `npm install` son normales
- Usa las flechas del teclado para navegar entre slides
- La presentación está optimizada para pantallas grandes
