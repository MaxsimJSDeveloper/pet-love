import Title from "../shared/Tittle";
import LoginForm from "../components/logic/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center bg-[#F6B83D] rounded-[30px]">
          <img src="/img/mobile/dog.png" />
        </div>
        <div>
          <Title style="mb-[12px]">Log in</Title>
          <p className="mb-[24px]">
            Welcome! Please enter your credentials to login to the platform:
          </p>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
