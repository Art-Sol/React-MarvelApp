import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { AppBanner } from "../components";

import useMarvelService from "../services/MarvelService";
import setContent from "../utils/setContent";

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const { getComics, getCharacter, clearError, process, setProcess } =
    useMarvelService();

  useEffect(() => {
    updateData(); // eslint-disable-next-line
  }, [id]);

  const updateData = () => {
    clearError();

    switch (dataType) {
      case "comic":
        getComics(id)
          .then((res) => onDataLoaded(res))
          .then(() => setProcess("confirmed"));
        break;
      case "character":
        getCharacter(id)
          .then((res) => onDataLoaded(res))
          .then(() => setProcess("confirmed"));
        break;
      default:
        getComics(id)
          .then((res) => onDataLoaded(res))
          .then(() => setProcess("confirmed"));
        break;
    }
  };

  const onDataLoaded = (data) => {
    setData(data);
  };

  return (
    <>
      <AppBanner />
      {setContent(process, Component, data)}
    </>
  );
};

export default SinglePage;
