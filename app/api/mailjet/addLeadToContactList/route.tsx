export async function POST(req: Request) {
  const body = await req.json();
  const { name, email } = body;

  console.log(name, email);
  try {
    const mailjetPublicKey = process.env.MAILJET_PUBLIC_KEY;
    const mailjetSecretKey = process.env.MAILJET_SECRET_KEY;
    const mailjetContactListId = process.env.MAILJET_CONTACT_LIST_ID;

    const res = await fetch(
      `https://api.mailjet.com/v3/REST/contactslist/${mailjetContactListId}/managecontact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " + btoa(`${mailjetPublicKey}:${mailjetSecretKey}`),
        },
        body: JSON.stringify({
          Name: name,
          Action: "addforce",
          Email: email,
        }),
      },
    );

    console.log(res.body);

    return new Response(
      JSON.stringify("Lead added to contact list successfully"),
      { status: 200 },
    );
  } catch (e: any) {
    console.log(e);
    return new Response("Oh oh, an error ocurred", { status: 500 });
  }
}

