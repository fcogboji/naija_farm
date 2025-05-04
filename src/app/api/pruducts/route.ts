import { auth } from '@clerk/nextjs/server'

import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return new Response("Unauthorized", { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return new Response("User not found", { status: 404 });

  const body = await req.json();
  const { title, imageUrl, price, description } = body;
  await prisma.product.create({
    data: {
      title,
      imageUrl,
      price: parseInt(price),
      description,
      farmerId: user.id,
      authorId: user.id, // ✅ Provide both if required
    },
  });
  
  

  return new Response("Product created", { status: 201 });
}
