import React from "react";
import styled from "styled-components";
import { themeOption } from "../../helpers/constants";

const StyledTextGeneral = styled.p`
  text-align: justify;
  font-size: 15px;
  color: #304970;
  font-family: "Arial";
  padding: 25px;
`;
const StyledTextLight = styled(StyledTextGeneral)`
  color: #ffffff;
`;
const StyledText = ({ type, children }) => {
  return type === themeOption[0] ? (
    <StyledTextLight>{children}</StyledTextLight>
  ) : (
    <StyledTextGeneral>{children}</StyledTextGeneral>
  );
};
export default StyledText;
