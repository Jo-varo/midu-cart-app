import React, { createContext, useState } from 'react';

interface IFiltersContext {
  filters: {
    maxPrice: number;
    category: string;
  };
  maxPriceChange: (maxPrice: number) => void;
  categoryChange: (category: string) => void;
}

export const FiltersContext = createContext<IFiltersContext | null>(null);

export const FiltersContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filters, setFilters] = useState({ maxPrice: 1000, category: 'all' });

  const maxPriceChange = (maxPrice: number) => {
    setFilters({ ...filters, maxPrice });
  };

  const categoryChange = (category: string) => {
    setFilters({ ...filters, category });
  };

  return (
    <FiltersContext.Provider
      value={{ filters, maxPriceChange, categoryChange }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
