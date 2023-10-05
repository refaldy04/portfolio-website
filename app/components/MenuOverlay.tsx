import React from "react";
import NavLink from "./NavLink";

type Links = {
  title: string;
  path: string;
};

interface MenuOverlayProps {
  links: Links[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink title={link.title} href={link.path} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
