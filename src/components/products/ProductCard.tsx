import {Eye, Plus, Heart, Star} from 'lucide-react'
import type {Product} from "../../types/product.ts";
import ProductBadge from "./ProductBadge.tsx";

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return(
        <article className="border border-slate-200 rounded-[1.25rem] bg-white p-3 transition-all duration-400 hover:border-blue-400 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
            {/* Image & Overlays Container */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                <img src={product.image} alt={product.title}
                     className="aspect-4/5 w-full object-cover group-hover:scale-110 transition-transform duration-700"/>

                {/* Hover action overlay buttons: Quick View (Eye) + Add to cart (Plus) */}
                <div
                    className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button type="button"
                            className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 hover:bg-blue-600 hover:text-white"
                            aria-label="Quick View">
                        <Eye size={20}/>
                    </button>
                    <button type="button"
                            className="h-12 w-12 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 hover:bg-blue-600 hover:text-white"
                            aria-label="Add to cart">
                        <Plus size={20}/>
                    </button>
                </div>

                {/* Badge */}
                {product.badge && <ProductBadge label={product.badge} />}

                {/* Favorite Heart Button */}
                <button type="button"
                        className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/50 bg-white/70 text-slate-600 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-rose-500 hover:shadow-lg group/heart"
                        aria-label="Add to favorites" title="Favorite">
                    <Heart
                        size={20} className="transition-colors group-hover/heart:fill-rose-500 group-hover/heart:stroke-rose-500" />
                </button>
            </div>

            {/* Product Info */}
            <div className="mt-4 px-1 pb-2 space-y-1">
                {/* Category & Rating */}
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-blue-600/70">
                        {product.category}
                    </p>
                    <div className="flex items-center gap-1">
                        <Star size={10} className="fill-amber-400 text-amber-400"/>
                        <span className="text-[10px] font-bold text-slate-400">{product.rating}</span>
                    </div>
                </div>
                {/* Title */}
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.title}
                </h3>
                {/* Stock Status text */}
                <p className="text-[11px] font-medium text-slate-500">
                    {product.stockStatus}
                </p>
                {/* Prices & "Add to cart" button */}
                <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex flex-col">
                        <span>
                            {product.originalPrice && (
                                <span className="text-[10px] text-slate-400 line-through font-medium leading-none">
                                    {product.originalPrice} kr
                                </span>
                            )}
                        </span>
                        <span className="text-lg font-black text-slate-900 tracking-tight">
                            {product.price} kr
                        </span>
                    </div>

                    <button type="button"
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 text-xs font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95 group/btn"
                            aria-label="Add to cart">
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    )
}