import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number; // Tiempo en milisegundos
}

export const Counter = ({ end, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Aplicamos el progreso al número final
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration]);

  // Formateamos el número para que tenga puntos de miles (ej: 1.000.000)
  return <span>{count.toLocaleString('es-AR')}</span>;
};