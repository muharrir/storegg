import Link from "next/link";
import React from "react";

interface MenuProps {
  title: string;
  isActive?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, isActive, href = "/" } = props;
  return (
    <li>
      <Link
        href={href}
        className={`text-lg ${
          isActive ? "font-medium text-_blue" : "text-_gray1 hover:text-_blue"
        }`}
      >
        {title}
      </Link>
    </li>
  );
}
