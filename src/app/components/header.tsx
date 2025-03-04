import React from "react";
import Logo from "../../../public/logo";

export default function Header() {
  return (
    <header className="w-full text-white text-center">
      <Logo/>
      {/*<nav>
        <ul className="flex space-x-4">
          <li><a href="/about" className="hover:underline">Sobre mí</a></li>
          <li><a href="/contact" className="hover:underline">Contacto</a></li>
        </ul>
      </nav>*/}
    </header>
  );
}
