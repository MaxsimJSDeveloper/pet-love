import Icon from "@shared/Icon";
import { NoticesItemProps } from "./NoticesItem.types";
import AnimalImage from "./Subcomponents/AnimalImage";
import AnimalInfo from "./Subcomponents/AnimalInfo";
import ActionButtons from "./Subcomponents/ActionButtons";
import cutText from "@utils/cutText";

const NoticesItem = ({ animal }: NoticesItemProps) => {
  const {
    species,
    category,
    title,
    name,
    birthday,
    comment,
    sex,
    imgURL,
    popularity,
    _id,
    price,
  } = animal;

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-[16px] grow">
        <AnimalImage
          imgURL={imgURL}
          name={name}
          species={species}
          category={category}
        />
        <div className="flex flex-col gap-[16px]">
          <div className="flex justify-between">
            <h2 className="font-bold leading-[125%] text-[#2b2b2a] text-[16px] md:text-[18px]">
              {cutText(title, 16)}
            </h2>
            <div className="flex gap-[5px]">
              <Icon
                id="icon-star"
                className="stroke-[#FFC531] fill-[#FFC531]"
              />
              <p>{popularity}</p>
            </div>
          </div>
          <AnimalInfo
            name={name}
            birthday={birthday}
            sex={sex}
            species={species}
            category={category}
            comment={comment}
            price={price}
            withReduction
          />
        </div>
      </div>
      <ActionButtons id={_id} />
    </div>
  );
};

export default NoticesItem;
