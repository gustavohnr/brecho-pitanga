import { Peca } from '@/contexts/ProductsContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProductModalProps {
  peca: Peca | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ peca, isOpen, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [peca]);

  if (!peca) return null;

  const whatsappMessage = encodeURIComponent(`Oi! Me interessei pela peça ${peca.nome}`);
  const whatsappUrl = `https://wa.me/5541997132569?text=${whatsappMessage}`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % peca.imagens.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + peca.imagens.length) % peca.imagens.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-hidden p-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-card/90 backdrop-blur-sm p-2 hover:bg-card transition-colors shadow-lg"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex flex-col max-h-[90vh]">
          {/* Image Gallery */}
          <div className="relative bg-gradient-to-br from-background to-primary/5">
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={peca.imagens[currentImageIndex]}
                alt={`${peca.nome} - Imagem ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {peca.imagens.length > 1 && (
              <>
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-all shadow-lg"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-all shadow-lg"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {peca.imagens.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-card w-8 shadow-md'
                          : 'bg-card/50 w-2'
                      }`}
                      aria-label={`Imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl text-foreground">
                {peca.nome}
              </DialogTitle>
            </DialogHeader>

            <div className="flex items-center gap-3">
              <p className="font-body text-3xl font-bold text-foreground">
                R$ {peca.preco.toFixed(2)}
              </p>
              {peca.tamanho && (
                <Badge variant="secondary" className="font-body">
                  Tamanho {peca.tamanho}
                </Badge>
              )}
            </div>

            <p className="font-body text-foreground/80 line-clamp-3">
              {peca.descricao}
            </p>

            <Button
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="w-full h-12 bg-success hover:bg-success-hover text-white font-body font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Comprar essa peça
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
