import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DetailsItems } from "../../data";
import { useNavigate } from "react-router";

const KeyValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Arial", sans-serif;
  margin: 10px;
`;

const KeyValuePair = styled.div`
  margin-bottom: 8px;

  span {
    font-weight: bold;
    margin-right: 4px;
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

