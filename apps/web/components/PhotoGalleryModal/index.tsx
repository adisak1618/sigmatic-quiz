import React from "react";
import { BgImg, Modal } from "ui";

export interface PhotoProps {
  author: string;
  description: string;
  url: string;
}

interface PhotoGalleryModalProps {
  photo: PhotoProps | null;
  onClose: () => void;
}

export const PhotoGalleryModal = ({
  photo,
  onClose,
}: PhotoGalleryModalProps) => {
  return (
    <Modal
      title={`Upload by ${photo?.author}`}
      isOpen={!!photo}
      onClose={onClose}
    >
      <div>
        {photo && (
          <div>
            <BgImg src={photo.url} className="w-full pt-[100%]" />
            <p className="text-body4 text-center">{photo.description}</p>
          </div>
        )}
      </div>
    </Modal>
  );
};
