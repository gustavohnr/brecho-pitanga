import { Peca } from '@/contexts/ProductsContext';

interface ProductCardProps {
  peca: Peca;
  onClick: () => void;
}

export const ProductCard = ({ peca, onClick }: ProductCardProps) => (
  <button
    onClick={onClick}
    className="group relative w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e05284]/60 rounded-[28px]"
  >
    <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/90 via-white/40 to-white/10 shadow-lg transition group-hover:-translate-y-1 group-hover:shadow-xl" />
    <div className="relative rounded-[28px] border border-white/60 bg-white/85 backdrop-blur flex flex-col overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={peca.imagens[0]}
          alt={peca.nome}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {false && peca.tamanho && (
          <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.3em] text-[#c33963] uppercase">
            {peca.tamanho}
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-heading text-base text-foreground leading-tight line-clamp-1">
          {peca.nome}
        </h3>
        <div className="flex items-center justify-between">
          <p className="font-heading text-xl text-[#e05284]">
            R$ {peca.preco.toFixed(2)}
          </p>
          {peca.tamanho && (
            <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              {peca.tamanho}
            </span>
          )}
        </div>
      </div>
    </div>
  </button>
);
