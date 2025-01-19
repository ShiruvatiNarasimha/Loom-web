import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const LandingPageNavBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <Menu className="w-6 h-6" />
        <Image alt="logo" src="/loom-logo.svg" width={80} height={80} />
      </div>
      LandingPageNavBar
    </div>
  );
};

export default LandingPageNavBar;
