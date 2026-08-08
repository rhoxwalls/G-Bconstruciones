import { useMemo } from 'react';

export interface ItemHojaMaterial {
  id: string;
  nombre: string;
  cantidad: number;
  unidad: string;
  tipo: 'manodeobra' | 'material';
  unitPrice: number;
}

interface HojaMaterialesProps {
  items: ItemHojaMaterial[];
  onUpdatePrice: (id: string, price: number) => void;
  onRemoveItem: (id: string) => void;
  onEnviarAlPresupuesto: () => void;
  onLimpiar: () => void;
}

const formatPrecio = (amount: number) =>
  new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);

export default function HojaMateriales({
  items,
  onUpdatePrice,
  onRemoveItem,
  onEnviarAlPresupuesto,
  onLimpiar,
}: HojaMaterialesProps) {
  const total = useMemo(
    () => items.reduce((acc, item) => acc + item.cantidad * item.unitPrice, 0),
    [items],
  );

  const sinPrecio = items.some((item) => item.unitPrice <= 0 && item.tipo !== 'manodeobra');

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-6">2. Hoja de Materiales</h2>

      {items.length === 0 ? (
        <p className="text-slate-400 italic text-sm text-center">
          Calculá un trabajo para armar la hoja de materiales.
        </p>
      ) : (
        <>
          <ul className="space-y-3 mb-6 max-h-[400px] overflow-y-auto">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 border border-slate-200 rounded-lg p-3 text-sm"
              >
                <div className="flex-1 min-w-0">
                  <span className="block font-semibold text-slate-700 truncate">
                    {item.nombre}
                  </span>
                  <span className="text-slate-500">
                    {item.cantidad} {item.unidad}
                    {item.tipo === 'manodeobra' && (
                      <span className="ml-2 text-blue-600 font-semibold">Mano de obra</span>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={item.unitPrice || ''}
                    placeholder="Precio $"
                    disabled={item.tipo === 'manodeobra'}
                    onChange={(e) => onUpdatePrice(item.id, Number(e.target.value) || 0)}
                    className="w-28 border border-slate-300 rounded p-2 text-right focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-slate-100 disabled:text-slate-600"
                  />
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-lg"
                    aria-label="Quitar"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {sinPrecio && (
            <p className="text-xs text-amber-600 font-bold mb-3">
              ⚠️ Hay materiales sin precio asignado.
            </p>
          )}

          <div className="border-t border-slate-200 pt-4 flex justify-between items-end">
            <span className="text-slate-600 font-medium">Total Hoja:</span>
            <span className="text-2xl font-black text-blue-600">{formatPrecio(total)}</span>
          </div>

          <button
            onClick={onEnviarAlPresupuesto}
            disabled={total <= 0}
            className="w-full mt-4 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50"
          >
            Enviar al Presupuesto ➡️
          </button>
          <button
            onClick={onLimpiar}
            className="w-full mt-2 text-sm text-slate-500 hover:text-red-600 transition"
          >
            Vaciar hoja
          </button>
        </>
      )}
    </div>
  );
}
