import React from "react";
import { MenuLink } from "./Menu";
import { SvgIcon } from "ui";
import { NewPhotoModal } from "../NewPhotoModal";

export const MainMenu = () => {
  return (
    <div className="bg-white shadow-md border-b border-gray-2 px-4">
      <div className="container mx-auto">
        <div className="flex gap-4 items-center">
          <div className="flex flex-1 gap-2 items-center">
            <SvgIcon
              icon="camera"
              className="bg-gray-10 w-10 h-10 bg-contain"
              mark
            />
            <div className="text-body1 font-bold">Photo Express</div>
          </div>
          <div className="hidden sm:block">
            <MenuLink link="/">Discover</MenuLink>
          </div>
          <NewPhotoModal />
        </div>
      </div>
    </div>
  );
};
