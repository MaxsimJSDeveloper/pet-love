import cutText from "@src/utils/cutText";

interface AnimalInfoProps {
  name: string;
  birthday: string;
  sex: string;
  species: string;
  category?: string;
  comment: string;
  price?: string;
  withReduction?: boolean;
  style?: string;
}

const AnimalInfo = ({
  name,
  birthday,
  sex,
  species,
  category,
  comment,
  price,
  withReduction,
  style,
}: AnimalInfoProps) => {
  return (
    <div className={`flex flex-col gap-[16px] ${style}`}>
      <ul className="flex gap-[14px]">
        <li className="flex flex-col">
          <p className="font-medium text-[10px] text-date-color leading-[140%]">
            Name
          </p>
          <p className="font-medium text-[12px] text-[#262626] leading-[117%] capitalize">
            {withReduction ? cutText(name, 8) : name}
          </p>
        </li>
        <li className="flex flex-col">
          <p className="font-medium text-[10px] text-date-color leading-[140%]">
            Birthday
          </p>
          <p className="font-medium text-[12px] text-[#262626] leading-[117%]">
            {birthday ? birthday.replace(/-/g, ".") : "N/A"}
          </p>
        </li>
        <li className="flex flex-col">
          <p className="font-medium text-[10px] text-date-color leading-[140%]">
            Sex
          </p>
          <p className="font-medium text-[12px] text-[#262626] leading-[117%] capitalize">
            {sex}
          </p>
        </li>
        <li className="flex flex-col">
          <p className="font-medium text-[10px] text-date-color leading-[140%]">
            Species
          </p>
          <p className="font-medium text-[12px] text-[#262626] leading-[117%] capitalize">
            {species}
          </p>
        </li>
        {category && (
          <li className="flex flex-col">
            <p className="font-medium text-[10px] text-date-color leading-[140%]">
              Category
            </p>
            <p className="font-medium text-[12px] text-[#262626] leading-[117%] capitalize">
              {category}
            </p>
          </li>
        )}
      </ul>
      <p className="font-medium text-[14px] text-[#2b2b2a] leading-[129%]">
        {withReduction ? cutText(comment, 38, true) : comment}
      </p>
      <div className="text-[18px] font-bold text-[#2b2b2a] leading-[133%] mb-[16px]">
        {price ? <p>&#36;{price}</p> : <p>free</p>}
      </div>
    </div>
  );
};

export default AnimalInfo;
