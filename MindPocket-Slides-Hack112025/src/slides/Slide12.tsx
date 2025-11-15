import { Rocket, Heart, Target } from 'lucide-react'

export default function Slide12() {
  return (
    <div className="max-w-6xl mx-auto text-center space-y-12">
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
          <Rocket className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-7xl font-bold leading-tight">
          ¿Qué pasaría si cada scroll<br />
          <span className="bg-gradient-to-r from-primary via-success to-chart-3 bg-clip-text text-transparent">
            se convirtiera en una<br />pequeña acción?
          </span>
        </h1>
      </div>

      <div className="glass-card p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-success/10 border-2 border-primary/30 max-w-4xl mx-auto">
        <p className="text-3xl font-medium mb-6">
          Tenemos más contenido que nunca,<br />
          pero lo que cambia vidas son las <span className="text-primary">acciones</span>.
        </p>
        <p className="text-2xl text-muted-foreground">
          MindPocket existe para cerrar esa brecha.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 pt-8 max-w-5xl mx-auto">
        <div className="glass-card p-6 rounded-2xl space-y-3">
          <Heart className="w-10 h-10 text-primary mx-auto" />
          <h3 className="text-xl font-semibold">Para usuarios</h3>
          <p className="text-muted-foreground">
            Únete a la beta y empieza a rescatar tus TikToks de wellness
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl space-y-3">
          <Target className="w-10 h-10 text-success mx-auto" />
          <h3 className="text-xl font-semibold">Para inversores</h3>
          <p className="text-muted-foreground">
            Validación con usuarios reales en los próximos 3 meses
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl space-y-3">
          <Rocket className="w-10 h-10 text-chart-3 mx-auto" />
          <h3 className="text-xl font-semibold">Para partners</h3>
          <p className="text-muted-foreground">
            Colabora con nosotros para llevar wellness a más personas
          </p>
        </div>
      </div>

      <div className="pt-8">
        <div className="inline-block glass-card px-8 py-4 rounded-2xl">
          <p className="text-xl font-medium text-muted-foreground mb-2">
            Prueba la app ahora:
          </p>
          <a 
            href="https://mindpocket.lolorein.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            mindpocket.lolorein.com
          </a>
        </div>
      </div>

      <div className="pt-8">
        <p className="text-5xl font-bold">
          🚀 Let's build the future of wellness
        </p>
      </div>
    </div>
  )
}
