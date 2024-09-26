"use client";

import Aside from "@/components/Aside";
import { LinksProps } from "@/types/links-props";
import { AquariumLinks } from "@/utils/links/aquarium-links";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [links, setLinks] = useState<LinksProps[]>(AquariumLinks);

  return (
    <div className="flex">
      <Aside links={links} title="L'aquarium" />
      <div className="container w-[1000px] mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
