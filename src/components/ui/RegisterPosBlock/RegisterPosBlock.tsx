import attentionImages from "@src/assets/img/attentionModal/attentionImages";
import AttentionModalImgWrap from "../AttentionModalImgWrap/AttentionModalImgWrap";

const RegisterPosBlock = () => {
  return (
    <div className="w-[294px] flex bg-white">
      <AttentionModalImgWrap images={attentionImages} />
      <div>
        <div>
          <h2 className="text-[16px] font-bold text-[#f6b83d] leading-[125%] tracking-[-0.03em]">
            Rich
          </h2>
          <span className="text-[12px] leading-[117%] tracking-[-0.02em] text-date-color">
            Birthday:<p className="text-[#262626]">21.09.2020</p>
          </span>
        </div>
        <p className="text-[12px] leading-[117%] tracking-[-0.02em] text-dark-opacity">
          Rich would be the perfect addition to an active family that loves to
          play and go on walks. I bet he would love having a doggy playmate too
        </p>
      </div>
    </div>
  );
};

export default RegisterPosBlock;
