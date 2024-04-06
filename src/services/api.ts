import { Category, Product, ProductsResponse } from '../types/types';
import { specialFilters } from '../helpers/constants';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const productsResponse = await fetch('https://fakestoreapi.com/products');
    const products: ProductsResponse[] = await productsResponse.json();

    const mappedProducts: Product[] = products.map((product) => ({
      id: `prod-${product.id}`,
      name: product.title,
      image: product.image,
      price: product.price,
      category: product.category,
    }));

    return mappedProducts;
  } catch (e) {
    throw new Error('Error at getting products');
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const categoriesResponse = await fetch(
      'https://fakestoreapi.com/products/categories'
    );
    const categories = await categoriesResponse.json();

    const allCategories: string[] = [specialFilters.ALL, ...categories];

    const mappedCategories: Category[] = allCategories.map((category, i) => ({
      id: `cat-${i}`,
      name: category.toLocaleLowerCase(),
    }));

    return mappedCategories;
  } catch (e) {
    throw new Error('Error at getting categories');
  }
};
