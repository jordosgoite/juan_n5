import React from "react";
import styled from "styled-components";

const StyledTitleGeneral = styled.h1`
  color: #304970;
  font-size: 30px;
  font-family: "Arial";
  padding-left: 15px;
`;
const StyledTitleLight = styled(StyledTitleGeneral)`
  color: #ffffff;
`;
const StyledTitle = ({ type, children }) => {
  return type === "light" ? (
    <StyledTitleLight>{children}</StyledTitleLight>
  ) : (
    <StyledTitleGeneral>{children}</StyledTitleGeneral>
  );
};
export default StyledTitle;
