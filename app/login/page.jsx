"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import LoginStyle from "./LoginStyle";

const LoginModal = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.push("/");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <LoginStyle
      Submit={handleSubmit(onSubmit)}
      register={register}
      required
      errors={errors}
    />
  );
};

export default LoginModal;
