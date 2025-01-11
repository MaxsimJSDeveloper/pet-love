import { AttentionModalImgWrapProps } from "./AttentionModalImgWrap.types";

const AttentionModalImgWrap = ({ images }: AttentionModalImgWrapProps) => {
  return (
    <div className="w-[80px] h-[80px] rounded-full bg-[#fff4df] flex items-center justify-center mb-[20px]">
      <picture className="">
        <source
          srcSet={`${images.default} 1x, ${images["2x"]} 2x`}
          media="(min-width: 375px) and (max-width: 767px)"
          type="image/webp"
        />

        <img src={images.default} alt="Background" loading="lazy" />
      </picture>
    </div>
  );
};

export default AttentionModalImgWrap;
