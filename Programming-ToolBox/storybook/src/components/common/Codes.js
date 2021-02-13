import { useLocation, useHistory, useParams } from "react-router-dom";

import Home from "../pages/run/Home";

const Codes = () => {
  const location = useLocation();
  const history = useHistory();
  const params = useParams();
  const goHome = () => {
    history.push("/home");
  };
  console.log({ params });
  return (
    <div>
      <div>Codes, print url id: {params.id}</div>{" "}
      <button onClick={goHome}>Home</button>
    </div>
  );
};

export default Codes;
