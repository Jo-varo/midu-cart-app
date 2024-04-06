export interface ProductsResponse {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    CategoryType;
  image:       string;
  rating:      Rating;
}

export enum CategoryType {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate:  number;
  count: number;
}

export interface Product {
  id: string,
  name: string,
  price: number,
  image: string,
  category: string
}

export interface Category {
  id: string,
  name: string,
}

export interface ProductCart extends Product{
  quantity: number
}