import { Search } from 'lucide-react';

interface SearchInputProps {
    placeholder?: string;
}

export default function SearchInput({ placeholder = "Search products..." }: SearchInputProps) {
    return (
        <div className="relative hidden sm:block">
            <input
                id="search-input"
                type="text"
                placeholder={placeholder}
                className="h-10 w-48 rounded-xl bg-blue-500/30 pl-10 pr-4 text-xs font-medium text-blue-50 placeholder:text-blue-200/50 border border-blue-400/20 focus:bg-blue-500/50 focus:w-64 transition-all duration-300 outline-none"
            />
            <Search
                size={16} className="absolute left-3.5 top-3 text-blue-200"
            />
        </div>
    )
}