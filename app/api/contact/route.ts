import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY manquante dans .env.local" },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      return NextResponse.json(
        { error: "CONTACT_TO_EMAIL manquante dans .env.local" },
        { status: 500 }
      );
    }

    const serviceLabels: Record<string, string> = {
      site: "Création de site web",
      seo: "SEO local (Google & Maps)",
      ads: "Publicité Meta / Google Ads",
      automation: "Automatisation WhatsApp & IA",
    };

    const serviceLabel = serviceLabels[service] || service;

    const { data, error } = await resend.emails.send({
      from: "Kaizardigi Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      subject: `Nouveau lead site web - ${name}`,
      replyTo: email || undefined,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Nouveau message depuis le formulaire Kaizardigi</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>Email :</strong> ${email || "Non renseigné"}</p>
          <p><strong>Service demandé :</strong> ${serviceLabel}</p>
          <hr style="margin: 20px 0;" />
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    console.log("RESEND DATA:", data);
    console.log("RESEND ERROR:", error);

    if (error) {
      return NextResponse.json(
        { error: `Resend: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès." },
      { status: 200 }
    );
  } catch (error) {
    console.error("ERREUR API CONTACT:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Erreur inconnue côté serveur.",
      },
      { status: 500 }
    );
  }
}