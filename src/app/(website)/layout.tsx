import React from "react";
import LandingPageNavBar from "./_components/navbar";

type Props = {
  childern: React.ReactNode;
};

const Layout = ({ childern }: Props) => {
  return (
    <div className="felx felx-col py-10 px-10 xl:px-0 container">
      <LandingPageNavBar />
      {childern}
    </div>
  );
};

export default Layout;
