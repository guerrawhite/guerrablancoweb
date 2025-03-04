import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import { Montserrat } from "next/font/google";
import Link from 'next/link';

const montserrat = Montserrat({
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image className="mx-auto rounded-full border-3 border-solid border-white shadow-xl shadow-black" aria-hidden src="/carlos-guerra.jpeg" alt="File icon" width={140} height={140}/>
        <div className="text-center w-full">
          <h1 className={`${montserrat.className} text-2xl font-bold text-center w-full`}>Carlos Guerra Blanco</h1>
          <h2 className={`${montserrat.className} text-xl text-center w-full`}>Full Stack Developer</h2>
        </div>
        <div className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className="max-w-96 text-center">Programador en constante evolución 🚀. 8 años de experiencia en desarrollo 
            web. Siempre buscando nuevos retos. Código limpio con un estilo minimalista. Si hay un problema, 
            seguro que encuentro la mejor forma de solucionarlo.</p>
          <code className="relative border-t-12 border-solid border-white max-w-48 block text-center p-1.5 mx-auto mt-4 rounded bg-[#420042] text-[#09FF00]">
            Java, JSP, Spring, JQuery, Javascript, MySQL, Git, HTML, CSS, React, Next.js, Node.js
            <span className="block p-1 bg-[#ff0000] w-1 h-1 rounded-full absolute -top-2.5"></span>
            <span className="block p-1 bg-[#a0a0a0] w-1 h-1 rounded-full absolute -top-2.5 left-4"></span>
            <span className="block p-1 bg-[#00d60c] w-1 h-1 rounded-full absolute -top-2.5 left-6.5"></span>
          </code>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/contacto">
            Contacto
          </Link>
          <Link className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/proyectos">
            Proyectos
          </Link>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
