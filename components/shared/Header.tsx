import React from "react";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-[100%] bg-[#1f1f1f] p-5">
      <div className="flex items-center justify-around">
        <div className="flex flex-col">
          <Logo color="Light" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-4">
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-12 w-12",
                  },
                }}
              />
              <MobileNav />
            </SignedIn>
            <div>
              <SignedOut>
                <Button
                  asChild
                  className="rounded-lg bg-[#f28000] hover:bg-[#d39043]"
                  size="lg"
                >
                  <Link href="/sign-in">Login</Link>
                </Button>
              </SignedOut>
            </div>
          </div>

          <SignedIn>
            <Link href="/post/create">
              <Button className="hidden w-[261px] rounded-lg bg-[#f28000] p-6 hover:bg-[#F38C19] md:flex">
                Criar anúncio
              </Button>
            </Link>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
