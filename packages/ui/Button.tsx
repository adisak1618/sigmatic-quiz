import * as React from "react";

interface Props {
  children?: JSX.Element | string;
}

export const Button = ({ children }: Props) => {
  return (
    <button
      type="submit"
      className="text-white hover:shadow-sm cursor-pointer w-full bg-emerald-5 hover:bg-emerald-6 px-[22px] py-2 text-body3 rounded-lg"
    >
      {children}
    </button>
  );
};
