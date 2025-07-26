import React from "react";
import { ShoppingCart, Globe } from "lucide-react";

export default function WorldwideStore() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <header className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Globe className="text-white" />
          <h1 className="text-2xl font-bold tracking-widest">WORLDVIBES</h1>
        </div>
        <button className="bg-white text-black hover:bg-gray-300 px-4 py-2 rounded-md flex items-center">
          <ShoppingCart className="mr-2" />
          Cart
        </button>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gray-900 rounded-2xl shadow-xl p-4 flex flex-col justify-between"
          >
            <div className="h-48 bg-gray-800 rounded-xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Kaos WORLDVIBES {item}
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Kaos hitam elegan bertema "FREEDOM OF LIFE".
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">Rp 150.000</span>
              <button className="bg-white text-black hover:bg-gray-300 text-sm px-3 py-1 rounded-md">
                Beli
              </button>
            </div>
          </div>
        ))}
      </section>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 WORLDVIBES. All rights reserved.
      </footer>
    </div>
  );
}
