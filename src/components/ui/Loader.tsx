import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <Hearts
        height="80"
        width="80"
        color="#F6B83D"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
