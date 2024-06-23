import Hero from "@/components/layout/hero";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default async function HomePage() {
  return (
    <main className="h-full flex flex-col">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}