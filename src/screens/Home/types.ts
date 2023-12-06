export type TformData = {
    symbol: string;
    cname: string;
    price: string;
  };
  
  export interface ItemFormProps {
    show: boolean;
    onClose: () => void;
    onSubmit: (formData: TformData) => void;
  }
  