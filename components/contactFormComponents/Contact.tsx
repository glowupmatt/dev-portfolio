"use client";
import { useState } from "react";
import ContactForm from "./ContactForm";
import SuccessSlide from "./inputForm/SuccessSlide";

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
      {!successfulInput ? (
        <ContactForm setSuccessfulInput={setSuccessfulInput} />
      ) : (
        <SuccessSlide />
      )}
    </div>
  );
};

export default Contact;
