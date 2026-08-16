import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      title,
      amountInEuros,
      image,
      sizeOption,
      deliveryOption,
      note,
      type = "bouquet", // "bouquet" | "workshop"
    } = body;

    const origin = req.headers.get("origin") || "http://localhost:3000";

    const unitAmountInCents = Math.round(Number(amountInEuros) * 100);

    // Build item description
    let description = "";
    if (type === "bouquet") {
      description = `Šopek: ${title} | Velikost: ${sizeOption || "Standard"} | Prevzem: ${deliveryOption || "Dostava"}`;
    } else {
      description = `Delavnica: ${title} | Mesto za 1 osebo`;
    }

    if (note) {
      description += ` | Posvetilo: "${note.slice(0, 80)}"`;
    }

    // Configure shipping address collection if delivery is requested
    const needsShipping = deliveryOption === "Dostava";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `${type === "workshop" ? "Cvetlična delavnica: " : "Halo Šopek: "}${title}`,
              description: description,
              images: image ? [`${origin}${image}`] : [],
            },
            unit_amount: unitAmountInCents,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      billing_address_collection: "required",
      shipping_address_collection: needsShipping
        ? {
            allowed_countries: ["SI"], // Slovenia
          }
        : undefined,
      metadata: {
        item_title: title,
        item_type: type,
        size_option: sizeOption || "Standard",
        delivery_option: deliveryOption || "Dostava",
        personal_note: note || "",
      },
      success_url: `${origin}/halo-sopki/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: type === "workshop" ? `${origin}/delavnice` : `${origin}/halo-sopki`,
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error: any) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: error?.message || "Napaka pri ustvarjanju Stripe plačilne seje" },
      { status: 500 }
    );
  }
}
