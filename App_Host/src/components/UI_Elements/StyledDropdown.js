import React from "react";
import styled from "styled-components";

const StyledDropdownGeneral = styled.select`
  width: 100px;
  height: 35px;
  background: ffff;
  color: #304970;
  font-size: 14px;
  outline: none;
  text-indent: 15px;
  border-radius: 0.5rem;
  border: 1px solid rgb(255, 152, 0);
`;
const Option = styled.option`
  background-color: #f0f2f5;
  color: #304970;
  border-radius: 0.5rem;
`;

const StyledDropdown = ({ defaultValue, optionsList, onChange }) => {
  return (
    <StyledDropdownGeneral
      defaultValue={defaultValue}
      optionsList={optionsList}
      onChange={onChange}
    >
      {optionsList.map(({ code, label }) => (
        <Option key={code} value={code}>
          {label}
        </Option>
      ))}
      F
    </StyledDropdownGeneral>
  );
};
export default StyledDropdown;
