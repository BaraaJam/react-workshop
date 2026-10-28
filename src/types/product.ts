export interface Product {
    id: number;
    title: string;
    category: string;
    image: string;
    price: number;
    originalPrice?: number;
    rating: number;
    stockStatus: string;
    badge?: string;
}