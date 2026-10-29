import {ShoppingBag} from 'lucide-react';

interface CartButtonProps {
    count?: number;
}

export default function CartButton({count = 0}: CartButtonProps) {
    return (
        <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
            aria-label="Cart" title="Cart">
            <ShoppingBag size="20"/>
            {/* Cart Count Badge */}
            {count > 0 && (
                <span
                    id="cart-count"
                    className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
                        {count}
                </span>
            )}
        </button>
    )
}