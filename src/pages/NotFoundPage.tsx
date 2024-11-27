import { useState } from "react";
import Modal from "../shared/Modal";

const NotFoundPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleModal}
      >
        Open Modal
      </button>

      {isOpen && (
        <Modal onClose={toggleModal}>
          <h2 className="text-xl font-semibold mb-4">This is a modal!</h2>
          <p className="mb-4">You can put your modal content here.</p>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={toggleModal}
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};
export default NotFoundPage;
