import { NewsItemProps } from "./NewsItem.types";
import css from "./NewsItemStyles";

const NewsItem = ({ topic }: NewsItemProps) => {
  const { imgUrl, title, text, date, url } = topic;

  const formattedDate = new Date(date).toLocaleDateString("en-GB");

  return (
    <div className={css.container}>
      <img className={css.image} src={imgUrl} alt={title} />
      <div className={css.contentWrapper}>
        <div className={css.textWrapper}>
          <h2 className={css.title}>{title}</h2>
          <p className={css.text}>{text}</p>
        </div>
        <div className={css.footer}>
          <p className={`${css.text} "date-color"`}>{formattedDate}</p>
          <a className={`${css.text} ${css.link}`} target="_blank" href={url}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
