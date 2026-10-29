import {User, Menu, Package} from "lucide-react";
import SearchInput from "./SearchInput";
import CartButton from "./CartButton";

const NAV_LINKS = ['New Arrival', 'Men', 'Women', 'Sale'];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-blue-700/30 bg-blue-600 shadow-lg shadow-blue-900/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 font-bold tracking-tight text-white">
                        <span
                            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
                          <Package size={20} strokeWidth={2.5}/>
                        </span>
                        <span className="text-xl tracking-tighter uppercase font-black">
                            LITE.SHOP
                        </span>
                    </a>
                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-blue-100">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="relative transition-colors duration-200 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-full after:h-0.5 after:scale-x-0 after:origin-center after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 after:rounded-full">
                                {link}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        {/* Live Indicator */}
                        <div
                            className="mr-4 hidden items-center gap-2 rounded-full bg-blue-500/30 px-3 py-1 lg:flex border border-blue-400/20">
                        <span className="relative flex h-2 w-2">
                            <span
                                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-200 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-100"></span>
                        </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-50">Live</span>
                        </div>
                        {/* Search */}
                        <SearchInput/>
                        {/* Cart  */}
                        <CartButton count={0}/>
                        {/* User */}
                        <button type="button"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                                aria-label="Account" title="Account">
                            <User size={20}/>
                        </button>
                        {/* Mobile Menu Button */}
                        <button type="button"
                                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/30 text-blue-50 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                                aria-label="Menu" title="Menu">
                            <Menu size={24}/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}