import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.linkedin.com/in/carlos-guerra-blanco/" target="_blank" rel="noopener noreferrer">
        <Image aria-hidden src="/linkedin.svg" alt="File icon" width={16} height={16}/>
        Linkedin
      </a>
      <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://github.com/guerrawhite" target="_blank" rel="noopener noreferrer">
        <Image aria-hidden src="/github.svg" alt="File icon" width={16} height={16}/>
        @guerrawhite
      </a>
      <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://x.com/cegebedev" target="_blank" rel="noopener noreferrer">
        <Image aria-hidden src="/x.svg" alt="File icon" width={16} height={16}/>
        @cegebedev
      </a>
    </footer>
  );
}
