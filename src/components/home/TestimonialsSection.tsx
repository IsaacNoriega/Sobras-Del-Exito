import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import '../../styles/testimonials.css';

type Testimonial = {
  id: number;
  name: string;
  comment: string;
  avatar: string;
  location: string;
  perfume: string;
};

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    import('@/lib/testimonials.json')
      .then((mod) => {
        setTestimonials((mod.default || mod) as Testimonial[]);
      })
      .catch(() => setTestimonials([]));
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-container">
          
          <div className="testimonials-header">
            <div className="testimonials-badge">
              <Star />
              <span>Testimonios</span>
            </div>
            <h2 className="testimonials-title">
              Lo que dicen nuestros
              <span> clientes</span>
            </h2>
            <p className="testimonials-description">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                                <div className="testimonial-stars" style={{ marginBottom: '0.5rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} color="#ffb700" fill="#ffb700" style={{ marginRight: 2 }} />
                  ))}
                </div>
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <Quote className="testimonial-quote" />
                <p className="testimonial-content">
                  "{testimonial.comment}"
                </p>
                <h4 className="testimonial-author">{testimonial.name}</h4>
                <div className="testimonial-meta-row">
                  <div className="testimonial-location">{testimonial.location}</div>
                  <span className="testimonial-brand-badge">{testimonial.perfume}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}