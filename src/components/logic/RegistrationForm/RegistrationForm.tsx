import { Form, Formik } from "formik";

import Button from "@shared/ButtonForInput";

import { useState } from "react";
import Input from "@shared/Input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/store";
import { signUp } from "@redux/users/operation";
import { registrationSchema } from "@utils/validation";

const RegistrationForm = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisible = () => setIsVisible((prev) => !prev);

  const dispatch = useDispatch<AppDispatch>();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    resetForm();
    dispatch(signUp({ ...values }));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      <Form className="flex flex-col gap-[10px]">
        <Input name="name" placeholder="Name" type="text" />
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
        <div className="relative">
          <Input
            name="confirmPassword"
            placeholder="Confirm password"
            type={isVisible ? "text" : "password"}
            twoIcons
          />
          <Button isVisible={isVisible} toggleVisibility={toggleVisible} />
        </div>
        <button
          type="submit"
          className="bg-orange text-white uppercase h-[42px] rounded-[30px] mt-[24px] mb-[12px]"
        >
          Registration
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
