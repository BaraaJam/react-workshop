import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    pages?: number[];
}

export default function Pagination({
                                       currentPage = 1,
                                       totalPages = 12,
                                       pages = [1, 2, 3],
                                   }: PaginationProps) {
    return (
        <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
            {/* Previous Button */}
            <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
                aria-label="Previous page"
            >
                <ChevronLeft size={18} />
            </button>

            {/* Dynamic Page Numbers */}
            {pages.map((page) => {
                const isActive = page === currentPage;
                return (
                    <button
                        key={page}
                        type="button"
                        className={
                            isActive
                                ? "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 text-white font-medium transition-all duration-200"
                                : "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
                        }
                        aria-current={isActive ? "page" : undefined}
                    >
                        {page}
                    </button>
                );
            })}

            {/* Ellipsis & Total Pages */}
            <span className="px-2 text-sm text-slate-400 select-none">…</span>
            <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
            >
                {totalPages > pages.length && (
                    <>
                        <span className="px-2 text-sm text-slate-400 select-none">…</span>
                        <button type="button" className="...">
                            {totalPages}
                        </button>
                    </>
                )}
            </button>

            {/* Next Button */}
            <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 font-medium transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
                aria-label="Next page"
            >
                <ChevronRight size={18} />
            </button>
        </nav>
    );
}