import { DollarSign, Users, Building2, Star } from 'lucide-react'

export default function Slide10() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/20 mb-2">
          <DollarSign className="w-8 h-8 text-success" />
        </div>
        <h1 className="text-6xl font-bold">
          Modelo de negocio
        </h1>
        <p className="text-2xl text-muted-foreground">
          Múltiples caminos de monetización
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-8">
        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <Users className="w-12 h-12 text-primary" />
            <h3 className="text-3xl font-semibold">Freemium B2C</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-muted/30">
              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="text-muted-foreground">Plan Free</span>
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>20-50 ítems procesados al mes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Dashboard básico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Funcionalidades core</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-primary/10 border-2 border-primary/30">
              <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-primary">Plan Pro</span>
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Procesamiento ilimitado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Etiquetas inteligentes y recordatorios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Exportación y sincronización</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Integración con calendario/apps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <Building2 className="w-12 h-12 text-success" />
            <h3 className="text-3xl font-semibold">B2B2C</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-success">Estudios de fitness</h4>
              <p className="text-lg text-muted-foreground">
                Licencia para entregar "bibliotecas de rutinas" organizadas a sus clientes
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-success">Creadores de contenido</h4>
              <p className="text-lg text-muted-foreground">
                Ofrecer a su comunidad una versión organizada y accionable de sus TikToks
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-success">Marcas de wellness</h4>
              <p className="text-lg text-muted-foreground">
                Herramienta white-label para engagement con su audiencia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-2xl bg-success/5 border-2 border-success/30 text-center">
        <p className="text-xl font-medium text-muted-foreground">
          Modelo escalable que crece con la base de usuarios 📈
        </p>
      </div>
    </div>
  )
}
