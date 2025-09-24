import { Shield, Star, Users, Award } from 'lucide-react';
import '../../styles/about.css';

export default function AboutSection() {
  return (
    <section id="nosotros" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Columna izquierda */}
          <div className="about-left">
            <div className="about-badge about-badge--screenshot">
              <Award className="about-badge-icon" />
              <span>Nuestra Historia</span>
            </div>
            <h2 className="about-title about-title--screenshot">
              Sombras del Éxito:<br />
              <span>Tu fragancia distintiva</span>
            </h2>
            <p className="about-description about-description--screenshot">
              Nacimos con la misión de hacer accesibles las mejores fragancias masculinas del mundo. Creemos que cada hombre merece una fragancia que refleje su personalidad única y su camino hacia el éxito.
            </p>
            <div className="about-feature-list">
              <div className="about-feature about-feature--icon">
                <Award className="about-feature-icon" />
                <div>
                  <div className="about-feature-title">Experiencia y Pasión</div>
                  <div className="about-feature-desc">Más de 5 años especializándonos en fragancias masculinas de alta gama.</div>
                </div>
              </div>
              <div className="about-feature about-feature--icon">
                <Users className="about-feature-icon" />
                <div>
                  <div className="about-feature-title">Clientes Satisfechos</div>
                  <div className="about-feature-desc">Miles de hombres ya encontraron su fragancia perfecta con nosotros.</div>
                </div>
              </div>
            </div>
          </div>
          {/* Columna derecha */}
          <div className="about-right">
            <div className="about-feature-card">
              <Shield className="about-feature-card-icon" />
              <div>
                <div className="about-feature-card-title">100% Originales</div>
                <div className="about-feature-card-desc">Todos nuestros perfumes son auténticos y vienen directamente de distribuidores oficiales.</div>
              </div>
            </div>
            <div className="about-feature-card">
              <Star className="about-feature-card-icon" />
              <div>
                <div className="about-feature-card-title">Calidad Premium</div>
                <div className="about-feature-card-desc">Seleccionamos únicamente las mejores fragancias de marcas reconocidas mundialmente.</div>
              </div>
            </div>
            <div className="about-feature-card">
              <Users className="about-feature-card-icon" />
              <div>
                <div className="about-feature-card-title">Asesoría Personalizada</div>
                <div className="about-feature-card-desc">Te ayudamos a encontrar el perfume perfecto según tu personalidad y estilo.</div>
              </div>
            </div>
            <div className="about-feature-card">
              <Award className="about-feature-card-icon" />
              <div>
                <div className="about-feature-card-title">Garantía de Satisfacción</div>
                <div className="about-feature-card-desc">Si no estás completamente satisfecho, te devolvemos tu dinero.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}