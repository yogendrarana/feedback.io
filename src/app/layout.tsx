import "@/styles/globals.css";
import { Toaster } from "sonner"
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Collect feedback from your users with ease.",
};

// providers
import { ThemeProvider } from "@/components/providers/theme-provider";

// fonts
import localFont from "next/font/local";
import BackgroundProvider from "@/components/providers/background-provider";
import AuthSessionProvider from "@/components/providers/session-provider";

const interVariable = localFont({
  variable: "--font-sans",
  src: "../fonts/InterVariable.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMonoVariable = localFont({
  variable: "--font-geist-mono",
  src: "../fonts/GeistMonoVF.woff2",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `font-sans ${interVariable.variable} ${geistMonoVariable.variable} antialiased`,
          "bg-white dark:bg-neutral-900",
          "selection:bg-neutral-200 dark:selection:bg-neutral-700",
        )}
      >
        <AuthSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <BackgroundProvider>
              {children}
              <Toaster />
            </BackgroundProvider>
          </ThemeProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
