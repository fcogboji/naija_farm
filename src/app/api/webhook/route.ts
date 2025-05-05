import stripe from '@/lib/stripe'
import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server'
import { Stripe } from 'stripe' // For proper typing of event and session
//import { buffer } from 'micro'

export const config = {
  api: {
    bodyParser: false,
  },
}

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    return new Response(`Webhook Error: ${errorMessage}`, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const transaction = await prisma.transaction.create({
      data: {
        productId: session.metadata?.productId ?? '',
        buyerId: session.metadata?.buyerId ?? '',
        sellerId: session.metadata?.sellerId ?? '',
        amount: Number(session.amount_total ?? 0) / 100,
        commission: Number(session.metadata?.commission ?? 0) / 100,
        status: 'pending',
      },
    })

    console.log('Transaction saved:', transaction.id)
  }

  return new Response('Webhook received', { status: 200 })
}
