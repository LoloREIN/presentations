# MindPocket - Presentación Hack112025

Página web de presentación para MindPocket, creada con Vite+React y hosteada en AWS Amplify.

## 🚀 Características

- **13 slides interactivas** con el pitch completo de MindPocket
- **Diseño dark mode** inspirado en Raycast
- **Navegación con teclado** usando flechas ← →
- **Interfaz limpia** sin distracciones, solo contador de slides
- **Responsive** y optimizado para presentaciones
- **App embebida** - Prueba MindPocket directamente desde la presentación

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
6. **Arquitectura** - Serverless en AWS (con diagrama visual)
7. **Stack** - Tecnología moderna y escalable
8. **Demo** - Un día con MindPocket
9. **Beneficios** - Del hype a hábitos
10. **Modelo de negocio** - Freemium B2C y B2B2C
11. **Roadmap** - Futuro del producto
12. **Cierre** - Call to action
13. **Demo Interactivo** - App embebida con QR codes

## 🏗️ Diagrama de Arquitectura

La Slide 6 incluye un diagrama de arquitectura generado con [diagrams](https://diagrams.mingrammer.com/). Para regenerar el diagrama:

```bash
# Instalar dependencias (solo primera vez)
pip3 install diagrams

# Verificar que Graphviz esté instalado
brew install graphviz

# Generar diagrama
python3 generate_architecture_diagram.py
```

El diagrama se guardará en `public/mindpocket_architecture.png` y muestra:
- Frontend: Amplify, Cognito, Next.js
- Backend: API Gateway, Lambda, SQS
- Storage: DynamoDB, S3
- AI: Google Speech-to-Text, AWS Bedrock
- Integraciones: Telegram Bot

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
