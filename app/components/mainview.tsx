import React from "react";
import Image from "next/image";
import { QuicksandSans } from "../fonts/fonts";

export default function Mainview() {
  return (
    <div
      className={`${QuicksandSans.className} md:w-full w-[90vw]h-[400px] bg-[url('/main_bg.png')] bg-cover bg-center flex items-center justify-center`}
    >
      <div className="fixed w-[140px] h-[35px] bg-white left-[10px] top-[10px]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[90%] h-[80%] relative">
            <Image src="/logo Onesta poziom 02_02.png" fill objectFit="cover" alt="logo"></Image>
          </div>
        </div>
      </div>
      <span className="bg-orange-400 text-white md:w-[500px] w-[90vw] mx-auto md:text-[24px] text-[20px] text-center rounded-xl">
        <p className="md:text-[40px] text-[28px] font-bold">Pobyt inwestorski</p>najefektywniejsza
        forma zakupu nieruchomości w Hiszpanii
      </span>
    </div>
  );
}
