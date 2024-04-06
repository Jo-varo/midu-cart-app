import { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../helpers/functions';
import useFilters from '../hooks/useFilters';
import { getCategories } from '../services/api';
import { Category } from '../types/types';

export default function Filters() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { filters, categoryChange, maxPriceChange } = useFilters();

  useEffect(() => {
    const requestCategories = async () => {
      const categoriesResponse = await getCategories();
      setCategories(categoriesResponse);
    };
    requestCategories();
  }, []);

  const handleMaxPriceChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    maxPriceChange(Number(evt.target.value));
  };

  const handleCategoryChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    categoryChange(evt.target.value);
  };

  return (
    <div className="filters">
      <div>
        <input
          type="range"
          step={10}
          max={1000}
          value={filters.maxPrice}
          onChange={handleMaxPriceChange}
        />
        <p>Max Price: ${filters.maxPrice}</p>
      </div>
      <select onChange={handleCategoryChange} value={filters.category}>
        {categories?.map((category) => (
          <option key={category.id} value={category.name}>
            {capitalizeFirstLetter(category.name)}
          </option>
        ))}
      </select>
    </div>
  );
}
