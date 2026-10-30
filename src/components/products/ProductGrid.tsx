import type { Product } from '../../types/product';
import ProductCard from "./ProductCard.tsx";
import Pagination from "./Pagination.tsx";
import {ChevronDown} from "lucide-react";

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    const itemsPerPage = 6;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Create an array of page numbers: [1, 2]
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
        <section className="lg:col-span-9">
            <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400 p-5">
                {/* 1. Title + Sort dropdown */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-xl font-bold tracking-tight text-slate-900">Recommended for you</h1>

                    <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                        <span className="hidden sm:inline">Sort by:</span>
                        <div className="relative">
                            <select
                                defaultValue="Newest"
                                className="appearance-none border border-slate-200 bg-white rounded-xl py-2 pl-3 pr-9 text-sm text-slate-950 transition-all duration-200 outline-none cursor-pointer focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10"
                            >
                                <option value="Newest">Newest</option>
                                <option value="Price: Low to High">Price: Low to High</option>
                                <option value="Price: High to Low">Price: High to Low</option>
                                <option value="Best Selling">Best Selling</option>
                            </select>
                            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        </div>
                    </label>
                </div>

                <div className="mt-5 mb-6 h-px bg-slate-100"></div>

                {/* 2. Grid of Cards */}
                <div id="product-grid" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* 3. Pagination */}
                <Pagination currentPage={1} totalPages={totalPages} pages={pages} />
            </div>
        </section>
    );
}