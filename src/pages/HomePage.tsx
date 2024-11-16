const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="w-[335px] h-[390px] bg-[#f6b83d] rounded-[30px] flex flex-col justify-end p-[20px]">
        <h1 className="text-[50px] font-bold text-white tracking-[-0.03em] leading-[96%] mb-[20px]">
          Take good
          <span className="text-white-transparent"> care</span> of your small
          pets
        </h1>
        <p className="text-[14px] font-normal tracking-[-0.02em;] leading-[129%] text-white">
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
      <div>
        <img src="/img/mobile/home@2x.png" alt="people with dog" width={335} />
      </div>
    </div>
  );
};

export default HomePage;
