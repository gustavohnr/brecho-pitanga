import { useState, useMemo, useCallback } from 'react';
import { useProducts } from '@/contexts/ProductsContext';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { SearchBar } from '@/components/SearchBar';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { Pagination } from '@/components/Pagination';
import { Footer } from '@/components/Footer';
import { Peca } from '@/contexts/ProductsContext';
import { FloatingSocialIcons } from '@/components/SocialIcons';

const ITEMS_PER_PAGE = 8;

const Home = () => {
  const { pecas } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPeca, setSelectedPeca] = useState<Peca | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFloatingIcons, setShowFloatingIcons] = useState(true);

  const handleNavbarVisibility = useCallback((visible: boolean) => {
    setShowFloatingIcons(!visible);
  }, []);

  const filteredPecas = useMemo(() => {
    if (!searchQuery) return pecas;
    
    const query = searchQuery.toLowerCase();
    return pecas.filter(
      (peca) =>
        peca.nome.toLowerCase().includes(query) ||
        peca.descricao.toLowerCase().includes(query) ||
        peca.tamanho?.toLowerCase().includes(query)
    );
  }, [pecas, searchQuery]);

  const totalPages = Math.ceil(filteredPecas.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPecas = filteredPecas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleOpenModal = (peca: Peca) => {
    setSelectedPeca(peca);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPeca(null), 300);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <FloatingSocialIcons visible={showFloatingIcons} />
      <Navbar onVisibilityChange={handleNavbarVisibility} />
      <div className="max-w-7xl mx-auto pt-6 pb-4 md:pb-6 px-4">
        <Header />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <main className="flex-1 max-w-7xl mx-auto px-4 w-full">
        {/* Products Grid */}
        {currentPecas.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {currentPecas.map((peca) => (
                <ProductCard
                  key={peca.id}
                  peca={peca}
                  onClick={() => handleOpenModal(peca)}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="font-body text-muted-foreground text-lg">
              Nenhuma peça encontrada com "{searchQuery}"
            </p>
          </div>
        )}
      </main>

      <Footer />

      <ProductModal
        peca={selectedPeca}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Home;
