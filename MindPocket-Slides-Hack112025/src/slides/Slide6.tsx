import { Cloud, Database, Cpu, Zap, Network, ArrowRight } from 'lucide-react'

export default function Slide6() {
  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col py-6">
      {/* Header - Más compacto */}
      <div className="text-center space-y-1 mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
          <Cloud className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">
          Arquitectura serverless en AWS
        </h1>
        <p className="text-base text-muted-foreground">
          Flujo completo de procesamiento
        </p>
      </div>

      {/* Architecture Diagram - Más espacio */}
      <div className="flex-1 flex items-center justify-center min-h-0">
        <div className="glass-card p-4 rounded-2xl w-full h-full flex items-center justify-center">
          <img 
            src="/mindpocket_architecture.png" 
            alt="MindPocket Architecture Diagram"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Key Components - Grid simplificado */}
      <div className="grid grid-cols-4 gap-3 mt-4">
        <div className="glass-card p-3 rounded-xl">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <div>
              <h3 className="text-xs font-semibold">Frontend</h3>
              <p className="text-[10px] text-muted-foreground">Next.js + Amplify</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-3 rounded-xl">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-success" />
            <div>
              <h3 className="text-xs font-semibold">API & Processing</h3>
              <p className="text-[10px] text-muted-foreground">Lambda + SQS</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-3 rounded-xl">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-chart-3" />
            <div>
              <h3 className="text-xs font-semibold">AI Services</h3>
              <p className="text-[10px] text-muted-foreground">Google + Bedrock</p>
            </div>
          </div>
        </div>

        <div className="glass-card p-3 rounded-xl">
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-chart-4" />
            <div>
              <h3 className="text-xs font-semibold">Storage</h3>
              <p className="text-[10px] text-muted-foreground">DynamoDB + S3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Flow description */}
      <div className="glass-card p-2 rounded-xl bg-primary/5 border border-primary/30 text-center mt-3">
        <p className="text-xs flex items-center justify-center gap-2 text-muted-foreground">
          <span>TikTok</span>
          <ArrowRight className="w-3 h-3" />
          <span>Telegram</span>
          <ArrowRight className="w-3 h-3" />
          <span>API</span>
          <ArrowRight className="w-3 h-3" />
          <span>Processing</span>
          <ArrowRight className="w-3 h-3" />
          <span>AI</span>
          <ArrowRight className="w-3 h-3" />
          <span>DynamoDB</span>
          <ArrowRight className="w-3 h-3" />
          <span>App</span>
        </p>
      </div>
    </div>
  )
}
