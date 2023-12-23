// This is a 3 row container combined with the StyledItemContainer

import React from "react";
import styled from "styled-components";

const StyledFlexContainerGeneral = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 15px
`;

const StyledFlexContainer = ({ children}) => {
  return (
    <StyledFlexContainerGeneral>
      {children}
    </StyledFlexContainerGeneral>
  );
};
export default StyledFlexContainer;