import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const MAX_VISIBLE = 5;

const getVisiblePages = (currentPage: number, totalPages: number) => {
  if (totalPages <= MAX_VISIBLE) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, start + MAX_VISIBLE - 1);
  start = Math.max(1, end - MAX_VISIBLE + 1);

  const pages: (number | 'ellipsis')[] = [];

  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push('ellipsis');
  }

  for (let i = start; i <= end; i++) pages.push(i);

  if (end < totalPages) {
    if (end < totalPages - 1) pages.push('ellipsis');
    pages.push(totalPages);
  }

  return pages;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = getVisiblePages(currentPage, totalPages);
  const baseButton =
    "inline-flex items-center justify-center rounded-full font-body text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 disabled:opacity-40 disabled:cursor-not-allowed";

  return (
    <div className="flex justify-center py-10">
      <div className="flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 shadow-lg border border-white/40 text-[#e05284]">
        <button
          className={`${baseButton} w-9 h-9 bg-[#fce4ec] hover:bg-[#f8b5c9]`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Página anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {pages.map((page, index) =>
          page === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className="px-2 text-sm font-medium">
              ...
            </span>
          ) : (
            <button
              key={page}
              className={`${baseButton} w-9 h-9 ${
                page === currentPage
                  ? 'bg-[#e05284] text-white shadow-md'
                  : 'bg-transparent hover:bg-[#f8b5c9]/50'
              }`}
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          ),
        )}

        <button
          className={`${baseButton} w-9 h-9 bg-[#fce4ec] hover:bg-[#f8b5c9]`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
