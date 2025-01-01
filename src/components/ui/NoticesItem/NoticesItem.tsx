import Icon from "@src/shared/Icon";
import { NoticesItemProps } from "./NoticesItem.types";
import AnimalImage from "./Subcomponents/AnimalImage";
import AnimalInfo from "./Subcomponents/AnimalInfo";
import ActionButtons from "./Subcomponents/ActionButtons";

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
  } = animal;

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-[16px] flex-grow">
        <AnimalImage
          imgURL={imgURL}
          name={name}
          species={species}
          category={category}
        />
        <div className="flex flex-col gap-[16px]">
          <div className="flex justify-between">
            <h2 className="font-bold leading-[125%] text-[#2b2b2a] text-[16px] md:text-[18px]">
              {title}
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
          />
        </div>
      </div>
      <ActionButtons />
    </div>
  );
};

export default NoticesItem;
