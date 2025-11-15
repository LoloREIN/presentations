import { MapPin, Bell, BarChart3, Calendar } from 'lucide-react'

export default function Slide11() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chart-3/20 mb-2">
          <MapPin className="w-8 h-8 text-chart-3" />
        </div>
        <h1 className="text-6xl font-bold">
          Roadmap
        </h1>
        <p className="text-3xl text-muted-foreground">
          Lo que viene después
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-8">
        <div className="glass-card p-8 rounded-2xl space-y-4 glass-card-hover">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold">App móvil nativa</h3>
          <p className="text-lg text-muted-foreground">
            Android / iOS con botón de <strong>"Share to MindPocket"</strong> directo desde TikTok
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4 glass-card-hover">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success/20 mb-4">
            <Bell className="w-8 h-8 text-success" />
          </div>
          <h3 className="text-2xl font-semibold">Recordatorios inteligentes</h3>
          <p className="text-lg text-muted-foreground">
            "Guardaste 3 rutinas de pierna, ¿quieres agendar una esta semana?"
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4 glass-card-hover">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-chart-3/20 mb-4">
            <BarChart3 className="w-8 h-8 text-chart-3" />
          </div>
          <h3 className="text-2xl font-semibold">Resúmenes semanales</h3>
          <p className="text-lg text-muted-foreground">
            "Esta semana guardaste 4 recetas y completaste 2 rutinas 💪"
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-4 glass-card-hover">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-chart-4/20 mb-4">
            <Calendar className="w-8 h-8 text-chart-4" />
          </div>
          <h3 className="text-2xl font-semibold">Integraciones avanzadas</h3>
          <ul className="space-y-2 text-lg text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-chart-4">•</span>
              <span>Apple Health / Google Fit</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-chart-4">•</span>
              <span>Google Calendar para planear rutinas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-chart-4">•</span>
              <span>Notion, Todoist, etc.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="glass-card p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-chart-3/10 border-2 border-primary/30">
        <div className="text-center space-y-4">
          <p className="text-2xl font-semibold">
            Visión a largo plazo
          </p>
          <p className="text-xl text-muted-foreground">
            Convertirnos en el <span className="text-primary font-semibold">sistema operativo de bienestar personal</span>,
            donde todo el contenido inspiracional se convierte automáticamente en planes accionables
          </p>
        </div>
      </div>
    </div>
  )
}
