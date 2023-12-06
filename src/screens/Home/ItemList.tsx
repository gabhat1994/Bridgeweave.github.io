import React, { useState, useEffect, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { items, TItems } from "../../data";
import ItemForm from "./ItemForm";
import { Button, ItemListWrapper, Table } from "./styles";
import { useItemManagement } from "./useItemManagement";


const ItemList: FunctionComponent = React.memo(() => {
  const { data: stocks, addItem, deleteItem, resetData } = useItemManagement();
  const [showForm, setShowForm] = useState<boolean>(false);


  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleAddNewData = (formData: TItems) => {
    addItem(formData);
    handleFormClose()
  };


  const showLink = (symbol : string) =>  {
    const res =   items.findIndex((item) => item?.symbol === symbol)
    if(res === -1) {
        return false
    }
    return true
  }

  return (
    <ItemListWrapper>
      <Button onClick={() => setShowForm(true)}>Add Item</Button>
      <Button onClick={() => resetData()}>Reset Data</Button>
      <Table>
        <thead>
          <tr>
            <th>Symbol Name</th>
            <th>Company Name</th>
            <th>Current Stock Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((item) =>
              (
            <tr key={item.symbol}>
              <td>
               {showLink(item.symbol)  ? <Link to={`/details/${item.symbol}`}>{item.symbol}</Link> :  `${item.symbol}`}
              </td>
              <td>{item.cname}</td>
              <td>{item.price}</td>
              <td>
                <Button onClick={() => deleteItem(item.symbol)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ItemForm
        show={showForm}
        onClose={handleFormClose}
        onSubmit={handleAddNewData}
      />
    </ItemListWrapper>
  );
});

export default ItemList;
