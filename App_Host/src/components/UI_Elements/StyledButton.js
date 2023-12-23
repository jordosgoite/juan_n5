import React from "react";
import styled from "styled-components";

const StyledButtonGeneral = styled.button`
  border-radius: 0.5rem;
  border: 1px solid rgb(255, 152, 0);
  font-weight: 700;
  color: rgb(51, 51, 51);
  font-size: 15px;
  background-color: transparent;
  font-family: "Arial";
  padding: 10px;
  &:hover {
    background-color: #f0f2f5;
  }
`;
const StyledButton = ({ children, disabled, onClick }) => {
  return (
    <StyledButtonGeneral disabled={disabled} onClick={onClick}>
      {children}
    </StyledButtonGeneral>
  );
};
export default StyledButton;
