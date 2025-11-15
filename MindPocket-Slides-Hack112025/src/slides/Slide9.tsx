import { Sparkles, Zap, TrendingUp, Clock } from 'lucide-react'

export default function Slide9() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/20 mb-2">
          <Sparkles className="w-8 h-8 text-success" />
        </div>
        <h1 className="text-6xl font-bold">
          Beneficios
        </h1>
        <p className="text-3xl text-muted-foreground">
          Del hype a hábitos
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-8">
        <div className="glass-card p-8 rounded-2xl space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold">Menos ruido, más claridad</h3>
          <p className="text-lg text-muted-foreground">
            Todo tu contenido de wellness en un solo panel, organizado y listo para usar.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success/20 mb-4">
            <Zap className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-2xl font-semibold">Acción rápida</h3>
          <p className="text-lg text-muted-foreground">
            Recetas y rutinas listas para usar, no solo un link perdido en tus guardados.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-chart-3/20 mb-4">
            <TrendingUp className="w-8 h-8 text-chart-3" />
          </div>
          <h3 className="text-2xl font-semibold">Motivación sostenible</h3>
          <p className="text-lg text-muted-foreground">
            Ves tu progreso, no solo videos guardados que nunca vuelves a ver.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-chart-4/20 mb-4">
            <Clock className="w-8 h-8 text-chart-4" />
          </div>
          <h3 className="text-2xl font-semibold">Tiempo ahorrado</h3>
          <p className="text-lg text-muted-foreground">
            No tienes que volver a buscar "ese TikTok de avena que vi hace semanas".
          </p>
        </div>
      </div>

      <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-success/10 border-2 border-primary/30 text-center">
        <p className="text-3xl font-bold mb-4">
          De la inspiración a la acción 🚀
        </p>
        <p className="text-xl text-muted-foreground">
          Convierte el contenido que amas en hábitos que transforman tu vida
        </p>
      </div>
    </div>
  )
}
