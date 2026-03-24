import contact from '../assets/contact.png'

import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Residencial',
    budget: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí podrías conectar con tu backend en Node.js o redirigir a WhatsApp
    const phoneNumber = "5493874402610";

    const text = `*Nueva Solicitud de Obra - GyB*
--------------------------------
*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Tipo de Proyecto:* ${formData.projectType}
*Presupuesto:* ${formData.budget || 'A convenir'}
*Descripción:* ${formData.description}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open (whatsappUrl, '_blank');

    alert('¡Gracias! Nos pondremos en contacto pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
    id='contact'
    className='relative h-screen flex items-center justify-center bg-cover bg-center'
   style={{backgroundImage:`url(${contact})`}}>
    <div className="max-w-2xl  sm:-mr-[-750px] mx-auto p-8 bg-white shadow-xl rounded-lg border-t-4 border-yellow-500">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase tracking-tight">
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
    </section>
  );
};

