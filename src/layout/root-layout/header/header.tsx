"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
import Container from "@/layout/container";
import Image from "next/image";
import Search from "./components/search";
import IconButton from "@/components/ui/icon-button";
import { AlignJustify, Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import MobileNav from "../navbar/mobile-nav";
// import { useModalContext } from "@/providers/modal-provider";

function Header() {
  // const { showModal, hideModal } = useModalContext();
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  useEffect(() => {
    if (showMobileNav) {
      setShowMobileNav((pre) => !pre);
    }
    if (pathname == "/search") {
      setShowMobileNav(false);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 bg-background z-50 py-[0.125rem]">
      <Container>
        <div className="flex my-2 justify-between items-center gap-4 mx-2 ">
          <div className="lg:hidden">
            <IconButton
              className="bg-none bg-transparent hover:bg-transparent"
              icon={<AlignJustify size={24} color="#6ebf8a" />}
              onClick={() => setShowMobileNav((pre) => !pre)}
            />
          </div>
          <Link href={"/"}>
            <Image
              src="/images/logo/muvee-stop.svg"
              alt="muvee-stop"
              className="w-fit h-[50px] md:h-16"
              width="100"
              height="50"
              sizes="100vw"
    
            />
          </Link>
          <div className="md:hidden">
            <IconButton
              className="bg-transparent hover:bg-transparent"
              icon={<SearchIcon className="text-white" />}
              onClick={() => setShowSearch((pre) => !pre)}
            />
          </div>
          <div className="hidden lg:block">
            <Navbar />
          </div>
          <div className="flex-grow hidden md:block">
            <Search />
          </div>
          {/* <Button className="hidden md:block rounded-xl">Login</Button> */}
        </div>
        {/* Mobile Nav and Search  */}
        <div className="lg:hidden">
          <div className="my-2 z-50">
            {showMobileNav && <MobileNav />}
            {showSearch && <Search />}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
