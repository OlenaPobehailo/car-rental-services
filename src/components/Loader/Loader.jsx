import { Hearts } from "react-loader-spinner";
import { StyledLoader } from "./Loader.styled";

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
