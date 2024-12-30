import ModalAttention from "@src/components/ui/ModalAttention/ModalAttention";
import Title from "../shared/Tittle";
import NoticesFilters from "@src/components/logic/NoticesFilters/NoticesFilters";
// import RegisterPosBlock from "@src/components/ui/RegisterPosBlock/RegisterPosBlock";

const NoticesPage = () => {
  return (
    <>
      <Title>Find your favorite pet</Title>
      <ModalAttention />
      {/* <RegisterPosBlock /> */}
      <NoticesFilters />
    </>
  );
};

export default NoticesPage;
