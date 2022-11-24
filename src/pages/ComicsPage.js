import { Helmet } from "react-helmet";

import { AppBanner, ComicsList } from "../components";

const ComicsPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page with list of our Comics" />
        <title>Comics Page</title>
      </Helmet>
      <AppBanner />
      <ComicsList />
    </>
  );
};

export default ComicsPage;
