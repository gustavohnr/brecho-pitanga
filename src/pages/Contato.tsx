import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Mail, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Obrigada pelo contato. Responderemos em breve!",
    });
    
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto px-4 py-20 md:py-24 w-full">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contato através dos nossos canais ou envie uma mensagem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Sobre o Pitanga Brecho
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-4">
                Somos apaixonadas por moda sustentável e acreditamos que cada peça tem uma história única para contar. 
                Nossa curadoria é feita com muito carinho, selecionando apenas peças de qualidade que merecem uma 
                segunda chance de brilhar.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                Mais do que um brechó, somos um espaço de encontro entre estilo, consciência ambiental e economia. 
                Venha fazer parte dessa comunidade!
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Nossos Canais
              </h3>
              
              <a
                href="https://wa.me/554591530101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-background transition-colors group"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary-hover transition-colors">
                  <MessageCircle className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-body font-medium text-foreground">WhatsApp</p>
                  <p className="font-body text-sm text-muted-foreground">+55 45 9153-0101</p>
                </div>
              </a>

              <a
                href="mailto:contato@brechodapitanga.com"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-background transition-colors group"
              >
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-body font-medium text-foreground">E-mail</p>
                  <p className="font-body text-sm text-muted-foreground">contato@brechodapitanga.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/dudacareagaa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-background transition-colors group"
              >
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity">
                  <Instagram className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-body font-medium text-foreground">Instagram</p>
                  <p className="font-body text-sm text-muted-foreground">@dudacareagaa</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="font-body font-medium">
                  Nome
                </Label>
                <Input
                  id="nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                  className="font-body"
                  placeholder="Seu nome"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-body font-medium">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-body"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem" className="font-body font-medium">
                  Mensagem
                </Label>
                <Textarea
                  id="mensagem"
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  required
                  className="font-body min-h-[120px]"
                  placeholder="Sua mensagem..."
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary-hover text-foreground font-body font-medium rounded-full transition-colors"
              >
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
