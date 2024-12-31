interface radioBtnProps {
  btnName: string;
}

const RadioBtn = ({ btnName }: radioBtnProps) => {
  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input type="radio" name="filter" className="hidden" value={btnName} />
        <span className="p-[14px] h-[48px] bg-white rounded-[30px] flex hover:border items-center hover:border-[#F6B83D] text-gray-700 capitalize">
          {btnName}
        </span>
      </label>
    </>
  );
};

export default RadioBtn;
