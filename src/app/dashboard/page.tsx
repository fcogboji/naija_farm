import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { userId } = await auth(); // ✅ Await the async auth()

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Welcome to Naija Farm Marketplace</h1>
      <p>Explore fresh farm products and manage your listings.</p>
    </main>
  );
}
