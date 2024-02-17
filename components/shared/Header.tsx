import React from "react";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-[100%] bg-[#1f1f1f] p-5">
      <div className="flex items-center justify-around">
        <div className="flex flex-col">
          <Logo color="Light" />
        </div>
        <MobileNav />

        <Button className="hidden w-[261px] rounded-lg bg-[#f28000] p-6 hover:bg-[#F38C19] md:flex">
          Criar anúncio
        </Button>
      </div>
    </header>
  );
};

export default Header;
