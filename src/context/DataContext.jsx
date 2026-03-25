import { createContext, useContext, useState, useCallback } from 'react';
import { loadData, saveData } from '../data/initialData';

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [data, setData] = useState(() => loadData());

  const updateData = useCallback((key, value) => {
    setData(prev => {
      const updated = { ...prev, [key]: value };
      saveData(updated);
      return updated;
    });
  }, []);

  const updateNestedData = useCallback((parentKey, childKey, value) => {
    setData(prev => {
      const updated = {
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [childKey]: value,
        }
      };
      saveData(updated);
      return updated;
    });
  }, []);

  return (
    <DataContext.Provider value={{ data, updateData, updateNestedData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
