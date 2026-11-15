import React from "react";

function ProductCard({ product, onClick }) {
  let { id, name, brand, category, price, image } = product;

  return (
    <div className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl bg-white p-2 transition duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-lg bg-[#F8F8F8] sm:h-44">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
        />

        {/* Delete */}
        <button
          onClick={() => onClick(id)}
          title="Delete product"
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:bg-red-50 hover:text-red-500"
        >
          <span className="text-lg">×</span>
        </button>
      </div>

      {/* Information */}
      <div className="flex flex-1 flex-col px-1 pt-3">
        <p className="mb-1 text-xs text-gray-500">
          {brand} · {category}
        </p>

        <h2 className="mb-3 line-clamp-2 min-h-10 text-sm font-medium leading-5 text-gray-800">
          {name}
        </h2>

        <div className="mt-auto">
          <p className="mb-3 text-base font-bold text-gray-900">
            {price.toLocaleString("uz-UZ")} so'm
          </p>

          <button
            onClick={() => onClick(id)}
            className="w-full rounded-lg bg-[#7000FF] py-2 text-sm font-semibold text-white transition hover:bg-[#5B00D6]"
          >
            Delete product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
