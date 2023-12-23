import React, { lazy, Suspense, useEffect, useState } from "react";
import { mySeries } from "./helpers/constants";
import { useTranslation } from "react-i18next";
import Header from "./components/header";
import StyledMainContainer from "./components/UI_Elements/StyledMainContainer";

const Naruto = lazy(() => import("Naruto/Naruto"));
const Monsters = lazy(() => import("Monsters/Monsters"));

const App = () => {
  const [serieSelection, setSerieSelection] = useState("");
  const [monstersData, setMonstersData] = useState({});
  const [narutoData, setNarutoData] = useState({});
  const { t } = useTranslation();
  const getCharacters = async () => {
    const url1 = "https://api.jikan.moe/v4/anime/19/characters";
    const url2 = "https://api.jikan.moe/v4/anime/20/characters";
    Promise.all([fetch(url1), fetch(url2)])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => {
        setMonstersData(data[0].data.slice(0, 6));
        setNarutoData(data[1].data.slice(0, 6));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);


  return (
    <StyledMainContainer id="app-host">
      <Header selectSerie={setSerieSelection}/>
        <Suspense fallback={<span>Loading...</span>}>
          {serieSelection === mySeries[0].name && (
            <Naruto charactersData={narutoData} synopsis={t("naruto_synopsis")}/>
          )}
          {serieSelection === mySeries[1].name && (
            <Monsters charactersData={monstersData} synopsis={t("monsters_synopsis")}/>
          )}
        </Suspense>
    </StyledMainContainer>
  );
};

export default App;
