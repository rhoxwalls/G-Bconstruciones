import { useState } from 'react';
import MaterialCalculator from './MaterialCalculator';
import BudgetCalculator from './BudgetCalculator';

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

  // Función para agregar ítems manuales desde el presupuestador
  const handleAgregarItemManual = (nuevoItem: BudgetItem) => {
    setBudgetItems([...budgetItems, nuevoItem]);
  };

  // Función para eliminar ítems
  const handleRemoveItem = (idToRemove: string) => {
    setBudgetItems(budgetItems.filter(item => item.id !== idToRemove));
  };

  // Función PUENTE: Recibe los materiales desde la calculadora
  const handleAgregarDesdeMateriales = (materiales: { nombre: string; cantidad: number }[]) => {
    const nuevosItems = materiales.map(mat => ({
      id: crypto.randomUUID(),
      description: mat.nombre,
      quantity: mat.cantidad,
      unitPrice: 0 // Inicia en 0 para que el usuario le ponga precio
    }));
    
    setBudgetItems(prev => [...prev, ...nuevosItems]);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-8">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-8 text-center">
        Gestor de Obras y Presupuestos
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Le pasamos la función puente como prop */}
        <MaterialCalculator onEnviarPresupuesto={handleAgregarDesdeMateriales} />
        
        {/* Le pasamos el estado y las funciones de control como props */}
        <BudgetCalculator 
          items={budgetItems} 
          onAddItem={handleAgregarItemManual} 
          onRemoveItem={handleRemoveItem} 
        />
      </div>
    </div>
  );
}