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
    nome: 'Vestido Floral Vintage',
    descricao: 'Lindo vestido floral dos anos 80, em ótimo estado. Perfeito para dias ensolarados!',
    preco: 89.90,
    tamanho: 'M',
    imagens: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop'],
  },
  {
    id: '2',
    nome: 'Jaqueta Jeans Oversized',
    descricao: 'Jaqueta jeans oversized, estilo casual e moderno. Combina com tudo!',
    preco: 129.90,
    tamanho: 'G',
    imagens: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop'],
  },
  {
    id: '3',
    nome: 'Blusa Romântica Rosa',
    descricao: 'Blusa delicada com detalhes em renda. Perfeita para ocasiões especiais.',
    preco: 65.00,
    tamanho: 'P',
    imagens: ['https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop'],
  },
  {
    id: '4',
    nome: 'Saia Midi Plissada',
    descricao: 'Saia midi plissada em tons neutros. Elegante e versátil.',
    preco: 75.00,
    tamanho: 'M',
    imagens: ['https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop'],
  },
  {
    id: '5',
    nome: 'Cardigan de Tricô Bege',
    descricao: 'Cardigan quentinho e confortável. Ideal para dias frios.',
    preco: 95.00,
    tamanho: 'M',
    imagens: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop'],
  },
  {
    id: '6',
    nome: 'Calça Wide Leg Preta',
    descricao: 'Calça wide leg em alfaiataria. Sofisticada e moderna.',
    preco: 110.00,
    tamanho: 'M',
    imagens: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop'],
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
