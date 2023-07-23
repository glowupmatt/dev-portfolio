"use client";
import { ChangeEvent, useState } from "react";
import Input from "./Input";
import Image from "next/image";

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

  const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
    setFormInput((prev) => {
      return {
        ...prev,
        message: e.target.value,
      };
    });
  };
  console.log(formInput);

  return (
    <section
      id="contact"
      className="flex justify-center items-center p-4 md:p-[3rem] lg:w-[90%]"
    >
      <form className="flex flex-col justify-center items-center w-full gap-[1rem] lg:gap-[2rem]">
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
        <textarea
          className="w-full h-[24rem] p-[2rem] rounded-[3rem] placeholder:text-[#d289ff] text-[#d289ff] bg-[#2c2b2c] ring-[5px] ring-black  focus:outline-none focus:border-black focus:ring-[5px] focus:ring-black"
          placeholder="Your Message"
          value={textArea}
          onChange={textAreaHandler}
        />
        <button className="relative w-full flex-col flex justify-center items-center gap-1 p-[2rem] rounded-full border-black border-[2px] drop-shadow-lg lg:w-[40%]">
          <div className="relative w-[20px] h-[20px] md:w-[50px] md:h-[50px] z-10">
            <Image alt="" src="/icons/paper-plane-regular.svg" fill />
          </div>
          <div className="absolute w-full h-full ">
            <Image
              alt=""
              src="/gradient-designs/gradient-5.svg"
              fill
              className="object-cover rounded-full "
            />
          </div>
          <p className="z-10">Send</p>
        </button>
      </form>
    </section>
  );
};

export default Contact;
