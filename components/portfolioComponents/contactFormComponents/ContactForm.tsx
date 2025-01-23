"use client";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";

import { formInputObj } from "./Contact";
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
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xwpvkake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInput),
    });

    if (response.ok) {
      setSuccessfulInput(true);
    } else {
      setSuccessfulInput(false);
    }
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
      onSubmit={handleFormSubmit}
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
