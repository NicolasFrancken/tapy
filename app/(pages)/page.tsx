import Image from "next/image";
import { Mail, ChevronRight, User2 as User } from "lucide-react";
import { Hero } from "../components/ui/icons";
import { Button } from "../client/components/ui/button";
import { LandingHeader } from "../client/components/LandingHeader";
import Footer from "../client/components/footer";

export default function Landing() {
  return (
    <div className="container flex min-h-screen flex-col">
      <LandingHeader />
      <main className="relative flex flex-1 flex-col gap-8">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-xl border px-4 py-2 text-xs md:m-0 md:text-sm">
          Crea <ChevronRight size={17} aria-hidden="true" />
          Negocia <ChevronRight size={17} aria-hidden="true" />
          Optimiza <ChevronRight size={17} aria-hidden="true" />
          <span className="rounded-md border border-primary bg-primary/50 px-2 py-1">
            Por tí
          </span>
        </div>

        <section className="flex flex-col gap-14 text-center md:gap-24 md:text-left">
          <hgroup className="flex flex-col text-balance">
            <h1 className="text-4xl font-extrabold md:text-6xl md:leading-tight">
              El asistente perfecto para Amazon Sellers impulsado por IA
            </h1>
            <h2 className="py-2 text-base font-normal md:text-xl">
              Tapy.AI ha sido desarrollado por Amazon Sellers para Amazon
              Sellers.
            </h2>
          </hgroup>

          <div className="flex flex-col gap-4 md:gap-8">
            <p className="text-lg font-normal md:text-xl">
              ¡Únete ahora a nuestra lista de espera!
            </p>

            <form className="flex flex-col gap-4 md:flex-row">
              <div className="flex items-center gap-2 rounded-xl border p-4 ">
                <User
                  className="size-6 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-1/2 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 rounded-xl border p-4 ">
                <Mail
                  className="size-6 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="focus:outline-none"
                />
              </div>
              <div>
                <Button
                  type="button"  // ! Change to submit
                  className="px-12 py-8 text-base text-foreground shadow-lg shadow-primary"
                >
                  ¡Quiero unirme!
                </Button>
              </div>
            </form>
            <div className=" flex items-center gap-4 py-4">
              <div className="w-20">
                <Image
                  width={80}
                  height={80}
                  src="/images/Avatars.webp"
                  alt="avatar"
                  className="object-cover"
                />
              </div>
              <p className=" max-w-sm text-left text-xs font-normal sm:text-sm ">
                +3000 vendedores de Amazon están esperando el lanzamiento de
                Tapy.AI
              </p>
            </div>
          </div>
        </section>

        <div className="z-10 hidden xl:block">
          <Hero className="absolute inset-y-0 right-0" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
