import React, { useEffect, useState } from "react";
import { MainMenu } from "../../MainMenu";

interface PageProps {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: PageProps) => {
  // const router = useRouter();
  // const [isScrolled, setIsScrolled] = useState(false);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   if (position > 52) {
  //     setIsScrolled(true);
  //     return;
  //   }
  //   setIsScrolled(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-1">
      <MainMenu />
      <div>{children}</div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
