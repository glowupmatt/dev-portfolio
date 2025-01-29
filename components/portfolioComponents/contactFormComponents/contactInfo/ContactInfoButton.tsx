import Link from "next/link";
import React from "react";
import Image from "next/image";
import { contactInfoType } from "./ContactInfo";

type Props = {
  setCopySuccess?: (value: boolean) => void;
  copySuccess?: boolean;
  data: contactInfoType;
};

const ContactInfoButton = (props: Props) => {
  const { setCopySuccess = () => {}, copySuccess, data } = props;
  const textContainer =
    "relative bg-[white] border-hidden lg:border-solid border h-[4rem] w-full border-black  justify-center flex  items-center rounded-[8rem] lg:text-white transition ease-in-out delay-150 hover:bg-[#58456a] duration-300 xl:min-h-[6rem] cursor-pointer";

  if (data.VARIANT === "EMAIL") {
    const copyLink = () => {
      navigator.clipboard.writeText(data.source);
      setCopySuccess(true);
    };
    return (
      <div className={`${textContainer} xl:w-full`} onClick={copyLink}>
        <p className="text-[.8rem] md:text-[1rem] absolute xl:text-[1.5rem] text-black">
          {data.text}
        </p>
      </div>
    );
  }
  if (data.VARIANT === "SOCIAL" && data.img) {
    return (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={data.source}
        className={textContainer}
      >
        {data.text ? (
          <p className="text-[.8rem] md:text-[1rem]  xl:text-[1.5rem] text-black">
            {data.text}
          </p>
        ) : (
          <div className="relative w-[1.5rem] h-[1.5rem] xl:h-[3rem] xl:w-[3rem]">
            <Image
              alt="social links"
              src={data.img}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}
      </Link>
    );
  }
};

export default ContactInfoButton;
