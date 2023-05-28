import Link from "next/link";
import React from "react";

interface MenuProps {
  title: string;
  isActive?: boolean;
  href: string
}

export default function Menu(props: MenuProps) {
  const { title, isActive, href } = props;
  return (
    <li>
      <Link
        href={href}
        className={`${
          isActive ? "font-medium text-blue" : "text-gray1 hover:text-blue"
        }`}
      >
        {title}
      </Link>
    </li>
  );
}
