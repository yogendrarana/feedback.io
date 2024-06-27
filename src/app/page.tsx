import Hero from "@/components/layout/hero";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { cn } from "@/lib/utils";

export default async function HomePage() {
  return (
    <main className={cn("h-full flex flex-col")}>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}