import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="font-bold text-[28px] text-left mt-[54px] mb-[40px]">
      {children}
    </h1>
  );
};

export default Title;
