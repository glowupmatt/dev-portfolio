import React, { Dispatch, SetStateAction, useState } from "react";
import { formInputObj } from "./contactFormComponents/Contact";
import classNames from "classnames";

type InputCompProps = {
  input: {
    userInfoKey: string;
    inputType: string;
    placeHolder: string;
    pattern: RegExp;
    value: string;
  };
  index: number;
  formInput: formInputObj;
  setFormInput: Dispatch<SetStateAction<formInputObj>>;
};

const Input = ({ input, setFormInput }: InputCompProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<boolean>();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setFormInput((prev) => {
      return {
        ...prev,
        [input.userInfoKey]: e.target.value,
      };
    });
    const regex = new RegExp(input.pattern);
    if (!regex.test(inputValue)) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <input
      className={classNames(
        "w-full p-[2rem] rounded-full placeholder:text-[#d289ff] text-[#d289ff] bg-[#2c2b2c] ring-[5px] ring-black  focus:outline-none focus:border-black focus:ring-[5px] focus:ring-black",
        { "ring-red-800 border-red-800": error === true }
      )}
      required
      type={input.inputType}
      placeholder={input.placeHolder}
      value={inputValue}
      onChange={changeHandler}
    />
  );
};

export default Input;
