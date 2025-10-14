import React from "react";
import { showsMenu, moviesMenu } from "@/lib/nav-menus";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function MobileNav() {
  return (
    <nav className="relative z-50">
      <div className="absolute h-screen min-w-full w-80 bg-gray-900/60 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xs ">
        <ScrollArea className="h-[calc(100vh-250px)] p-4">
          <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="a" className="">
              <AccordionTrigger> Movies</AccordionTrigger>
              <AccordionContent className="border-opacity-5">
                <div className="flex flex-row  items-start gap-6 my-2">
                  <ul className="">
                    {moviesMenu?.map((menu, index) => (
                      <Link
                        key={index}
                        href={`${menu.href}`}
                        className={cn(
                          "w-[90vw] hover:rounded-xl block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent  hover:text-accent-foreground  focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">
                          {menu.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {menu.description}
                        </p>
                      </Link>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger> Shows</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-row  items-start gap-6 my-2 ">
                  <ul className="">
                    {showsMenu?.map((menu, index) => (
                      <Link
                        key={index}
                        href={`${menu.href}`}
                        className={cn(
                          "hover:rounded-xl block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">
                          {menu.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {menu.description}
                        </p>
                      </Link>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollArea>
      </div>
    </nav>
  );
}

export default MobileNav;
