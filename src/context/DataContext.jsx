import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { initialData } from '../data/initialData';
import { supabase } from '../lib/supabase';

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);

  // Load data from Supabase on mount
  useEffect(() => {
    async function loadFromSupabase() {
      const { data: remoteData, error } = await supabase
        .from('app_state')
        .select('data')
        .eq('id', 1)
        .single();
        
      if (!error && remoteData?.data) {
        // We ensure admin arrays exist just like we did with localStorage
        const parsed = remoteData.data;
        if (!parsed.admins) parsed.admins = [...initialData.admins];
        if (!parsed.adminRequests) parsed.adminRequests = [];
        setData(parsed);
      } else if (error && error.code === 'PGRST116') {
        // No row found, let's insert the initial data
        await supabase.from('app_state').insert([{ id: 1, data: initialData }]);
      }
      setLoading(false);
    }
    loadFromSupabase();
  }, []);

  // Save changes back to Supabase automatically
  const updateData = useCallback(async (key, value) => {
    setData(prev => {
      const updated = { ...prev, [key]: value };
      supabase.from('app_state').update({ data: updated }).eq('id', 1).then();
      return updated;
    });
  }, []);

  const updateNestedData = useCallback(async (parentKey, childKey, value) => {
    setData(prev => {
      const updated = {
        ...prev,
        [parentKey]: {
          ...prev[parentKey],
          [childKey]: value,
        }
      };
      supabase.from('app_state').update({ data: updated }).eq('id', 1).then();
      return updated;
    });
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading Database...</div>;
  }

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
