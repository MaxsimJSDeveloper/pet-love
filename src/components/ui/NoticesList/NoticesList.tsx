import NoticesItem from "../NoticesItem/NoticesItem";
import { NoticesListProps } from "./NoticesList.types";

const NoticesList = ({ animals }: NoticesListProps) => {
  return (
    <ul className="gap-[20px] flex flex-wrap justify-center">
      {animals.map((animal) => (
        <li
          className="h-[454px] max-w-[335px] bg-white rounded-[16px] p-[32px] md:h-[472px] md:max-w-[342px]"
          key={animal._id}
        >
          <NoticesItem animal={animal} />
        </li>
      ))}
    </ul>
  );
};

export default NoticesList;
