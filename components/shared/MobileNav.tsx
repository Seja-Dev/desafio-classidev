import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Logo from "./Logo";


const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="size-[24px] ">
            <div className="mt-2 border"></div>
            <div className="mt-2 border"></div>
            <div className=" flex  flex-row-reverse ">
              <span className="mt-2 w-[16px] border"></span>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent className="flex flex-col  gap-8 bg-white">
          <div>
            <Logo color="Dark" />
          </div>
          <Separator className="border border-gray-400" />
          <Button className="rounded-lg bg-[#f28000] p-6 hover:bg-[#F38C19]">
            Criar anúncio
          </Button>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
