import * as React from "react";
import { AppTitle, themeOption } from "../helpers/constants";
const StyledMainContainer = React.lazy(() =>
  import("APP_HOST/StyledMainContainer")
);
const StyledFlexContainer = React.lazy(() =>
  import("APP_HOST/StyledFlexContainer")
);
const StyledItemContainer = React.lazy(() =>
  import("APP_HOST/StyledItemContainer")
);
const StyledTitle = React.lazy(() => import("APP_HOST/StyledTitle"));
const StyledText = React.lazy(() => import("APP_HOST/StyledText"));

const Monsters = ({ charactersData, synopsis }) => {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <StyledMainContainer type={themeOption[2]}>
        <StyledTitle type={themeOption[1]}>{AppTitle}</StyledTitle>
        <StyledText type={themeOption[1]}>{synopsis}</StyledText>
        <StyledFlexContainer>
          {charactersData &&
            charactersData.map(({ character }) => (
              <StyledItemContainer
                keyValue={character.mal_id}
                name={character.name}
                image={character.images.jpg.image_url}
                textType={themeOption[1]}
              />
            ))}
        </StyledFlexContainer>
      </StyledMainContainer>
    </React.Suspense>
  );
};
export default Monsters;
