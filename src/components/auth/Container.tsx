import React, { ReactNode, } from "react";
import Image, { StaticImageData } from "next/image";
import { DefaultButton } from "../reusable/button/Button";
import Back from "../../../public/assets/images/Back.png"
import Link from "next/link";

const AuthContainer = ({
  src,
  children,
  title,
  text,
  terms,
  path,
  link,
  underline,
  btnText,
  altText,
  customStyle,
  display,
  href,
  onClick,
  altOnClick,
}: {
  src: StaticImageData | string;
  children: ReactNode;
  title: string;
  text: string;
  terms: string;
  path: any;
  link: any;
  underline: string;
  btnText: string;
  altText: string;
  customStyle: string;
  display: string;
  href: string;
  onClick: any;
  altOnClick: any;

}) => {
  return (
    <div className="w-[100%] flex items-center">
      <div className="w-[47%] flex items-center p-2">
        <Image src={src} alt="authentication image" className="" />
      </div>
      <div className="w-[53%] flex justify-center items-center flex-col">
        <div className="w-[70%]">
          <Link href={href}>
            <Image src={Back} alt="authentication image" className={`h-[30px] w-[70px] ${display}`} />
          </Link>
          <h1 className="font-semibold text-[34px]">{title}</h1>
          <p className="font-medium leading-loose">{text}</p>
          <form className="mt-8">{children}</form>
          <div className="w-full text-[14px] font-medium my-3 p-4">
            <p className="text-center">
              {terms}
              <Link href={path} className={`text-[#8046F2] ml-1 ${underline}`}>
                {link}
              </Link>
            </p>
          </div>
          <DefaultButton
            type="solid"
            text={btnText}
            customStyle="bg-[#8046F2] text-white font-medium"
            onClick={onClick}
          />
          <div className={customStyle}>
            <DefaultButton
              type="solid"
              text={altText}
              customStyle={`mt-[5px] text-[#8046F2] bg-[#F9FAFB] font-medium`}
              onClick={altOnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
