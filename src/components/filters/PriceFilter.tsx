interface PriceFilterProps {
    min?: number;
    max?: number;
    defaultValue?: number;
}

export default function PriceFilter({
                                        min = 0,
                                        max = 1800,
                                        defaultValue = 900,
                                    }: PriceFilterProps) {
    return (
        <section aria-labelledby="filters-price" className="space-y-3">
            <h2 id="filters-price" className="text-sm font-bold text-slate-900">
                Price Range
            </h2>

            <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{min} kr</span>
                <span>{max} kr</span>
            </div>

            <input
                type="range"
                min={min}
                max={max}
                defaultValue={defaultValue}
                className="w-full accent-blue-500 cursor-pointer"
                aria-label="Price range"
            />
        </section>
    );
}