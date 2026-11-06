import Navbar from "./components/layout/Navbar.tsx";
import Newsletter from "./components/layout/Newsletter.tsx";
import Footer from "./components/layout/Footer.tsx";
import SidebarFilters from "./components/filters/SidebarFilters.tsx";
import ProductGrid from "./components/products/ProductGrid.tsx";
import {products} from "./data/product.ts";
import {useState} from 'react';
function App() {

    const maxPrice = Math.max(...products.map((p) => p.price));

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [filterInStock, setFilterInStock] = useState(false);
    const [filterOnSale, setFilterOnSale] = useState(false);
    const [priceLimit, setPriceLimit] = useState(maxPrice);

    // 1. Convert search term to lowercase once
    const query = searchTerm.toLowerCase();

    // 2. Filter products
    const filteredProducts = products.filter((product) => {
        // 1. Search filter (title or category)
        const matchesSearch =
            product.title.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query);

        // 2. Category filter
        const matchesSelectedCategory =
            selectedCategory === "all" || product.category === selectedCategory;

        // 3. In Stock filter
        const matchesStock =
            !filterInStock || product.inStock;

        // 4. On Sale filter
        const isOnSale =
            Boolean(product.originalPrice) && product.originalPrice! > product.price;
        const matchesSale =
            !filterOnSale || isOnSale;

        // 5. Price Range Slider
        const matchesPrice = product.price <= priceLimit;

        return matchesSearch && matchesSelectedCategory && matchesStock && matchesSale && matchesPrice;
    });

    return (
        <div className="min-h-screen antialiased font-sans flex flex-col justify-between transition-colors duration-300 bg-slate-100/30 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
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
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                        filterInStock={filterInStock}
                        setFilterInStock={setFilterInStock}
                        filterOnSale={filterOnSale}
                        setFilterOnSale={setFilterOnSale}
                        priceLimit={priceLimit}
                        onPriceChange={setPriceLimit}
                        maxPrice={maxPrice}
                    />

                    {/* Right Column: Products (col-span-9) */}
                    <ProductGrid
                        products={filteredProducts}
                        totalCount={products.length}
                    />

                </div>
            </main>

            <div>
                <Newsletter/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;