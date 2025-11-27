import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Peca {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  tamanho?: string;
  imagens: string[];
}

interface ProductsContextType {
  pecas: Peca[];
  addPeca: (peca: Omit<Peca, 'id'>) => void;
  updatePeca: (id: string, peca: Omit<Peca, 'id'>) => void;
  deletePeca: (id: string) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

const initialPecas: Peca[] = [
  {
    id: '1',
    nome: 'Vestido Midi Jardim',
    descricao: 'Vestido em viscose com estampa floral aquarelada, alças reguláveis e caimento fluído.',
    preco: 149.90,
    tamanho: 'M',
    imagens: [
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900&auto=format&fit=crop',
    ],
  },
  {
    id: '2',
    nome: 'Jaqueta Jeans Aurora',
    descricao: 'Jaqueta jeans oversized com lavagem média e punhos trabalhados à mão.',
    preco: 159.90,
    tamanho: 'G',
    imagens: [
      'https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop',
    ],
  },
  {
    id: '3',
    nome: 'Blusa Romântica Rosa',
    descricao: 'Blusa em organza com mangas bufantes, botões de madrepérola e gola delicada.',
    preco: 89.00,
    tamanho: 'P',
    imagens: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop',
    ],
  },
  {
    id: '4',
    nome: 'Saia Midi Plissada Areia',
    descricao: 'Saia plissada em chiffon areia com cós marcado e movimento impecável.',
    preco: 119.00,
    tamanho: 'M',
    imagens: [
      'https://images.unsplash.com/photo-1514996937319-344454492b37?w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop',
    ],
  },
  {
    id: '5',
    nome: 'Cardigan Tricô Amêndoa',
    descricao: 'Cardigan em tricô felpudo com botões em resina e modelagem soltinha.',
    preco: 105.00,
    tamanho: 'M',
    imagens: [
      'https://images.unsplash.com/photo-1521572166906-6fda22f26b2c?w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&auto=format&fit=crop',
    ],
  },
  {
    id: '6',
    nome: 'Calça Wide Leg Oliva',
    descricao: 'Calça alfaiatada em linho, cintura média e pregas profundas para um volume elegante.',
    preco: 135.00,
    tamanho: 'M',
    imagens: [
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=900&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=900&auto=format&fit=crop',
    ],
  },
  {
    id: '7',
    nome: 'Macacão Linho Solar',
    descricao: 'Macacão de linho amarelo queimado com amarração frontal e decote em V.',
    preco: 189.00,
    tamanho: 'G',
    imagens: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&auto=format&fit=crop&sat=-15',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=900&auto=format&fit=crop',
    ],
  },
  {
    id: '8',
    nome: 'Camisa Botânica Aurora',
    descricao: 'Camisa em algodão acetinado com estampa botânica exclusiva e gola padre.',
    preco: 99.90,
    tamanho: 'M',
    imagens: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&sat=-20',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&sat=-20',
    ],
  },
  {
    id: '9',
    nome: 'Vestido Poá Retrô',
    descricao: 'Vestido midi de poá com saia rodada, cinto forrado e bolsos invisíveis.',
    preco: 139.00,
    tamanho: 'P',
    imagens: [
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=900&auto=format&fit=crop&sat=20',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&sat=10',
    ],
  },
  {
    id: '10',
    nome: 'Conjunto Tweed Azul',
    descricao: 'Blazer cropped e saia mini em tweed azul clarinho com botões perolados.',
    preco: 219.00,
    tamanho: 'P',
    imagens: [
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=900&auto=format&fit=crop&sat=5',
      'https://images.unsplash.com/photo-1495121605193-b116b5b09a57?w=900&auto=format&fit=crop',
    ],
  },
  {
    id: '11',
    nome: 'Blazer Lavanda Aurora',
    descricao: 'Blazer alongado em alfaiataria lavanda com ombros estruturados vintage.',
    preco: 189.00,
    tamanho: 'G',
    imagens: [
      'https://images.unsplash.com/photo-1495121605193-b116b5b09a57?w=900&auto=format&fit=crop&sat=10',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=900&auto=format&fit=crop&sat=20',
    ],
  },
  {
    id: '12',
    nome: 'Chemise Terracota',
    descricao: 'Chemise em crepe terracota com abotoamento frontal e faixa do mesmo tecido.',
    preco: 129.90,
    tamanho: 'M',
    imagens: [
      'https://images.unsplash.com/photo-1521572166906-6fda22f26b2c?w=900&auto=format&fit=crop&sat=10',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=900&auto=format&fit=crop&sat=-10',
    ],
  },
];

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [pecas, setPecas] = useState<Peca[]>(initialPecas);

  const addPeca = (peca: Omit<Peca, 'id'>) => {
    const newPeca: Peca = {
      ...peca,
      id: Date.now().toString(),
    };
    setPecas([...pecas, newPeca]);
  };

  const updatePeca = (id: string, updatedPeca: Omit<Peca, 'id'>) => {
    setPecas(pecas.map(p => p.id === id ? { ...updatedPeca, id } : p));
  };

  const deletePeca = (id: string) => {
    setPecas(pecas.filter(p => p.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ pecas, addPeca, updatePeca, deletePeca }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductsProvider');
  }
  return context;
};
