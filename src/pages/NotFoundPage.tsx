import NotFound from "@src/components/ui/Error/NotFound";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="m-auto bg-[#f6b83d] h-[100vh]">
      <div className=" bg-[#F6B83D] rounded-[60px] flex flex-col items-center justify-center py-[249px] sm:py-[109px]">
        <NotFound />
        <p className="text-white font-bold sm:text-2xl leading-7 tracking-[-0.03em] mt-10">
          Ooops! This page not found :(
        </p>
        <Link
          to="/"
          className="bg-[#FFF4DF] text-[#f6b83d] font-bold text-sm sm:text-base py-3 sm:py-[14px] px-[30px] rounded-[30px] mt-5"
        >
          To home page
        </Link>
      </div>
    </section>
  );
};
export default NotFoundPage;
