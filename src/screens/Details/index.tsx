import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsItems } from "../../data";
import { useNavigate } from "react-router";
import { Button, KeyValueContainer, KeyValuePair } from "./styles";


export const Details: FunctionComponent = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [dispalyInfo, setDisplayInfo] = useState<any>({});

  useEffect(() => {
    if (id) {
      const newData = DetailsItems.filter((data) => data?.tradingsymbol === id);
      setDisplayInfo(newData[0]);
    }
  }, [id]);

  return (
    <>
      <Button onClick={() => navigate(-1)}>Back to Home Page</Button>
      <KeyValueContainer>
        {Object.entries(dispalyInfo).map(([key, value]) => (
          <KeyValuePair key={key}>
            <span>{key}:</span> {value}
          </KeyValuePair>
        ))}
      </KeyValueContainer>
    </>
  );
};

