import styled from "styled-components";

export const KeyValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Arial", sans-serif;
  margin: 10px;
`;

export const KeyValuePair = styled.div`
  margin-bottom: 8px;

  span {
    font-weight: bold;
    margin-right: 4px;
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
