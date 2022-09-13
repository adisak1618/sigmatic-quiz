import React from "react";
import Image from "next/image";
import { BgImg } from "ui";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1662986254244-471393e2e05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    author: "Nati Melnychuk",
  },
  {
    url: "https://images.unsplash.com/photo-1662986254244-471393e2e05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    author: "Nati Melnychuk",
  },
  {
    url: "https://images.unsplash.com/photo-1662986254244-471393e2e05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    author: "Nati Melnychuk",
  },
  {
    url: "https://images.unsplash.com/photo-1662986254244-471393e2e05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    author: "Nati Melnychuk",
  },
  {
    url: "https://images.unsplash.com/photo-1662986254244-471393e2e05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    author: "Nati Melnychuk",
  },
  {
    url: "https://images.unsplash.com/photo-1662986254244-471393e2e05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    author: "Nati Melnychuk",
  },
];
export const Body = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-4">
        {photos.map((photo) => (
          <div className={`bg-red-4 pt-[60%] relative cursor-pointer`}>
            <BgImg
              src={photo.url}
              className="w-full h-full absolute top-0 left-0 bg-center bg-cover"
            />
            <div className="absolute w-full h-full top-0 left-0 flex items-end">
              <div className="bg-gray-9 px-4 py-2 bg-opacity-25 hover:bg-opacity-50 w-full">
                <p className="text-white text-body3">Author: {photo.author}</p>
                <p className="text-white text-body5 line-clamp-2">
                  The internet’s source of freely-usable images. Powered by
                  creators everywhere. The internet’s source of freely-usable
                  images. Powered by creators everywhere.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
