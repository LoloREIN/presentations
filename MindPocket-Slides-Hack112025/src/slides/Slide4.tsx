import { Lightbulb } from 'lucide-react'

export default function Slide4() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
          <Lightbulb className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-6xl font-bold">
          <span className="text-primary">MindPocket</span>
        </h1>
        <p className="text-3xl text-muted-foreground">
          Tu puente entre TikTok y la vida real
        </p>
      </div>

      <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-success/10 border-2 border-primary/30">
        <p className="text-2xl text-center font-medium mb-8">
          "No más 'lo vi en un TikTok'. Ahora lo tienes en un plan."
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-2xl font-semibold">Compartes el video</h3>
          </div>
          <p className="text-lg text-muted-foreground pl-13">
            Desde TikTok → compartir → Telegram → envías el link a tu bot
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-success/20">
              <span className="text-2xl font-bold text-success">2</span>
            </div>
            <h3 className="text-2xl font-semibold">Lo procesamos</h3>
          </div>
          <p className="text-lg text-muted-foreground pl-13">
            Descargamos el audio, lo transcribimos y lo clasificamos con IA
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-chart-3/20">
              <span className="text-2xl font-bold text-chart-3">3</span>
            </div>
            <h3 className="text-2xl font-semibold">Lo organizamos</h3>
          </div>
          <p className="text-lg text-muted-foreground pl-13">
            Guardamos recetas, rutinas o pendientes con etiquetas inteligentes
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-chart-4/20">
              <span className="text-2xl font-bold text-chart-4">4</span>
            </div>
            <h3 className="text-2xl font-semibold">Lo usas</h3>
          </div>
          <p className="text-lg text-muted-foreground pl-13">
            Dashboard con "Pasta alta en proteína", "Pierna 20 min", "Atomic Habits"
          </p>
        </div>
      </div>
    </div>
  )
}
