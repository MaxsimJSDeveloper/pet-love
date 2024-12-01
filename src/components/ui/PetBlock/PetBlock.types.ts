export interface PetBlockProps {
  images: {
    mobile: ImageSource;
    tablet: ImageSource;
    desktop: ImageSource;
  };
  imageWidth?: string;
  imageHeight?: string;
  className?: string;
  style?: React.CSSProperties;
}

interface ImageSource {
  default: string;
  "2x": string;
  "3x": string;
  position: {
    top: string;
    left: string;
  };
}
