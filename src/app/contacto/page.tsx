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
        <h1>Contacto</h1>
      </main>
      <Footer/>
    </div>
  );
}
