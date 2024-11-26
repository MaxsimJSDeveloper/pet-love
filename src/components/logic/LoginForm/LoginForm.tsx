import { Form, Formik } from "formik";
import Input from "../../../shared/Input";
import { loginSchema } from "../../../utils/validation";
import { useState } from "react";
import Button from "../../../shared/Button";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisible = () => setIsVisible((prev) => !prev);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log("Submitted values:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className="flex flex-col gap-[10px] w-[295px]">
        <Input name="email" placeholder="Email" type="text" />
        <div className="relative">
          <Input
            name="password"
            placeholder="Password"
            type={isVisible ? "text" : "password"}
            twoIcons
          />
          <Button isVisible={isVisible} toggleVisibility={toggleVisible} />
        </div>
        <button
          type="submit"
          className="bg-[#f6b83d] text-white uppercase h-[42px] rounded-[30px] mt-[24px] mb-[12px]"
        >
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
