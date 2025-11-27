import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-full font-body font-medium"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Anterior
      </Button>
      
      <span className="font-body text-foreground">
        Página {currentPage} de {totalPages}
      </span>
      
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-full font-body font-medium"
      >
        Próxima
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
};
