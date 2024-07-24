import { cn } from "@/lib/utils";
import Hero from "@/components/layout/hero";
import Demo from "@/components/demo/demo";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import CodeSnippet from "@/components/layout/code-snippet";

export default async function HomePage() {
  return (
    <main className={cn("container")}>
      <Header />
      <Hero />
      <CodeSnippet />
      <Demo />
      <Footer />
    </main>
  );
} 