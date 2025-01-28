import Icon from "@shared/Icon";
import { PetBlockProps } from "./PetBlock.types";

const PetBlock = ({ images, className = "", style = {} }: PetBlockProps) => {
  return (
    <div className={`relative bg-[#f6b83d] p-4 ${className}`} style={style}>
      <Icon
        id="icon-rectangle"
        stroke="stroke-inherit"
        className="absolute z-20 top-3 left-1 fill-white opacity-10 w-full h-full"
      />
      <picture className="absolute z-30 w-full h-full">
        <source
          srcSet={`${images.mobile.default} 1x, ${images.mobile["2x"]} 2x, ${images.mobile["3x"]} 3x`}
          media="(max-width: 374px)"
          type="image/webp"
        />
        <source
          srcSet={`${images.mobile.default} 1x, ${images.mobile["2x"]} 2x, ${images.mobile["3x"]} 3x`}
          media="(min-width: 375px) and (max-width: 767px)"
          type="image/webp"
        />
        <source
          srcSet={`${images.tablet.default} 1x, ${images.tablet["2x"]} 2x, ${images.tablet["3x"]} 3x`}
          media="(min-width: 768px) and (max-width: 1279px)"
          type="image/webp"
        />
        <source
          srcSet={`${images.desktop.default} 1x, ${images.desktop["2x"]} 2x, ${images.desktop["3x"]} 3x`}
          media="(min-width: 1280px)"
          type="image/webp"
        />
        <img
          src={images.desktop.default}
          alt="Background"
          className="w-full h-full object-contain"
          style={{
            position: "absolute",
            top: images.desktop.position.top,
            left: images.desktop.position.left,
          }}
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default PetBlock;
