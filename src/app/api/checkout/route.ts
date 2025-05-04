import stripe from '@/lib/stripe' // default export
import { PrismaClient } from '@prisma/client'
import { auth } from '@clerk/nextjs/server' // server auth


const prisma = new PrismaClient()

export async function POST(req: Request) {
    const { userId } = await auth(); // ✅ correct

  if (!userId) return new Response("Unauthorized", { status: 401 })

  const { productId } = await req.json()

  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: { farmer: true },
  })

  if (!product) return new Response("Product not found", { status: 404 })

  const totalAmount = Math.round(product.price * 100) // in kobo
  const commission = Math.round(totalAmount * 0.2) // 20%
  const sellerReceives = totalAmount - commission

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{
      price_data: {
        currency: "ngn",
        product_data: {
          name: product.title,
          description: product.description ?? "",
        },
        unit_amount: totalAmount,
      },
      quantity: 1,
    }],
    metadata: {
      productId: product.id,
      buyerId: userId,
      sellerId: product.farmer?.clerkId ?? "", // ✅ fallback to empty string if null
      commission: commission.toString(),
    },
    success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
  });
  

  return Response.json({ url: session.url })
}
