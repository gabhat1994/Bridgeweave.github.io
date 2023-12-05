import React, { useState, useEffect, FunctionComponent, MouseEventHandler } from "react";
import styled from "styled-components";

const Modal = styled.div<{ show  : boolean}>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 400px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormControl = styled.div`
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

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;

export type TformData = {
  symbol: string ;
  cname: string ;
  price: string ;
};

interface ItemFormProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (formData: TformData) => void;
}

const ItemForm: FunctionComponent<ItemFormProps> = React.memo(({
  show,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<TformData>({
    cname: "",
    price: "",
    symbol: "",
  });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Modal show={show} onClick={onClose}>
      <ModalContent onClick={(e: { stopPropagation: () => void; }) => e.stopPropagation()}>
        <h2>{"Add New Item"}</h2>
        <Form>
          <FormControl>
            <label>Symbol</label>
            <input
              type="text"
              placeholder="Enter  Symbol"
              name="symbol"
              value={formData.symbol}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Enter Company Name "
              name="cname"
              value={formData.cname}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <label>Price</label>
            <input
              type="text"
              placeholder="Enter Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </FormControl>
          <Button onClick={handleSubmit}>{"Add Stock"}</Button>
        </Form>
      </ModalContent>
    </Modal>
  );
});

export default ItemForm;
