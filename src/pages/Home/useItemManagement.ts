import { useState } from 'react';
import { items, TItems } from './data';

export const useItemManagement = () => {
  const [data, setItems] = useState(items);

  const addItem = (newItem : TItems) => {
    setItems([...data, newItem]);
  };

  const deleteItem = (symbol : string) => {
    const updatedItems = data.filter((item) => item.symbol !== symbol);
    setItems(updatedItems);
  };

  const resetData = () => {
    setItems([...items]);
  };

  console.log(data, "data")

  return {
    data,
    addItem,
    deleteItem,
    resetData,
  };
};
