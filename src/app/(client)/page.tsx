import { cn } from "@/lib/utils";
import Hero from "@/components/layout/hero";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default async function HomePage() {
  return (
    <main className={cn("container")}>
      <Header />
      <Hero />
      <Footer />
    </main>
  );
} 