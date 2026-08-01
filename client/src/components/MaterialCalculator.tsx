import { useState, useMemo } from 'react';

// Definimos la prop que recibe desde el Padre
interface MaterialCalculatorProps {
  onEnviarPresupuesto: (materiales: { nombre: string; cantidad: number }[]) => void;
}

interface MaterialRates {
  ladrillos?: number;
  cemento: number;
  arena: number;
  piedra?: number;
}

const TIPOS_DE_OBRA: Record<string, { label: string; rates: MaterialRates }> = {
  muro_hueco: { label: "Muro de Ladrillo Hueco", rates: { ladrillos: 15, cemento: 10, arena: 0.025 } },
  contrapiso_10cm: { label: "Contrapiso estándar", rates: { cemento: 25, arena: 0.05, piedra: 0.05 } }
};

export default function MaterialCalculator({ onEnviarPresupuesto }: MaterialCalculatorProps) {
  const [width, setWidth] = useState<number | ''>('');
  const [length, setLength] = useState<number | ''>('');
  const [workType, setWorkType] = useState<string>('muro_hueco');

  const results = useMemo(() => {
    if (!width || !length) return null;
    const area = Number(width) * Number(length);
    const rates = TIPOS_DE_OBRA[workType].rates;

    return {
      area: area.toFixed(2),
      ladrillos: rates.ladrillos ? Math.ceil(area * rates.ladrillos) : 0,
      cemento: Math.ceil(area * rates.cemento),
      arena: Number((area * rates.arena).toFixed(2)),
      piedra: rates.piedra ? Number((area * rates.piedra).toFixed(2)) : 0,
    };
  }, [width, length, workType]);

  // Función para empaquetar los datos y mandarlos al Padre
  const handleEnviar = () => {
    if (!results) return;
    const arrayMateriales = [];
    
    if (results.ladrillos > 0) arrayMateriales.push({ nombre: 'Ladrillos (unid.)', cantidad: results.ladrillos });
    if (results.cemento > 0) arrayMateriales.push({ nombre: 'Cemento (kg)', cantidad: results.cemento });
    if (results.arena > 0) arrayMateriales.push({ nombre: 'Arena (m³)', cantidad: results.arena });
    if (results.piedra > 0) arrayMateriales.push({ nombre: 'Piedra/Grava (m³)', cantidad: results.piedra });

    onEnviarPresupuesto(arrayMateriales);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-6">1. Calculador de Obra Gruesa</h2>
      
      {/* ... [El formulario de inputs queda exactamente igual que antes] ... */}
      <div className="space-y-4 mb-6">
         {/* Aquí van los inputs de Ancho, Largo y Select (omito para brevedad, usa los que ya tenías) */}
         <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Tipo de Trabajo
          </label>
          <select
            value={workType}
            onChange={(e) => setWorkType(e.target.value)}
            className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
          >
            {Object.entries(TIPOS_DE_OBRA).map(([key, data]) => (
              <option key={key} value={key}>
                {data.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Ancho (metros)
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value) || '')}
              className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ej: 4.5"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Largo / Alto (metros)
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={length}
              onChange={(e) => setLength(Number(e.target.value) || '')}
              className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ej: 3.0"
            />
          </div>
        </div>
      </div>
      </div>

      {results && (
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
          <h3 className="font-semibold text-slate-800 mb-3">Materiales Estimados</h3>
          {/* ... [La lista de materiales queda igual] ... */}
          
          <button 
            onClick={handleEnviar}
            className="w-full mt-4 bg-emerald-500 text-white font-semibold py-2 rounded-lg hover:bg-emerald-600 transition-colors shadow-sm"
          >
            Enviar al Presupuesto ➡️
          </button>
        </div>
      )}
    </div>
  );
}