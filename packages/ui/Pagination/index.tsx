import clsx from "clsx";
import React from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import styled from "styled-components";

interface Props {
  className?: string;
}
export const Pagination = ({
  className,
  ...otherProps
}: ReactPaginateProps & Props) => {
  const buttonClassName =
    "px-3 rounded py-2 border border-gray-7 hover:bg-gray-9 hover:text-white text-gray-10";
  return (
    <div className={clsx(className)}>
      <ReactPaginate
        {...otherProps}
        containerClassName="flex text-white gap-2"
        pageLinkClassName={buttonClassName}
        nextLinkClassName={buttonClassName}
        breakLinkClassName={buttonClassName}
        previousLinkClassName={buttonClassName}
        activeLinkClassName="px-3 rounded py-2 border border-gray-7 bg-gray-9 !text-white text-gray-10"
      />
    </div>
  );
};
