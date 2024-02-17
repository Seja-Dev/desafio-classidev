import React from "react";

interface LogoProps {
  color: "Light" | "Dark";
}

const Logo = ({ color }: LogoProps) => {
  return (
    <>
      {color === "Light" && (
        <>
          <h1 className="text-4xl font-bold text-[#f2f2f2]">ClassifiDev</h1>
          <p className="text-xl italic text-[#757575]">
            O seu classificado online
          </p>
        </>
      )}
      {color === "Dark" && (
        <>
          <h1 className="text-4xl font-bold text-[#1f1f1f]">ClassifiDev</h1>
          <p className="text-xl italic text-[#000]">
            O seu classificado online
          </p>
        </>
      )}
    </>
  );
};

export default Logo;
