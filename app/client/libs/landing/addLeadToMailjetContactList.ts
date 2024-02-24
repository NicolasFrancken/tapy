import { z } from "zod"
import { formSchema } from "../../validation/formSchema"

export const addLeadToMailjetContactList = async (input: z.infer<typeof formSchema>) => {
  const { name, email } = input

  const res = await fetch("/api/mailjet/addLeadToContactList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
  if (!res.ok) {
    console.error("Error submitting form")
    return
  }

  const data = await res.json()
  return data

}

