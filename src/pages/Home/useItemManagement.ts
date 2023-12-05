import { useState } from 'react';
import { TItems } from './data';

export const useItemManagement = (initialItems : TItems[]) => {
  const [items, setItems] = useState(initialItems);

  const addItem = (newItem : TItems) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (symbol : string) => {
    const updatedItems = items.filter((item) => item.symbol !== symbol);
    setItems(updatedItems);
  };

  const resetData = () => {
    setItems([...initialItems]);
  };

  return {
    items,
    addItem,
    deleteItem,
    resetData,
  };
};
