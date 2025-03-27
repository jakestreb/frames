"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { PRODUCT_DATA, getPrice, formatPrice, ProductSize, ProductFinish, ProductOrientation } from "@/data/productData";

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
  const [selectedOrientation, setSelectedOrientation] = useState<ProductOrientation>(
    (searchParams.get("orientation") as ProductOrientation) || "landscape"
  );
  const [customWidth, setCustomWidth] = useState<number | null>(12);
  const [customHeight, setCustomHeight] = useState<number | null>(16);
  const [isCustomSize, setIsCustomSize] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const sizeParam = searchParams.get("size");
    const finishParam = searchParams.get("finish");
    const orientationParam = searchParams.get("orientation");
    
    if (sizeParam) {
      const size = PRODUCT_DATA.sizes.find(s => s.display === sizeParam);
      if (size) setSelectedSize(size);
    }
    
    if (finishParam) {
      const finish = PRODUCT_DATA.finishes.find(f => f.id === finishParam);
      if (finish) setSelectedFinish(finish);
    }

    if (orientationParam) {
      setSelectedOrientation(orientationParam as ProductOrientation);
    }
  }, [searchParams]);

  useEffect(() => {
    validateCustomSize();
  }, [customWidth, customHeight]);

  const validateCustomSize = () => {
    if (!customWidth || !customHeight) {
      setErrorMessage("Please enter both width and height");
      setIsValid(false);
      return false;
    }

    if (customWidth < 4 || customWidth > 24) {
      setErrorMessage("Width must be between 4\" and 24\"");
      setIsValid(false);
      return false;
    }

    if (customHeight < 6 || customHeight > 36) {
      setErrorMessage("Height must be between 6\" and 36\"");
      setIsValid(false);
      return false;
    }

    if (customWidth % 0.25 !== 0 || customHeight % 0.25 !== 0) {
      setErrorMessage("Dimensions must be in 1/4\" increments");
      setIsValid(false);
      return false;
    }

    setErrorMessage(null);
    setIsValid(true);
    return true;
  };

  const handleSizeChange = (size: ProductSize) => {
    setCustomWidth(size.width);
    setCustomHeight(size.height);
    setIsCustomSize(true);
    setErrorMessage(null);
    setIsValid(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("size", size.display);
    router.push(`/order?${params.toString()}`);
  };

  const handleCustomSizeChange = () => {
    if (!validateCustomSize()) return;

    const customSize: ProductSize = {
      width: customWidth,
      height: customHeight,
      display: `${customWidth}x${customHeight}`
    };
    setSelectedSize(customSize);
    setIsCustomSize(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("size", customSize.display);
    router.push(`/order?${params.toString()}`);
  };

  const handleFinishChange = (finish: ProductFinish) => {
    setSelectedFinish(finish);
    const params = new URLSearchParams(searchParams.toString());
    params.set("finish", finish.id);
    router.push(`/order?${params.toString()}`);
  };

  const handleOrientationChange = (orientation: ProductOrientation) => {
    setSelectedOrientation(orientation);
    const params = new URLSearchParams(searchParams.toString());
    params.set("orientation", orientation);
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
      <div className="container mx-auto px-4 pt-32 pb-16">
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
              <h2 className="text-2xl font-semibold mb-4 text-navy flex items-center gap-2">
                Size
                <div className="group relative">
                  <span className="w-5 h-5 rounded-full bg-navy text-white text-xs flex items-center justify-center cursor-help">i</span>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <p className="text-sm text-gray-700">All dimensions in inches. Size denotes the artwork size that fits into the frame. Must be in 1/4" increments. Available sizes range from 4"x6" to 24"x36".</p>
                  </div>
                </div>
              </h2>
              
              {/* Custom Size Input */}
              <div className="mb-6 p-4 border-2 border-gray-200 rounded-lg">
                <div className="flex items-center justify-between w-full">
                  <input
                    type="number"
                    min="4"
                    max="24"
                    step="0.25"
                    value={customWidth || ""}
                    onChange={(e) => setCustomWidth(Number(e.target.value))}
                    className="w-32 p-3 border-2 border-navy rounded text-center bg-navy text-white text-lg"
                    placeholder="Width"
                  />
                  <span className="text-gray-600 text-xl">x</span>
                  <input
                    type="number"
                    min="4"
                    max="36"
                    step="0.25"
                    value={customHeight || ""}
                    onChange={(e) => setCustomHeight(Number(e.target.value))}
                    className="w-32 p-3 border-2 border-navy rounded text-center bg-navy text-white text-lg"
                    placeholder="Height"
                  />
                  <span className={`text-3xl ${isValid ? 'text-green-500' : 'text-red-500'}`}>
                    {isValid ? '✓' : '✕'}
                  </span>
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
              </div>

              {/* Standard Sizes */}
              <div className="flex flex-wrap gap-4 text-gray-600">
                <span className="text-gray-500">Standard sizes:</span>
                {PRODUCT_DATA.sizes.map((size) => (
                  <button
                    key={size.display}
                    onClick={() => handleSizeChange(size)}
                    className="hover:text-navy transition-colors"
                  >
                    {size.display}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-navy flex items-center gap-2">
                Finish
                <div className="group relative">
                  <span className="w-5 h-5 rounded-full bg-navy text-white text-xs flex items-center justify-center cursor-help">i</span>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <p className="text-sm text-gray-700">Oil used is Osmo Polyx Clear Matte Oil finish, while natural wood finish is untreated.</p>
                  </div>
                </div>
              </h2>
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

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-navy flex items-center gap-2">
                Orientation
                <div className="group relative">
                  <span className="w-5 h-5 rounded-full bg-navy text-white text-xs flex items-center justify-center cursor-help">i</span>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <p className="text-sm text-gray-700">Select the orientation of your frame for mounting hardware.</p>
                  </div>
                </div>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {PRODUCT_DATA.orientations.map((orientation) => (
                  <button
                    key={orientation}
                    onClick={() => handleOrientationChange(orientation)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      selectedOrientation === orientation
                        ? "border-navy bg-navy text-white"
                        : "border-gray-200 hover:border-navy text-gray-700"
                    }`}
                  >
                    {orientation.charAt(0).toUpperCase() + orientation.slice(1)}
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
              disabled={!isValid}
              className={`w-full py-4 rounded-lg text-lg font-semibold transition-colors ${
                isValid 
                  ? "bg-navy text-white hover:bg-navy/90" 
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 