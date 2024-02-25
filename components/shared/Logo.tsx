import React from "react";
import Link from "next/link";

interface LogoProps {
  color: "Light" | "Dark";
}

const Logo = ({ color }: LogoProps) => {
  return (
    <>
      {color === "Light" && (
        <Link href="/">
          <h1 className="text-2xl font-bold text-[#f2f2f2] sm:text-4xl">
            ClassifiDev
          </h1>
          <p className="text-base italic text-[#757575] sm:text-xl">
            O seu classificado online
          </p>
        </Link>
      )}
      {color === "Dark" && (
        <Link href="/">
          <h1 className="text-4xl font-bold text-[#1f1f1f]">ClassifiDev</h1>
          <p className="text-xl italic text-[#000]">
            O seu classificado online
          </p>
        </Link>
      )}
    </>
  );
};

export default Logo;
