import { Code, Smartphone, Server, Brain } from 'lucide-react'

export default function Slide7() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
          <Code className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-5xl font-bold">
          Stack tecnológico
        </h1>
        <p className="text-2xl text-muted-foreground">
          Tecnología pensada para escalar con el usuario, no contra él
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-10 h-10 text-primary" />
            <h3 className="text-3xl font-semibold">Frontend</h3>
          </div>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span className="text-muted-foreground">React/Next.js</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span className="text-muted-foreground">AWS Amplify Hosting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-2xl">•</span>
              <span className="text-muted-foreground">UI inspirada en Raycast (dark, productiva)</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Server className="w-10 h-10 text-success" />
            <h3 className="text-3xl font-semibold">Backend</h3>
          </div>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-success text-2xl">•</span>
              <span className="text-muted-foreground">API Gateway + AWS Lambda (100% serverless)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success text-2xl">•</span>
              <span className="text-muted-foreground">SQS para procesamiento asíncrono</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-success text-2xl">•</span>
              <span className="text-muted-foreground">DynamoDB para almacenar items</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-10 h-10 text-chart-3" />
            <h3 className="text-3xl font-semibold">Datos & AI</h3>
          </div>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-chart-3 text-2xl">•</span>
              <span className="text-muted-foreground">S3 para media y transcripciones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-chart-3 text-2xl">•</span>
              <span className="text-muted-foreground">Amazon Transcribe (audio → texto)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-chart-3 text-2xl">•</span>
              <span className="text-muted-foreground">Amazon Bedrock (Claude Sonnet) para IA</span>
            </li>
          </ul>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-10 h-10 text-chart-4" />
            <h3 className="text-3xl font-semibold">Integraciones</h3>
          </div>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-chart-4 text-2xl">•</span>
              <span className="text-muted-foreground">WhatsApp Cloud API para recibir links</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-chart-4 text-2xl">•</span>
              <span className="text-muted-foreground">(Futuro) App móvil con botón "Share"</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
