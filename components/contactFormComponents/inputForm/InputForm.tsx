import Input from "@/components/Input";
import React from "react";
import { formInputObj, inputFormArray } from "../Contact";

type Props = {
  formInput: formInputObj;
  setFormInput: React.Dispatch<React.SetStateAction<formInputObj>>;
  textAreaHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textArea: string;
};

const InputForm = (props: Props) => {
  const { formInput, setFormInput, textAreaHandler, textArea } = props;
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

  return (
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
  );
};

export default InputForm;
