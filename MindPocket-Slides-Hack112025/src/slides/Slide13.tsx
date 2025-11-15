import { Smartphone, QrCode } from 'lucide-react'

export default function Slide13() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-2">
          <Smartphone className="w-7 h-7 text-primary" />
        </div>
        <h1 className="text-5xl font-bold">
          Prueba <span className="text-primary">MindPocket</span> ahora
        </h1>
        <p className="text-xl text-muted-foreground">
          Experiencia optimizada para móvil
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center gap-8">
        {/* App Preview */}
        <div className="glass-card p-4 rounded-3xl w-full max-w-sm">
          <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
            <iframe 
              src="https://mindpocket.lolorein.com"
              className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-primary/20"
              title="MindPocket App"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>

        {/* QR Codes Column */}
        <div className="flex flex-col gap-6 items-center">
          {/* QR Code 1 */}
          <div className="glass-card p-4 rounded-2xl">
            <div className="flex flex-col items-center gap-2">
              <img 
                src="/nXZ682.svg" 
                alt="QR Code 1" 
                className="w-48 h-48 rounded-lg"
              />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <QrCode className="w-4 h-4" />
                <span>Escanea con tu móvil</span>
              </div>
            </div>
          </div>

          {/* QR Code 2 */}
          <div className="glass-card p-4 rounded-2xl">
            <div className="flex flex-col items-center gap-2">
              <img 
                src="/Untitled.svg" 
                alt="QR Code 2" 
                className="w-48 h-48 rounded-lg"
              />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <QrCode className="w-4 h-4" />
                <span>O prueba aquí</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a 
          href="https://mindpocket.lolorein.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          <Smartphone className="w-5 h-5" />
          Abrir en tu teléfono
        </a>
      </div>
    </div>
  )
}
