import type { Product } from '../../types/product';
import ProductCard from "./ProductCard.tsx";

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({products}: ProductGridProps) {
    return (
        <div id="product-grid" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Cards mapper */}
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}