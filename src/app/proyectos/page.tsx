import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from 'next/link';

export default function Proyectos() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="w-full text-center">
            <h1 className="w-full text-center">Mis Proyectos</h1>
            <h2>Algunos de mis trabajos actuales...</h2>
          </div>
          <ul className="grid grid-cols-2 gap-8 px-2 py-2">
            <li className="w-60 h-full">
              <Link href="https://thisisaluche.com/" target="_blank">
                <Image className="rounded-lg border-2 border-solid border-white/[.3] hover:border-white/[1]" aria-hidden src="/thisisaluche.png" alt="File icon" width={250} height={250}/>
              </Link>
              <Link className="text-center mt-2 block" href="https://thisisaluche.com/" target="_blank"><h3>This is Aluche</h3></Link>
              <p className="text-center block text-sm">Proyecto hecho en Wordpress. Dos cartas de negocios de restauración 
                centralizadas bajo una misma marca.</p>
            </li>
            <li className="w-60 h-full">
              <Link href="https://ticjob.es/" target="_blank">
                <Image className="rounded-lg border-2 border-solid border-white/[.3] hover:border-white/[1]" aria-hidden src="/ticjob.png" alt="File icon" width={250} height={250}/>
              </Link>
              <Link className="text-center mt-2 block" href="https://ticjob.es/" target="_blank"><h3>ticjob.es</h3></Link>
              <p className="text-center block text-sm">Plataforma de búsqueda de empleo tech hecha en Java (Struts, JSP,
                Hibernate, Spring) utilizando MySQL, Javascript, JQuery, Jenkins y Docker.
              </p>
            </li>
            <li className="w-60 h-full">
              <Link href="https://orientalgarden.es/" target="_blank">
                <Image className="rounded-lg border-2 border-solid border-white/[.3] hover:border-white/[1]" aria-hidden src="/oriental-garden.png" alt="File icon" width={250} height={250}/>
              </Link>
              <Link className="text-center mt-2 block" href="https://orientalgarden.es/" target="_blank"><h3>Oriental Garden</h3></Link>
              <p className="text-center block text-sm">Proyecto hecho en Wordpress. Página Web de negocios de restauración.</p>
            </li>
            <li className="w-60 h-full">
              <Link href="https://rugsboyz.es/" target="_blank">
                <Image className="rounded-lg border-2 border-solid border-white/[.3] hover:border-white/[1]" aria-hidden src="/rugsboyz.png" alt="File icon" width={250} height={250}/>
              </Link>
              <Link className="text-center mt-2 block" href="https://rugsboyz.es/" target="_blank"><h3>Rugs Boyz</h3></Link>
              <p className="text-center block text-sm">Negocio de Alfombras personalizadas.</p>
            </li>
          </ul>
        </main>
      <Footer/>
    </div>
  );
}
