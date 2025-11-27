import { Peca } from '@/contexts/ProductsContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
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
  const whatsappUrl = `https://wa.me/554591530101?text=${whatsappMessage}`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % peca.imagens.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + peca.imagens.length) % peca.imagens.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl border-none bg-transparent p-0">
        <div className="relative flex flex-col md:flex-row bg-white rounded-[32px] overflow-hidden shadow-2xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 rounded-full bg-white/80 backdrop-blur p-2 hover:bg-white shadow-md transition"
            aria-label="Fechar"
          >
            <X className="h-4 w-4 text-foreground" />
          </button>

          {/* Gallery */}
          <div className="md:w-1/2 bg-white pt-6 pb-0 px-6 flex flex-col justify-center">
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/40 shadow-lg bg-white">
              <img
                src={peca.imagens[currentImageIndex]}
                alt={`${peca.nome} - imagem ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {peca.imagens.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white text-[#e05284] transition shadow-lg"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:bg-white text-[#e05284] transition shadow-lg"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {false && (
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {peca.imagens.map((imagem, index) => (
                  <button
                    key={imagem}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-16 w-16 rounded-2xl overflow-hidden border transition-all ${
                      index === currentImageIndex
                        ? 'border-[#e05284] shadow-md opacity-100'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    aria-label={`Selecionar imagem ${index + 1}`}
                  >
                    <img
                      src={imagem}
                      alt={`${peca.nome} detalhe ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl text-foreground leading-tight">
                {peca.nome}
              </h2>
              <p className="font-body text-sm text-foreground/70">
                {peca.descricao}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span>valor</span>
                {peca.tamanho && <span>tamanho</span>}
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="font-heading text-2xl text-[#e05284] leading-tight">
                  R$ {peca.preco.toFixed(2)}
                </p>
                {peca.tamanho && (
                  <p className="font-heading text-lg text-foreground leading-tight">
                    {peca.tamanho}
                  </p>
                )}
              </div>
            </div>

            <Button
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="w-full h-12 bg-[#e05284] hover:bg-[#c33963] text-white font-body font-medium rounded-full transition shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Conversar pelo WhatsApp
            </Button>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
