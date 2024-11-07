/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export const useFilters = (initialFilters: any) => {
  const [filters, setFilters] = useState(initialFilters);

  const changeFilter = (key: any, value: any) => {
    setFilters((prev: any) => {
      return { ...prev, [key]: value };
    });
  };
  return { filters, changeFilter };
};
