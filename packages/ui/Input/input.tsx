import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex w-full gap-6">
      <input
        className={clsx(
          "h-[44px] w-full rounded-lg border border-gray-4 px-4 outline-none",
          props.disabled && "text-gray-6"
        )}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onClick={props.onClick}
        {...props}
        type="text"
      />
    </div>
  );
};
