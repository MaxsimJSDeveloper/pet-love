import Modal from "@src/shared/Modal";
import { useState } from "react";

const ModalAttention = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
