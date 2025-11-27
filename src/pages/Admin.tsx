import { useState } from 'react';
import { useProducts, Peca } from '@/contexts/ProductsContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Cat, Plus, Trash2, Edit, Save, X } from 'lucide-react';

const Admin = () => {
  const { pecas, addPeca, updatePeca, deletePeca } = useProducts();
  const { toast } = useToast();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    tamanho: '',
    imagens: [''],
  });

  const resetForm = () => {
    setFormData({
      nome: '',
      descricao: '',
      preco: '',
      tamanho: '',
      imagens: [''],
    });
    setEditingId(null);
  };

  const handleEdit = (peca: Peca) => {
    setFormData({
      nome: peca.nome,
      descricao: peca.descricao,
      preco: peca.preco.toString(),
      tamanho: peca.tamanho || '',
      imagens: peca.imagens,
    });
    setEditingId(peca.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta peça?')) {
      deletePeca(id);
      toast({
        title: "Peça excluída",
        description: "A peça foi removida com sucesso.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const pecaData = {
      nome: formData.nome,
      descricao: formData.descricao,
      preco: parseFloat(formData.preco),
      tamanho: formData.tamanho || undefined,
      imagens: formData.imagens.filter(img => img.trim() !== ''),
    };

    if (editingId) {
      updatePeca(editingId, pecaData);
      toast({
        title: "Peça atualizada",
        description: "As alterações foram salvas com sucesso.",
      });
    } else {
      addPeca(pecaData);
      toast({
        title: "Peça adicionada",
        description: "Nova peça foi cadastrada com sucesso.",
      });
    }

    resetForm();
  };

  const addImageField = () => {
    setFormData({
      ...formData,
      imagens: [...formData.imagens, ''],
    });
  };

  const updateImageField = (index: number, value: string) => {
    const newImagens = [...formData.imagens];
    newImagens[index] = value;
    setFormData({ ...formData, imagens: newImagens });
  };

  const removeImageField = (index: number) => {
    if (formData.imagens.length > 1) {
      const newImagens = formData.imagens.filter((_, i) => i !== index);
      setFormData({ ...formData, imagens: newImagens });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Cat className="w-7 h-7 text-foreground" />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground">
                Área Administrativa
              </h1>
              <p className="font-body text-sm text-muted-foreground">
                Pitanga Brecho
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            <Card className="p-6 border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                {editingId ? 'Editar Peça' : 'Adicionar Nova Peça'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="font-body font-medium">
                    Nome da Peça *
                  </Label>
                  <Input
                    id="nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                    className="font-body"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao" className="font-body font-medium">
                    Descrição *
                  </Label>
                  <Textarea
                    id="descricao"
                    value={formData.descricao}
                    onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                    required
                    className="font-body min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preco" className="font-body font-medium">
                      Preço (R$) *
                    </Label>
                    <Input
                      id="preco"
                      type="number"
                      step="0.01"
                      value={formData.preco}
                      onChange={(e) => setFormData({ ...formData, preco: e.target.value })}
                      required
                      className="font-body"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tamanho" className="font-body font-medium">
                      Tamanho
                    </Label>
                    <Input
                      id="tamanho"
                      value={formData.tamanho}
                      onChange={(e) => setFormData({ ...formData, tamanho: e.target.value })}
                      placeholder="P, M, G, etc."
                      className="font-body"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="font-body font-medium">URLs das Imagens</Label>
                  {formData.imagens.map((imagem, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={imagem}
                        onChange={(e) => updateImageField(index, e.target.value)}
                        placeholder="https://exemplo.com/imagem.jpg"
                        className="font-body"
                      />
                      {formData.imagens.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeImageField(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addImageField}
                    className="w-full font-body"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar imagem
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary-hover text-foreground font-body font-medium"
                  >
                    {editingId ? (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Salvar alterações
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 mr-2" />
                        Adicionar peça
                      </>
                    )}
                  </Button>
                  {editingId && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={resetForm}
                      className="font-body"
                    >
                      Cancelar
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>

          {/* List Section */}
          <div>
            <Card className="p-6 border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">
                Peças Cadastradas ({pecas.length})
              </h2>

              <div className="space-y-4">
                {pecas.map((peca) => (
                  <div
                    key={peca.id}
                    className="flex gap-4 p-4 bg-background rounded-lg border border-border"
                  >
                    <img
                      src={peca.imagens[0]}
                      alt={peca.nome}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-foreground truncate">
                        {peca.nome}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        R$ {peca.preco.toFixed(2)}
                        {peca.tamanho && ` • Tamanho ${peca.tamanho}`}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleEdit(peca)}
                        className="flex-shrink-0"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleDelete(peca.id)}
                        className="flex-shrink-0 hover:bg-destructive hover:text-destructive-foreground"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                {pecas.length === 0 && (
                  <p className="text-center font-body text-muted-foreground py-8">
                    Nenhuma peça cadastrada ainda
                  </p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
