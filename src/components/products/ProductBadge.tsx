interface ProductBadgeProps {
    label: string;
}

const BADGE_STYLES: Record<string, string> = {
    Discount: "border-rose-100/50 bg-rose-500/10 text-rose-600",
    "Hot Deal": "border-rose-100/50 bg-rose-500/10 text-rose-600",
    Limited: "border-amber-100/50 bg-amber-500/10 text-amber-600",
    "New Arrival": "border-amber-100/50 bg-amber-500/10 text-amber-600",
    "Sold Out": "border-slate-200/50 bg-slate-900/60 text-white",
    Popular: "border-blue-100/50 bg-blue-500/10 text-blue-600",
}

export default function ProductBadge({ label }: ProductBadgeProps) {
    // If label matches our map, use its color; otherwise use a sensible default (e.g. blue)
    const colorStyle = BADGE_STYLES[label] || "border-blue-100/50 bg-blue-500/10 text-blue-600";

    return (
        <span className={`absolute left-3 top-3 px-3 py-1 text-[11px] font-bold rounded-full border backdrop-blur-md ${colorStyle}`}>
      {label}
    </span>
    );
}