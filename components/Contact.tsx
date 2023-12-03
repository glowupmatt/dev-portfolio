"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "./Input";
import Image from "next/image";
import axios from "axios";

export type formInputObj = {
  name: string;
  email: string;
  message: string;
};

export type inputFormArray = {
  userInfoKey: keyof formInputObj;
  inputType: string;
  placeHolder: string;
  pattern: RegExp;
  value: string;
};

const Contact = () => {
  const [textArea, setTextArea] = useState("");
  const [formInput, setFormInput] = useState<formInputObj>({
    name: "",
    email: "",
    message: "",
  });
  const [successfulInput, setSuccessfulInput] = useState(false);

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
    <div className="flex justify-center items-center w-full p-4  lg:p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full gap-[1rem] lg:gap-[2rem] lg:grid lg:grid-cols-4"
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
            className="w-full h-[24rem] p-[2rem] rounded-[3rem] placeholder:text-[#d289ff] text-[#d289ff] bg-[#2c2b2c] ring-[5px] ring-black  focus:outline-none focus:border-black focus:ring-[5px] focus:ring-black"
            placeholder="Your Message"
            value={textArea}
            onChange={textAreaHandler}
          />
        </div>
        <div className="h-full flex w-full lg:col-span-1 lg:justify-self-stretch">
          <button className="relative w-full flex-col flex justify-center items-center gap-1 p-[2rem] rounded-full border-black border-[2px] drop-shadow-lg lg:w-full lg:h-full lg:rounded-[5rem] transition  lg:ease-in-out lg:hover:scale-[.96] lg:duration-500">
            <div className="relative w-[20px] h-[20px] md:w-[50px] md:h-[50px] z-10">
              <Image
                alt=""
                src="/icons/paper-plane-regular.svg"
                fill
                sizes="100vw"
              />
            </div>
            <div className="absolute w-full h-full ">
              <Image
                sizes="100vw"
                alt=""
                src="/gradient-designs/gradient-5.png"
                fill
                className="object-cover rounded-full lg:rounded-[5rem]"
              />
            </div>
            <p className="z-10">Send</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
