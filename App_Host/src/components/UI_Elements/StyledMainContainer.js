import React from "react";
import styled from "styled-components";

const StyledMainContainerGeneral = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0 20px 0;
`;
const StyledMainContainerDark = styled(StyledMainContainerGeneral)`
  background-color: rgb(39, 43, 51);
`;

const StyledMainContainerBordered = styled(StyledMainContainerGeneral)`
  background-color: #f2f2dc;
  border: 1px solid #bdbd26;
`;

const StyledMainContainer = ({ type = "light", children }) => {
  return (
    <>
      {type === "dark" && (
        <StyledMainContainerDark>{children}</StyledMainContainerDark>
      )}
      {type === "light" && (
        <StyledMainContainerGeneral>{children}</StyledMainContainerGeneral>
      )}
      {type === "bordered" && (
        <StyledMainContainerBordered>{children}</StyledMainContainerBordered>
      )}
    </>
  );
};
export default StyledMainContainer;
