import React, { useState, useEffect, FunctionComponent } from "react";
import styled from "styled-components";
import { items } from "./data";

const ItemListWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  background-color: rgb(102, 63, 186);
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  min-height: 40px;
  border-radius: 8px;
  margin: auto;
  :hover {
    background: rgb(49, 13, 117);
  }
  @media (max-width: 600px) {
    height: 20px;
    min-height: 28px;
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
  // ... (same as before)

  return (
    <ItemListWrapper>
      <Button onClick={() => console.log("test")}>Add Item</Button>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button onClick={() => console.log(item.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ItemListWrapper>
  );
};

export default ItemList;
