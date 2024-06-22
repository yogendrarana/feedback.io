import Header from "@/components/layout/header";

export default function Home() {
  return (
    <main className="px-[20px] sm:px-[30px] md:px-[100px] flex min-h-screen flex-col items-center justify-betweesn">
      <Header />

      <h1 className="max-w-[75ch] duration-500 animate-in fade-in-5 slide-in-from-bottom-2">
        Enhance Your Link Management
      </h1>
      <p className="max-w-[75ch] text-sm duration-700 animate-in fade-in-5 slide-in-from-top-2 md:text-base [&:not(:first-child)]:mt-6">
        Slug is an open-source platform that allows you to create, manage, and
        share short links with ease. It is fast, secure, and easy to use.
      </p>
    </main>
  );
}
