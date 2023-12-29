import Container from "@/layout/container";
import { Facebook, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-16 px-6 ">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-4 gap-6">
          <div>
            <div className="flex justify-center items-center gap-4">
              <div className="bg-ms-blue p-2 cursor-pointer rounded-full hover:shadow-2xl transform hover:scale-105 transition duration-300">
                <Facebook fill="white" size={32} />
              </div>
              <div className="bg-ms-blue p-2 cursor-pointer rounded-full hover:shadow-2xl transform hover:scale-105 transition duration-300">
                <Twitter fill="white" size={32} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-md font-normal text-gray-500 sm:mb-0 dark:text-gray-400 gap-3">
            <Link href="/" className=" hover:underline  ">
              Home
            </Link>
            <Link href="/movies/popular" className=" hover:underline ">
              Movies
            </Link>
            <Link href="/shows/popular" className=" hover:underline  ">
              Shows
            </Link>
            {/* <Link href="/sitemap" className=" hover:underline  ">
              Sitemap
            </Link> */}
          </div>
          <div>
            <div className="flex flex-col justify-center items-center lg:justify-end lg:items-end">
              <Link href="/">
                <Image
                  src="/images/logo/muvee-stop.svg"
                  alt="muvee-stop"
                  className="w-fit h-[50px] md:h-16"
                  width="100"
                  height="50"
                  sizes="100vw"
                />
              </Link>
              <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
                © {`${new Date().getFullYear()} `}
                <Link href="/" className="hover:underline">
                  Muvee Stop
                </Link>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
        {/* <div className="text-center mt-8 text-xs">
          <span className="font-extrabold"> IMPORTANT:</span> This site does not
          store any files on its server. All contents are provided by
          non-affiliated third parties.
        </div> */}
      </Container>
    </footer>
  );
}

export default Footer;
