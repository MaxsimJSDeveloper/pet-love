import NewsItem from "../NewsItem/NewsItem";
import { NewsListProps } from "./NewsList.types";

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className="flex flex-col gap-[24px]">
      {news.map((topic) => (
        <li key={topic.id}>
          <NewsItem topic={topic} />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
