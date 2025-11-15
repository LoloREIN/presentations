import { Cloud, Database, Cpu, Zap } from 'lucide-react'

export default function Slide6() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
          <Cloud className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-5xl font-bold">
          Arquitectura serverless en AWS
        </h1>
        <p className="text-2xl text-muted-foreground">
          Bajo el capó: escalable, eficiente y moderna
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-semibold">Frontend</h3>
          </div>
          <ul className="space-y-2 text-lg text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>React/Next.js hosteado en <strong className="text-foreground">AWS Amplify</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Auth con <strong className="text-foreground">Amazon Cognito</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>UI inspirada en Raycast (dark, productiva)</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-8 h-8 text-success" />
            <h3 className="text-2xl font-semibold">Backend</h3>
          </div>
          <ul className="space-y-2 text-lg text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-success">•</span>
              <span><strong className="text-foreground">API Gateway + Lambda</strong> (100% serverless)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">•</span>
              <span><strong className="text-foreground">SQS</strong> para procesamiento asíncrono</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">•</span>
              <span><strong className="text-foreground">DynamoDB</strong> para almacenar items</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-8 h-8 text-chart-3" />
            <h3 className="text-2xl font-semibold">Datos & AI</h3>
          </div>
          <ul className="space-y-2 text-lg text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-chart-3">•</span>
              <span><strong className="text-foreground">S3</strong> para media y transcripciones</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-chart-3">•</span>
              <span><strong className="text-foreground">Amazon Transcribe</strong> audio → texto</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-chart-3">•</span>
              <span><strong className="text-foreground">Bedrock (Claude)</strong> para clasificación</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-6 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="w-8 h-8 text-chart-4" />
            <h3 className="text-2xl font-semibold">Integraciones</h3>
          </div>
          <ul className="space-y-2 text-lg text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-chart-4">•</span>
              <span><strong className="text-foreground">WhatsApp Cloud API</strong> para recibir links</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-chart-4">•</span>
              <span>Futuro: App móvil con botón "Share"</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="glass-card p-4 rounded-2xl bg-primary/5 border border-primary/30 text-center">
        <p className="text-lg font-mono text-muted-foreground">
          TikTok → WhatsApp → API GW → Lambda → SQS → S3 → Transcribe → Bedrock → DynamoDB → Frontend
        </p>
      </div>
    </div>
  )
}
