import React from "react";

interface TitleProps {
  children: React.ReactNode;
  style?: string;
}

const Title = ({ children, style }: TitleProps) => {
  return (
    <h1
      className={`${style} font-bold text-[28px] text-left mt-[54px] mb-[40px]`}
    >
      {children}
    </h1>
  );
};

export default Title;
