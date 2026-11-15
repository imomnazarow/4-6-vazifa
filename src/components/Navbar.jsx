import React from "react";
import UzumLogo from "../assets/images/Uzum-Market-Logo.png";

function Navbar({ onAddProduct }) {
  return (
    <nav className="flex h-20 w-full items-center justify-between">
      <a href="/">
        <img className="w-44 sm:w-52" src={UzumLogo} alt="Uzum Market" />
      </a>

      <button
        onClick={onAddProduct}
        className="rounded-xl bg-[#7000FF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5B00D6]"
      >
        Add Product
      </button>
    </nav>
  );
}

export default Navbar;
