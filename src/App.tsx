import Navbar from "./components/layout/Navbar.tsx";
import Newsletter from "./components/layout/Newsletter.tsx";
import Footer from "./components/layout/Footer.tsx";
import {products} from "./data/product.ts";
import ProductGrid from "./components/products/ProductGrid.tsx";

function App() {
  return (
      <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans">
        <Navbar />

          <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <ProductGrid products={products} />
          </main>

          <div>
              <Newsletter />
              <Footer />
          </div>
      </div>
  )
}

export default App
