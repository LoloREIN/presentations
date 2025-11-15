import { Users, TrendingUp, Target, Zap } from 'lucide-react'

export default function Slide3() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/20 mb-2">
          <Users className="w-8 h-8 text-success" />
        </div>
        <h1 className="text-6xl font-bold">
          La audiencia
        </h1>
        <p className="text-3xl text-muted-foreground">
          Jóvenes motivados, pero saturados de contenido
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 pt-8">
        <div className="glass-card p-8 rounded-2xl space-y-4">
          <TrendingUp className="w-12 h-12 text-primary" />
          <h3 className="text-2xl font-semibold">Ya intentaron</h3>
          <p className="text-lg text-muted-foreground">
            Hicieron algún intento de entrenar, comer mejor o "resetear su vida"
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4">
          <Target className="w-12 h-12 text-success" />
          <h3 className="text-2xl font-semibold">Siguen cuentas</h3>
          <p className="text-lg text-muted-foreground">
            De fitness, nutrición, productividad. Les encanta TikTok como fuente de ideas
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4">
          <Zap className="w-12 h-12 text-chart-3" />
          <h3 className="text-2xl font-semibold">Buscan acción</h3>
          <p className="text-lg text-muted-foreground">
            No más contenido, sino que lo que ya vieron se convierta en algo accionable
          </p>
        </div>
      </div>

      <div className="glass-card p-8 rounded-2xl bg-primary/5 border-2 border-primary/30">
        <p className="text-2xl text-center font-medium">
          "No necesito más contenido, necesito que lo que ya vi<br />
          <span className="text-primary">se convierta en algo accionable y fácil de seguir.</span>"
        </p>
      </div>

      <div className="text-center pt-4">
        <p className="text-xl text-muted-foreground">
          Tu producto <span className="text-primary font-semibold">no compite</span> con TikTok,{' '}
          <span className="text-success font-semibold">lo complementa</span>.
        </p>
      </div>
    </div>
  )
}
