import { Smartphone, QrCode, Sparkles } from 'lucide-react'

export default function Slide13() {
  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col justify-center py-8">
      {/* Header */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-1">
          <Smartphone className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">
          Prueba <span className="text-primary">MindPocket</span> ahora
        </h1>
        <p className="text-lg text-muted-foreground">
          Escanea el QR o explora la demo en vivo
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left: App Preview */}
        <div className="flex flex-col gap-4">
          <div className="glass-card p-3 rounded-3xl">
            <div className="relative w-full" style={{ paddingBottom: '140%', maxHeight: '600px' }}>
              <iframe 
                src="https://mindpocket.lolorein.com"
                className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-primary/20"
                title="MindPocket App"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Demo interactivo en tiempo real</span>
          </div>
        </div>

        {/* Right: QR Codes */}
        <div className="flex flex-col gap-8 items-center justify-center">
          {/* QR Code 1 */}
          <div className="glass-card p-6 rounded-2xl w-full max-w-sm">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 mb-2">
                <QrCode className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Acceso Web</h3>
              </div>
              <img 
                src="/nXZ682.svg" 
                alt="QR Code - Acceso Web" 
                className="w-56 h-56 rounded-xl bg-white p-2"
              />
              <p className="text-sm text-muted-foreground text-center">
                Abre MindPocket en tu navegador móvil
              </p>
            </div>
          </div>

          {/* QR Code 2 */}
          <div className="glass-card p-6 rounded-2xl w-full max-w-sm">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 mb-2">
                <QrCode className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Demo Rápida</h3>
              </div>
              <img 
                src="/Untitled.svg" 
                alt="QR Code - Demo Rápida" 
                className="w-56 h-56 rounded-xl bg-white p-2"
              />
              <p className="text-sm text-muted-foreground text-center">
                Prueba las funciones principales
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-8">
        <a 
          href="https://mindpocket.lolorein.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105"
        >
          <Smartphone className="w-5 h-5" />
          Abrir en tu dispositivo
        </a>
      </div>
    </div>
  )
}
