import type { Product } from '../../types/product';
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

interface SidebarFiltersProps {
    products: Product[];
}

export default function SidebarFilters({ products }: SidebarFiltersProps) {
    const maxPrice = Math.max(...products.map((p) => p.price));

    return (
        <aside className="lg:col-span-3 lg:sticky lg:top-20 self-start">
            <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400 p-5">
                <CategoryFilter products={products} />

                <div className="my-5 h-px bg-slate-100"></div>

                <PriceFilter min={0} max={maxPrice} defaultValue={maxPrice / 2} />

                <div className="my-5 h-px bg-slate-100"></div>

                <section aria-labelledby="filters-availability" className="space-y-4">
                    <h2 id="filters-availability" className="text-sm font-bold text-slate-900">Availability</h2>

                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                className="h-4.5 w-4.5 rounded-md border border-slate-200 accent-blue-600 cursor-pointer"
                            />
                            <span className="flex-1 text-sm text-slate-700">In Stock</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                className="h-4.5 w-4.5 rounded-md border border-slate-200 accent-blue-600 cursor-pointer"
                            />
                            <span className="flex-1 text-sm text-slate-700">On Sale</span>
                        </label>
                    </div>
                </section>

                <section className="mt-6">
                    <div className="rounded-[1.25rem] bg-linear-to-br from-blue-600 to-amber-500 text-white overflow-hidden relative p-6">
                        <h3 className="text-lg font-bold text-white">Summer Sale</h3>
                        <p className="mt-2 text-sm leading-relaxed opacity-90 text-white">
                            Get up to 50% off on all summer collections. Limited time offer!
                        </p>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-semibold bg-white text-blue-600 transition-all duration-200 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-px mt-6 w-full shadow-lg border-none cursor-pointer">
                            Shop Now
                        </button>
                    </div>
                </section>
            </div>
        </aside>
    );
}