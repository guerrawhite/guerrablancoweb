import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default function Proyectos() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="w-full text-center">Mis Proyectos</h1>
          <p></p>
          <ul className="grid grid-cols-2 gap-4 px-2 py-2">
            <li className="w-60 h-full">
              <Image className="rounded-lg border-2 border-solid border-white/[.3] hover:border-white/[1]" aria-hidden src="/thisisaluche.png" alt="File icon" width={250} height={250}/>
              <h3>This is Aluche</h3>
              <p></p>
            </li>
            <li className="w-60 h-full">
              <Image className="rounded-lg border-2 border-solid border-white/[.3] hover:border-white/[1]" aria-hidden src="/ticjob.png" alt="File icon" width={250} height={250}/>
              <h3>ticjob.es</h3>
              <p></p>
            </li>
            <li className="w-60 h-full">
              <Image className="rounded-lg border-2 border-solid border-white/[.3] hover:border-white/[1]" aria-hidden src="/oriental-garden.png" alt="File icon" width={250} height={250}/>
              <h3>Oriental Garden</h3>
              <p></p>
            </li>
            <li className="w-60 h-full">
              <Image className="rounded-lg border-2 border-solid border-white/[.3] hover:border-white/[1]" aria-hidden src="/carlos-guerra.jpeg" alt="File icon" width={250} height={250}/>
              <h3></h3>
              <p></p>
            </li>
          </ul>
        </main>
      <Footer/>
    </div>
  );
}
