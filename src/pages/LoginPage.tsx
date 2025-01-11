import { Link } from "react-router-dom";
import loginImages from "@assets/img/login/loginImages";
import PetBlock from "@components/ui/PetBlock/PetBlock";
import Title from "@shared/Tittle";
import LoginForm from "@components/logic/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 xl:flex-row md:gap-8">
        <PetBlock
          images={loginImages}
          imageWidth="100%"
          imageHeight="100%"
          className="w-full mx-auto xl:max-w-[592px] md:max-w-[704px] h-[280px] xl:h-[654px] rounded-[60px] mobile:h-[280px] mobile-adaptive:h-[280px] max-w-[335px]"
        />

        <div className="p-[20px] bg-[#fff] w-full max-w-[704px] rounded-[30px] flex flex-col justify-center items-center mx-auto">
          <div className="w-full max-w-[424px] xl:max-w-[592px]">
            <Title style="mb-[12px]">Log in</Title>
            <p className="mb-[24px] text-[14px]">
              Welcome! Please enter your credentials to login to the platform:
            </p>
            <LoginForm />

            <p className="text-date-color flex justify-center gap-[2px]">
              Don’t have an account?
              <Link to="/register" className="text-[#f6b83d]">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
