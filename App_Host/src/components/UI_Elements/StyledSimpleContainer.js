import React from "react";
import styled from "styled-components";
import { themeOption } from "../../helpers/constants";

const StyledSimpleContainerGeneral = styled.div`
  max-width: 50%;
  display:flex;
`;

const StyledSimpleContainer = ({ children }) => {
  return (
    <StyledSimpleContainerGeneral>{children}</StyledSimpleContainerGeneral>
  );
};
export default StyledSimpleContainer;
