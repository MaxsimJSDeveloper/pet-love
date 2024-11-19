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
          <Title>Log in</Title>
          <p>
            Welcome! Please enter your credentials to login to the platform:
          </p>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
