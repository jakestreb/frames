"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { PRODUCT_DATA, getPrice, formatPrice, ProductSize, ProductFinish } from "@/data/productData";

export default function ShopPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<ProductSize>(
    PRODUCT_DATA.sizes.find(s => s.display === searchParams.get("size")) || PRODUCT_DATA.sizes[0]
  );
  const [selectedFinish, setSelectedFinish] = useState<ProductFinish>(
    PRODUCT_DATA.finishes.find(f => f.id === searchParams.get("finish")) || PRODUCT_DATA.finishes[0]
  );

  useEffect(() => {
    const sizeParam = searchParams.get("size");
    const finishParam = searchParams.get("finish");
    
    if (sizeParam) {
      const size = PRODUCT_DATA.sizes.find(s => s.display === sizeParam);
      if (size) setSelectedSize(size);
    }
    
    if (finishParam) {
      const finish = PRODUCT_DATA.finishes.find(f => f.id === finishParam);
      if (finish) setSelectedFinish(finish);
    }
  }, [searchParams]);

  const handleSizeChange = (size: ProductSize) => {
    setSelectedSize(size);
    const params = new URLSearchParams(searchParams.toString());
    params.set("size", size.display);
    router.push(`/order?${params.toString()}`);
  };

  const handleFinishChange = (finish: ProductFinish) => {
    setSelectedFinish(finish);
    const params = new URLSearchParams(searchParams.toString());
    params.set("finish", finish.id);
    router.push(`/order?${params.toString()}`);
  };

  const handleAddToCart = () => {
    addToCart({
      id: "oak-walnut-frame",
      name: "Solid Oak Frame",
      size: selectedSize.display,
      finish: selectedFinish.id,
      quantity: 1
    });
    router.push("/cart");
  };

  return (
    <div className="min-h-screen bg-tan">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-square">
            <img
              src="/images/shop/frame.jpg"
              alt="Custom Frame"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-navy">Solid Oak Frame</h1>
              <p className="text-gray-700 text-lg">
                Solid oak frame with walnut detail
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-navy">Size</h2>
              <div className="grid grid-cols-2 gap-4">
                {PRODUCT_DATA.sizes.map((size) => (
                  <button
                    key={size.display}
                    onClick={() => handleSizeChange(size)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      selectedSize.display === size.display
                        ? "border-navy bg-navy text-white"
                        : "border-gray-200 hover:border-navy text-gray-700"
                    }`}
                  >
                    {size.display}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-navy">Finish</h2>
              <div className="grid grid-cols-2 gap-4">
                {PRODUCT_DATA.finishes.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => handleFinishChange(finish)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      selectedFinish.id === finish.id
                        ? "border-navy bg-navy text-white"
                        : "border-gray-200 hover:border-navy text-gray-700"
                    }`}
                  >
                    {finish.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <p className="text-3xl font-bold text-navy">
                {formatPrice(getPrice(selectedSize.display, selectedFinish.id))}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-navy text-white py-4 rounded-lg text-lg font-semibold hover:bg-navy/90 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 