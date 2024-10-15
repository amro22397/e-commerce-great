import { Order } from "@/models/Order"
import { NextApiRequest, NextApiResponse } from "next"
import { buffer } from "stream/consumers"
import Stripe from "stripe"


export const config = {
    api: {
        bodyParser: false
    }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-09-30.acacia',
})

// api version original 2022-11-15


export default async function handler(req: NextApiRequest,
    res: NextApiResponse) {

        const buf = await buffer(req);
        const sig = req.headers["stripe-signature"];

        if (!sig) {
            return res.status(400).send("Missing the stripe signature");
        }

        let event: Stripe.Event;

        try {
            event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET as string)
        } catch (error) {
            return res.status(400).send("Webhook error" + error)
        }

        switch (event.type) {
            case "charge.succeeded":
                const charge: any = event.data.object as Stripe.Charge;

                if (typeof charge.payment_intent === "string") {
                    await Order.findOneAndUpdate({
                        paymentIntentId: charge.payment_intent,
                    }, {
                        status: "complete", address: charge.shipping?.address
                    })
                  }

                  break;

                default:
                    console.log("Unhandled event type:" + event.type);
        }

        res.json({ recieved: true })
    }