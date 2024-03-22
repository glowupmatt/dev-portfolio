"use client";
import axios from "axios";
import Image from "next/image";
import Input from "../Input";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { formInputObj, inputFormArray } from "./Contact";

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
  const inputForm: inputFormArray[] = [
    {
      userInfoKey: "name",
      inputType: "text",
      placeHolder: "Name",
      pattern: /^[A-Za-z\s'-]+$/,
      value: "",
    },
    {
      userInfoKey: "email",
      inputType: "email",
      placeHolder: "Email Address",
      pattern: /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      value: "",
    },
  ];

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
      <div className="flex flex-col gap-4 w-full lg:col-span-3">
        <div className="flex flex-col lg:flex-row gap-4 lg:h-[8rem] lg:w-full">
          {inputForm.map((input, index) => {
            return (
              <Input
                key={index}
                input={input}
                index={index}
                formInput={formInput}
                setFormInput={setFormInput}
              />
            );
          })}
        </div>
        <textarea
          className="w-full h-[24rem] p-[2rem] rounded-[3rem] placeholder:text-[#d289ff] text-[#d289ff] bg-[#2c2b2c] ring-[5px]ring-black  focus:outline-none lg:h-[32rem] ring-black border-black border-[5px] lg:text-[2rem]"
          placeholder="Your Message"
          value={textArea}
          onChange={textAreaHandler}
        />
      </div>
      <div className="h-full flex w-full lg:col-span-1 lg:justify-self-stretch">
        <button className="relative w-full flex-col flex justify-center items-center gap-1 p-[2rem] rounded-full drop-shadow-lg lg:w-full lg:h-full lg:rounded-[5rem] transition  lg:ease-in-out lg:hover:scale-[.96] lg:duration-500 ring-black border-black border-[5px]">
          <div className="relative w-[20px] h-[20px] md:w-[50px] md:h-[50px] z-10">
            <Image
              alt="paper-plane-icon"
              src="/icons/paper-plane-regular.svg"
              fill
              sizes="100vw"
            />
          </div>
          <div className="absolute w-full h-full ">
            <Image
              alt="gradient-designs"
              sizes="100vw"
              src="/gradient-designs/gradient-5.png"
              fill
              className="object-cover rounded-full lg:rounded-[5rem]"
            />
          </div>
          <p className="z-10">Send</p>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
