import { useMemo, useState } from 'react';
import manodeobra from '../data/manodeobra.json';
import { MATERIALES_POR_TRABAJO } from '../data/materialesPorTrabajo';

export interface MaterialParaEnviar {
  nombre: string;
  cantidad: number;
  unidad: string;
  tipo: 'manodeobra' | 'material';
  unitPrice?: number;
}

interface MaterialCalculatorProps {
  onEnviarPresupuesto: (materiales: MaterialParaEnviar[]) => void;
}

interface ItemTrabajo {
  descripcion: string;
  unidad: string | null;
  precio: number;
}

const trabajos = (manodeobra as { items: ItemTrabajo[] }).items;

const formatPrecio = (amount: number) =>
  new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);

export default function MaterialCalculator({ onEnviarPresupuesto }: MaterialCalculatorProps) {
  const [selectedDescripcion, setSelectedDescripcion] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');

  const trabajo = trabajos.find((t) => t.descripcion === selectedDescripcion) || null;

  const resultados = useMemo(() => {
    if (!trabajo || !quantity) return null;
    const cant = Number(quantity);
    if (cant <= 0) return null;
    const materialesDef = MATERIALES_POR_TRABAJO[trabajo.descripcion] || [];
    return {
      manoDeObra: {
        nombre: `Mano de obra: ${trabajo.descripcion}`,
        cantidad: cant,
        unitPrice: trabajo.precio,
      },
      materiales: materialesDef.map((m) => ({
        nombre: m.nombre,
        unidad: m.unidad,
        cantidad: Number((m.cantidadPorUnidad * cant).toFixed(2)),
      })),
      totalManoDeObra: trabajo.precio * cant,
    };
  }, [trabajo, quantity]);

  const handleEnviar = () => {
    if (!resultados) return;
    const items: MaterialParaEnviar[] = [
      {
        nombre: resultados.manoDeObra.nombre,
        cantidad: resultados.manoDeObra.cantidad,
        unidad: trabajo?.unidad || 'un',
        tipo: 'manodeobra',
        unitPrice: trabajo?.precio,
      },
      ...resultados.materiales.map(
        (m): MaterialParaEnviar => ({
          nombre: m.nombre,
          cantidad: m.cantidad,
          unidad: m.unidad,
          tipo: 'material',
          unitPrice: 0,
        }),
      ),
    ];
    onEnviarPresupuesto(items);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-6">1. Seleccioná tu Proyecto</h2>

      {/* Selección de trabajo */}
      <label className="block text-sm font-medium text-slate-700 mb-1">
        Tipo de trabajo
      </label>
      <select
        value={selectedDescripcion}
        onChange={(e) => setSelectedDescripcion(e.target.value)}
        className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-white mb-4"
      >
        <option value="">Seleccioná un trabajo...</option>
        {trabajos.map((t) => (
          <option key={t.descripcion} value={t.descripcion}>
            {t.descripcion} ({t.unidad || 'un'} · {formatPrecio(t.precio)})
          </option>
        ))}
      </select>

      {trabajo && (
        <>
          {/* Cantidad */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Cantidad
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value) || '')}
                className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Ej: 25"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Unidad
              </label>
              <div className="w-full border border-slate-200 bg-slate-50 rounded-lg p-2.5 text-sm text-slate-700">
                {trabajo.unidad || 'un'}
              </div>
            </div>
          </div>

          {resultados && (
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
              <h3 className="font-semibold text-slate-800">Materiales Requeridos</h3>

              {resultados.materiales.length === 0 ? (
                <p className="text-slate-400 italic text-sm">
                  Este trabajo no tiene materiales cargados todavía.
                </p>
              ) : (
                <ul className="space-y-2">
                  {resultados.materiales.map((m) => (
                    <li
                      key={m.nombre}
                      className="flex justify-between items-center text-sm border-b border-slate-200 pb-2"
                    >
                      <span className="text-slate-700">{m.nombre}</span>
                      <span className="font-semibold text-slate-800">
                        {m.cantidad} {m.unidad}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex justify-between items-center pt-2">
                <span className="text-slate-600 font-medium">
                  Mano de obra ({resultados.manoDeObra.cantidad} {trabajo.unidad || 'un'} x{' '}
                  {formatPrecio(trabajo.precio)})
                </span>
                <span className="text-lg font-black text-blue-600">
                  {formatPrecio(resultados.totalManoDeObra)}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Los materiales se agregan sin precio; asigná el costo de cada uno en la Hoja
                de Materiales.
              </p>

              <button
                onClick={handleEnviar}
                className="w-full bg-emerald-500 text-white font-semibold py-2 rounded-lg hover:bg-emerald-600 transition-colors shadow-sm"
              >
                Agregar a la Hoja de Materiales ➡️
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
