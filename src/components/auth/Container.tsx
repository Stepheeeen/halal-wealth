import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { DefaultButton } from "../reusable/button/Button";
import Back from "../../../public/assets/images/Back.png";
import { useRouter } from "next/navigation";
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
  loading, // Added loading prop
}: {
  src: StaticImageData | string;
  children: ReactNode;
  title: string;
  text: string;
  terms: string;
  path: string;
  link: any;
  underline: string;
  btnText: string;
  altText: string;
  customStyle: string;
  display: string;
  href: string;
  onClick: any;
  altOnClick: any;
  loading: boolean; // Type for loading prop
}) => {
  const router = useRouter();

  return (
    <div className="w-[100%] flex items-center">
      <div className="w-[47%] flex items-center p-2">
        <Image src={src} alt="authentication image" className="" />
      </div>
      <div className="w-[53%] flex justify-center items-center flex-col">
        <div className="w-[70%]">
          <button onClick={() => router.back()}>
            <Image
              src={Back}
              alt="Go back"
              className={`h-[30px] w-[70px] ${display}`}
            />
          </button>
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
            // isLoading={loading}
            disabled={false}
            isLoading={loading}
            type="solid"
            text={btnText} // Conditional loading text
            customStyle="bg-[#8046F2] text-white font-medium"
            onClick={onClick}
          />
          <div className={customStyle}>
            <DefaultButton
              type="solid"
              text={altText}
              customStyle="mt-[5px] text-[#8046F2] bg-[#F9FAFB] font-medium"
              onClick={altOnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
