import React, { useState, useEffect, FunctionComponent } from "react";
import styled from "styled-components";
import { items } from "./data";
import { useItemManagement } from "./useItemManagement";

const ItemListWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 600px) {
    margin-top: 10px;
    gap: 8px; 
    padding: 0 16px;
  }
  @media (max-width: 400px) {
    margin-top: 5px; 
    font-size: 14px;
  }
`;

const Button = styled.button`
  background-color: rgb(102, 63, 186);
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  width: 100%;
  height: 40px;
  min-height: 40px;
  text-align: center;
  border-radius: 16px;
  :hover {
    background: rgb(49, 13, 117);
  }
  @media (max-width: 600px) {
    height: 20px;
    min-height: 28px;
    border-radius: 8px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    th,
    td {
      padding: 6px;
      font-size: 12px;
      display: block;
    }
    th {
      display: none; /* Hide headers on small screens */
    }

    tr {
      border-bottom: 1px solid #ddd;
      margin-bottom: 8px;
      display: block;
    }
    td:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
    }
  }
`;

interface ItemListProps {}

const ItemList: FunctionComponent<ItemListProps> = (props) => {
    const { items : stocks, addItem, deleteItem, resetData } = useItemManagement(items);

  return (
    <ItemListWrapper>
      <Button onClick={() => console.log("test")}>Add Item</Button>
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
          {stocks.map((item) => (
            <tr key={item.symbol}>
              <td>{item.symbol}</td>
              <td>{item.cname}</td>
              <td>{item.price}</td>
              <td>
                <Button onClick={() => deleteItem(item.symbol)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ItemListWrapper>
  );
};

export default ItemList;
