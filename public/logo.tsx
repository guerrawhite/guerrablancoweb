import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    display:'swap',
    subsets: ['latin'],
    preload: true,
    fallback: ['Arial', 'sans-serif'],
});

export default function Logo() {

  return (
    <a className={`${montserrat.className} text-5xl`} href="https://carlosguerrablanco.es">{"{"} CGB {"}"}</a>
  );
}