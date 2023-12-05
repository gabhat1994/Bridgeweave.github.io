import { useCallback, useEffect, useState } from "react";
import { items, TItems } from "./data";

export const useItemManagement = () => {
  const [data, setItems] = useState<TItems[]>([]);

  useEffect(() => {
    if (items) {
      setItems(items);
    }
  }, [items]);

  const addItem = useCallback(
    (newItem: TItems) => {
      setItems([...data, newItem]);
    },
    [data]
  );

  const deleteItem = useCallback(
    (symbol: string) => {
      const updatedItems = data.filter((item) => item.symbol !== symbol);
      setItems(updatedItems);
    },
    [data]
  );

  const resetData = () => {
    // setItems([...items]);
  };

  console.log(data, "data");

  return {
    data,
    addItem,
    deleteItem,
    resetData,
  };
};
