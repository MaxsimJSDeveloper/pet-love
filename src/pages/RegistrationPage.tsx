import registerImages from "@assets/img/register/registerImages";
import PetBlock from "@components/ui/PetBlock/PetBlock";
import RegistrationForm from "@components/logic/RegistrationForm/RegistrationForm";
import Title from "@shared/Tittle";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 xl:flex-row md:gap-8">
        <PetBlock
          images={registerImages}
          imageWidth="100%"
          imageHeight="100%"
          className="w-full mx-auto xl:max-w-[592px] md:max-w-[704px] h-[280px] xl:h-[654px] rounded-[60px] mobile:h-[280px] mobile-adaptive:h-[280px] max-w-[335px]"
        />

        <div className="p-[20px] bg-white w-full max-w-[704px] rounded-[30px] flex flex-col justify-center items-center mx-auto">
          <div className="w-full max-w-[424px] xl:max-w-[592px]">
            <Title style="mb-[12px]">Registration</Title>
            <p className="mb-[24px] text-[14px]">
              Thank you for your interest in our platform.
            </p>
            <RegistrationForm />

            <p className="text-date-color flex justify-center gap-[2px]">
              Already have an account?
              <Link to="/login" className="text-orange">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationPage;
