# 🚀 Guía de Deployment

Esta guía te ayudará a desplegar la presentación de MindPocket en AWS Amplify usando Pulumi.

## 📋 Pre-requisitos

1. **Node.js 18+** instalado
2. **AWS CLI** configurado con credenciales
3. **Pulumi CLI** instalado
4. **Repositorio en GitHub** con el código

## 🔧 Configuración Inicial

### 1. Instalar dependencias del proyecto

```bash
cd /Users/lorenzoreinoso/Desktop/presentations/MindPocket-Slides-Hack112025
npm install
```

### 2. Instalar dependencias de Pulumi

```bash
cd infra
npm install
```

### 3. Configurar Pulumi

```bash
# Inicializar el stack (solo primera vez)
pulumi stack init dev

# Configurar la región de AWS
pulumi config set aws:region us-east-1
```

## 📦 Preparar el Repositorio

### 1. Subir el código a GitHub

```bash
# Desde el directorio presentations
cd /Users/lorenzoreinoso/Desktop/presentations

# Inicializar git si no está inicializado
git init

# Agregar archivos
git add .
git commit -m "Add MindPocket slides presentation"

# Conectar con tu repositorio remoto
git remote add origin https://github.com/TU_USUARIO/presentations.git
git branch -M main
git push -u origin main
```

### 2. Actualizar la configuración de Pulumi

Edita `infra/index.ts` y actualiza la línea del repositorio:

```typescript
const repository = "https://github.com/TU_USUARIO/presentations";
```

## 🚀 Deployment

### Opción 1: Deployment completo

```bash
cd infra
pulumi up
```

Pulumi te mostrará un preview de los recursos que se crearán. Revisa y confirma con `yes`.

### Opción 2: Preview sin aplicar cambios

```bash
cd infra
pulumi preview
```

## 📊 Verificar el Deployment

Después del deployment, Pulumi te mostrará:

- **amplifyAppId**: ID de la aplicación en Amplify
- **amplifyAppArn**: ARN de la aplicación
- **amplifyDefaultDomain**: Dominio por defecto de Amplify
- **appUrl**: URL completa de tu aplicación

Ejemplo de output:
```
Outputs:
    amplifyAppId: "d123abc456def"
    appUrl: "https://main.d123abc456def.amplifyapp.com"
```

## 🔄 Actualizar la Aplicación

Cada vez que hagas push a la rama `main` de tu repositorio, Amplify automáticamente:

1. Detectará los cambios
2. Ejecutará el build
3. Desplegará la nueva versión

## 🛠️ Comandos Útiles

### Ver el estado actual

```bash
cd infra
pulumi stack
```

### Ver los outputs

```bash
pulumi stack output
```

### Destruir la infraestructura

```bash
pulumi destroy
```

## 🔐 Configuración de GitHub (Opcional)

Si tu repositorio es privado, necesitarás configurar un token de acceso:

1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Genera un nuevo token con permisos de `repo`
3. Configura el token en Amplify:

```bash
pulumi config set --secret githubToken YOUR_GITHUB_TOKEN
```

Y actualiza `infra/index.ts`:

```typescript
const amplifyApp = new aws.amplify.App(`${projectName}-app`, {
    // ... otras configuraciones
    accessToken: config.requireSecret("githubToken"),
});
```

## 🐛 Troubleshooting

### Error: "Repository not found"

- Verifica que la URL del repositorio sea correcta
- Si es privado, asegúrate de configurar el token de acceso

### Error: "Build failed"

- Revisa los logs en la consola de AWS Amplify
- Verifica que el `buildSpec` en `infra/index.ts` sea correcto
- Asegúrate de que todas las dependencias estén en `package.json`

### Error: "Access denied"

- Verifica que tus credenciales de AWS tengan los permisos necesarios
- El usuario debe tener permisos para crear recursos de Amplify e IAM

## 📝 Notas Importantes

- **No hagas `pulumi up` sin revisar el preview primero**
- Los errores de lint en el IDE son normales antes de `npm install`
- El primer deployment puede tardar 5-10 minutos
- Amplify construye la app en el directorio `MindPocket-Slides-Hack112025/dist`

## 🔗 Links Útiles

- [Documentación de Pulumi AWS](https://www.pulumi.com/registry/packages/aws/)
- [Documentación de AWS Amplify](https://docs.aws.amazon.com/amplify/)
- [Guía de Vite](https://vitejs.dev/guide/)
