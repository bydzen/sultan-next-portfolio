import Header from "@/components/header";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Sultan Kautsar",
  description:
    "Hello, I'm Sultan Kautsar, I'm a UI/UX, web developer and a technology enthusiast. Welcome to my personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="title" content="Sultan Kautsar" />
        <meta name="author" content="Sultan Kautsar" />
        <meta
          name="keywords"
          content="Sultan Kautsar, Founder Rayatiga, sultankautsar.com, Sultan, Kautsar, Sultan K"
        />
        <meta
          property="og:image"
          content="https://cdn.rayatiga.com/img/sultan-kautsar-og.jpg"
        />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
