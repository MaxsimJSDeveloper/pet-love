import React from "react";

interface TitleProps {
  children: React.ReactNode;
  style?: string;
}

const Title = ({ children, style }: TitleProps) => (
  <h1 className={`${style} font-bold text-[28px] text-left`}>{children}</h1>
);

export default Title;
