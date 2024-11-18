import IconWrap from "../../../shared/IconWrap";
import Circles from "../../../shared/Сircles";

const Pagination = () => {
  return (
    <div className="flex">
      <Circles>
        <IconWrap iconId="icon-arrow-left" size={20} />
      </Circles>
      <Circles>
        <IconWrap iconId="icon-arrow-left" size={20} />
        <IconWrap iconId="icon-arrow-left" size={20} />
      </Circles>
      <Circles>1</Circles>
      <Circles>
        <IconWrap iconId="icon-arrow-right" size={20} />
        <IconWrap iconId="icon-arrow-right" size={20} />
      </Circles>
      <Circles>
        <IconWrap iconId="icon-arrow-right" size={20} />
      </Circles>
    </div>
  );
};

export default Pagination;
