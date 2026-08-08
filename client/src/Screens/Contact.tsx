import contact from '../assets/contact.png';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residencial',
    budget: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "5493873701272";

    const text = `*Nueva Solicitud de Obra - GyB*
--------------------------------
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Tipo de Proyecto:* ${formData.projectType}
*Presupuesto:* ${formData.budget || 'A convenir'}
*Descripción:* ${formData.description}`;

  try {
    // 1. ENVÍO A GMAIL (Invisible para el usuario)
    // Esto llegará a tu bandeja de entrada directamente
    await emailjs.send(
      'service_xln91ti', 
      'template_85a4s1l', 
      {
        from_name: formData.name,        
        from_email: formData.email,
        message: text,
        project_type: formData.projectType
      }, 
      'rIE8SEGmg72-gV7eU'
    );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open (whatsappUrl, '_blank');

    alert('¡Gracias! Nos pondremos en contacto pronto.');
} catch (error) {
  console.error("Error al enviar:", error);
    alert("Hubo un error al procesar la solicitud.");
}
  };   

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id='contact'
      className='relative flex min-h-screen items-center justify-center bg-cover bg-center py-16'
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center gap-6 px-4 sm:px-6">
        <div className="w-full bg-white shadow-xl rounded-lg border-t-4 border-yellow-500 p-5 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 uppercase tracking-tight">
        Cotiza tu Proyecto
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Nombre Completo</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none transition"
              placeholder="Ej: Juan Pérez"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none transition"
              placeholder="juan@ejemplo.com"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tipo de Obra */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Tipo de Obra</label>
            <select
              name="projectType"
              className="w-full p-3 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-yellow-500 outline-none cursor-pointer"
              onChange={handleChange}
            >
              <option value="Residencial">Residencial / Casa</option>
              <option value="Comercial">Local Comercial</option>
              <option value="Industrial">Nave Industrial / Galpón</option>
              <option value="Remodelacion">Remodelación / Refacción</option>
            </select>
          </div>

          {/* Presupuesto Estimado */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Presupuesto (Opcional)</label>
            <input
              type="text"
              name="budget"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none transition"
              placeholder="Ej: $500,000"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Detalles del Proyecto</label>
          <textarea
            name="description"
            rows={4}
            required
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none transition resize-none"
            placeholder="Cuéntanos más sobre las dimensiones, materiales o ubicación..."
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white font-bold py-4 rounded hover:bg-yellow-500 hover:text-gray-900 transition duration-300 uppercase tracking-widest shadow-lg"
        >
          Enviar Solicitud de Obra
        </button>
      </form>
        </div>

        <Link
          to="/cotidashboard"
          className="inline-block w-full sm:w-auto text-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
        >
          Ir a la Calculadora de Materiales
        </Link>
      </div>
    </section>
  );
}
