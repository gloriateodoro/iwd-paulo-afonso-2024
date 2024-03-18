import Image from "next/image";
import React from "react";
import Carousel from "./components/Carousel";

export default function Home() {
  const speakers = [
    {
      url: "speakers/dominique.png",
      name: "Dominique Morem",
      description:
        "Nessa palestra interativa vamos explorar a integração entre geografia, geoprocessamento e tecnologia da informação, levantando os benefícios dessa união no âmbito profissional, mercadológico e acadêmico. Vamos entender sobre o profissional de TI dentro do mercado de geoprocessamento e como o pensamento geográfico pode ampliar a criatividade e o impacto social de projetos tecnológicos.",
    },
    {
      url: "speakers/gloria.png",
      name: "Glória Teodoro",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis saepe magni ullam animi repellat atque quod deserunt reiciendis eveniet. Corporis, excepturi laborum. Suscipit tempora, alias assumenda iusto iste vero.",
    },
    {
      url: "speakers/jainy.png",
      name: "Jainy Xavier",
      description:
        "Construindo landing page sobre energias renováveis aplicadas no cotidiano utilizando o framework Next.js e Tailwind.",
    },
    {
      url: "speakers/joyce.png",
      name: "Joyce Teodoro",
      description:
        "Nessa oficina, usando a plataforma Figma, uma ferramenta de design colaborativo baseada na web, os participantes serão guiados passo a passo no processo de criação de layouts, elementos de design e interações para uma página web sobre o tema de energias renováveis.",
    },
  ];

  return (
    <div className="flex flex-col h-screen justify-between bg-slate-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4  bg-slate-200">
        <Image
          src="/logo.png"
          alt="Logo"
          className="z-50 my-4"
          width={300}
          height={200}
        />
      </nav>

      {/* Conteúdo Central */}
      <main className="flex flex-col items-center ">
        {/* Informações sobre o evento IWD */}
        <div className="flex flex-col md:flex-row items-center justify-center xs:space-y-9 md:space-x-32 mb-9 mt-9">
          <div className="text-center flex flex-col items-center ">
            <div className="flex">
              {/* <Image src="/impact.png" alt="Logo" className="z-50 my-4" width={150} height={100} /> */}

              <Image
                src="/impact.png"
                alt="Logo"
                className="z-50 my-4"
                width={150}
                height={100}
              />
            </div>

            <h1 className="text-3xl font-bold mb-4">
              International Womens Day 2024
            </h1>
            <div className="max-w-sm text-left">
              <p>
                <b>Data:</b> Vem aí...
              </p>
              <p>
                <b>Cidade:</b> Paulo Afonso - Bahia
              </p>
              <p>
                <b>Local:</b> Centro Universitário do Rio São Francisco
              </p>
              <p>
                <b>Horário:</b> Vem aí...
              </p>
            </div>
          </div>
          <div className="flex px-11">
            <Image
              src="/wtm.gif"
              alt="Logo"
              className="z-50"
              width="450"
              height={100}
            />
          </div>
        </div>
      </main>
      {/* Carrossel de Palestrantes */}
      <div className="bg-slate-600 flex flex-col items-center">
        <Carousel speakers={speakers} />
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-center p-4 bg-slate-200">
        <Image
          src="/brasao-paulo-afonso.png"
          alt="Logo"
          className="z-50 my-4"
          width={150}
          height={100}
        />
      </footer>
    </div>
  );
}
