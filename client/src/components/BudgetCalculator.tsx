import { useState, useMemo } from 'react';
import { BudgetItem } from './DashboardCotizacion'; // Importamos la interfaz

interface BudgetCalculatorProps {
  items: BudgetItem[];
  onAddItem: (item: BudgetItem) => void;
  onRemoveItem: (id: string) => void;
}

export default function BudgetCalculator({ items, onAddItem, onRemoveItem }: BudgetCalculatorProps) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [unitPrice, setUnitPrice] = useState<number | ''>('');

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !quantity || unitPrice === '') return;

    onAddItem({
      id: crypto.randomUUID(),
      description,
      quantity: Number(quantity),
      unitPrice: Number(unitPrice),
    });

    setDescription(''); setQuantity(''); setUnitPrice('');
  };

  const totalBudget = useMemo(() => {
    return items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
  }, [items]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-6">2. Presupuesto Final</h2>
      
      {/* Formulario Manual */}
      <form onSubmit={handleManualSubmit} className="grid grid-cols-3 gap-2 mb-6">
        <input type="text" placeholder="Ítem manual..." value={description} onChange={e => setDescription(e.target.value)} className="col-span-3 border border-slate-300 rounded p-2 text-sm" required />
        <input type="number" placeholder="Cant." min="0" step="0.1" value={quantity} onChange={e => setQuantity(Number(e.target.value) || '')} className="border border-slate-300 rounded p-2 text-sm" required />
        <input type="number" placeholder="Precio $" min="0" value={unitPrice} onChange={e => setUnitPrice(Number(e.target.value) || '')} className="border border-slate-300 rounded p-2 text-sm" required />
        <button type="submit" className="bg-blue-600 text-white rounded p-2 text-sm font-bold hover:bg-blue-700">Agregar</button>
      </form>

      {/* Lista de Ítems */}
      <div className="space-y-2 mb-6 max-h-[400px] overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-slate-400 italic text-sm text-center">Agrega materiales desde la calculadora o manualmente.</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded text-sm">
              <div className="flex-1">
                <span className="font-semibold text-slate-700 block">{item.description}</span>
                <span className="text-slate-500">{item.quantity} x {formatCurrency(item.unitPrice)}</span>
                
                {/* Alerta visual si el precio es 0 */}
                {item.unitPrice === 0 && (
                  <span className="text-xs text-amber-600 font-bold ml-2 animate-pulse">
                    ⚠️ Falta precio
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-800">{formatCurrency(item.quantity * item.unitPrice)}</span>
                <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700 text-lg">✕</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total */}
      <div className="border-t border-slate-200 pt-4 flex justify-between items-end">
        <span className="text-slate-600 font-medium">Total Estimado:</span>
        <span className="text-2xl font-black text-blue-600">{formatCurrency(totalBudget)}</span>
      </div>
    </div>
  );
}