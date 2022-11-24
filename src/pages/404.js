import { Link } from "react-router-dom";

import { ErrorMessage } from "../components";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        Page doesn't exit
      </p>
      <Link
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginTop: "30px",
          color: "blue",
        }}
        to="/"
      >
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
