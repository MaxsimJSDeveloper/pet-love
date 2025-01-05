import { Form, Formik } from "formik";
import { useState } from "react";
import { loginSchema } from "@utils/validation";
import Button from "@src/shared/ButtonForInput";
import Input from "@shared/Input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@src/redux/store";
import { signIn } from "@src/redux/users/operation";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisible = () => setIsVisible((prev) => !prev);

  const dispatch = useDispatch<AppDispatch>();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    resetForm();
    dispatch(signIn({ ...values }));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className="flex flex-col gap-[10px]">
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
