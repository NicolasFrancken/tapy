"use client";

import { User, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { addLeadToMailjetContactList } from "../../libs/landing/addLeadToMailjetContactList";
import { toast } from "sonner";
import { cn } from "../../libs/utils";


export const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");




  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      if (!name || !email || !email.includes("@")) {
        return toast.error("Por favor, completa todos los campos");
      }


      toast.promise(
        addLeadToMailjetContactList({ email, name }), {
        icon: "🚀",
        loading: "Enviando tu información...",
        success: () => {

          return "Yey, ahora eres parte del mejor software del mundo 🎉";
        },
      });
    } catch (error) {
      console.error(error);
      return toast.error(" Oh oh, ocurrió un error");
    }
  };
  return (
    <form
      className="w-full flex flex-col gap-4 md:flex-row "
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 md:w-1/2">
        <div className="h-[64px] flex items-center gap-2 rounded-xl border p-4 ">
          <User className="size-6 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            placeholder="Tu nombre"
            onChange={(e) => setName(e.target.value)}
            className="w-1/2 focus:outline-none border-red-300  md:w-full"
          />
        </div>
        {
          !name && <p className="text-red-500 text-sm">Por favor, completa este campo</p>
        }
      </div>

      <div className="flex flex-col  gap-2 md:w-1/2">
        <div className={cn("h-[64px] flex items-center gap-2 rounded-xl border p-4 ")}>

          <Mail className="size-6 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            required={false}
            placeholder="Correo Electrónico"
            onChange={(e) => setEmail(e.target.value)}
            className={cn("w-1/2 focus:outline-none md:w-full")}
          />

        </div>
        {
          !email.includes("@") && <p className="text-red-500 text-sm">Ingresa un correo válido</p>
        }
      </div>
      <div>
        <Button className="h-[64px] px-12 text-base text-foreground shadow-lg shadow-primary">
          ¡Quiero unirme!
        </Button>
      </div>
    </form>
  );
};
