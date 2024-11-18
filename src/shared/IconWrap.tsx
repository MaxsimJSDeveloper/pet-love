import sprite from "/img/symbol-defs.svg";

interface IconWrapProps {
  iconId: string;
  size: number;
  style?: string;
}

const IconWrap = ({ iconId, size, style }: IconWrapProps) => {
  return (
    <svg className={style} width={size} height={size}>
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
  );
};

export default IconWrap;
