import Image from "next/image";

import { ChevronRight } from "lucide-react";
import { UserForm } from "../client/components/landing/UserForm";
import { LandingHeader } from "../client/components/landing/LandingHeader";
import { Footer } from "../client/components/landing/Footer";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col px-4 pt-4 xl:px-16 2xl:px-40 ">
      <LandingHeader />
      <main className="relative flex flex-1 flex-col items-center md:items-start gap-8">
        <Image
          src={"/images/landing/hero.svg"}
          alt="hero"
          width={0}
          height={0}
          className="absolute top-0 right-0 hidden lg:inline-block w-[250px] 2xl:w-[369px] h-[auto]"
        />

        <div className="flex w-max items-center justify-center gap-2 rounded-xl border px-4 py-2 text-xs md:justify-start md:text-sm">
          Crea <ChevronRight size={17} aria-hidden="true" />
          Negocia <ChevronRight size={17} aria-hidden="true" />
          Optimiza <ChevronRight size={17} aria-hidden="true" />
          <span className="rounded-md border border-primary bg-primary/50 px-2 py-1">
            Por tí
          </span>
        </div>

        <section className="flex flex-col gap-12 text-center md:gap-24 md:text-left">
          <hgroup className="flex flex-col text-balance md:max-w-6xl gap-1">
            <h1 className="text-4xl font-extrabold lg:text-5xl xl:text-6xl">
              El asistente perfecto para <br />
              Amazon Sellers impulsado por IA
            </h1>
            <h2 className="py-2 text-lg font-normal md:text-xl">
              Tapy.AI ha sido desarrollado por Amazon Sellers para Amazon
              Sellers.
            </h2>
          </hgroup>

          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="font-normal text-base md:text-lg">
              ¡Únete ahora a nuestra lista de espera!
            </p>

            <UserForm />
            <div className=" flex items-center gap-4 py-4">
              <div className="w-20">
                <Image
                  width={80}
                  height={80}
                  src="/images/landing/avatars.svg"
                  alt="avatar"
                  className="object-cover"
                />
              </div>
              <p className=" max-w-sm text-left text-xs font-normal sm:text-sm ">
                +3000 vendedores de Amazon están esperando el <br /> lanzamiento
                de Tapy.AI
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
