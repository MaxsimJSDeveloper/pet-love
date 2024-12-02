import { selectToken } from "@src/redux/users/selectors";
import Modal from "@src/shared/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";

const ModalAttention = () => {
  const [isOpen, setIsOpen] = useState<boolean>(
    useSelector(selectToken) === null
  );

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleSetIsOpen}>open</button>
      {isOpen && (
        <Modal onClose={handleSetIsOpen}>
          <div>kkkk</div>
        </Modal>
      )}
    </>
  );
};

export default ModalAttention;
