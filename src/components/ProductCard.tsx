import { Peca } from '@/contexts/ProductsContext';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  peca: Peca;
  onClick: () => void;
}

export const ProductCard = ({ peca, onClick }: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-card border border-border rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
    >
      <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-background to-primary/5">
        <img
          src={peca.imagens[0]}
          alt={peca.nome}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-3 space-y-2">
        <h3 className="font-heading font-semibold text-foreground text-sm line-clamp-1">
          {peca.nome}
        </h3>
        <div className="flex items-center justify-between">
          <p className="font-body font-medium text-foreground text-lg">
            R$ {peca.preco.toFixed(2)}
          </p>
          {peca.tamanho && (
            <Badge variant="secondary" className="font-body text-xs">
              {peca.tamanho}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};
