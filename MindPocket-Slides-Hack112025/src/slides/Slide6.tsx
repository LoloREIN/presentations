import { Cloud, Database, Cpu, Zap, Network } from 'lucide-react'

export default function Slide6() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-2">
          <Cloud className="w-7 h-7 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">
          Arquitectura serverless en AWS
        </h1>
        <p className="text-lg text-muted-foreground">
          Escalable, eficiente y moderna
        </p>
      </div>

      {/* Architecture Diagram */}
      <div className="flex-1 flex items-center justify-center">
        <div className="glass-card p-6 rounded-3xl w-full">
          <img 
            src="/mindpocket_architecture.png" 
            alt="MindPocket Architecture Diagram"
            className="w-full h-auto rounded-xl"
            style={{ maxHeight: '550px', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Key Components - Compact */}
      <div className="grid grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-primary" />
            <h3 className="text-sm font-semibold">Frontend</h3>
          </div>
          <p className="text-xs text-muted-foreground">
            Amplify + Cognito + Next.js
          </p>
        </div>

        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-5 h-5 text-success" />
            <h3 className="text-sm font-semibold">Backend</h3>
          </div>
          <p className="text-xs text-muted-foreground">
            API Gateway + Lambda + SQS
          </p>
        </div>

        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-5 h-5 text-chart-3" />
            <h3 className="text-sm font-semibold">Datos & AI</h3>
          </div>
          <p className="text-xs text-muted-foreground">
            S3 + Google Speech + Bedrock
          </p>
        </div>

        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Network className="w-5 h-5 text-chart-4" />
            <h3 className="text-sm font-semibold">Integración</h3>
          </div>
          <p className="text-xs text-muted-foreground">
            Telegram Bot API
          </p>
        </div>
      </div>
    </div>
  )
}
