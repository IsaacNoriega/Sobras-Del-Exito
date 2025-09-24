import { Crown, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-brand-title">
            <span className="footer-logo-wrapper">
              <img src="/logo.png" alt="Logo Sombras del Éxito" className="footer-logo" />
            </span>
            Sombras del <span style={{color: '#ffd700'}}>Éxito</span>
          </div>
          <div className="footer-brand-desc">
            Tu destino para encontrar las mejores fragancias masculinas.<br/>
            Cada perfume cuenta una historia, encuentra la tuya.
          </div>
          <div className="footer-social">
            <a href="#"><Instagram /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <div className="footer-links-title">Enlaces Rápidos</div>
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
          <a href="#">Términos y Condiciones</a>
          <a href="#">Política de Privacidad</a>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <div className="footer-contact-title">Contacto</div>
          <div className="footer-contact-item"><Phone />+52 55 1234 5678</div>
          <div className="footer-contact-item"><Mail />contacto@sombrasdelexito.com</div>
          <div className="footer-contact-item"><MapPin />Ciudad de México, México</div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <span className="footer-copyright">© 2024 Sombras del Éxito. Todos los derechos reservados.</span>
        <span className="footer-dev">Desarrollado con 💛 para encontrar tu fragancia perfecta</span>
      </div>
    </footer>
  );
}