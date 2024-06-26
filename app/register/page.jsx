"use client";
import axios from "axios";
import React, { useState } from "react";
import RegisterStyle from "./RegisterStyle";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data, e) => {
    setIsLoading(true);
    e.preventDefault();

    await axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Register Success!");
        router.push("/login");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <RegisterStyle
      Submit={handleSubmit(onSubmit)}
      register={register}
      required
      errors={errors}
    />
  );
};

export default Page;
