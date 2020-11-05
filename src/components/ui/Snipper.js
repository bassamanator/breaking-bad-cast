import React from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => {
  const style = {
    width: "200px",
    margin: "auto",
    display: "block",
  };
  return <img src={spinner} style={style} alt="Loading" />;
};

export default Spinner;
