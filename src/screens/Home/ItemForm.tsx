import React, {
  useState,
  FunctionComponent,
} from "react";
import { ModalContent, Form, FormControl, Modal, Button } from "./styles";
import { ItemFormProps, TformData } from "./types";



const ItemForm: FunctionComponent<ItemFormProps> = React.memo(
  ({ show, onClose, onSubmit }) => {
    const [formData, setFormData] = useState<TformData>({
      cname: "",
      price: "",
      symbol: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
      onSubmit(formData);
    };

    return (
      <Modal show={show} onClick={onClose}>
        <ModalContent
          onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
        >
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
            <Button
              onClick={(e: { preventDefault: () => void }) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              {"Add Stock"}
            </Button>
          </Form>
        </ModalContent>
      </Modal>
    );
  }
);

export default ItemForm;
