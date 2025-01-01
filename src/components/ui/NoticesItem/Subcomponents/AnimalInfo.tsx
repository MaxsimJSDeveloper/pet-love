const AnimalInfo = ({
  name,
  birthday,
  sex,
  species,
  category,
  comment,
}: {
  name: string;
  birthday: string;
  sex: string;
  species: string;
  category: string;
  comment: string;
}) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <ul className="flex gap-[14px]">
        <li className="flex flex-col">
          <p className="font-medium text-[10px] text-date-color leading-[140%]">
            Name
          </p>
          <p className="font-medium text-[12px] text-[#262626] leading-[117%] capitalize">
            {name}
          </p>
        </li>
        <li className="flex flex-col">
          <p className="font-medium text-[10px] text-date-color leading-[140%]">
            Birthday
          </p>
          <p className="font-medium text-[12px] text-[#262626] leading-[117%]">
            {birthday.replace(/-/g, ".")}
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
        <li className="flex flex-col">
          <p className="font-medium text-[10px] text-date-color leading-[140%]">
            Category
          </p>
          <p className="font-medium text-[12px] text-[#262626] leading-[117%] capitalize">
            {category}
          </p>
        </li>
      </ul>
      <p className="font-medium text-[14px] text-[#2b2b2a] leading-[129%]">
        {comment}
      </p>
    </div>
  );
};

export default AnimalInfo;
