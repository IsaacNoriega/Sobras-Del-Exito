import { useState, useEffect } from 'react';
import { Crown, Menu, X } from 'lucide-react';
import '../styles/navigation.css';

interface NavigationProps {
  onContactClick: () => void;
}


export default function Navigation({ onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState('navigation--hero');

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) {
      setNavBg('navigation--default');
      return;
    }
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNavBg('navigation--hero');
        } else {
          setNavBg('navigation--default');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navigation ${navBg}`}>
      <div className="navigation-container">
        <div className="navigation-row">
          {/* Logo */}
          <div className="navigation-logo-group">
            <div className="navigation-logo">
              <img src="/logo.png" alt="Logo Sombras del Éxito" className="navigation-logo-img" />
            </div>
            <span className="navigation-title">
              Sombras del <span className="navigation-title-accent">Éxito</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="navigation-links">
            <button onClick={() => scrollToSection('productos')} className="navigation-link">
              Productos
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="navigation-link">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contacto')} className="navigation-link">
              Contacto
            </button>
            <button
              onClick={onContactClick}
              className="navigation-cta"
            >
              Cotizar Ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="navigation-mobile-btn"
            style={{ fontSize: 28 }}
          >
            {isMenuOpen ? <X className="navigation-mobile-icon" /> : <Menu className="navigation-mobile-icon" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="navigation-mobile-menu">
            <div className="navigation-mobile-links">
              <button onClick={() => scrollToSection('productos')} className="navigation-link">
                Productos
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="navigation-link">
                Nosotros
              </button>
              <button onClick={() => scrollToSection('contacto')} className="navigation-link">
                Contacto
              </button>
              <button
                onClick={onContactClick}
                className="navigation-cta navigation-cta--mobile"
              >
                Cotizar Ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}