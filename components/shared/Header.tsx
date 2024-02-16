import React from "react";

const Header = () => {
  return (
    <header className="w-[100%] bg-[#1f1f1f] p-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-[#f2f2f2]">ClassifiDev</h1>
          <p className="text-xl italic text-[#757575]">
            O seu classificado online
          </p>
        </div>

        <button className="h-[56px] w-[261px] cursor-pointer rounded-lg bg-[#f28000] text-xl font-bold text-[#f2f2f2]">
          Criar anúncio
        </button>
      </div>
    </header>
  );
};

export default Header;
