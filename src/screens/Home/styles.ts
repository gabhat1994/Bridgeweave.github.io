import styled from "styled-components";

export const ItemListWrapper = styled.div`
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

export const Button = styled.button`
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

export const Table = styled.table`
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

export const Modal = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 400px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormControl = styled.div`
  margin-bottom: 16px;

  label {
    margin-bottom: 8px;
    margin-right: 8px;
  }

  input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;