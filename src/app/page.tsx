import Image from "next/image";
import React from "react";
import Carousel from "./components/Carousel"

export default function Home() {
  const speakers = [
    { url: '/woman.png', name: 'Nome da Palestrante 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    { url: '/woman2.png', name: 'Nome da Palestrante 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' },
  ];

  return (
    <div className="flex flex-col h-screen justify-between bg-slate-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4  bg-slate-200">
        <Image src="/logo.png" alt="Logo" className="z-50 my-4" width={300} height={200} />
      </nav>

      {/* Conteúdo Central */}
      <main className="flex flex-col items-center " >

        {/* Informações sobre o evento IWD */}
        <div className="flex flex-col md:flex-row items-center justify-center xs:space-y-9 md:space-x-32 mb-9 mt-9">
          <div className="text-center flex flex-col items-center ">
            <div className="flex">
            <Image src="/impact.png" alt="Logo" className="z-50 my-4" width={150} height={100} />
            <Image src="/brasao-paulo-afonso.png" alt="Logo" className="z-50 my-4" width={150} height={100} />

            </div>

            <h1 className="text-3xl font-bold mb-4">International Womens Day</h1>
            <div className="max-w-sm text-left">
              <p><b>Data:</b> 8 de Março de 2024</p>
              <p><b>Local:</b> Centro Universitário do Rio São Francisco Paulo Afonso - Bahia</p>
              <p><b>Horário:</b> Vem aí...</p>
            </div>

          </div>
          <div className="flex px-11">
            <Image src="/wtm.gif" alt="Logo" className="z-50" width="450" height={100} />
          </div>
        </div>



      </main>
       {/* Carrossel de Palestrantes */}
       <div className="bg-slate-600 flex flex-col items-center">
          <Carousel speakers={speakers} />
        </div>

      {/* Footer */}
      <footer className="flex items-center justify-center p-4 bg-slate-200">
      <Image src="/impact.png" alt="Logo" className="z-50 my-4" width={150} height={100} />
        {/* Adicione aqui as opções de contato ou outros elementos do footer */}
      </footer>
    </div>
  );
}
