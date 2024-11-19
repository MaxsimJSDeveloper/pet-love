import { Form, Formik } from "formik";
import Input from "../../../shared/Input";
import { loginSchema } from "../../../utils/loginSchema";
import { useState } from "react";

interface LoginFormProps {}

const LoginForm = ({}: LoginFormProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Submitted values:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className="flex flex-col gap-4">
        <Input name="email" placeholder="Email" styles={""} type="text" />
        <Input
          name="password"
          placeholder="Password"
          type={isVisible ? "text" : "password"}
        />
        <button
          type="button"
          onClick={() => setIsVisible((prev) => !prev)}
          className="text-sm underline text-blue-500"
        >
          {isVisible ? "Hide Password" : "Show Password"}
        </button>
        <button
          type="submit"
          className="bg-[#f6b83d] text-white py-2 px-4 rounded-[30px]"
        >
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
