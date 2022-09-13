import React from "react";

import { BgImg } from "../BgImg";

export type IconType = "camera";

interface IconProps {
  icon: IconType;
  className?: string;
  mark?: boolean;
}

type IconsResourceProps = {
  [key in IconType]: any;
};

const icons: IconsResourceProps = {
  camera: require("./assets/camera.svg"),
};

export const SvgIcon = ({
  icon,
  className = "w-3.5 h-3.5",
  mark,
}: IconProps) => {
  console.log("icons[icon]", icons[icon]);
  return <BgImg src={icons[icon]} mark={mark} className={className} />;
};
