import React from "react";
import { StyledLoader } from "./Loader.styled";
import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <StyledLoader>
      <Hearts
        height="200"
        width="200"
        color="#3470ff"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoader>
  );
};

export default Loader;
