# React Workshop 1 – Components & Props (LITE.SHOP)

A modular, component-driven e-commerce store built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**, recreating the `index.html` reference design.

🔗 **Live Demo:** [https://baraajam.github.io/react-workshop/](https://baraajam.github.io/react-workshop/)

---

## 1. Components Created & Their Purposes

### Layout Components (`src/components/layout/`)
- **`Navbar`**: The top sticky header landmark. Holds the brand logo, category navigation links, the "Live" indicator, user profile button, mobile menu button, and orchestrates `SearchInput` and `CartButton`.
- **`SearchInput`**: Reusable search atom featuring a `Search` icon from `lucide-react`, rounded styling, and expanding focus transitions.
- **`CartButton`**: Shopping bag button featuring a conditional notification count badge that only displays when items are in the cart.
- **`Newsletter`**: Marketing callout section featuring promotional copy with dynamic discount text, an email subscription form, and background blur effects.
- **`Footer`**: Bottom landmark with brand info, Twitter and Instagram social icons, mapped multi-column navigation links (`Shop`, `Support`, `Company`), dynamic copyright year, and legal policy links.

### Product Components (`src/components/products/`)
- **`ProductGrid`**: Composite section organism holding the "Recommended for you" header, sort dropdown with `ChevronDown` icon, product card grid, and `Pagination`.
- **`ProductCard`**: Individual product card displaying product image, action overlay buttons (Quick View `Eye` + Add to cart `Plus`), favorite `Heart`, category, rating with filled `Star`, title, stock status, formatted price, and "Add to cart" button.
- **`ProductBadge`**: Pill tag atom dynamically mapping status labels (`Discount`, `Hot Deal`, `Limited`, `New Arrival`, `Sold Out`, `Popular`) to distinct Tailwind color palettes via a TypeScript dictionary.
- **`Pagination`**: Navigation control rendering previous/next chevron buttons and dynamic page numbers with active state styling.

### Filter Components (`src/components/filters/`)
- **`SidebarFilters`**: Sticky container coordinating filter modules, availability checkboxes, and the promo card.
- **`CategoryFilter`**: Checkbox list dynamically computing unique categories and product counts from data.
- **`PriceFilter`**: Range slider component allowing price interval selection with min/max labels.

---

## 2. Props Passed Between Components

| Child Component | Parent Component | Props Passed | Description |
| :--- | :--- | :--- | :--- |
| `SearchInput` | `Navbar` | `placeholder?: string` | Customizes search input placeholder text. |
| `CartButton` | `Navbar` | `count?: number` | Controls whether the notification count badge renders. |
| `Newsletter` | `App` | `title?: string`, `discountText?: string` | Allows custom headline and discount text. |
| `SidebarFilters`| `App` | `products: Product[]` | Feeds full product list for filter calculations. |
| `CategoryFilter`| `SidebarFilters` | `products: Product[]` | Used to dynamically compute unique categories and counts. |
| `PriceFilter` | `SidebarFilters` | `min?: number`, `max?: number`, `defaultValue?: number` | Configures the range slider limits dynamically. |
| `ProductGrid` | `App` | `products: Product[]` | Passes products to be mapped and rendered. |
| `ProductCard` | `ProductGrid` | `product: Product` | Receives individual product data object. |
| `ProductBadge` | `ProductCard` | `label: string` | Receives the badge label to resolve colors and render. |
| `Pagination` | `ProductGrid` | `currentPage?: number`, `totalPages?: number`, `pages?: number[]` | Configures active page and page list. |

---

## 3. Why Props Were Used

- **Reusability**: By passing `product: Product` to `ProductCard`, a single component definition cleanly renders 6 completely different products without code duplication.
- **Separation of Concerns**: UI components like `ProductBadge` and `PriceFilter` only care about rendering their UI based on props, keeping them decoupled from specific data sources.
- **Dynamic Derivation**: Passing `products` to `CategoryFilter` allows unique categories and counts to be derived dynamically from data rather than hardcoded.
- **Flexibility with Default Values**: Components like `Newsletter`, `SearchInput`, and `Pagination` provide sensible fallback defaults while remaining customizable via props.

---

## 4. How the Components Work Together

```text
App.tsx (Root Orchestrator - holds products data)
├── Navbar
│    ├── SearchInput (placeholder prop)
│    └── CartButton (count prop)
├── Main Layout
│    ├── SidebarFilters (products prop)
│    │    ├── CategoryFilter (derives categories & counts)
│    │    └── PriceFilter (receives dynamic maxPrice)
│    └── ProductGrid (products prop)
│         ├── ProductCard (mapped for each product)
│         │    └── ProductBadge (conditional badge prop)
│         └── Pagination (currentPage, totalPages, pages)
├── Newsletter (promotional banner)
└── Footer (multi-column links & social)
```

---

## 5. Submission Checklist

- [x] The app runs without errors (`npm run build` succeeds)
- [x] The layout matches `index.html` closely
- [x] The page is split into reusable React components
- [x] Props are used where they make sense
- [x] The project structure is clean and easy to follow
- [x] TypeScript is used correctly
- [x] Tailwind classes are organized and readable
- [x] Icons from `lucide-react` are used where needed
- [x] The `README` explains your components and props
- [x] There are no unused files, components, or variables
- [x] The final solution is ready to present