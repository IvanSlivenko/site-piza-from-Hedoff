import { FC, PropsWithChildren } from "react";


interface FooterNameProps {
  href: string
}

export const FooterName: FC<FooterNameProps & PropsWithChildren> = ({ href, children}) => {
    return (
      <ul>
        <li>
      <a
        href={href}
        className=" text-white
      text-xl
      font-bold
      hover:text-gray-300
      hover:underline
      "
      >
        {children}
      </a>
    </li>
      </ul>
    );
  };
  