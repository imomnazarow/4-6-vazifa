import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import AddProductModal from "./components/AddProductModal";

import { products } from "./data/Products.js";
import { GoSearch } from "react-icons/go";

function App() {
  const [data, setData] = useState(products);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Delete product
  function deleteProd(id) {
    let filterProd = data.filter((item) => item.id !== id);
    setData(filterProd);
  }

  // Add product
  function addProduct(newProduct) {
    setData((prev) => [...prev, newProduct]);
  }

  // Search products
  let filteredProducts = data.filter((item) =>
    `${item.name} ${item.brand} ${item.category}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <Navbar onAddProduct={() => setIsModalOpen(true)} />
        </div>
      </header>

      <main className="min-h-screen bg-[#F5F5F5]">
        <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6">
          {/* Search */}
          <section className="mb-8">
            <div className="flex h-12 w-full max-w-[600px] items-center overflow-hidden rounded-xl border border-gray-200 bg-white focus-within:border-[#7000FF]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="h-full flex-1 px-4 text-sm outline-none"
              />

              <span className="flex h-full w-14 items-center justify-center bg-[#7000FF] text-xl text-white">
                <GoSearch />
              </span>
            </div>
          </section>

          {/* Product list */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#212121]">Products</h2>

              <span className="text-sm text-gray-500">
                {filteredProducts.length} products
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onClick={deleteProd}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-lg font-semibold text-gray-700">
                  Products not found!
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Add Product Modal */}
      {isModalOpen && (
        <AddProductModal
          onClose={() => setIsModalOpen(false)}
          onAdd={addProduct}
        />
      )}
    </>
  );
}

export default App;
