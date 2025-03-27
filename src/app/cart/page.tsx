"use client";

import { useCart } from "@/context/CartContext";
import { getPrice, formatPrice } from "@/data/productData";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + getPrice(item.size, item.finish) * item.quantity;
    }, 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-tan">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-navy">Your Cart</h1>
          <p className="text-gray-700 text-lg">Your cart is empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tan">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-navy">Your Cart</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-4 px-6 text-navy font-semibold">Product</th>
                  <th className="text-left py-4 px-6 text-navy font-semibold">Size</th>
                  <th className="text-left py-4 px-6 text-navy font-semibold">Finish</th>
                  <th className="text-left py-4 px-6 text-navy font-semibold">Quantity</th>
                  <th className="text-left py-4 px-6 text-navy font-semibold">Price</th>
                  <th className="text-left py-4 px-6 text-navy font-semibold">Total</th>
                  <th className="text-left py-4 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={`${item.size}-${item.finish}`} className="border-b border-gray-100">
                    <td className="py-4 px-6 text-gray-700">{item.name}</td>
                    <td className="py-4 px-6 text-gray-700">{item.size}</td>
                    <td className="py-4 px-6 text-gray-700">{item.finish}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.size, item.finish, item.quantity - 1)}
                          className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-700"
                        >
                          -
                        </button>
                        <span className="text-gray-700">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.size, item.finish, item.quantity + 1)}
                          className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-700"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">{formatPrice(getPrice(item.size, item.finish))}</td>
                    <td className="py-4 px-6 text-gray-700">
                      {formatPrice(getPrice(item.size, item.finish) * item.quantity)}
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => removeFromCart(item.size, item.finish)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50">
                  <td colSpan={5} className="text-right py-4 px-6 font-bold text-navy">
                    Total:
                  </td>
                  <td className="py-4 px-6 font-bold text-navy">{formatPrice(calculateTotal())}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 