import { Share2, Cpu, FolderOpen, Eye } from 'lucide-react'

export default function Slide5() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold">
          Cómo funciona
        </h1>
        <p className="text-3xl text-muted-foreground">
          De un link a una acción en 4 pasos
        </p>
      </div>

      <div className="relative pt-12">
        {/* Flow Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-success to-chart-3 -translate-y-1/2 hidden md:block" />
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="glass-card p-8 rounded-2xl space-y-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
              <Share2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">1. Compartes</h3>
            <p className="text-muted-foreground">
              Desde TikTok → compartir → WhatsApp o app → envías el link a tu bot
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl space-y-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/20 mb-2">
              <Cpu className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-2xl font-semibold">2. Procesamos</h3>
            <p className="text-muted-foreground">
              Descarga el audio, lo manda a Transcribe, luego a Bedrock, lo clasifica
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl space-y-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chart-3/20 mb-2">
              <FolderOpen className="w-8 h-8 text-chart-3" />
            </div>
            <h3 className="text-2xl font-semibold">3. Organizamos</h3>
            <p className="text-muted-foreground">
              Guarda en DynamoDB una receta, rutina o pendiente, con etiquetas
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl space-y-4 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chart-4/20 mb-2">
              <Eye className="w-8 h-8 text-chart-4" />
            </div>
            <h3 className="text-2xl font-semibold">4. Lo usas</h3>
            <p className="text-muted-foreground">
              En tu dashboard: "Receta: Pasta alta en proteína", "Rutina: Pierna 20 min"
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl bg-primary/5 border-2 border-primary/30 text-center">
        <p className="text-xl font-medium">
          Todo automático, sin esfuerzo, listo para usar 🚀
        </p>
      </div>
    </div>
  )
}
