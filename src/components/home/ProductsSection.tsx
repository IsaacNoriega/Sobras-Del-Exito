import { useState, useEffect } from 'react';
import { Star, ShoppingBag, Flame } from 'lucide-react';
import '../../styles/products.css';

// Datos mock visuales para badges, descuentos, marcas, notas, precios viejos y rating
const PRODUCT_BADGES = [
  ['fresh'],
  ['spicy'],
  ['oriental']
];
const PRODUCT_DISCOUNTS = ['-13%', null, '-12%'];
const PRODUCT_BRANDS = ['Chanel', 'Christian Dior', 'Versace'];
const PRODUCT_NOTES = [
  ['Limón', 'Cedro', 'Sándalo'],
  ['Bergamota', 'Pimienta Sichuan', 'Ambroxan'],
  ['Menta', 'Limón', 'Vainilla']
];
const PRODUCT_OLD_PRICES = [3200, null, 2500];
const PRODUCT_RATINGS = [4.8, 4.8, 4.8];

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

interface ProductsSectionProps {
  onContactClick: (productName: string) => void;
}

export default function ProductsSection({ onContactClick }: ProductsSectionProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar datos dummy desde products.json
    import('@/lib/products.json')
      .then((mod) => {
        setProducts((mod.default || mod) as Product[]);
      })
      .catch((error) => {
        console.error('Error loading products:', error);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);


  if (loading) {
    return (
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <div className="loading-placeholder h-8 w-64 mx-auto mb-4" />
            <div className="loading-placeholder h-4 w-96 mx-auto" />
          </div>
          <div className="products-grid">
            {[1,2,3].map(i => (
              <div key={i} className="product-card">
                <div className="loading-placeholder h-64 mb-4" />
                <div className="loading-placeholder h-6 mb-2" />
                <div className="loading-placeholder h-4 w-3/4" />
              </div>
            ))}
          </div>
      </div>
    </section>
    );
  }

  return (
    <section id="productos" className="products-section">
      <div className="container">
        <div className="products-container">
          <div className="products-header products-header--centered">
            <div className="products-badge products-badge--centered">
              <span> <Flame /> Productos Destacados</span>
            </div>
            <h2 className="products-title products-title--centered">
              Nuestra Colección<span>Premium</span>
            </h2>
            <p className="products-description products-description--centered">
              Cada fragancia cuenta una historia. Encuentra la tuya entre nuestras fragancias cuidadosamente seleccionadas.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, idx) => (
              <div key={product.id} className="product-card">
                {/* BADGE tipo */}
                {PRODUCT_BADGES[idx] && (
                  <span className={`product-badge product-badge--${PRODUCT_BADGES[idx][0]}`}>{PRODUCT_BADGES[idx][0]}</span>
                )}
                {/* BADGE descuento */}
                {PRODUCT_DISCOUNTS[idx] && (
                  <span className="product-discount">{PRODUCT_DISCOUNTS[idx]}</span>
                )}
                <div className="product-image-container">
                  <img 
                    src={product.image || 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400'}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="product-brand">{PRODUCT_BRANDS[idx]}</div>
                  <p className="product-description">
                    {product.description}
                  </p>
                  <div className="product-notes">
                    <span className="product-notes-label">Notas principales:</span>
                    {PRODUCT_NOTES[idx]?.map((note, nidx) => (
                      <span key={nidx} className="product-note">{note}</span>
                    ))}
                  </div>
                  <div className="product-price-rating">
                    <span className="product-price">
                      ${product.price?.toLocaleString()}
                      {PRODUCT_OLD_PRICES[idx] && (
                        <del>${PRODUCT_OLD_PRICES[idx]?.toLocaleString()}</del>
                      )}
                    </span>
                    <div className="product-rating">
                      <Star style={{marginRight:2}} />
                      <span>{PRODUCT_RATINGS[idx]}</span>
                    </div>
                  </div>
                  <button 
                    className="product-button"
                    onClick={() => onContactClick(product.name)}
                  >
                    <ShoppingBag />
                    Consultar Precio
                  </button>
                </div>
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-16">
              <p className="products-description">
                Próximamente tendremos productos disponibles para ti.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}