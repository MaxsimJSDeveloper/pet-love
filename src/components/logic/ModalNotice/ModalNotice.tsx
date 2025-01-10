import ModalAttention from "@src/components/logic/ModalAttention/ModalAttention";
import AnimalInfo from "@src/components/ui/NoticesItem/Subcomponents/AnimalInfo";
import { selectAnimal, selectIsOpen } from "@src/redux/animals/selectors";
import { closeModal } from "@src/redux/animals/slice";
import { AppDispatch } from "@src/redux/store";
import { selectToken } from "@src/redux/users/selectors";
import Icon from "@src/shared/Icon";
import Modal from "@src/shared/Modal";
import { useDispatch, useSelector } from "react-redux";

const ModalNotice = () => {
  const token = useSelector(selectToken);
  const animal = useSelector(selectAnimal);

  const { imgURL, name, birthday, sex, species, comment, price } = animal;

  const dispatch = useDispatch<AppDispatch>();

  const handleSetIsOpen = () => {
    dispatch(closeModal());
  };

  const isOpen = useSelector(selectIsOpen);

  return (
    <>
      {isOpen && token ? (
        <Modal onClose={handleSetIsOpen}>
          <img src={imgURL} width={150} className="rounded-full mb-[16px]" />
          <h2 className="text-[18px] font-bold text-[#2b2b2a] leading-[133%] mb-[20px]">
            {name}
          </h2>
          <AnimalInfo
            name={name}
            birthday={birthday}
            sex={sex}
            species={species}
            comment={comment}
            price={price}
            style="items-center"
          />
          <button className="flex bg-[#f6b83d] rounded-[30px] w-full justify-center items-center h-[48px] gap-2">
            <p className="text-white">Add to</p>
            <Icon
              id="icon-like"
              className="stroke-[#fff4df] fill-[#f6b83d]"
              width="18px"
              height="18px"
            />
          </button>
        </Modal>
      ) : (
        <ModalAttention />
      )}
    </>
  );
};

export default ModalNotice;
