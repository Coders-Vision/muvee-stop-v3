import React from "react";
import Link from "next/link";
import { buttonVariants } from "./button";
import { useSearchParams } from "next/navigation";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

function PaginationButtons({
  pathname,
  currentPage,
  totalPages,
  pagesToShow,
}: {
  pathname: string;
  currentPage: number;
  totalPages: number;
  pagesToShow: number;
}) {
  const searchParams = useSearchParams();

  const getExistingQuery = () =>
    Object.fromEntries(new URLSearchParams(searchParams.toString()));

  const generatePageLinks = () => {
    const minPage = Math.max(currentPage - 1, 0);
    const maxPage = Math.min(minPage + pagesToShow, totalPages);

    return Array.from({ length: maxPage - minPage }, (_, i) => minPage + i + 1);
  };

  const renderPageLinks = generatePageLinks().map((item) => (
    <Link
      key={item}
      className={`${buttonVariants({
        variant: "outline",
        size: "sm",
        className: `rounded-xl ${
          currentPage === item ? "bg-ms-green hover:bg-ms-green" : ""
        }`,
      })}`}
      href={{
        pathname,
        query: { ...getExistingQuery(), page: item },
      }}
    >
      {item}
    </Link>
  ));

  return (
    <div className="flex gap-2">
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "sm",
          className: "rounded-xl",
        })}
        href={{
          pathname,
          query: { ...getExistingQuery(), page: 1 },
        }}
      >
        <ChevronsLeft size={12} className="text-white" />
      </Link>
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "sm",
          className: "rounded-xl",
        })}
        href={{
          pathname,
          query: { ...getExistingQuery(), page: Math.max(currentPage - 1, 1) },
        }}
      >
        <ChevronLeft size={12} className="text-white" />
      </Link>
      {renderPageLinks}
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "sm",
          className: "rounded-xl",
        })}
        href={{
          pathname,
          query: {
            ...getExistingQuery(),
            page: Math.min(currentPage + 1, totalPages),
          },
        }}
      >
        <ChevronRight size={12} className="text-white" />
      </Link>
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "sm",
          className: "rounded-xl",
        })}
        href={{
          pathname,
          query: { ...getExistingQuery(), page: totalPages },
        }}
      >
        <ChevronsRight size={12} className="text-white" />
      </Link>
    </div>
  );
}

export default PaginationButtons;
