import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [cartCount, setCartCount] = useState(3);
  const [currentPage, setCurrentPage] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=200&fit=crop',
      description: 'Premium wireless headphones with noise cancellation'
    },
    {
      id: 2,
      name: 'Smart Watch',
      category: 'Electronics',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=200&fit=crop',
      description: 'Fitness tracking smartwatch with health monitoring'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=200&fit=crop',
      description: 'Portable speaker with amazing sound quality'
    },
    {
      id: 4,
      name: 'Running Shoes',
      category: 'Sports',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=200&fit=crop',
      description: 'Comfortable running shoes for all terrains'
    }
  ];

  const addToCart = (product) => {
    setCartCount(prev => prev + 1);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="app">
      <Head>
        <title>ShopHub - Next.js E-commerce Platform</title>
        <meta name="description" content="Modern e-commerce platform built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <Link href="/" className="logo" onClick={() => setCurrentPage('home')}>
            🛍️ ShopHub
          </Link>
          <ul className="nav-links">
            <li>
              <a 
                href="#" 
                className={currentPage === 'home' ? 'active' : ''} 
                onClick={() => setCurrentPage('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={currentPage === 'products' ? 'active' : ''} 
                onClick={() => setCurrentPage('products')}
              >
                Products
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={currentPage === 'categories' ? 'active' : ''} 
                onClick={() => setCurrentPage('categories')}
              >
                Categories
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={currentPage === 'about' ? 'active' : ''} 
                onClick={() => setCurrentPage('about')}
              >
                About
              </a>
            </li>
          </ul>
          <div className="cart-icon" onClick={() => alert('Cart functionality coming soon!')}>
            🛒
            <div className="cart-count">{cartCount}</div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <section className="hero">
              <div className="hero-content">
                <h1>Welcome to ShopHub</h1>
                <p>Discover amazing products at unbeatable prices</p>
                <a href="#" className="cta-button" onClick={() => setCurrentPage('products')}>
                  Shop Now
                </a>
              </div>
            </section>

            {/* Featured Products */}
            <div className="featured-section">
              <h2 className="section-title">Featured Products</h2>
              <div className="featured-grid">
                <div className="featured-card">
                  <h3 className="featured-title">Premium Wireless Headphones</h3>
                  <p className="featured-description">High-quality sound with noise cancellation technology</p>
                  <div className="featured-price">$199.99</div>
                  <button className="buy-now-btn" onClick={() => addToCart({name: 'headphones'})}>
                    Add to Cart
                  </button>
                </div>
                <div className="featured-card">
                  <h3 className="featured-title">Smart Fitness Watch</h3>
                  <p className="featured-description">Track your health and stay connected</p>
                  <div className="featured-price">$299.99</div>
                  <button className="buy-now-btn" onClick={() => addToCart({name: 'watch'})}>
                    Add to Cart
                  </button>
                </div>
                <div className="featured-card">
                  <h3 className="featured-title">Portable Bluetooth Speaker</h3>
                  <p className="featured-description">Take your music anywhere with crystal clear sound</p>
                  <div className="featured-price">$89.99</div>
                  <button className="buy-now-btn" onClick={() => addToCart({name: 'speaker'})}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Categories Section */}
            <div className="categories-section">
              <h2 className="section-title">Shop by Category</h2>
              <div className="categories-grid">
                <div className="category-card" onClick={() => setCurrentPage('products')}>
                  <div className="category-icon">📱</div>
                  <div className="category-name">Electronics</div>
                  <div className="category-count">150+ Products</div>
                </div>
                <div className="category-card" onClick={() => setCurrentPage('products')}>
                  <div className="category-icon">👕</div>
                  <div className="category-name">Fashion</div>
                  <div className="category-count">200+ Products</div>
                </div>
                <div className="category-card" onClick={() => setCurrentPage('products')}>
                  <div className="category-icon">🏠</div>
                  <div className="category-name">Home & Garden</div>
                  <div className="category-count">100+ Products</div>
                </div>
                <div className="category-card" onClick={() => setCurrentPage('products')}>
                  <div className="category-icon">🎮</div>
                  <div className="category-name">Gaming</div>
                  <div className="category-count">75+ Products</div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="newsletter-section">
              <h2 className="section-title">Stay Updated</h2>
              <p style={{marginBottom: '2rem', color: '#666'}}>
                Subscribe to our newsletter for exclusive offers and updates
              </p>
              <form className="newsletter-form" onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing!');
                e.target.reset();
              }}>
                <input type="email" className="newsletter-input" placeholder="Enter your email" required />
                <button type="submit" className="subscribe-btn">Subscribe</button>
              </form>
            </div>
          </>
        )}

        {currentPage === 'products' && (
          <div className="products-section">
            <h2 className="section-title">All Products</h2>
            <div className="products-grid">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <div 
                    className="product-image" 
                    style={{backgroundImage: `url(${product.image})`}}
                  >
                    <div className="product-overlay">
                      <div className="product-name">{product.name}</div>
                      <div className="product-category">{product.category}</div>
                    </div>
                  </div>
                  <div className="product-content">
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">${product.price}</div>
                    <button 
                      className="add-to-cart-btn" 
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'categories' && (
          <div className="categories-section">
            <h2 className="section-title">Product Categories</h2>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-icon">📱</div>
                <div className="category-name">Electronics</div>
                <div className="category-count">150+ Products</div>
              </div>
              <div className="category-card">
                <div className="category-icon">👕</div>
                <div className="category-name">Fashion</div>
                <div className="category-count">200+ Products</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🏠</div>
                <div className="category-name">Home & Garden</div>
                <div className="category-count">100+ Products</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🎮</div>
                <div className="category-name">Gaming</div>
                <div className="category-count">75+ Products</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🏃‍♂️</div>
                <div className="category-name">Sports</div>
                <div className="category-count">120+ Products</div>
              </div>
              <div className="category-card">
                <div className="category-icon">📚</div>
                <div className="category-name">Books</div>
                <div className="category-count">300+ Products</div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="products-section">
            <h2 className="section-title">About ShopHub</h2>
            <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
              <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem'}}>
                ShopHub is your one-stop destination for all your shopping needs. We offer a wide range of products 
                from electronics to fashion, home goods to sports equipment, all at competitive prices.
              </p>
              <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem'}}>
                Our mission is to provide customers with quality products, excellent service, and a seamless 
                shopping experience. We're committed to customer satisfaction and continuous improvement.
              </p>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem'}}>
                <div>
                  <h3 style={{color: '#dc3545', marginBottom: '1rem'}}>10K+</h3>
                  <p>Happy Customers</p>
                </div>
                <div>
                  <h3 style={{color: '#dc3545', marginBottom: '1rem'}}>500+</h3>
                  <p>Products</p>
                </div>
                <div>
                  <h3 style={{color: '#dc3545', marginBottom: '1rem'}}>5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
          min-height: 100vh;
          color: #333;
        }

        .app {
          min-height: 100vh;
        }

        .navbar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }

        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: #dc3545;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }

        .nav-links a:hover {
          color: #dc3545;
          background: rgba(220, 53, 69, 0.1);
        }

        .nav-links a.active {
          color: #dc3545;
          background: rgba(220, 53, 69, 0.1);
        }

        .cart-icon {
          position: relative;
          cursor: pointer;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #dc3545;
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .main-content {
          margin-top: 80px;
          padding: 2rem;
        }

        .hero {
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                      url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop') center/cover;
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          border-radius: 20px;
          margin-bottom: 3rem;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .cta-button {
          background: #dc3545;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .cta-button:hover {
          background: #c82333;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(220, 53, 69, 0.3);
        }

        .products-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 3rem;
          margin-bottom: 3rem;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #333;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .product-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .product-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.7));
          color: white;
          padding: 1.5rem;
        }

        .product-name {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .product-category {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .product-content {
          padding: 1.5rem;
        }

        .product-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .product-price {
          font-size: 1.5rem;
          font-weight: bold;
          color: #dc3545;
          margin-bottom: 1rem;
        }

        .add-to-cart-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .add-to-cart-btn:hover {
          background: #c82333;
          transform: translateY(-2px);
        }

        .categories-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 3rem;
          margin-bottom: 3rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .category-card {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          border-left: 4px solid #dc3545;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .category-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .category-name {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .category-count {
          color: #666;
          font-size: 0.9rem;
        }

        .featured-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 3rem;
          margin-bottom: 3rem;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .featured-card {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 2rem;
          border-left: 4px solid #dc3545;
        }

        .featured-title {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #333;
        }

        .featured-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .featured-price {
          font-size: 1.3rem;
          font-weight: bold;
          color: #dc3545;
          margin-bottom: 1rem;
        }

        .buy-now-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .buy-now-btn:hover {
          background: #c82333;
          transform: translateY(-2px);
        }

        .newsletter-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
        }

        .newsletter-form {
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #ddd;
          border-radius: 25px;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #dc3545;
        }

        .subscribe-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .subscribe-btn:hover {
          background: #c82333;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .featured-grid {
            grid-template-columns: 1fr;
          }

          .main-content {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
} 