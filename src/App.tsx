import Navbar from "./components/layout/Navbar.tsx";
import Newsletter from "./components/layout/Newsletter.tsx";
import Footer from "./components/layout/Footer.tsx";
import SidebarFilters from "./components/filters/SidebarFilters.tsx";
import ProductGrid from "./components/products/ProductGrid.tsx";
import { products } from "./data/product.ts";
import { useState } from 'react';

function App() {

    const [searchTerm, setSearchTerm] = useState("");

    // 1. Convert search term to lowercase once
    const query = searchTerm.toLowerCase();

    // 2. Filter products
    const filteredProducts = products.filter((product) => {
        const matchesTitle = product.title.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        return matchesTitle || matchesCategory;
    });

    return (
        <div className="min-h-screen bg-slate-100/30 text-slate-950 antialiased font-sans flex flex-col justify-between">
            <Navbar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
            />

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    {/* Left Column: Sidebar Filters (col-span-3) */}
                    <SidebarFilters
                        products={products}
                        filteredProducts={filteredProducts}
                    />

                    {/* Right Column: Products (col-span-9) */}
                    <ProductGrid
                        products={filteredProducts}
                        totalCount={products.length}
                    />

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