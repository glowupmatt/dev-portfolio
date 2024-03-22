"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";

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
        <p>Thank you for your message!</p>
      )}
    </div>
  );
};

export default Contact;
