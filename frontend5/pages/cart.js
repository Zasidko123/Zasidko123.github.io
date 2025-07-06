import { useState } from 'react';
import Head from 'next/head';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 199.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 299.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=200&fit=crop'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setDiscount(10);
      alert('Promo code applied! 10% discount added.');
    } else {
      alert('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="cart-page">
      <Head>
        <title>Shopping Cart - ShopHub</title>
        <meta name="description" content="Your shopping cart" />
      </Head>

      <div className="page-header">
        <h1>Shopping Cart</h1>
        <p>Review your items and proceed to checkout</p>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          <h2>Cart Items ({cartItems.length})</h2>
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h3>Your cart is empty</h3>
              <p>Add some products to get started!</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div 
                  className="item-image" 
                  style={{backgroundImage: `url(${item.image})`}}
                ></div>
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <div className="item-price">${item.price}</div>
                </div>
                <div className="item-quantity">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="summary-item discount">
              <span>Discount ({discount}%):</span>
              <span>-${discountAmount.toFixed(2)}</span>
            </div>
          )}
          <div className="summary-item total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="promo-section">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="promo-input"
            />
            <button onClick={applyPromoCode} className="promo-btn">
              Apply
            </button>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <style jsx>{`
        .cart-page {
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

        .cart-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
        }

        .cart-items {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2rem;
        }

        .cart-items h2 {
          margin-bottom: 2rem;
          color: #333;
        }

        .empty-cart {
          text-align: center;
          padding: 3rem;
        }

        .empty-cart-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .empty-cart h3 {
          color: #333;
          margin-bottom: 1rem;
        }

        .empty-cart p {
          color: #666;
        }

        .cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto auto auto;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #eee;
          margin-bottom: 1rem;
        }

        .item-image {
          width: 100px;
          height: 100px;
          background-size: cover;
          background-position: center;
          border-radius: 10px;
        }

        .item-name {
          font-size: 1.1rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .item-price {
          color: #dc3545;
          font-weight: 600;
        }

        .item-quantity {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .quantity-btn {
          background: #dc3545;
          color: white;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          font-weight: bold;
        }

        .quantity-btn:hover {
          background: #c82333;
        }

        .quantity {
          font-weight: bold;
          min-width: 30px;
          text-align: center;
        }

        .item-total {
          font-weight: bold;
          color: #333;
          font-size: 1.1rem;
        }

        .remove-btn {
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        .remove-btn:hover {
          color: #dc3545;
        }

        .cart-summary {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 2rem;
          height: fit-content;
        }

        .cart-summary h2 {
          margin-bottom: 2rem;
          color: #333;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding: 0.5rem 0;
        }

        .summary-item.discount {
          color: #28a745;
        }

        .summary-item.total {
          font-weight: bold;
          font-size: 1.2rem;
          border-top: 2px solid #eee;
          padding-top: 1rem;
          margin-top: 1rem;
        }

        .promo-section {
          display: flex;
          gap: 1rem;
          margin: 2rem 0;
        }

        .promo-input {
          flex: 1;
          padding: 0.8rem;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
        }

        .promo-input:focus {
          outline: none;
          border-color: #dc3545;
        }

        .promo-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }

        .promo-btn:hover {
          background: #c82333;
        }

        .checkout-btn {
          background: #28a745;
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .checkout-btn:hover {
          background: #218838;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .cart-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .cart-item {
            grid-template-columns: 80px 1fr;
            gap: 1rem;
          }
          
          .item-quantity, .item-total, .remove-btn {
            grid-column: 2;
            justify-self: start;
          }
          
          .page-header h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
} 