import { fetchAnimalById } from "@src/redux/animals/operation";
import { openModal } from "@src/redux/animals/slice";
import { AppDispatch } from "@src/redux/store";
import { selectToken } from "@src/redux/users/selectors";
import Icon from "@src/shared/Icon";
import { useDispatch, useSelector } from "react-redux";

interface ActionButtonsProps {
  id: string;
}

const ActionButtons = ({ id }: ActionButtonsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector(selectToken);

  const handleClick = () => {
    dispatch(openModal());
    if (token) {
      dispatch(fetchAnimalById(id));
    }
  };

  const handleLikeClick = () => {
    if (!token) {
      dispatch(openModal());
    }
  };

  return (
    <div className="flex gap-[10px]">
      <button
        onClick={handleClick}
        className="bg-[#f6b83d] mt-auto w-[231px] h-[46px] flex-1 rounded-[30px] text-white font-medium md:w-[236px] md:h-[48px]"
      >
        Learn more
      </button>
      <button
        onClick={handleLikeClick}
        className="bg-[#fff4df] flex items-center justify-center rounded-full w-[46px] md:w-[48px]"
      >
        <Icon
          id="icon-like"
          className="stroke-[#f6b83d] fill-[#fff4df]"
          width="18px"
          height="18px"
        />
      </button>
    </div>
  );
};

export default ActionButtons;
