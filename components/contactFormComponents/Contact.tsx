"use client";
import { useState } from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { HighFive } from "./inputForm/CharacterAnimation";

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
  const [successfulInput, setSuccessfulInput] = useState(false);
  return (
    <div className="flex justify-center items-center w-full p-4 lg:p-4">
      {successfulInput ? (
        <ContactForm setSuccessfulInput={setSuccessfulInput} />
      ) : (
        <div className="w-full h-[24rem] p-[2rem] gap-[2rem] rounded-[3rem] text-[#d289ff] bg-[#2c2b2c] ring-[5px]ring-black  focus:outline-none lg:h-[32rem] ring-black border-black border-[5px] lg:text-[2rem] justify-center items-center flex flex-col">
          <p className="text-center self-center">Thank you for your message!</p>
          <div className="flex content-center items-center">
            <HighFive />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
