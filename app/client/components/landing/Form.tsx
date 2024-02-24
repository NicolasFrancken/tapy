"use client";

import { User, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { addLeadToMailjetContactList } from "../../libs/landing/addLeadToMailjetContactList";
import { toast } from "sonner";
import { cn } from "../../libs/utils";

type Errors = {
  name: boolean;
  email: boolean;
};

export const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Errors>({ name: false, email: false });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!name || !email || !email.includes("@")) {

        setErrors({ name: !name, email: !email.includes("@") });

        return toast.error("Por favor, completa todos los campos");
      }

      toast.promise(addLeadToMailjetContactList({ email, name }), {
        icon: "🚀",
        loading: "Enviando tu información...",
        success: () => {
          setErrors({ name: false, email: false });

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
        <div
          className={cn(
            "h-[64px] flex items-center gap-2 rounded-xl border p-4 ",
            errors.name ? "border-red-500 *:text-red-500" : "",
          )}
        >
          <User className="size-6 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            value={name}
            placeholder="Tu nombre"
            onChange={(e) => setName(e.target.value)}
            className={cn(
              "w-1/2 focus:outline-none md:w-full",
              errors.name ? "placeholder:text-red-500" : "",
            )}
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm">Por favor, completa este campo</p>
        )}
      </div>

      <div className="flex flex-col  gap-2 md:w-1/2">
        <div
          className={cn(
            "h-[64px] flex items-center gap-2 rounded-xl border p-4 ",
            errors.email ? "border-red-500 *:text-red-500" : "",
          )}
        >
          <Mail className="size-6 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            value={email}
            required={false}
            placeholder="Correo Electrónico"
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "w-1/2 focus:outline-none md:w-full",
              errors.email ? "placeholder:text-red-500" : "",
            )}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">Ingresa un correo válido</p>
        )}
      </div>
      <div>
        <Button className="h-[64px] px-12 text-base text-foreground shadow-lg shadow-primary">
          ¡Quiero unirme!
        </Button>
      </div>
    </form>
  );
};
