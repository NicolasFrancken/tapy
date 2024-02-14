import { Mail, ChevronRight, User2 as User } from "lucide-react";
import { Hero } from "../components/ui/icons";
import { Button } from "../client/components/ui/button";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="relative flex items-center">
      <div className="space-y-6 text-center md:text-start">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-xl border px-3 py-2 text-xs md:m-0 md:text-sm">
          Crea <ChevronRight size={17} aria-hidden />
          Negocia <ChevronRight size={17} aria-hidden />
          Optimiza <ChevronRight size={17} aria-hidden />
          <span className="rounded-md border border-primary bg-primary/50 px-2 py-1">
            Por tí
          </span>
        </div>

        <main className="flex flex-col gap-y-14 md:items-start md:gap-y-24">
          <hgroup className="space-y-4 text-balance">
            <h1 className="text-4xl font-extrabold md:text-6xl md:leading-tight">
              El asistente perfecto para Amazon Sellers impulsado por IA
            </h1>
            <h2 className="text-base font-normal md:text-xl">
              Tapy.AI ha sido desarrollado por Amazon Sellers para Amazon
              Sellers.
            </h2>
          </hgroup>
          <div className="flex flex-col gap-y-4 md:gap-x-4 md:gap-y-8">
            <p className="text-lg font-normal md:text-xl">
              ¡Únete ahora a nuestra lista de espera!
            </p>
            <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-4">
              <div className="flex items-center gap-x-2 rounded-xl border p-4 ">
                <User
                  size={24}
                  className="text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-1/3 focus:outline-none"
                />
              </div>

              <form className="flex items-center gap-x-2 rounded-xl border p-4 ">
                <Mail
                  size={24}
                  className="text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="focus:outline-none"
                />
              </form>
              <div>
                <Button className="px-10 py-7 text-base text-foreground shadow-lg shadow-primary">
                  ¡Quiero unirme!
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 py-4 ">
              <div className="flex items-center -space-x-5 ">
                <Image
                  width={40}
                  height={40}
                  src="/images/Avatar-1.webp"
                  alt="avatar"
                  className="size-10 rounded-full border"
                />
                <Image
                  width={40}
                  height={40}
                  src="/images/Avatar-4.webp"
                  alt="avatar"
                  className=" size-10 rounded-full border"
                />
                <Image
                  width={40}
                  height={40}
                  src="/images/Avatar-3.webp"
                  alt="avatar"
                  className=" size-10 rounded-full border"
                />
                <Image
                  width={40}
                  height={40}
                  src="/images/Avatar-2.webp"
                  alt="avatar"
                  className="  size-10 rounded-full border"
                />
              </div>
              <p className=" max-w-sm text-left text-sm font-normal md:text-lg  ">
                +3000 vendedores de Amazon están esperando el lanzamiento de
                Tapy.AI
              </p>
            </div>
          </div>
        </main>
      </div>

      <div className="z-10 hidden xl:block">
        <Hero className="absolute bottom-24 right-0 top-0" />
      </div>
    </section>
  );
}
