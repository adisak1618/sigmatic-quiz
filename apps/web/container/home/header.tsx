import React from "react";
import { Input } from "ui";

export const Header = () => {
  return (
    <div className="h-[400px] bg-[url('https://images.unsplash.com/photo-1568444438385-ece31a33ce78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')]">
      <div className="container mx-auto flex justify-center items-center h-full max-w-2xl px-4">
        <div className="flex-1">
          <p className="text-header4 font-semibold text-white">Photo Express</p>
          <p className="text-body2 text-white mb-2">
            The internet’s source of freely-usable images. <br /> Powered by
            creators everywhere.
          </p>
          <Input />
        </div>
      </div>
    </div>
  );
};
