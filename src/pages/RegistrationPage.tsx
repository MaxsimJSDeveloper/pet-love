import { Link } from "react-router-dom";
import RegistrationForm from "../shared/RegistrationForm";
import Title from "../shared/Tittle";

const RegistrationPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-center items-center bg-[#F6B83D] rounded-[30px]">
          <img src="/img/mobile/dog.png" alt="Logo" />
        </div>
        <div className="p-[20px] bg-[#fff] w-[335px] rounded-[30px] flex flex-col justify-center">
          <Title style="mb-[12px]">Registration</Title>
          <p className="mb-[24px] text-[14px]">
            Thank you for your interest in our platform.
          </p>
          <RegistrationForm />
          <p className="text-date-color flex justify-center gap-[2px]">
            Already have an account?
            <Link to="/login" className="text-[#f6b83d]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
