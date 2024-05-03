import { ThemeProvider } from "@/components/theme-provider";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from "@/components/ui/sonner";
import ConvexClientProvider from "./ConvexClientProvider";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Kvízy",
  description: "Kvízy",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="cs" suppressHydrationWarning>
      <body
        className={cn(
          "selection:bg-orange-500 antialiased min-h-screen",
          montserrat.className,
        )}
      >
        <ConvexClientProvider>
          <ReduxProvider>
            <SessionProvider session={session}>
              <ThemeProvider attribute="class" defaultTheme="system">
                <main className="container min-h-screen flex flex-col flex-1">
                  <Header />
                  {children}
                </main>
                <Toaster richColors />
              </ThemeProvider>
            </SessionProvider>
          </ReduxProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
