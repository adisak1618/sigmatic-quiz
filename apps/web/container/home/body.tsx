import React, { useContext, useState } from "react";
import { usePhotosQuery } from "../../graphql/generated";
import { BgImg } from "ui";
import { useRouter } from "next/router";
import { searchContext } from "./searchContext";
import { PhotoGalleryModal, PhotoProps } from "@/components/PhotoGalleryModal";

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
  const [photo, setPhoto] = useState<PhotoProps | null>(null);
  const { data: searchContextData } = useContext(searchContext);
  const router = useRouter();
  const { data } = usePhotosQuery({
    variables: {
      keyword: `%${searchContextData.search || ""}%`,
    },
  });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-4">
        {data?.photos.map(({ author, url, id, description }) => (
          <div
            key={id}
            className={`bg-red-4 pt-[60%] relative cursor-pointer`}
            onClick={() =>
              setPhoto({
                author,
                url,
                description,
              })
            }
          >
            <BgImg
              src={url}
              className="w-full h-full absolute top-0 left-0 bg-center bg-cover"
            />
            <div className="absolute w-full h-full top-0 left-0 flex items-end">
              <div className="bg-gray-9 px-4 py-2 bg-opacity-25 hover:bg-opacity-50 w-full">
                <p className="text-white text-body3">Author: {author}</p>
                <p className="text-white text-body5 line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PhotoGalleryModal photo={photo} onClose={() => setPhoto(null)} />
    </div>
  );
};
