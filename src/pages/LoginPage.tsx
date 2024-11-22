import Title from "../shared/Tittle";
import LoginForm from "../components/logic/LoginForm/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-center items-center bg-[#F6B83D] rounded-[30px]">
          <img src="/img/mobile/dog.png" />
        </div>
        <div className="px-[20px] bg-[#fff] w-[335px] rounded-[30px] h-[422px]">
          <Title style="mb-[12px] mt-[60px] text-start">Log in</Title>
          <p className="mb-[24px]">
            Welcome! Please enter your credentials to login to the platform:
          </p>
          <LoginForm />
          <p className="date-color flex justify-center gap-[2px]">
            Don’t have an account?
            <Link to="/register" className="text-[#f6b83d]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
