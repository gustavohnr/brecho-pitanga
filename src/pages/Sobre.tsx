import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Recycle, Heart, Sparkles, ShoppingBag } from 'lucide-react';

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto px-4 py-20 md:py-24 w-full">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre o Brechó da Pitanga
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Moda sustentável, curadoria especial e peças únicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Nossa História
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              O Brechó da Pitanga nasceu da paixão por moda sustentável e do desejo de dar uma segunda 
              vida a peças especiais. Acreditamos que cada roupa tem uma história única para contar.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              Nosso nome foi inspirado por uma gatinha muito especial, que nos ensinou sobre carinho, 
              cuidado e a importância de valorizar cada momento.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-shadow">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
              <Recycle className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Moda Sustentável
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              A indústria da moda é uma das mais poluentes do mundo. Ao escolher brechó, você está 
              fazendo uma escolha consciente pelo planeta e pelas futuras gerações.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed">
              Cada peça que encontra um novo lar é uma peça a menos nos aterros e uma contribuição 
              real para um futuro mais sustentável.
            </p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 card-shadow mb-16">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Nossos Valores
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Curadoria Especial
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                Cada peça é cuidadosamente selecionada. Só aceitamos roupas em ótimo estado, 
                limpas e que tenham muito estilo para oferecer.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Feito com Carinho
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                Tratamos cada peça com muito amor. Lavamos, passamos e cuidamos de cada detalhe 
                para que chegue perfeita até você.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Preço Justo
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed">
                Moda de qualidade não precisa ser cara. Oferecemos peças incríveis por preços 
                acessíveis, porque estilo é para todo mundo.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
            Venha nos Conhecer!
          </h2>
          <p className="font-body text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
            Temos sempre peças novas chegando. Siga a gente nas redes sociais e seja o primeiro 
            a saber das novidades!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5541997132569"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-success hover:bg-success-hover text-white font-body font-medium rounded-full transition-colors"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://instagram.com/brechodapitanga"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-card hover:bg-background border border-border text-foreground font-body font-medium rounded-full transition-colors"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
