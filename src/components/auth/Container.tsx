import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

const AuthContainer = ({ src, children }: { src: StaticImageData | string; children: ReactNode }) => {
  return (
    <div className="w-[100%] flex items-center">
      <div className="w-[47%] flex items-center p-2">
        <Image src={src} alt="authentication image" className='' />
      </div>
      <div className="w-[53%] flex justify-center items-center">
        <form>
          {children}
        </form>
      </div>
    </div>
  );
};

export default AuthContainer;
