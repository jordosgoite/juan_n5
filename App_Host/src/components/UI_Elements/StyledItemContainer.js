// This is a container element for a 3 row flex container (./StyledFlexContainer)
import React from "react";
import styled from "styled-components";
import StyledSubtitle from "./StyledSubtitle";
import StyledImage from "./StyledImage";
import { themeOption } from "../../helpers/constants";

const StyledItemGeneral = styled.div`
  width: 33%;
  text-align: center;
  @media (max-width: 768px) {
    width: 50%;
  }
`;


const StyledItemContainer = ({ keyValue, name, image, textType=themeOption[0] }) => {
  return (
    <StyledItemGeneral key={keyValue}>
      <StyledSubtitle type={textType}>{name}</StyledSubtitle>
      <StyledImage src={image} />
    </StyledItemGeneral>
  );
};
export default StyledItemContainer;
