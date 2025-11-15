import { Sparkles } from 'lucide-react'

export default function Slide1() {
  return (
    <div className="max-w-6xl mx-auto text-center space-y-8">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
        <Sparkles className="w-10 h-10 text-primary" />
      </div>
      
      <h1 className="text-7xl font-bold bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent leading-tight">
        De scroll infinito a progreso real
      </h1>
      
      <p className="text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
        Convierte cada TikTok de recetas, rutinas y hacks en acciones que realmente haces.
      </p>

      <div className="pt-8">
        <div className="glass-card inline-block px-8 py-6 rounded-2xl">
          <p className="text-xl text-foreground/80 italic">
            "Hoy guardamos miles de recetas, rutinas y libros 'para luego'…<br />
            pero nunca llegan a convertirse en hábitos."
          </p>
        </div>
      </div>

      {/* App Embed Preview */}
      <div className="pt-12">
        <div className="glass-card p-2 rounded-2xl inline-block">
          <div className="bg-card rounded-xl p-4 text-sm text-muted-foreground">
            <p>🎯 Prueba la app en:</p>
            <a 
              href="https://mindpocket.lolorein.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium"
            >
              mindpocket.lolorein.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
