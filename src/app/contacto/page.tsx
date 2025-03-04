import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Form from "../components/form";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default function Contact() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Mis Proyectos</h1>
        <p></p>
        <ul>
          <li>
            <Image aria-hidden src="/carlos-guerra.jpeg" alt="File icon" width={140} height={140}/>
            <h3></h3>
            <p></p>
          </li>
          <li>
            <Image aria-hidden src="/carlos-guerra.jpeg" alt="File icon" width={140} height={140}/>
            <h3></h3>
            <p></p>
          </li>
          <li>
            <Image aria-hidden src="/carlos-guerra.jpeg" alt="File icon" width={140} height={140}/>
            <h3></h3>
            <p></p>
          </li>
          <li>
            <Image aria-hidden src="/carlos-guerra.jpeg" alt="File icon" width={140} height={140}/>
            <h3></h3>
            <p></p>
          </li>
        </ul>
      </main>
      <Footer/>
    </div>
  );
}
