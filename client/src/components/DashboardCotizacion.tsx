import { useState } from 'react';
import MaterialCalculator, { type MaterialParaEnviar } from './MaterialCalculator';
import BudgetCalculator from './BudgetCalculator';
import HojaMateriales, { type ItemHojaMaterial } from './HojaMateriales';

// Exportamos la interfaz para que los hijos la puedan usar
export interface BudgetItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export default function DashboardCotizacion() {
  // EL ESTADO GLOBAL VIVE AQUÍ
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [hojaItems, setHojaItems] = useState<ItemHojaMaterial[]>([]);

  // Función para agregar ítems manuales desde el presupuestador
  const handleAgregarItemManual = (nuevoItem: BudgetItem) => {
    setBudgetItems([...budgetItems, nuevoItem]);
  };

  // Función para eliminar ítems del presupuesto
  const handleRemoveItem = (idToRemove: string) => {
    setBudgetItems(budgetItems.filter(item => item.id !== idToRemove));
  };

  // Función PUENTE 1: Recibe los materiales calculados y los vuelca en la Hoja de Materiales
  const handleAgregarDesdeMateriales = (materiales: MaterialParaEnviar[]) => {
    const nuevosItems: ItemHojaMaterial[] = materiales.map(mat => ({
      id: crypto.randomUUID(),
      nombre: mat.nombre,
      cantidad: mat.cantidad,
      unidad: mat.unidad,
      tipo: mat.tipo,
      unitPrice: mat.unitPrice ?? 0
    }));

    setHojaItems(prev => [...prev, ...nuevosItems]);
  };

  // Función para actualizar el precio de un ítem en la hoja
  const handleUpdatePrecio = (id: string, precio: number) => {
    setHojaItems(prev => prev.map(item => item.id === id ? { ...item, unitPrice: precio } : item));
  };

  // Función para quitar un ítem de la hoja
  const handleRemoveHojaItem = (id: string) => {
    setHojaItems(prev => prev.filter(item => item.id !== id));
  };

  // Función para vaciar la hoja
  const handleLimpiarHoja = () => {
    setHojaItems([]);
  };

  // Función PUENTE 2: La hoja finalizada se vuelca en el presupuesto detallando material y mano de obra
  const handleEnviarAlPresupuesto = () => {
    const nuevosItems: BudgetItem[] = hojaItems.map(item => ({
      id: crypto.randomUUID(),
      description: item.nombre,
      quantity: item.cantidad,
      unitPrice: item.unitPrice
    }));

    setBudgetItems(prev => [...prev, ...nuevosItems]);
    setHojaItems([]);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-8">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-8 text-center">
        Gestor de Obras y Presupuestos
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <MaterialCalculator onEnviarPresupuesto={handleAgregarDesdeMateriales} />
        <HojaMateriales
          items={hojaItems}
          onUpdatePrice={handleUpdatePrecio}
          onRemoveItem={handleRemoveHojaItem}
          onEnviarAlPresupuesto={handleEnviarAlPresupuesto}
          onLimpiar={handleLimpiarHoja}
        />
      </div>

      <div className="mt-8">
        <BudgetCalculator
          items={budgetItems}
          onAddItem={handleAgregarItemManual}
          onRemoveItem={handleRemoveItem}
        />
      </div>
    </div>
  );
}
