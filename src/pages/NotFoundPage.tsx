import NotFound from "@components/ui/Error/NotFound";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="m-auto bg-orange h-[100vh]">
      <div className=" bg-orange rounded-[60px] flex flex-col items-center justify-center py-[249px] sm:py-[109px]">
        <NotFound />
        <p className="text-white font-bold sm:text-2xl leading-7 tracking-[-0.03em] mt-10">
          Ooops! This page not found :(
        </p>
        <Link
          to="/"
          className="bg-white-transparent text-orange font-bold text-sm sm:text-base py-3 sm:py-[14px] px-[30px] rounded-[30px] mt-5"
        >
          To home page
        </Link>
      </div>
    </section>
  );
};
export default NotFoundPage;
