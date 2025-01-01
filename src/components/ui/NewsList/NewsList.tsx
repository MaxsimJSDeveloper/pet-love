import NewsItem from "../NewsItem/NewsItem";
import { NewsListProps } from "./NewsList.types";

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className="flex flex-wrap gap-[24px] md:flex-row md:gap-x-[24px] md:gap-y-[36px] md:flex-wrap ">
      {news.map((topic) => (
        <li key={topic.id}>
          <NewsItem topic={topic} />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
