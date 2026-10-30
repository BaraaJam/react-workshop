import Navbar from "./components/layout/Navbar.tsx";
import Newsletter from "./components/layout/Newsletter.tsx";
import Footer from "./components/layout/Footer.tsx";
import SidebarFilters from "./components/filters/SidebarFilters.tsx";
import ProductGrid from "./components/products/ProductGrid.tsx";
import { products } from "./data/product.ts";

function App() {
    return (
        <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans flex flex-col justify-between">
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Left Column: Sidebar Filters (col-span-3) */}
                    <SidebarFilters products={products} />

                    {/* Right Column: Products (col-span-9) */}
                    <ProductGrid products={products} />
                </div>
            </main>

            <div>
                <Newsletter />
                <Footer />
            </div>
        </div>
    );
}

export default App;