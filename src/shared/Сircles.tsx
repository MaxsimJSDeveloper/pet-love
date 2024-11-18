interface CirclesProps {
  children: React.ReactNode;
  onClick?: () => void;
  isDisabled?: boolean;
}

const Circles = ({ children, onClick, isDisabled }: CirclesProps) => {
  return (
    <div
      className="rounded-full border-[1px] border-[#262626] w-[40px] h-[40px] flex justify-center items-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Circles;
