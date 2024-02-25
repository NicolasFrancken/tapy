"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { addLeadToMailjetContactList } from "../../libs/landing/addLeadToMailjetContactList";
import { toast } from "sonner";
import { cn } from "../../libs/utils";

import { formSchema } from "../../validation/formSchema";

import type { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

export const UserForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      toast.promise(
        addLeadToMailjetContactList({ name: values.name, email: values.email }),
        {
          icon: "🚀",
          loading: "Enviando tu información...",
          success: () => {
            form.reset();
            return "Yey, ahora eres parte del mejor software del mundo 🎉";
          },
          error: () => {
            form.reset();
            return "Oh oh, ocurrió un error. Intentalo de nuevo.";
          },
        },
      );
    } catch (error) {
      return toast.error(" Oh oh, ocurrió un error");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 md:flex-row "
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex  flex-col space-y-0 ">
              <div
                className={cn(
                  "flex items-center border h-[64px] gap-2 px-4 rounded-xl",
                  form.formState.errors.name &&
                    "border-red-500 *:text-red-500 *:placeholder:text-red-500",
                )}
              >
                <User
                  className="size-6 text-muted-foreground"
                  aria-hidden="true"
                />
                <FormControl>
                  <input
                    placeholder="Tu nombre"
                    {...field}
                    className="text-base h-full text-foreground focus:outline-none"
                  />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-0">
              <div
                className={cn(
                  "flex items-center border h-[64px] gap-2 px-4 rounded-xl",
                  form.formState.errors.email &&
                    "border-red-500 *:text-red-500 *:placeholder:text-red-500",
                )}
              >
                <Mail
                  className="size-6 text-muted-foreground"
                  aria-hidden="true"
                />
                <FormControl>
                  <input
                    placeholder="Tu email"
                    {...field}
                    className=" text-base h-full text-foreground focus:outline-none"
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="h-[64px] px-12 text-base text-foreground shadow-lg shadow-primary">
          ¡Quiero unirme!
        </Button>
      </form>
    </Form>
  );
};

