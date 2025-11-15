import { AlertCircle, Smartphone, Bookmark, Clock } from 'lucide-react'

export default function Slide2() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/20 mb-2">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h1 className="text-6xl font-bold">
          Tenemos motivación…<br />
          <span className="text-muted-foreground">pero se pierde en el scroll</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-8">
        <div className="glass-card p-8 rounded-2xl space-y-4">
          <Smartphone className="w-12 h-12 text-primary" />
          <h3 className="text-2xl font-semibold">El flujo actual</h3>
          <ol className="space-y-3 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">1.</span>
              <span>Ves algo increíble en TikTok</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">2.</span>
              <span>Lo guardas o mandas al grupo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">3.</span>
              <span className="text-destructive">Nunca lo vuelves a ver</span>
            </li>
          </ol>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4">
          <Bookmark className="w-12 h-12 text-chart-3" />
          <h3 className="text-2xl font-semibold">El problema real</h3>
          <div className="space-y-4 text-lg">
            <p className="text-muted-foreground">
              "Guardamos inspiración, pero no guardamos estructura."
            </p>
            <p className="text-muted-foreground">
              "No tenemos un lugar donde el contenido de bienestar se convierta en planes, listas y pequeñas acciones."
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-start gap-4">
          <Clock className="w-8 h-8 text-chart-4 shrink-0 mt-1" />
          <div className="space-y-2">
            <p className="text-xl font-medium">¿Te suena familiar?</p>
            <p className="text-lg text-muted-foreground italic">
              "¿Cuántas veces has dicho: 'este desayuno saludable lo hago mañana'… y nunca pasó?"
            </p>
            <p className="text-lg text-muted-foreground italic">
              "¿Cuántas rutinas lindas de pierna tienes guardadas en TikTok y no recuerdas ni dónde están?"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
