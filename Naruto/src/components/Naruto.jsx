import * as React from "react";
import { AppTitle, themeOption } from "../helpers/constants";
const StyledMainContainer = React.lazy(() => import("APP_HOST/StyledMainContainer"));
const StyledFlexContainer = React.lazy(() =>
  import("APP_HOST/StyledFlexContainer")
);
const StyledItemContainer = React.lazy(() =>
  import("APP_HOST/StyledItemContainer")
);
const StyledTitle = React.lazy(() => import("APP_HOST/StyledTitle"));
const StyledText = React.lazy(() => import("APP_HOST/StyledText"));

const Naruto = ({ charactersData, synopsis }) => {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
        <StyledMainContainer type={themeOption[1]}>
        <StyledTitle type={themeOption[0]}>{AppTitle}</StyledTitle>
        <StyledText type={themeOption[0]}>{synopsis}</StyledText>
        <StyledFlexContainer>
          {charactersData &&
            charactersData.map(({ character }) => (
              <StyledItemContainer
                keyValue={character.mal_id}
                name={character.name}
                image={character.images.jpg.image_url}
              />
            ))}
        </StyledFlexContainer>
      </StyledMainContainer>
    </React.Suspense>
  );
};
export default Naruto;
