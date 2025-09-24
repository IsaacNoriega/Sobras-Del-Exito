import React, { useEffect, useState } from 'react';
import { ChevronRight, Star, Award, Shield } from 'lucide-react';
import '../../styles/hero.css';


type HeroSectionProps = {
  onContactClick: () => void;
  onProductsClick: () => void;
};

interface HeroFeature {
  icon: keyof typeof ICONS;
  label: string;
}

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  features: HeroFeature[];
}

const ICONS: Record<string, React.ElementType> = {
  Star,
  Shield,
  Award
};

export default function HeroSection({ onContactClick, onProductsClick }: HeroSectionProps) {
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    import('@/lib/hero.json').then((mod) => {
      setHero((mod.default || mod) as HeroData);
    });
  }, []);

    if (!hero) return null;

    return (
      <section className="hero-section">
        {/* Video de fondo */}
        <video className="hero-bg-video" autoPlay loop muted playsInline poster="/public/hero-fallback.jpg">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay para legibilidad */}
        <div className="hero-bg-overlay" />
        <div className="container">
          <div className="hero-container">
            <div className="hero-badge">
              <Award />
              <span>{hero.badge}</span>
            </div>
            <div className="hero-content">
              <h1 className="hero-title">
                {hero.title}
                <br />
                <span>{hero.subtitle}</span>
              </h1>
              <p className="hero-description">
                {hero.description}
              </p>
              <div className="hero-features">
                {hero.features.map((feature, idx) => {
                  const Icon = ICONS[feature.icon] || Star;
                  return (
                    <div key={idx} className="hero-feature">
                      <Icon />
                      <span>{feature.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="hero-buttons">
                <button 
                  className="hero-button-primary"
                  onClick={onProductsClick}
                >
                  Ver Catálogo
                  <ChevronRight />
                </button>
                <button 
                  className="hero-button-secondary"
                  onClick={onContactClick}
                >
                  Contactar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}