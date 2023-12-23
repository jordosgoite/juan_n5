import React from "react";
import styled from "styled-components";

const StyledSubtitleGeneral = styled.h3`
  color: #304970;
  font-size: 20px;
  font-family: "Arial";
`;

const StyledSubtitleLight = styled(StyledSubtitleGeneral)`
  color: #ffffff;
`;
const StyledSubtitle = ({ type, children }) => {
  return type === "light" ? (
    <StyledSubtitleLight>{children}</StyledSubtitleLight>
  ) : (
    <StyledSubtitleGeneral>{children}</StyledSubtitleGeneral>
  );
};
export default StyledSubtitle;
