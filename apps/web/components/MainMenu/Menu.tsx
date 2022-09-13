import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { clsx } from "ui";

interface Props {
  link: string;
  children?: JSX.Element | JSX.Element[] | string;
  isScroll?: boolean;
  transparent?: boolean;
}

export const MenuLink = ({
  link,
  children,
  isScroll,
  transparent = false,
}: Props) => {
  const router = useRouter();
  const isActive = link === router.pathname;
  return (
    <Link href={link} passHref>
      <a
        className={clsx(
          "text-body4 font-normal flex gap-2",
          transparent ? "text-white" : "text-gray-9",
          isActive && "font-bold",
          isScroll && transparent && "text-gray-9",
          isScroll && isActive && "text-emerald-5",
          !transparent && isActive && "text-emerald-5",
        )}
      >
        {children}
      </a>
    </Link>
  )
};
