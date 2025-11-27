import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 pb-2 mt-2">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar peça, cor, tamanho..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 h-10 bg-card border-border rounded-full font-body shadow"
        />
      </div>
    </div>
  );
};
