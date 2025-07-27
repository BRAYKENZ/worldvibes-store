import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <main>
      <div className="text-center py-10 bg-black text-white">
        <h1 className="text-4xl font-bold">Worldvibes Store</h1>
        <p className="mt-4 text-lg">Feel the Vibes with Our T-Shirts</p>
      </div>
      <ProductGrid />
      <footer className="text-center py-6 bg-black text-white mt-10">
        © 2025 Worldvibes. All rights reserved.
      </footer>
    </main>
  );
}
