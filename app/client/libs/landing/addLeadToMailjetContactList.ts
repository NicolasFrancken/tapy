import { z } from "zod";
import { formSchema } from "../../validation/formSchema";

export const addLeadToMailjetContactList = async (
  inputs: z.infer<typeof formSchema>,
) => {
  const { name, email } = inputs;

  const res = await fetch("/api/mailjet/addLeadToContactList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });

  if (!res.ok) {
    throw new Error("Error al enviar tu información");
  }

  const data = await res.json();
  return data;
};

