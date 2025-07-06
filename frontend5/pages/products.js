import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 199.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=200&fit=crop',
      description: 'Premium wireless headphones with noise cancellation'
    },
    {
      id: 2,
      name: 'Smart Watch',
      category: 'Electronics',
      price: 299.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=200&fit=crop',
      description: 'Fitness tracking smartwatch with health monitoring'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      category: 'Electronics',
      price: 89.99,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=200&fit=crop',
      description: 'Portable speaker with amazing sound quality'
    },
    {
      id: 4,
      name: 'Running Shoes',
      category: 'Sports',
      price: 129.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=200&fit=crop',
      description: 'Comfortable running shoes for all terrains'
    },
    {
      id: 5,
      name: 'Yoga Mat',
      category: 'Sports',
      price: 49.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop',
      description: 'Premium yoga mat for home workouts'
    },
    {
      id: 6,
      name: 'Coffee Maker',
      category: 'Home',
      price: 79.99,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=200&fit=crop',
      description: 'Automatic coffee maker for perfect brew'
    }
  ];

  const categories = ['all', 'Electronics', 'Sports', 'Home', 'Fashion'];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="products-page">
      <Head>
        <title>Products - ShopHub</title>
        <meta name="description" content="Browse our product catalog" />
      </Head>

      <div className="page-header">
        <h1>Our Products</h1>
        <p>Discover amazing products at great prices</p>
      </div>

      <div className="filters-section">
        <div className="filter-group">
          <label>Category:</label>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Sort by:</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {sortedProducts.map(product => (
          <div key={product.id} className="product-card">
            <div 
              className="product-image" 
              style={{backgroundImage: `url(${product.image})`}}
            >
              <div className="product-overlay">
                <div className="product-category">{product.category}</div>
                <div className="product-rating">⭐ {product.rating}</div>
              </div>
            </div>
            <div className="product-content">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">${product.price}</div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .products-page {
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-header h1 {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .page-header p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
        }

        .filters-section {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          padding: 2rem;
          margin-bottom: 3rem;
          display: flex;
          gap: 2rem;
          justify-content: center;
          align-items: center;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-group label {
          font-weight: 600;
          color: #333;
        }

        .filter-select {
          padding: 0.5rem 1rem;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
        }

        .filter-select:focus {
          outline: none;
          border-color: #dc3545;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
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
          top: 1rem;
          left: 1rem;
          right: 1rem;
          display: flex;
          justify-content: space-between;
        }

        .product-category {
          background: #dc3545;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .product-rating {
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        .product-content {
          padding: 1.5rem;
        }

        .product-title {
          font-size: 1.3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #333;
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

        @media (max-width: 768px) {
          .filters-section {
            flex-direction: column;
            gap: 1rem;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .page-header h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
} 