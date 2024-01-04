import React from "react";
import { Languages, mySeries } from "../helpers/constants";
import { useTranslation } from "react-i18next";
import StyledButton from "./UI_Elements/StyledButton";
import StyledSubtitle from "./UI_Elements/StyledSubtitle";
import StyledTitle from "./UI_Elements/StyledTitle";
import StyledDropdown from "./UI_Elements/StyledDropdown";
import StyledFlexContainer from "./UI_Elements/StyledFlexContainer";
import StyledMainContainer from "./UI_Elements/StyledMainContainer";
import StyledSimpleContainer from "./UI_Elements/StyledSimpleContainer";

const Header = ({ selectSerie }) => {
  const { t, i18n } = useTranslation();
  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <StyledMainContainer>
      <StyledFlexContainer>
        <StyledTitle>{t("welcome")}</StyledTitle>
        <StyledDropdown
          defaultValue={Languages[1].code}
          onChange={onChangeLang}
          optionsList={Languages}
        />
      </StyledFlexContainer>
      <StyledFlexContainer>
        <StyledSubtitle>{t("header_text")}</StyledSubtitle>
      </StyledFlexContainer>
      <StyledSimpleContainer>
        <StyledButton onClick={() => selectSerie(mySeries[0].name)}>
          {mySeries[0].name}
        </StyledButton>
        <StyledButton onClick={() => selectSerie(mySeries[1].name)}>
          {mySeries[1].name}
        </StyledButton>
      </StyledSimpleContainer>
    </StyledMainContainer>
  );
};
export default Header;
