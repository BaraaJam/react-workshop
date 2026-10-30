import type { Product } from "../../types/product.ts";

interface CategoryFilterProps {
    products: Product[];
}

export default function CategoryFilter({ products }: CategoryFilterProps) {
    const totalCount = products.length;
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

    const categoryItems = [
        { name: 'All Products', value: 'all', count: totalCount },
        ...uniqueCategories.map((cat) => ({
            name: cat,
            value: cat,
            count: products.filter((p) => p.category === cat).length,
        })),
    ];

    return (
        <section aria-labelledby="filters-categories" className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 id="filters-categories" className="text-sm font-bold text-slate-900">Categories</h2>
            </div>

            <div className="space-y-3">
                {categoryItems.map((cat) => (
                    <label key={cat.value} className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            value={cat.value}
                            defaultChecked={cat.value === 'all'}
                            className="h-4.5 w-4.5 rounded-md border border-slate-200 accent-blue-600 cursor-pointer"
                        />
                        <span className="flex-1 text-sm text-slate-700 font-medium">
                    {cat.name} <span className="text-slate-400 font-normal">({cat.count})</span>
                </span>
                    </label>
                ))}
            </div>
        </section>
    )
}