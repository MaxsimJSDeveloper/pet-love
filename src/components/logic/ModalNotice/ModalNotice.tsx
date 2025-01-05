import ModalAttention from "@src/components/logic/ModalAttention/ModalAttention";
import { selectIsOpen } from "@src/redux/animals/selectors";
import { closeModal } from "@src/redux/animals/slice";
import { AppDispatch } from "@src/redux/store";
import { selectToken } from "@src/redux/users/selectors";
import Modal from "@src/shared/Modal";
import { useDispatch, useSelector } from "react-redux";

const ModalNotice = () => {
  const token = useSelector(selectToken);

  const dispatch = useDispatch<AppDispatch>();

  const handleSetIsOpen = () => {
    dispatch(closeModal());
  };

  const isOpen = useSelector(selectIsOpen);

  return (
    <>
      {isOpen && token ? (
        <Modal onClose={handleSetIsOpen}>
          <h2 className="text-[20px] font-bold text-[#f6b83d] leading-[100%] tracking-[-0.03em] mb-[20px]">
            In process...
          </h2>
        </Modal>
      ) : (
        <ModalAttention />
      )}
    </>
  );
};

export default ModalNotice;
