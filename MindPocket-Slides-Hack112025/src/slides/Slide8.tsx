import { Play, Coffee, Dumbbell, BookOpen, CheckCircle } from 'lucide-react'

export default function Slide8() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/20 mb-2">
          <Play className="w-8 h-8 text-success" />
        </div>
        <h1 className="text-5xl font-bold">
          Demo: un día con MindPocket
        </h1>
      </div>

      <div className="space-y-6">
        <div className="glass-card p-8 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 shrink-0">
              <Coffee className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">Mañana</h3>
              <p className="text-lg text-muted-foreground mb-2">
                Estás en TikTok, ves una receta de desayuno proteico.
              </p>
              <p className="text-lg text-foreground">
                → La compartes a tu bot de Telegram de MindPocket
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success/20 shrink-0">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">Medio día</h3>
              <p className="text-lg text-muted-foreground mb-2">
                Abres el dashboard: la receta ya aparece con ingredientes y pasos listos.
              </p>
              <p className="text-lg text-foreground">
                → La cocinas siguiendo el modo "receta" 👨‍🍳
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-chart-3/20 shrink-0">
              <Dumbbell className="w-8 h-8 text-chart-3" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">Tarde</h3>
              <p className="text-lg text-muted-foreground mb-2">
                Ves una rutina de pierna de 15 min.
              </p>
              <p className="text-lg text-foreground">
                → La compartes, MindPocket la convierte en una rutina con series y repeticiones 💪
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-chart-4/20 shrink-0">
              <BookOpen className="w-8 h-8 text-chart-4" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">Noche</h3>
              <p className="text-lg text-muted-foreground mb-2">
                Ves un TikTok que recomienda una película o un libro.
              </p>
              <p className="text-lg text-foreground">
                → Lo envías y automáticamente se guarda en tu lista de "Pendientes" 📚
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl bg-primary/5 border-2 border-primary/30 text-center">
        <p className="text-2xl font-medium">
          "Todo lo que te inspira en TikTok, concentrado en un solo lugar<br />
          <span className="text-primary">donde sí pasa algo.</span>"
        </p>
      </div>
    </div>
  )
}
