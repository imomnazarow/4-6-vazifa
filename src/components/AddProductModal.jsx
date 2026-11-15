import React, { useState } from "react";

function AddProductModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    brand: "",
    image: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newProduct = {
      id: Date.now(),
      name: formData.name.trim(),
      price: Number(formData.price),
      category: formData.category,
      brand: formData.brand.trim(),
      image: formData.image.trim(),
    };

    onAdd(newProduct);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-[500px] rounded-2xl bg-white shadow-2xl">
        {/* Modal header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <h2 className="text-xl font-bold text-gray-900">Add New Product</h2>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-500 transition hover:bg-gray-100 hover:text-red-500"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Product name */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Product name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#7000FF]"
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Price (UZS)
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              min="1"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#7000FF]"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#7000FF]"
            >
              <option value="Laptop">Laptop</option>
              <option value="Smartphone">Smartphone</option>
              <option value="Headphones">Headphones</option>
              <option value="Tablet">Tablet</option>
            </select>
          </div>

          {/* Brand */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Brand
            </label>

            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Enter brand"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#7000FF]"
            />
          </div>

          {/* Image URL */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Image URL
            </label>

            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#7000FF]"
            />
          </div>

          {/* Footer buttons */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-[#7000FF] px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5B00D6]"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal;
