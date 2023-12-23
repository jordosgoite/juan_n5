import React from "react";
import styled from "styled-components";

const StyledImageGeneral = styled.img`
  border-radius: 20px;
`;

const StyledImage = ({ src }) => {
  return <StyledImageGeneral src={src} />;
};
export default StyledImage;
