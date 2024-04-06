import { useContext } from 'react';
import { FiltersContext } from '../context/FiltersContext';

export default function useFilters() {
  const filtersContext = useContext(FiltersContext);

  if (filtersContext === null || filtersContext === undefined) {
    throw new Error('Error at getting filters');
  }

  return filtersContext;
}
