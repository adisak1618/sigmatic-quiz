import React from "react";
import { MenuLink } from "./Menu";
import { useRouter } from "next/router";

export const MainMenu = () => {
  const router = useRouter();
  return <div className="">
    <div className="container mx-auto">
      <div className="flex gap-4">
        <MenuLink link="/" >Discover</MenuLink>
        <MenuLink link="/about-us">About Us</MenuLink>
        <MenuLink link="/contact">Contact</MenuLink>
      </div>
    </div>
  </div>
};