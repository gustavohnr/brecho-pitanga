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

const lastSixImages = [
  'https://image.hm.com/assets/hm/66/2e/662e5c165b11a64778ac060da67b82a210572eb3.jpg?imwidth=2160',
  'https://image.hm.com/assets/hm/22/a4/22a44d4ee577424040be124e348ae73411ae9d79.jpg?imwidth=2160',
  'https://image.hm.com/assets/hm/28/58/28586cd06789b9199edad8bd1e51250b1f5cebe1.jpg?imwidth=2160',
  'https://image.hm.com/assets/hm/96/7d/967d9fcc5961ba54e5ae99c16f2a2ecd0a958af4.jpg?imwidth=2160',
  'https://image.hm.com/assets/hm/8e/43/8e43ae48eb881b7159c0514ecaf604adcdbd5dbd.jpg?imwidth=2160',
];

const initialPecas: Peca[] = [
  {
    id: '1',
    nome: 'Vestido de renda (preto)',
    descricao: 'Vestido curto em renda, visual delicado e acabamento detalhado. Ideal para ocasiões noturnas e eventos.',
    preco: 179.0,
    tamanho: 'M',
    imagens: [
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
    ],
  },
  {
    id: '2',
    nome: 'Camiseta básica Regular Fit (off-white)',
    descricao: 'Camiseta lisa de modelagem regular, ótima para looks minimalistas e combinações com jeans ou alfaiataria.',
    preco: 49.9,
    tamanho: 'M',
    imagens: [
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
    ],
  },
  {
    id: '3',
    nome: 'Jeans reta (azul)',
    descricao: 'Calça jeans de modelagem reta com visual clássico. Funciona bem do casual ao smart casual.',
    preco: 129.0,
    tamanho: 'M',
    imagens: [
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
    ],
  },
  {
    id: '4',
    nome: 'Bolsa shoulder retangular (caramelo)',
    descricao: 'Bolsa compacta com formato estruturado, ideal para o dia a dia e para compor looks urbanos.',
    preco: 89.0,
    tamanho: 'U',
    imagens: [
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
    ],
  },
  {
    id: '5',
    nome: 'Blazer double-breasted (bege)',
    descricao: 'Blazer de alfaiataria com abotoamento duplo. Peça-chave para elevar o look com elegância.',
    preco: 219.0,
    tamanho: 'M',
    imagens: [
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
    ],
  },
  {
    id: '6',
    nome: 'Tênis casual (branco/azul marinho)',
    descricao: 'Tênis clean e versátil para uso diário, combinando com jeans, saias e vestidos.',
    preco: 99.0,
    tamanho: 'U',
    imagens: [
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
      lastSixImages[Math.floor(Math.random() * lastSixImages.length)],
    ],
  },
  {
    id: '7',
    nome: 'Moletom com capuz (bege claro)',
    descricao: 'Hoodie básico com bolso canguru e cordão. Confortável e fácil de combinar no dia a dia.',
    preco: 89.0,
    tamanho: 'M',
    imagens: [
      'https://image.hm.com/assets/hm/66/2e/662e5c165b11a64778ac060da67b82a210572eb3.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/66/2e/662e5c165b11a64778ac060da67b82a210572eb3.jpg?imwidth=2160',
    ],
  },
  {
    id: '8',
    nome: 'Suéter de tricô gola careca (bege mesclado)',
    descricao: 'Suéter macio de visual minimalista, ótimo para meia-estação e sobreposições.',
    preco: 109.0,
    tamanho: 'M',
    imagens: [
      'https://image.hm.com/assets/hm/22/a4/22a44d4ee577424040be124e348ae73411ae9d79.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/22/a4/22a44d4ee577424040be124e348ae73411ae9d79.jpg?imwidth=2160',
    ],
  },
  {
    id: '9',
    nome: 'Suéter ombro a ombro canelado (cinza escuro)',
    descricao: 'Tricô canelado com caimento solto e visual marcante, ideal para looks mais arrumados sem perder conforto.',
    preco: 119.0,
    tamanho: 'M',
    imagens: [
      'https://image.hm.com/assets/hm/28/58/28586cd06789b9199edad8bd1e51250b1f5cebe1.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/28/58/28586cd06789b9199edad8bd1e51250b1f5cebe1.jpg?imwidth=2160',
    ],
  },
  {
    id: '10',
    nome: 'Suéter de tricô com lã (marrom escuro)',
    descricao: 'Tricô de gola careca e mangas longas, com textura suave e visual aconchegante.',
    preco: 129.0,
    tamanho: 'M',
    imagens: [
      'https://image.hm.com/assets/hm/96/7d/967d9fcc5961ba54e5ae99c16f2a2ecd0a958af4.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/96/7d/967d9fcc5961ba54e5ae99c16f2a2ecd0a958af4.jpg?imwidth=2160',
    ],
  },
  {
    id: '11',
    nome: 'Saia A-line curta (azul marinho)',
    descricao: 'Saia em linha A com detalhes laterais e botões. Boa para compor looks clássicos ou modernos.',
    preco: 89.0,
    tamanho: 'P',
    imagens: [
      'https://image.hm.com/assets/hm/8e/43/8e43ae48eb881b7159c0514ecaf604adcdbd5dbd.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/8e/43/8e43ae48eb881b7159c0514ecaf604adcdbd5dbd.jpg?imwidth=2160',
    ],
  },
  {
    id: '12',
    nome: 'Moletom preto (detalhe do bolso/costura)',
    descricao: 'Close de acabamento em moletom com bolso canguru; útil para mostrar textura e qualidade do tecido sem modelo.',
    preco: 79.0,
    tamanho: 'U',
    imagens: [
      'https://image.hm.com/assets/hm/8e/43/8e43ae48eb881b7159c0514ecaf604adcdbd5dbd.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/8e/43/8e43ae48eb881b7159c0514ecaf604adcdbd5dbd.jpg?imwidth=2160',
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
