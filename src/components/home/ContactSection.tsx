import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Send, MapPin } from 'lucide-react';
import '../../styles/contact.css';

const CONTACT_INFO = {
  phone: {
    label: 'WhatsApp',
    value: '+52 55 1234 5678',
    icon: Phone
  },
  email: {
    label: 'Email',
    value: 'contacto@sombrasdelexito.com',
    icon: Mail
  },
  location: {
    label: 'Ubicación',
    value: 'Ciudad de México, México',
    icon: MapPin
  }
};

const CONTACT_HOURS = [
  { day: 'Lunes - Viernes', hours: '9:00 AM - 8:00 PM' },
  { day: 'Sábados', hours: '10:00 AM - 6:00 PM' },
  { day: 'Domingos', hours: '12:00 PM - 5:00 PM' }
];

interface ContactSectionProps {
  productInterest?: string;
}

export default function ContactSection({ productInterest = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: '',
    product_interest: productInterest
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío visual (sin backend)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted(true);
    setFormData({
      full_name: '',
      email: '',
      phone: '',
      message: '',
      product_interest: productInterest
    });
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <section id="contacto" className="contact-section">
        <div className="success-message">
          <div className="success-icon">
            <Send />
          </div>
          <h2 className="success-title">¡Mensaje Enviado!</h2>
          <p className="success-description">
            Gracias por contactarnos. Te responderemos muy pronto con información sobre nuestros perfumes.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="submit-button"
          >
            Enviar otro mensaje
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <MessageSquare />
            <span>Contacto</span>
          </div>
          <h2 className="contact-title">
            ¿Listo para encontrar tu <span>fragancia perfecta?</span>
          </h2>
          <p className="contact-description">
            Contáctanos y te ayudaremos a elegir el perfume que mejor se adapte a tu personalidad.
          </p>
        </div>
        {/* Grid principal */}
        <div className="contact-grid">
          {/* Columna izquierda: info y horarios en un solo bloque visual */}
          <div className="contact-info-block">
            <div className="contact-info">
              <h3 className="contact-info-title">Información de Contacto</h3>
              <div>
                {Object.values(CONTACT_INFO).map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="contact-info-item">
                      <div className="contact-info-icon">
                        <Icon />
                      </div>
                      <div className="contact-info-content">
                        <h4>{info.label}</h4>
                        <p>{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hours-card">
              <h4 className="hours-title">Horarios de Atención</h4>
              <div className="hours-list">
                {CONTACT_HOURS.map((h, idx) => (
                  <p key={idx}><span>{h.day}:</span> {h.hours}</p>
                ))}
              </div>
            </div>
          </div>
          {/* Columna derecha: formulario */}
          <div className="contact-form">
            <h3 className="contact-form-title">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="form-grid">
              <div className="form-group">
                <label htmlFor="full_name">Nombre Completo</label>
                <input
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+52 55 1234 5678"
                  />
                </div>
              </div>
              {productInterest && (
                <div className="form-group">
                  <label htmlFor="product_interest">Perfume de Interés</label>
                  <input
                    id="product_interest"
                    name="product_interest"
                    value={formData.product_interest}
                    onChange={handleChange}
                    placeholder="¿Qué perfume te interesa?"
                  />
                </div>
              )}
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Cuéntanos qué tipo de fragancia buscas o cualquier pregunta que tengas..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}