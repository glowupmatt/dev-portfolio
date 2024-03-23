"use client";
import axios from "axios";
import Image from "next/image";
import Input from "../Input";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { formInputObj, inputFormArray } from "./Contact";
import InputForm from "./inputForm/InputForm";
import SubmitButton from "./inputForm/SubmitButton";

type Props = {
  setSuccessfulInput: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactForm = (props: Props) => {
  const { setSuccessfulInput } = props;
  const [textArea, setTextArea] = useState("");
  const [formInput, setFormInput] = useState<formInputObj>({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formInput);
    axios
      .post("/api/client", formInput)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setSuccessfulInput(true);
      });
  };

  const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
    setFormInput((prev) => {
      return {
        ...prev,
        message: e.target.value,
      };
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full gap-[1rem] lg:gap-[2rem]"
    >
      <InputForm
        formInput={formInput}
        setFormInput={setFormInput}
        textAreaHandler={textAreaHandler}
        textArea={textArea}
      />
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
