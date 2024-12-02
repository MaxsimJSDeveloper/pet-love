import ModalAttention from "@src/components/ui/ModalAttention/ModalAttention";
import Title from "../shared/Tittle";
import Logout from "@src/components/ui/LogoutBtn/LogoutBtn";

const NoticesPage = () => {
  return (
    <>
      <Title>Find your favorite pet</Title>
      <ModalAttention />
      <Logout />
    </>
  );
};

export default NoticesPage;
