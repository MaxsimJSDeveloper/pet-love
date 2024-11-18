import { NewsListProps } from "./NewsList.types";

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul>
      {news.map((topic) => (
        <li key={topic.id}>{topic.title}</li>
      ))}
    </ul>
  );
};

export default NewsList;
